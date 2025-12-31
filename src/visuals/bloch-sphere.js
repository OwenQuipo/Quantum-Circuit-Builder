// Bloch sphere widget separated for clarity.
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GATES, getBlochVectorFromState, normalizeState, c, rhoToPureState, densityFromState, applyGateToState } from "../quantum/quantum";

// -------------------- MathJax label helper (existing) --------------------
function makeLatexLabel(latex, scale = 0.12) {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.visibility = "hidden";
    container.style.pointerEvents = "none";
    container.innerHTML = `\\(${latex}\\)`;
    document.body.appendChild(container);

    if (typeof MathJax === "undefined") {
      const material = new THREE.SpriteMaterial({ color: 0xffffff });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(scale, scale, scale);
      document.body.removeChild(container);
      resolve(sprite);
      return;
    }

    MathJax.typesetPromise([container]).then(() => {
      const svg = container.querySelector("svg");
      if (!svg) {
        const material = new THREE.SpriteMaterial({ color: 0xffffff });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(scale, scale, scale);
        document.body.removeChild(container);
        resolve(sprite);
        return;
      }

      svg.setAttribute("fill", "#ffffff");
      svg.setAttribute("stroke", "#ffffff");
      svg.querySelectorAll("*").forEach((el) => {
        el.setAttribute("fill", "#ffffff");
        el.setAttribute("stroke", "#ffffff");
      });

      const xml = new XMLSerializer().serializeToString(svg);
      const svg64 = btoa(xml);
      const image64 = "data:image/svg+xml;base64," + svg64;

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(image64, (texture) => {
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(scale, scale, scale);
        document.body.removeChild(container);
        resolve(sprite);
      });
    });
  });
}

// -------------------- Bloch widget (existing; palette remains neutral) --------------------
class BlochSphereWidget {
  constructor({ mountEl, qubitIndex }) {
    this.mountEl = mountEl;
    this.qubitIndex = qubitIndex;
    this.state = normalizeState({ alpha: c(1, 0), beta: c(0, 0) });

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    this.blochGroup = null;
    this.arrow = null;
    this.point = null;

    this.tracePoints = [];
    this.traceLine = null;

    this.isAnimating = false;
    this.animStart = 0;
    this.animDuration = 450;
    this.animAxis = null;
    this.animFrom = null;
    this.animAngle = 0;
    this._animResolve = null;

    this.MAX_TRACE = 1800;
    this._raf = null;
  }

  init() {
    const width = this.mountEl.clientWidth || 300;
    const height = this.mountEl.clientHeight || 300;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b0c0e);

    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    this.camera.position.set(2.8, 2.2, 2.8);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mountEl.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(3, 4, 2);
    this.scene.add(dir);

    this.blochGroup = new THREE.Group();
    this.scene.add(this.blochGroup);
    this.blochGroup.rotation.x = -Math.PI / 2;

