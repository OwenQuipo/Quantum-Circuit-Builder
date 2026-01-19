import * as THREE from "three";

const TAU = Math.PI * 2;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const lerp = (a, b, t) => a + (b - a) * clamp(t, 0, 1);

const DEFAULT_CONFIG = {
  T1: 8.0,
  T2: 5.5,
  p_gate: 0.18,
  p_meas_backaction: 0.45,
  crosstalk_strength: 0.12,
  temperature: 0.45,
  visualIntensity: 0.9,
};

const DEFAULT_STEP_MS = 480;

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function hashNoise(x, seed) {
  const s = Math.sin(x * 12.9898 + seed * 78.233) * 43758.5453;
  return (s - Math.floor(s)) * 2 - 1;
}

function getCssColor(name, fallback) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
  return raw?.trim() || fallback;
}

class NoiseOverlayEngine {
  constructor({
    containerEl,
    getActiveGates,
    getWirePosition,
    qubitCount = 1,
    stepCount = 1,
    config = {},
    stepDurationMs = DEFAULT_STEP_MS,
  } = {}) {
    this.containerEl = containerEl;
    this.getActiveGates = getActiveGates;
    this.getWirePosition = getWirePosition;
    this.qubitCount = Math.max(1, qubitCount);
    this.stepCount = Math.max(1, stepCount);
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.stepDurationMs = stepDurationMs;

    this.theme = document.documentElement.getAttribute("data-theme") || "dark";
    this.palette = this._buildPalette();

    this.canvas = document.createElement("canvas");
    this.canvas.className = "noise-overlay";
    this.ctx = this.canvas.getContext("2d");
    this.dpr = Math.max(1, window.devicePixelRatio || 1);

    this._state = [];
    this._edges = new Map();
    this._pairTargets = [];
    this._shockwaves = [];
    this._freezeUntil = [];

    this.activeStep = 0;
    this.playing = false;
    this.stepProgress = 0;
    this._lastTime = performance.now();
    this._raf = null;

    this._initState();
    if (this.containerEl) this.attachTo(this.containerEl);
    this._loop();
  }

  _initState() {
    this._state = Array.from({ length: this.qubitCount }, (_, i) => ({
      coherence: 1,
      energy: 1,
      phase: Math.random() * TAU,
      noise_seed: Math.random() * 1000 + i * 33.3,
    }));
    this._freezeUntil = Array.from({ length: this.qubitCount }, () => 0);
  }

  _buildPalette() {
    return {
      wireA: new THREE.Color(getCssColor("--pop-cyan", "#67d5ff")),
      wireB: new THREE.Color(getCssColor("--pop-pink", "#ff6fa3")),
      envA: new THREE.Color(getCssColor("--surface2", "#1a1a1a")),
      envB: new THREE.Color(getCssColor("--accent-strong", "#7aa8ff")),
      glow: new THREE.Color(getCssColor("--circuit-gate-glow", "#b8f2ff")),
    };
  }

  setTheme(theme) {
    this.theme = theme === "light" ? "light" : "dark";
    this.palette = this._buildPalette();
  }

  setConfig(partial = {}) {
    if (!partial || typeof partial !== "object") return;
    this.config = { ...this.config, ...partial };
    if (this.canvas) {
      const intensity = this.config.visualIntensity ?? 1;
      const hidden = intensity <= 0.01;
      this.canvas.style.opacity = hidden ? "0" : "1";
      if (hidden) this._shockwaves = [];
    }
  }

  setQubitCount(count) {
    const next = Math.max(1, count);
    this.qubitCount = next;
    this._initState();
  }

  setStepCount(count) {
    this.stepCount = Math.max(1, count);
  }

  setActiveStep(step) {
    this.activeStep = Math.max(0, step ?? 0);
    this.stepProgress = 0;
  }

  setPlaying(isPlaying) {
    this.playing = !!isPlaying;
    if (!this.playing) this.stepProgress = 0;
  }

  setEntangledPairs(pairs = []) {
    this._pairTargets = Array.isArray(pairs) ? pairs.map((p) => [p[0], p[1]]) : [];
  }

  attachTo(containerEl) {
    if (!containerEl) return;
    this.containerEl = containerEl;
    if (this.canvas.parentNode !== containerEl) {
      containerEl.appendChild(this.canvas);
    }
    this.resize();
  }