    const sphereGeom = new THREE.SphereGeometry(1, 48, 48);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x121418,
      transparent: true,
      opacity: 0.38,
    });
    this.blochGroup.add(new THREE.Mesh(sphereGeom, sphereMat));

    const sphereWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(sphereGeom),
      new THREE.LineBasicMaterial({ color: 0x2b2f36, opacity: 0.55, transparent: true })
    );
    this.blochGroup.add(sphereWire);

    const axisLine = (p1, p2, color) =>
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([p1, p2]),
        new THREE.LineBasicMaterial({ color })
      );

    // axis bursts allowed
    this.blochGroup.add(
      axisLine(new THREE.Vector3(-1.2, 0, 0), new THREE.Vector3(1.2, 0, 0), 0xff5555),
      axisLine(new THREE.Vector3(0, -1.2, 0), new THREE.Vector3(0, 1.2, 0), 0x55ff88),
      axisLine(new THREE.Vector3(0, 0, -1.2), new THREE.Vector3(0, 0, 1.2), 0x6f8dff)
    );

    (async () => {
      const L0 = await makeLatexLabel("|0\\rangle"); L0.position.set(0, 0, 1.25); this.blochGroup.add(L0);
      const L1 = await makeLatexLabel("|1\\rangle"); L1.position.set(0, 0, -1.25); this.blochGroup.add(L1);
      const Lp = await makeLatexLabel("|+\\rangle"); Lp.position.set(1.25, 0, 0); this.blochGroup.add(Lp);
      const Lm = await makeLatexLabel("|-\\rangle"); Lm.position.set(-1.25, 0, 0); this.blochGroup.add(Lm);
      const Li = await makeLatexLabel("|i\\rangle"); Li.position.set(0, 1.25, 0); this.blochGroup.add(Li);
      const Lmi = await makeLatexLabel("|-i\\rangle"); Lmi.position.set(0, -1.25, 0); this.blochGroup.add(Lmi);
    })();

    const v = getBlochVectorFromState(this.state);
    const vec = new THREE.Vector3(v.x, v.y, v.z);

    this.arrow = new THREE.ArrowHelper(
      vec.clone().normalize(),
      new THREE.Vector3(0, 0, 0),
      0.9,
      0xffdd66,
      0.12,
      0.06
    );
    this.blochGroup.add(this.arrow);

    this.point = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 24, 24),
      new THREE.MeshPhongMaterial({ color: 0xffdd66, emissive: 0xffb844 })
    );
    this.point.position.copy(vec);
    this.blochGroup.add(this.point);

    this.tracePoints = [vec.clone()];
    this.traceLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.tracePoints),
      new THREE.LineBasicMaterial({ color: 0xfff277, transparent: true, depthTest: false })
    );
    this.traceLine.renderOrder = 10;
    this.blochGroup.add(this.traceLine);

    this._animateLoop();
  }

  destroy() {
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this.renderer?.domElement?.parentNode) this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    if (this.traceLine?.geometry) this.traceLine.geometry.dispose();
    this.renderer?.dispose?.();
  }

  resize() {
    if (!this.renderer || !this.camera) return;
    const w = this.mountEl.clientWidth || 300;
    const h = this.mountEl.clientHeight || 300;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  setStateAndTrace(state, traceVecs, { hideArrow = false, hideTrace = false } = {}) {
    this.isAnimating = false;
    this._animResolve?.();
    this._animResolve = null;
    this.forceHideArrow = !!hideArrow;
    this.forceHideTrace = !!hideTrace;

    if (state.rho) {
      const pure = rhoToPureState(state.rho);
      if (pure) {
        this.state = normalizeState({ alpha: c(pure.alpha.re, pure.alpha.im), beta: c(pure.beta.re, pure.beta.im) });
      } else {
        this.state = {
          rho: state.rho.map((row) => row.map((z) => ({ re: z.re, im: z.im }))),
        };
      }
    } else {
      this.state = normalizeState({
        alpha: c(state.alpha.re, state.alpha.im),
        beta: c(state.beta.re, state.beta.im),
      });
    }

    this.tracePoints = (traceVecs && traceVecs.length)
      ? traceVecs.map(v => new THREE.Vector3(v.x, v.y, v.z))
      : [new THREE.Vector3(...Object.values(getBlochVectorFromState(this.state)))];

    this._rebuildTraceGeometry();
    this._redrawFromState(false);
  }

  applyGateAsync(gateName, { animate = true, duration = 450 } = {}) {
    const gate = GATES[gateName];
    if (!gate) return Promise.resolve();

    if (!animate) {
      const before = getBlochVectorFromState(this.state);
      const beforeV = new THREE.Vector3(before.x, before.y, before.z);
      applyGateToState(this.state, gateName);
      if (!this.state.rho) {
        const axis = new THREE.Vector3(gate.axis.x, gate.axis.y, gate.axis.z).normalize();
        this._addGateArc(beforeV, axis, gate.angle);
      }
      this._redrawFromState(false);
      return Promise.resolve();
    }

    if (this.isAnimating) return Promise.resolve();

    return new Promise((resolve) => {
      const before = getBlochVectorFromState(this.state);
      const beforeV = new THREE.Vector3(before.x, before.y, before.z);

      applyGateToState(this.state, gateName);

      if (this.state.rho) {
        this._redrawFromState(true);
        resolve();
        return;
      }

      const axis = new THREE.Vector3(gate.axis.x, gate.axis.y, gate.axis.z).normalize();

      this.isAnimating = true;
      this.animStart = performance.now();
      this.animDuration = duration;
      this.animAxis = axis;
      this.animFrom = beforeV.clone();
      this.animAngle = gate.angle;
      this._animResolve = () => resolve();
    });
  }

  _animateLoop() {
    this._raf = requestAnimationFrame(() => this._animateLoop());
    this.controls?.update?.();
    if (this.isAnimating) this._animateGateStep();
    this.renderer?.render?.(this.scene, this.camera);
  }

  _animateGateStep() {
    const now = performance.now();
    const t = Math.min((now - this.animStart) / this.animDuration, 1);
    const theta = this.animAngle * t;
    const current = this._rotateVectorAroundAxis(this.animFrom, this.animAxis, theta);

    const len = current.length();
    const eps = 1e-4;
    const dir = len > eps ? current.clone().normalize() : new THREE.Vector3(0, 0, 1);
    const scaledLen = Math.max(0, Math.min(1, len));
    this.arrow.setDirection(dir);
    this.arrow.setLength(Math.max(0.08, scaledLen), 0.12, 0.06);
    const opacity = Math.max(0.2, Math.min(1, len));
    const visible = len > eps;
    if (this.arrow.line && this.arrow.line.material) {
      this.arrow.line.material.transparent = true;
      this.arrow.line.material.opacity = visible ? opacity : 0;
    }
    if (this.arrow.cone && this.arrow.cone.material) {
      this.arrow.cone.material.transparent = true;
      this.arrow.cone.material.opacity = visible ? opacity : 0;
    }
    this.point.position.copy(visible ? current : new THREE.Vector3(0, 0, 0));

    this.tracePoints.push(current.clone());
    if (this.tracePoints.length > this.MAX_TRACE) this.tracePoints.shift();
    this._rebuildTraceGeometry();

    if (t >= 1) {
      this.isAnimating = false;
      this._redrawFromState(false);
      const r = this._animResolve;
      this._animResolve = null;
      if (r) r();
    }
  }

  _redrawFromState(resetTrace = false) {
    const v = getBlochVectorFromState(this.state);
    const vec = new THREE.Vector3(v.x, v.y, v.z);
    const len = vec.length();
    const eps = 1e-4;
    const dir = len > eps ? vec.clone().normalize() : new THREE.Vector3(0, 0, 1);
    const scaledLen = Math.max(0, Math.min(1, len));
    this.arrow.setDirection(dir);
    this.arrow.setLength(Math.max(0.08, scaledLen), 0.12, 0.06);
    const opacity = Math.max(0.2, Math.min(1, len));
    const visible = len > eps && !this.forceHideArrow;
    if (this.arrow.line && this.arrow.line.material) {
      this.arrow.line.material.transparent = true;
      this.arrow.line.material.opacity = visible ? opacity : 0;
    }
    if (this.arrow.cone && this.arrow.cone.material) {
      this.arrow.cone.material.transparent = true;
      this.arrow.cone.material.opacity = visible ? opacity : 0;
    }
    this.point.position.copy(visible ? vec : new THREE.Vector3(0, 0, 0));

    if (resetTrace) {
      this.tracePoints = [vec.clone()];
      this._rebuildTraceGeometry();
    }

    if (this.traceLine?.material) {
      this.traceLine.visible = !this.forceHideTrace;
      this.traceLine.material.opacity = this.forceHideTrace ? 0 : 1;
    }
  }

  _rebuildTraceGeometry() {
    if (!this.traceLine) return;
    this.traceLine.geometry.dispose();
    this.traceLine.geometry = new THREE.BufferGeometry().setFromPoints(this.tracePoints);
  }

  _rotateVectorAroundAxis(vec, axis, angle) {
    const v = vec.clone();
    const k = axis.clone().normalize();
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    const term1 = v.clone().multiplyScalar(cosA);
    const term2 = new THREE.Vector3().crossVectors(k, v).multiplyScalar(sinA);
    const term3 = k.clone().multiplyScalar(k.dot(v) * (1 - cosA));
    return term1.add(term2).add(term3);
  }

  _addGateArc(startVec, axis, angle, steps = 48) {
    const v0 = startVec.clone().normalize();
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const theta = angle * t;
      const vt = this._rotateVectorAroundAxis(v0, axis, theta).normalize();
      this.tracePoints.push(vt.clone());
      if (this.tracePoints.length > this.MAX_TRACE) this.tracePoints.shift();
    }
    this._rebuildTraceGeometry();
  }
}

export { BlochSphereWidget, makeLatexLabel };