  resize() {
    if (!this.containerEl) return;
    const width = Math.max(1, Math.floor(this.containerEl.clientWidth));
    const height = Math.max(1, Math.floor(this.containerEl.clientHeight));
    this.dpr = Math.max(1, window.devicePixelRatio || 1);
    this.canvas.width = Math.floor(width * this.dpr);
    this.canvas.height = Math.floor(height * this.dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  reset() {
    this._initState();
    this._edges.clear();
    this._shockwaves = [];
  }

  notifyMeasurements(events = []) {
    const now = performance.now();
    events.forEach((ev) => {
      const qubit = ev.qubit ?? ev.q;
      if (qubit == null || qubit < 0 || qubit >= this.qubitCount) return;
      const step = ev.step ?? this.activeStep;
      this._triggerMeasurement(qubit, step, now);
    });
  }

  triggerManualMeasurement(qubit) {
    const now = performance.now();
    this._triggerMeasurement(qubit, this.activeStep, now);
  }

  _triggerMeasurement(qubit, step, now) {
    const state = this._state[qubit];
    if (!state) return;
    state.coherence = clamp(state.coherence * (1 - this.config.p_meas_backaction), 0, 1);
    state.energy = clamp(state.energy * 0.85, 0, 1);
    this._freezeUntil[qubit] = now + 280;

    const pos = this._wirePosAt(qubit, step);
    if (pos) {
      this._shockwaves.push({
        x: pos.x,
        y: pos.y,
        radius: 6,
        alpha: 0.9,
        speed: 120,
      });
    }

    for (const edge of this._edges.values()) {
      if (edge.i === qubit || edge.j === qubit) {
        edge.strength *= 0.25;
        edge.phaseLock *= 0.2;
        edge.snapUntil = now + 280;
      }
    }
  }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    const dt = Math.min(0.05, Math.max(0, (now - this._lastTime) / 1000));
    this._lastTime = now;
    this._update(dt, now);
    this._render(now);
  }

  _wirePosAt(qubit, time) {
    if (!this.getWirePosition) return null;
    return this.getWirePosition(qubit, time);
  }

  _update(dt, now) {
    if (!this.qubitCount) return;

    const stepDuration = this.stepDurationMs / 1000;
    if (this.playing) {
      this.stepProgress = clamp(this.stepProgress + dt / stepDuration, 0, 1);
    } else {
      this.stepProgress = 0;
    }
    const timelineTime = this.activeStep + this.stepProgress;
    const gates = this.getActiveGates ? this.getActiveGates(timelineTime) : [];
    const gatePenalty = Array.from({ length: this.qubitCount }, () => 0);

    gates.forEach((g) => {
      const weight = g.duration ?? 1;
      const targets = new Set([...(g.targets || []), ...(g.controls || [])]);
      targets.forEach((q) => {
        if (q >= 0 && q < this.qubitCount) gatePenalty[q] += weight;
      });
    });

    const positions = [];
    for (let q = 0; q < this.qubitCount; q++) {
      positions[q] = this._wirePosAt(q, timelineTime);
    }

    for (let q = 0; q < this.qubitCount; q++) {
      const state = this._state[q];
      if (!state) continue;
      const decoT1 = this.config.T1 > 0 ? Math.exp(-dt / this.config.T1) : 1;
      const decoT2 = this.config.T2 > 0 ? Math.exp(-dt / this.config.T2) : 1;
      state.coherence = clamp(state.coherence * decoT2, 0, 1);
      state.energy = clamp(state.energy * decoT1, 0, 1);

      if (gatePenalty[q] > 0) {
        const gateDecay = Math.exp(-this.config.p_gate * gatePenalty[q] * dt);
        state.coherence = clamp(state.coherence * gateDecay, 0, 1);
        state.energy = clamp(state.energy * gateDecay, 0, 1);
      }
    }

    for (let q = 0; q < this.qubitCount; q++) {
      const base = this._state[q];
      let bleed = 0;
      const pos = positions[q];
      if (!pos) continue;
      const neighbors = [q - 1, q + 1];
      neighbors.forEach((n) => {
        if (n < 0 || n >= this.qubitCount) return;
        const npos = positions[n];
        if (!npos) return;
        const dist = Math.max(1, Math.hypot(npos.x - pos.x, npos.y - pos.y));
        const falloff = 1 / (1 + dist / 120);
        bleed += this.config.crosstalk_strength * (1 - this._state[n].coherence) * falloff;
      });
      base.coherence = clamp(base.coherence - bleed * dt, 0, 1);
    }

    for (let q = 0; q < this.qubitCount; q++) {
      const state = this._state[q];
      const seed = state.noise_seed;
      const dephase = 1 - state.coherence;
      const jitter = hashNoise(now * 0.001 + q, seed) * dephase * (0.8 + this.config.temperature);
      const baseRate = 0.6 + (1 - state.energy) * 0.4;
      const freeze = now < this._freezeUntil[q];
      state.phase += (freeze ? 0 : (baseRate + jitter)) * dt;
      state.phase = (state.phase + TAU) % TAU;
    }

    this._updateEdges(dt, now, timelineTime);
    this._updateShockwaves(dt);
  }

  _updateEdges(dt, now, time) {
    const targets = new Set(this._pairTargets.map((p) => `${p[0]}-${p[1]}`));
    this._pairTargets.forEach(([i, j]) => {
      const key = `${i}-${j}`;
      if (!this._edges.has(key)) {
        this._edges.set(key, {
          i,
          j,
          strength: 0,
          phaseLock: 0,
          pulsePhase: Math.random(),
          pulseSpeed: 0.5 + Math.random() * 0.3,
          snapUntil: 0,
        });
      }
    });

    for (const [key, edge] of this._edges) {
      const active = targets.has(key);
      const targetStrength = active ? 1 : 0;
      const response = 1 - Math.exp(-dt * (active ? 3.2 : 2.2));
      edge.strength = lerp(edge.strength, targetStrength, response);
      edge.phaseLock = lerp(edge.phaseLock, active ? 1 : 0, response * 0.8);

      const cMin = Math.min(
        this._state[edge.i]?.coherence ?? 1,
        this._state[edge.j]?.coherence ?? 1
      );
      edge.strength *= Math.pow(cMin, 1.4);
      edge.phaseLock *= Math.exp(-dt / Math.max(0.4, this.config.T2));
      edge.pulsePhase = (edge.pulsePhase + dt * edge.pulseSpeed) % 1;

      if (!active && edge.strength < 0.02) {
        this._edges.delete(key);
      }
    }
  }

  _updateShockwaves(dt) {
    this._shockwaves.forEach((w) => {
      w.radius += w.speed * dt;
      w.alpha -= dt * 0.6;
    });
    this._shockwaves = this._shockwaves.filter((w) => w.alpha > 0.02);
  }

  _render(now) {
    if (!this.ctx || !this.containerEl) return;
    const ctx = this.ctx;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    ctx.clearRect(0, 0, width, height);

    const avgCoherence = this._state.reduce((acc, s) => acc + s.coherence, 0) / this._state.length;
    const visualBoost = clamp(this.config.visualIntensity ?? 1, 0, 1.6);
    if (visualBoost <= 0.01) return;
    const fieldIntensity = clamp(
      (this.config.temperature * 0.8 + (1 - avgCoherence) * 0.95) * (0.55 + visualBoost * 0.7),
      0,
      1.4
    );

    this._drawEnvironment(ctx, width, height, now, fieldIntensity);
    this._drawAuras(ctx, width, height, now);
    this._drawWires(ctx, width, height, now);
    this._drawFilaments(ctx, width, height, now);
    this._drawShockwaves(ctx, width, height);
  }

  _drawEnvironment(ctx, width, height, now, intensity) {
    if (intensity <= 0.01) return;
    const grad = ctx.createLinearGradient(0, 0, width, height);
    const envA = this.palette.envA.clone().lerp(this.palette.wireA, 0.15);
    const envB = this.palette.envB.clone().lerp(this.palette.wireB, 0.2);
    grad.addColorStop(0, `rgba(${envA.r * 255}, ${envA.g * 255}, ${envA.b * 255}, ${0.4 * intensity})`);
    grad.addColorStop(1, `rgba(${envB.r * 255}, ${envB.g * 255}, ${envB.b * 255}, ${0.28 * intensity})`);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();

    // Ambient ripples removed to keep shockwave rings the only circles.
  }

  _drawAuras(ctx, width, height) {
    const visualBoost = clamp(this.config.visualIntensity ?? 1, 0, 1.6);
    const steps = Math.max(1, this.stepCount - 1);
    const samples = steps * 6;
    for (let q = 0; q < this.qubitCount; q++) {
      const state = this._state[q];
      const aura = clamp((1 - state.coherence) * (0.55 + visualBoost * 0.9), 0, 1);
      if (aura < 0.05) continue;
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.05 + aura * 0.14;
      ctx.fillStyle = this.palette.glow.getStyle();
      ctx.shadowBlur = 20 + aura * 24;
      ctx.shadowColor = this.palette.glow.getStyle();
      ctx.strokeStyle = this.palette.glow.getStyle();
      ctx.lineWidth = 16 + aura * 44;
      ctx.lineCap = "round";
      ctx.beginPath();
      for (let i = 0; i <= samples; i++) {
        const t = (i / samples) * steps;
        const pos = this._wirePosAt(q, t);
        if (!pos) continue;
        if (i === 0) ctx.moveTo(pos.x, pos.y);
        else ctx.lineTo(pos.x, pos.y);
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  _drawWires(ctx, width, height, now) {
    const steps = Math.max(1, this.stepCount - 1);
    const samples = steps * 6;
    const visualBoost = clamp(this.config.visualIntensity ?? 1, 0, 1.6);
    for (let q = 0; q < this.qubitCount; q++) {
      const state = this._state[q];
      const coherence = state.coherence;
      const instability = (1 - coherence) * (0.35 + visualBoost * 0.95);
      const radius = lerp(2.4, 8.2, coherence);
      const hue = (state.phase / TAU) * 360;
      const sat = lerp(40, 90, coherence);
      const val = lerp(55, 100, coherence);
      const { r, g, b } = hsvToRgb(hue, sat / 100, val / 100);
      const baseColor = `rgb(${r}, ${g}, ${b})`;

      ctx.save();
      ctx.beginPath();
      for (let i = 0; i <= samples; i++) {
        const t = (i / samples) * steps;
        const pos = this._wirePosAt(q, t);
        if (!pos) continue;
        const wobble = hashNoise(t * 0.7 + now * 0.0007, state.noise_seed) * instability * 18;
        const y = pos.y + wobble;
        if (i === 0) ctx.moveTo(pos.x, y);
        else ctx.lineTo(pos.x, y);
      }
      ctx.strokeStyle = baseColor;
      ctx.lineWidth = radius;
      ctx.lineCap = "round";
      ctx.globalAlpha = (0.5 + coherence * 0.35) * (0.7 + visualBoost * 0.6);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      for (let i = 0; i <= samples; i++) {
        const t = (i / samples) * steps;
        const pos = this._wirePosAt(q, t);
        if (!pos) continue;
        const wobble = hashNoise(t * 0.9 + now * 0.0008, state.noise_seed + 21.7) * instability * 24;
        const y = pos.y + wobble;
        if (i === 0) ctx.moveTo(pos.x, y);
        else ctx.lineTo(pos.x, y);
      }
      ctx.strokeStyle = baseColor;
      ctx.lineWidth = radius + 6 + instability * 6;
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = Math.pow(coherence, 1.4) * 0.32 * (0.6 + visualBoost * 0.6);
      ctx.shadowBlur = 12 + instability * 10;
      ctx.shadowColor = baseColor;
      ctx.stroke();
      ctx.restore();
    }
  }

  _drawFilaments(ctx, width, height, now) {
    for (const edge of this._edges.values()) {
      if (edge.strength <= 0.02) continue;
      const t = this.activeStep + this.stepProgress;
      const posA = this._wirePosAt(edge.i, t);
      const posB = this._wirePosAt(edge.j, t);
      if (!posA || !posB) continue;

      const strength = clamp(edge.strength, 0, 1);
      const sag = lerp(6, 28, 1 - strength);
      const midX = (posA.x + posB.x) / 2;
      const midY = (posA.y + posB.y) / 2 + sag;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(posA.x, posA.y);
      ctx.quadraticCurveTo(midX, midY, posB.x, posB.y);
      ctx.strokeStyle = this.palette.wireA.clone().lerp(this.palette.wireB, 0.35).getStyle();
      ctx.lineWidth = 1.2 + strength * 3.8;
      ctx.globalAlpha = 0.3 + strength * 0.6;
      ctx.shadowBlur = 10 + strength * 12;
      ctx.shadowColor = this.palette.wireA.getStyle();
      ctx.stroke();
      ctx.restore();

      const pulsePhase = edge.pulsePhase + (edge.phaseLock < 0.4 ? hashNoise(now * 0.001, edge.i + edge.j) * 0.2 : 0);
      const pulseT = (pulsePhase + 1) % 1;
      const px = lerp(posA.x, posB.x, pulseT);
      const py = lerp(lerp(posA.y, midY, pulseT), lerp(midY, posB.y, pulseT), pulseT);
      const pulseSize = 6 + strength * 8;
      const dx = posB.x - posA.x;
      const dy = posB.y - posA.y;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len;
      const uy = dy / len;
      ctx.save();
      ctx.strokeStyle = this.palette.wireB.getStyle();
      ctx.globalAlpha = 0.45 + edge.phaseLock * 0.45;
      ctx.shadowBlur = 14;
      ctx.shadowColor = this.palette.wireB.getStyle();
      ctx.beginPath();
      ctx.moveTo(px - ux * pulseSize, py - uy * pulseSize);
      ctx.lineTo(px + ux * pulseSize, py + uy * pulseSize);
      ctx.lineWidth = 2.2 + strength * 1.6;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();
    }
  }

  _drawShockwaves(ctx, width, height) {
    this._shockwaves.forEach((wave) => {
      ctx.save();
      ctx.globalAlpha = wave.alpha;
      ctx.strokeStyle = this.palette.wireA.getStyle();
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius, 0, TAU);
      ctx.stroke();
      ctx.restore();
    });
  }
}

export { NoiseOverlayEngine };
