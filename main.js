import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// DOM helpers used across modules.
function $(id) { return document.getElementById(id); }
function setText(id, value) { const el = $(id); if (el) el.textContent = value; }



// MathJax helper split for reuse.
function typesetNode(el) {
  if (typeof MathJax === "undefined" || !el) return;
  MathJax.typesetPromise([el]).catch(() => {});
}



// Quantum math and gate utilities split from main bundle for readability.

// -------------------- Complex (existing) --------------------
const c = (re, im) => ({ re, im });
const cAdd = (a, b) => ({ re: a.re + b.re, im: a.im + b.im });
const cConj = (a) => ({ re: a.re, im: -a.im });
const cAbs2 = (a) => a.re * a.re + a.im * a.im;
const cScale = (a, s) => ({ re: a.re * s, im: a.im * s });

function cmul(a, b) {
  return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re };
}

function cAddScaled(a, b, scale) {
  return { re: a.re + b.re * scale, im: a.im + b.im * scale };
}

function normalizeState(state) {
  const n2 = cAbs2(state.alpha) + cAbs2(state.beta);
  const n = Math.sqrt(n2) || 1;
  state.alpha = cScale(state.alpha, 1 / n);
  state.beta = cScale(state.beta, 1 / n);
  return state;
}

function normalizeStateVector(vec) {
  let norm2 = 0;
  for (const z of vec) norm2 += cAbs2(z);
  const norm = Math.sqrt(norm2) || 1;
  if (Math.abs(norm - 1) < 1e-12) return vec;
  return vec.map((z) => cScale(z, 1 / norm));
}

function fmtComplex(z, digits = 2, eps = 1e-10) {
  const re = Math.abs(z.re) < eps ? 0 : z.re;
  const im = Math.abs(z.im) < eps ? 0 : z.im;
  const reStr = re.toFixed(digits);
  if (im === 0) return reStr;
  const sign = im >= 0 ? "+" : "-";
  const imStr = Math.abs(im).toFixed(digits);
  return `${reStr} ${sign} ${imStr}i`;
}

const SQ = 1 / Math.sqrt(2);

const EXACT_COMPLEX = [
  { re: 1, im: 0, latex: "1" },
  { re: -1, im: 0, latex: "-1" },
  { re: 0, im: 1, latex: "i" },
  { re: 0, im: -1, latex: "-i" },
  { re: SQ, im: 0, latex: "\\tfrac{1}{\\sqrt{2}}" },
  { re: -SQ, im: 0, latex: "-\\tfrac{1}{\\sqrt{2}}" },
  { re: 0, im: SQ, latex: "\\tfrac{i}{\\sqrt{2}}" },
  { re: 0, im: -SQ, latex: "-\\tfrac{i}{\\sqrt{2}}" },
  { re: SQ, im: SQ, latex: "\\tfrac{1+i}{\\sqrt{2}}" },
  { re: SQ, im: -SQ, latex: "\\tfrac{1-i}{\\sqrt{2}}" },
  { re: -SQ, im: SQ, latex: "-\\tfrac{1-i}{\\sqrt{2}}" },
  { re: -SQ, im: -SQ, latex: "-\\tfrac{1+i}{\\sqrt{2}}" },
  { re: Math.cos(Math.PI / 4), im: Math.sin(Math.PI / 4), latex: "e^{i\\pi/4}" },
  { re: Math.cos(-Math.PI / 4), im: Math.sin(-Math.PI / 4), latex: "e^{-i\\pi/4}" },
  { re: Math.cos(Math.PI / 2), im: Math.sin(Math.PI / 2), latex: "e^{i\\pi/2}" },
  { re: Math.cos(-Math.PI / 2), im: Math.sin(-Math.PI / 2), latex: "e^{-i\\pi/2}" },
];

function approx(a, b, tol = 1e-6) { return Math.abs(a - b) < tol; }

function toFraction(x, maxDen = 128, tol = 1e-6) {
  if (!Number.isFinite(x)) return { num: 0, den: 1 };
  if (Math.abs(x) < tol) return { num: 0, den: 1 };
  const sign = x < 0 ? -1 : 1;
  let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
  let b = Math.abs(x);
  do {
    const a = Math.floor(b);
    const h = a * h1 + h2;
    const k = a * k1 + k2;
    h2 = h1; h1 = h;
    k2 = k1; k1 = k;
    const frac = h / k;
    if (k > maxDen || Math.abs(frac - Math.abs(x)) < tol) {
      return { num: sign * h, den: k };
    }
    b = 1 / (b - a);
  } while (true);
}

function fracLatex({ num, den }) {
  if (den === 1) return String(num);
  return `\\tfrac{${num}}{${den}}`;
}

function formatExactComplex(z, tol = 1e-6) {
  const re = Math.abs(z.re) < tol ? 0 : z.re;
  const im = Math.abs(z.im) < tol ? 0 : z.im;

  const exact = EXACT_COMPLEX.find((t) => approx(re, t.re, tol) && approx(im, t.im, tol));
  if (exact) return exact.latex;

  const reFrac = toFraction(re, 128, tol);
  const imFrac = toFraction(im, 128, tol);

  if (Math.abs(im) < tol) return fracLatex(reFrac);
  if (Math.abs(re) < tol) return `${fracLatex(imFrac)}i`;

  const sign = im >= 0 ? "+" : "-";
  const imStr = fracLatex({ num: Math.abs(imFrac.num), den: imFrac.den });
  return `${fracLatex(reFrac)} ${sign} ${imStr}i`;
}

// -------------------- Bloch vector (existing) --------------------
const BLOCH_Y_SIGN = -1;

function densityFromState(state) {
  if (state?.rho) return state.rho;
  const a = state.alpha;
  const b = state.beta;
  const aConj = cConj(a);
  const bConj = cConj(b);
  return [
    [cmul(a, aConj), cmul(a, bConj)],
    [cmul(aConj, b), cmul(b, bConj)],
  ];
}

function getBlochVectorFromState(state) {
  const rho = densityFromState(state);
  return blochFromRho(rho);
}

// -------------------- Gates (existing) --------------------

const GATES = {
  X: { matrix: [[c(0, 0), c(1, 0)], [c(1, 0), c(0, 0)]], axis: { x: 1, y: 0, z: 0 }, angle: Math.PI },
  Y: { matrix: [[c(0, 0), c(0, -1)], [c(0, 1), c(0, 0)]], axis: { x: 0, y: 1, z: 0 }, angle: Math.PI },
  Z: { matrix: [[c(1, 0), c(0, 0)], [c(0, 0), c(-1, 0)]], axis: { x: 0, y: 0, z: 1 }, angle: Math.PI },
  H: { matrix: [[c(SQ, 0), c(SQ, 0)], [c(SQ, 0), c(-SQ, 0)]], axis: { x: 1 / Math.SQRT2, y: 0, z: 1 / Math.SQRT2 }, angle: Math.PI },
  S: { matrix: [[c(1, 0), c(0, 0)], [c(0, 0), c(0, 1)]], axis: { x: 0, y: 0, z: 1 }, angle: Math.PI / 2 },
  T: {
    matrix: (() => {
      const a = Math.PI / 4;
      return [[c(1, 0), c(0, 0)], [c(0, 0), c(Math.cos(a), Math.sin(a))]];
    })(),
    axis: { x: 0, y: 0, z: 1 },
    angle: Math.PI / 4,
  },

  Sdg: {
    matrix: [[c(1, 0), c(0, 0)], [c(0, 0), c(0, -1)]],
    axis: { x: 0, y: 0, z: 1 },
    angle: -Math.PI / 2,
  },
  Tdg: {
    matrix: (() => {
      const a = -Math.PI / 4;
      return [[c(1, 0), c(0, 0)], [c(0, 0), c(Math.cos(a), Math.sin(a))]];
    })(),
    axis: { x: 0, y: 0, z: 1 },
    angle: -Math.PI / 4,
  },
  M: { matrix: [[c(1, 0), c(0, 0)], [c(0, 0), c(1, 0)]], axis: { x: 0, y: 0, z: 1 }, angle: 0 },
};

const INVERSE_GATE = {
  X: "X",
  Y: "Y",
  Z: "Z",
  H: "H",
  S: "Sdg",
  T: "Tdg",
  M: "M",
};
const P0 = [[c(1,0), c(0,0)], [c(0,0), c(0,0)]];
const P1 = [[c(0,0), c(0,0)], [c(0,0), c(1,0)]];

function matMul2(A, B) {
  const out = [
    [c(0, 0), c(0, 0)],
    [c(0, 0), c(0, 0)],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      out[i][j] = cAdd(
        cmul(A[i][0], B[0][j]),
        cmul(A[i][1], B[1][j])
      );
    }
  }
  return out;
}

function matAdjoint(M) {
  return [
    [cConj(M[0][0]), cConj(M[1][0])],
    [cConj(M[0][1]), cConj(M[1][1])],
  ];
}

function applyGateToRho(rho, U) {
  const Udag = matAdjoint(U);
  return matMul2(matMul2(U, rho), Udag);
}

function applyProjectorOn4(rho4, qubit, outcome) {
  const proj = outcome === 0 ? P0 : P1;
  const P = qubit === 0 ? tensor2(proj, ID2) : tensor2(ID2, proj);
  const Pdag = mat4Adjoint(P);
  return mat4Mul(mat4Mul(P, rho4), Pdag);
}

function scaleRho(rho, s) {
  return rho.map((row) => row.map((z) => cScale(z, s)));
}

function addRho(a, b) {
  return [
    [cAdd(a[0][0], b[0][0]), cAdd(a[0][1], b[0][1])],
    [cAdd(a[1][0], b[1][0]), cAdd(a[1][1], b[1][1])],
  ];
}

function probsFromRho(rho) {
  const p0 = Math.max(0, rho[0][0].re);
  const p1 = Math.max(0, rho[1][1].re);
  const s = p0 + p1;
  if (s <= 0) return { p0: 0, p1: 0 };
  return { p0: p0 / s, p1: p1 / s };
}

function applyCXApprox(controlState, targetState) {
  const rhoC = densityFromState(controlState);
  const rhoT = densityFromState(targetState);
  const p1 = Math.max(0, Math.min(1, rhoC[1][1].re));
  const p0 = Math.max(0, Math.min(1, 1 - p1));

  const rhoT_X = applyGateToRho(rhoT, GATES.X.matrix);
  const mixed = addRho(scaleRho(rhoT, p0), scaleRho(rhoT_X, p1));

  targetState.rho = mixed;
  delete targetState.alpha;
  delete targetState.beta;
  return targetState;
}

function applyGateToState(state, gateName) {
  const gate = GATES[gateName];
  if (!gate) return state;

  // Density-aware path
  if (state.rho) {
    state.rho = applyGateToRho(state.rho, gate.matrix);
    return state;
  }

  const M = gate.matrix;
  const a = state.alpha;
  const b = state.beta;

  const newA = cAdd(cmul(M[0][0], a), cmul(M[0][1], b));
  const newB = cAdd(cmul(M[1][0], a), cmul(M[1][1], b));

  state.alpha = newA;
  state.beta = newB;

  normalizeState(state);
  return state;
}

function partialTranspose2(rho4) {
  // Partial transpose on the second qubit (B) in a 2-qubit 4x4 density matrix.
  const out = [
    [c(0,0), c(0,0), c(0,0), c(0,0)],
    [c(0,0), c(0,0), c(0,0), c(0,0)],
    [c(0,0), c(0,0), c(0,0), c(0,0)],
    [c(0,0), c(0,0), c(0,0), c(0,0)],
  ];
  const idx = (a, b) => (a << 1) | b;
  for (let a = 0; a < 2; a++) {
    for (let b = 0; b < 2; b++) {
      for (let c0 = 0; c0 < 2; c0++) {
        for (let d = 0; d < 2; d++) {
          const i = idx(a, b);
          const j = idx(c0, d);
          const src = rho4[i][j];
          const ti = idx(a, d); // transpose on second qubit (b<->d)
          const tj = idx(c0, b);
          out[ti][tj] = c(src.re, src.im);
        }
      }
    }
  }
  return out;
}

function hermitianToRealSym(M) {
  // Converts a Hermitian complex matrix to an equivalent real symmetric block matrix (eigenvalues preserved).
  const n = M.length;
  const out = Array.from({ length: n * 2 }, () => Array(n * 2).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const z = M[i][j];
      out[2*i][2*j] = z.re;
      out[2*i][2*j+1] = -z.im;
      out[2*i+1][2*j] = z.im;
      out[2*i+1][2*j+1] = z.re;
    }
  }
  return out;
}

function jacobiEigenvaluesSym(A, tol = 1e-12, maxIter = 64) {
  const n = A.length;
  const a = A.map((row) => row.slice());
  for (let iter = 0; iter < maxIter; iter++) {
    let p = 0, q = 1;
    let max = Math.abs(a[p][q]);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const v = Math.abs(a[i][j]);
        if (v > max) {
          max = v;
          p = i; q = j;
        }
      }
    }
    if (max < tol) break;
    const app = a[p][p];
    const aqq = a[q][q];
    const apq = a[p][q];
    const phi = 0.5 * Math.atan2(2 * apq, aqq - app);
    const c0 = Math.cos(phi);
    const s0 = Math.sin(phi);
    for (let k = 0; k < n; k++) {
      if (k === p || k === q) continue;
      const akp = a[k][p];
      const akq = a[k][q];
      a[k][p] = a[p][k] = c0 * akp - s0 * akq;
      a[k][q] = a[q][k] = s0 * akp + c0 * akq;
    }
    const appNew = c0 * c0 * app - 2 * s0 * c0 * apq + s0 * s0 * aqq;
    const aqqNew = s0 * s0 * app + 2 * s0 * c0 * apq + c0 * c0 * aqq;
    a[p][p] = appNew;
    a[q][q] = aqqNew;
    a[p][q] = a[q][p] = 0;
  }
  return a.map((row, i) => row[i]);
}

function minEigenvalueHermitian(M) {
  const realSym = hermitianToRealSym(M);
  const vals = jacobiEigenvaluesSym(realSym);
  return Math.min(...vals);
}

// -------------------- N-qubit pure state helpers --------------------
function buildProductStateVector(singleStates = []) {
  let vec = [c(1, 0)];
  singleStates.forEach((raw) => {
    const st = normalizeState({
      alpha: c(raw.alpha.re, raw.alpha.im),
      beta: c(raw.beta.re, raw.beta.im),
    });
    const next = [];
    for (const amp of vec) {
      next.push(cmul(amp, st.alpha));
      next.push(cmul(amp, st.beta));
    }
    vec = next;
  });
  return normalizeStateVector(vec);
}

function applySingleToStateVector(vec, U, qubit, totalQubits) {
  const bit = 1 << (totalQubits - 1 - qubit);
  const out = Array.from(vec);
  for (let base = 0; base < vec.length; base += bit * 2) {
    for (let i = 0; i < bit; i++) {
      const i0 = base + i;
      const i1 = i0 + bit;
      const a0 = vec[i0];
      const a1 = vec[i1];
      out[i0] = cAdd(cmul(U[0][0], a0), cmul(U[0][1], a1));
      out[i1] = cAdd(cmul(U[1][0], a0), cmul(U[1][1], a1));
    }
  }
  return normalizeStateVector(out);
}

function applyCXToStateVector(vec, control, target, totalQubits) {
  const cBit = 1 << (totalQubits - 1 - control);
  const tBit = 1 << (totalQubits - 1 - target);
  const out = Array.from(vec);
  for (let i = 0; i < vec.length; i++) {
    if ((i & cBit) === 0) continue;
    if ((i & tBit) !== 0) continue;
    const j = i | tBit;
    out[i] = vec[j];
    out[j] = vec[i];
  }
  return out;
}

function measureProbabilitiesVector(vec, qubit, totalQubits) {
  const bit = 1 << (totalQubits - 1 - qubit);
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < vec.length; i++) {
    const amp2 = cAbs2(vec[i]);
    if (i & bit) p1 += amp2;
    else p0 += amp2;
  }
  return { p0, p1 };
}

function collapseStateVectorOnMeasurement(vec, qubit, outcome, totalQubits) {
  const bit = 1 << (totalQubits - 1 - qubit);
  const out = vec.map((z, idx) => ((idx & bit) === (outcome ? bit : 0) ? z : c(0, 0)));
  return normalizeStateVector(out);
}

function reducedRhoFromStateVector(vec, qubit, totalQubits) {
  const bit = 1 << (totalQubits - 1 - qubit);
  const rho = [
    [c(0, 0), c(0, 0)],
    [c(0, 0), c(0, 0)],
  ];
  for (let base = 0; base < vec.length; base += bit * 2) {
    for (let i = 0; i < bit; i++) {
      const idx0 = base + i;
      const idx1 = idx0 + bit;
      const a0 = vec[idx0];
      const a1 = vec[idx1];
      rho[0][0] = cAdd(rho[0][0], cmul(a0, cConj(a0)));
      rho[0][1] = cAdd(rho[0][1], cmul(a0, cConj(a1)));
      rho[1][0] = cAdd(rho[1][0], cmul(a1, cConj(a0)));
      rho[1][1] = cAdd(rho[1][1], cmul(a1, cConj(a1)));
    }
  }
  return rho;
}

function pairRhoFromStateVector(vec, qa, qb, totalQubits) {
  const maskA = 1 << (totalQubits - 1 - qa);
  const maskB = 1 << (totalQubits - 1 - qb);
  const baseMask = ~(maskA | maskB);
  const rho = Array.from({ length: 4 }, () => Array(4).fill(c(0, 0)));
  const grouped = new Map();

  for (let idx = 0; idx < vec.length; idx++) {
    const base = idx & baseMask;
    const a = (idx & maskA) ? 1 : 0;
    const b = (idx & maskB) ? 1 : 0;
    const slot = (a << 1) | b; // 00,01,10,11 with qa as first bit
    if (!grouped.has(base)) grouped.set(base, [c(0, 0), c(0, 0), c(0, 0), c(0, 0)]);
    const arr = grouped.get(base);
    arr[slot] = vec[idx];
  }

  grouped.forEach((amps) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        rho[i][j] = cAdd(rho[i][j], cmul(amps[i], cConj(amps[j])));
      }
    }
  });

  return rho;
}

// -------------------- Two-qubit helpers --------------------
const PAULI_X = [[c(0,0), c(1,0)], [c(1,0), c(0,0)]];
const PAULI_Y = [[c(0,0), c(0,-1)], [c(0,1), c(0,0)]];
const PAULI_Z = [[c(1,0), c(0,0)], [c(0,0), c(-1,0)]];
const ID2 = [[c(1,0), c(0,0)], [c(0,0), c(1,0)]];

function tensor2(A, B) {
  // 2x2 ⊗ 2x2 => 4x4
  const out = Array.from({ length: 4 }, () => Array(4).fill(c(0,0)));
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        for (let l = 0; l < 2; l++) {
          const idxRow = i * 2 + k;
          const idxCol = j * 2 + l;
          out[idxRow][idxCol] = cmul(A[i][j], B[k][l]);
        }
      }
    }
  }
  return out;
}

function mat4Mul(A, B) {
  const out = Array.from({ length: 4 }, () => Array(4).fill(c(0,0)));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = c(0,0);
      for (let k = 0; k < 4; k++) {
        sum = cAdd(sum, cmul(A[i][k], B[k][j]));
      }
      out[i][j] = sum;
    }
  }
  return out;
}

function mat4Adjoint(M) {
  const out = Array.from({ length: 4 }, () => Array(4).fill(c(0,0)));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      out[i][j] = cConj(M[j][i]);
    }
  }
  return out;
}

function apply4Unitary(rho, U) {
  const Udag = mat4Adjoint(U);
  return mat4Mul(mat4Mul(U, rho), Udag);
}

function buildProductRho2(q0, q1) {
  const a = q0.alpha, b = q0.beta;
  const c0 = q1.alpha, d = q1.beta;
  const psi = [
    cmul(a, c0), // |00>
    cmul(a, d),  // |01>
    cmul(b, c0), // |10>
    cmul(b, d),  // |11>
  ];
  const rho = Array.from({ length: 4 }, () => Array(4).fill(c(0,0)));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      rho[i][j] = cmul(psi[i], cConj(psi[j]));
    }
  }
  return rho;
}

function singleOn4(U, qubit) {
  return qubit === 0 ? tensor2(U, ID2) : tensor2(ID2, U);
}

const CX4 = [
  [c(1,0), c(0,0), c(0,0), c(0,0)],
  [c(0,0), c(1,0), c(0,0), c(0,0)],
  [c(0,0), c(0,0), c(0,0), c(1,0)],
  [c(0,0), c(0,0), c(1,0), c(0,0)],
];
const SWAP4 = [
  [c(1,0), c(0,0), c(0,0), c(0,0)],
  [c(0,0), c(0,0), c(1,0), c(0,0)],
  [c(0,0), c(1,0), c(0,0), c(0,0)],
  [c(0,0), c(0,0), c(0,0), c(1,0)],
];

function partialTraceQubit(rho4, tracedQubit) {
  // returns 2x2
  const out = [
    [c(0,0), c(0,0)],
    [c(0,0), c(0,0)],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let sum = c(0,0);
      for (let k = 0; k < 2; k++) {
        const row = tracedQubit === 0 ? k * 2 + i : i * 2 + k;
        const col = tracedQubit === 0 ? k * 2 + j : j * 2 + k;
        sum = cAdd(sum, rho4[row][col]);
      }
      out[i][j] = sum;
    }
  }
  return out;
}

function trace2MatSquared(rho) {
  let acc = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const term = cmul(rho[i][j], rho[j][i]);
      acc += term.re;
    }
  }
  return acc;
}

function rhoToPureState(rho, eps = 1e-6) {
  const purity = trace2MatSquared(rho);
  if (purity < 1 - eps) return null;
  const rho00 = Math.max(0, rho[0][0].re);
  const rho11 = Math.max(0, rho[1][1].re);
  const rho01 = rho[0][1];
  const aMag = Math.sqrt(rho00);
  let alpha = c(aMag, 0);
  let beta = c(0, 0);
  if (aMag > 1e-6) {
    const bConj = cScale(rho01, 1 / aMag); // rho01 = a b*
    beta = cConj(bConj);
  } else {
    beta = c(Math.sqrt(rho11), 0);
  }
  return normalizeState({ alpha, beta });
}

function blochFromRho(rho) {
  const rx = rho[0][1].re + rho[1][0].re;
  const ry = BLOCH_Y_SIGN * (rho[0][1].im - rho[1][0].im);
  const rz = rho[0][0].re - rho[1][1].re;
  return { x: rx, y: ry, z: rz };
}

function expectationPauliPair(rho4, A, B) {
  const op = tensor2(A, B);
  let acc = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const term = cmul(rho4[i][j], op[j][i]);
      acc += term.re;
    }
  }
  return acc;
}

function isEntangledFromRho(rho4, eps = 1e-6) {
  // Peres-Horodecki PPT test for 2 qubits: entangled iff partial transpose has a negative eigenvalue.
  const pt = partialTranspose2(rho4);
  const lambdaMin = minEigenvalueHermitian(pt);
  return lambdaMin < -eps;
}



const { CoinFlipAnimator } = (() => {
  // Measurement coin flip animation extracted for clarity.

  const COIN_THEMES = {
    dark: {
      face: "#f5f5f5",
      rim: "#ffffff",
      text: "#050505",
      table: "#050505",
      shadow: 0.24,
    },
    light: {
      face: "#0b0b0b",
      rim: "#000000",
      text: "#f7f7f7",
      table: "#f8f8f6",
      shadow: 0.18,
    },
  };

  function getCssColor(name, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
    return raw?.trim() || fallback;
  }

  // -------------------- Measurement coin animation (top-down) --------------------
  function makeCoinFaceTexture(label, palette) {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    const center = size / 2;
    const radius = size * 0.42;

    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = palette.face;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = palette.rim;
    ctx.lineWidth = size * 0.04;
    ctx.beginPath();
    ctx.arc(center, center, radius * 0.86, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = palette.text;
    ctx.font = `${Math.floor(size * 0.24)}px "Press Start 2P", "Courier New", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, center, center);

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 4;
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    return tex;
  }

  class CoinFlipAnimator {
    constructor({ mountEl, statusEl, oddsEl }) {
      this.mountEl = mountEl;
      this.statusEl = statusEl;
      this.oddsEl = oddsEl;
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.coinGroup = null;
      this.shadowMesh = null;
      this._raf = null;

      this.playing = false;
      this.playStart = 0;
      this.playDuration = 1400;
      this.targetIsOne = false;
      this._resolve = null;
      this.resultHoldMs = 750;

      this.theme = document.documentElement.getAttribute("data-theme") || "dark";
    }

  init() {
    if (!this.mountEl || this.scene) return;
    this._clearHighlights();
    const width = this.mountEl.clientWidth || 220;
    const height = this.mountEl.clientHeight || 220;
      const aspect = width / height;
      const viewSize = 1.7;
      const palette = this._getPalette();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(palette.table);

      this.camera = new THREE.OrthographicCamera(
        -viewSize * aspect,
        viewSize * aspect,
        viewSize,
        -viewSize,
        0.1,
        30
      );
      this.camera.position.set(0, 10, 0);
      this.camera.lookAt(0, 0, 0);

      try {
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.domElement.style.imageRendering = "pixelated";
        this.mountEl.appendChild(this.renderer.domElement);
        this.renderer.domElement.addEventListener("webglcontextlost", (e) => this._handleContextLost(e), false);
      } catch (err) {
        console.error("Coin flip renderer init failed:", err);
        return;
      }

      this.scene.add(new THREE.AmbientLight(0xffffff, 0.55));
      const dir = new THREE.DirectionalLight(0xffffff, 0.9);
      dir.position.set(1.6, 2.4, 1.8);
      this.scene.add(dir);

      const table = new THREE.Mesh(
        new THREE.PlaneGeometry(6, 6),
        new THREE.MeshStandardMaterial({ color: new THREE.Color(palette.table), roughness: 0.94, metalness: 0.04 })
      );
      table.rotation.x = -Math.PI / 2;
      this.scene.add(table);

      this.coinGroup = new THREE.Group();
      this.coinGroup.position.y = 0.08;
      this.scene.add(this.coinGroup);

      const radius = 0.6;
      const thickness = 0.08;
      const rim = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, thickness, 64, 1, true),
        new THREE.MeshStandardMaterial({ color: new THREE.Color(palette.rim), metalness: 0.25, roughness: 0.6 })
      );
      this.coinGroup.add(rim);

      const headsTex = makeCoinFaceTexture("|0⟩", palette);
      const tailsTex = makeCoinFaceTexture("|1⟩", palette);
      const faceGeom = new THREE.CircleGeometry(radius, 64);
      const top = new THREE.Mesh(
        faceGeom,
        new THREE.MeshStandardMaterial({ map: headsTex, metalness: 0.1, roughness: 0.5 })
      );
      top.rotation.x = -Math.PI / 2;
      top.position.y = thickness / 2 + 0.002;
      this.coinGroup.add(top);

      const bottom = new THREE.Mesh(
        faceGeom,
        new THREE.MeshStandardMaterial({ map: tailsTex, metalness: 0.1, roughness: 0.5 })
      );
      bottom.rotation.x = Math.PI / 2;
      bottom.position.y = -thickness / 2 - 0.002;
      this.coinGroup.add(bottom);

      this.shadowMesh = new THREE.Mesh(
        new THREE.CircleGeometry(radius * 1.5, 48),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(palette.text), transparent: true, opacity: palette.shadow, depthWrite: false })
      );
      this.shadowMesh.rotation.x = -Math.PI / 2;
      this.shadowMesh.position.y = 0.001;
      this.shadowMesh.scale.set(1.2, 1.2, 1.2);
      this.scene.add(this.shadowMesh);

      this._tick();
    }

    _handleContextLost(e) {
      if (e?.preventDefault) e.preventDefault();
      this._resetScene();
      requestAnimationFrame(() => this.init());
    }

    _resetScene() {
      this.playing = false;
      if (this.renderer?.domElement?.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
      this.renderer?.dispose?.();
      this.renderer = null;
      this.scene = null;
      this.camera = null;
      this.coinGroup = null;
      this.shadowMesh = null;
      this._resolve?.();
      this._resolve = null;
    }

    resize() {
      if (!this.renderer || !this.camera) return;
      const width = this.mountEl.clientWidth || 220;
      const height = this.mountEl.clientHeight || 220;
      const aspect = width / height;
      const viewSize = 1.7;
      this.camera.left = -viewSize * aspect;
      this.camera.right = viewSize * aspect;
      this.camera.top = viewSize;
      this.camera.bottom = -viewSize;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }

    setStatus(text) {
      if (!this.statusEl) return;
      this._clearHighlights();
      const hasKet = typeof text === "string" && text.includes("|") && text.includes("⟩");
      if (hasKet) {
        const latex = text.replace(/\|/g, "\\(|").replace(/⟩/g, "\\rangle\\)");
        this.statusEl.innerHTML = latex;
        typesetNode(this.statusEl);
      } else {
        this.statusEl.textContent = text;
      }
    }

    setOdds(probs) {
      if (!this.oddsEl) return;
      this.oddsEl.classList.remove("coin-miss");
      if (!probs) {
        this.oddsEl.textContent = "Odds: –";
        return;
      }
      const total = Math.max(0, probs.p0 + probs.p1) || 1;
      const p0 = Math.round((Math.max(0, probs.p0) / total) * 100);
      const p1 = Math.max(0, 100 - p0);
      this.oddsEl.textContent = `Odds: |0⟩ ${p0}% | |1⟩ ${p1}%`;
    }

    play(outcome, { label, probs } = {}) {
      if (!this.scene) this.init();
      this._clearHighlights();
      this.targetIsOne = outcome === 1 || outcome === "tails" || outcome === "|1⟩";
      this.playStart = performance.now();
      this.playDuration = 1400 + Math.random() * 220;
      this.playing = true;
      this.setStatus(label ? `${label}: flipping…` : "Flipping…");
      this.setOdds(probs);

      return new Promise((resolve) => {
        this._resolve = resolve;
      });
    }

    _tick() {
      if (this.fallback) return;
      this._raf = requestAnimationFrame(() => this._tick());
      this._update(performance.now());
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
    }

    _update(now) {
      if (!this.playing) return;
      const t = Math.min((now - this.playStart) / this.playDuration, 1);
      const easeOut = t * t * (3 - 2 * t);

      const arc = Math.sin(Math.PI * Math.min(1, t * 1.05)) * 1.35 + 0.05;
      const flips = 3; // keep integer to make final face deterministic
      const baseX = flips * Math.PI * 2 * easeOut + (this.targetIsOne ? Math.PI : 0);
      const wobble = Math.sin(t * Math.PI * 6) * 0.28 * (1 - t);
      const bank = Math.sin(t * Math.PI * 2.1) * 0.55 * (1 - t * 0.6);

      this.coinGroup.position.y = arc;
      this.coinGroup.rotation.set(baseX + bank, 0.22 * Math.sin(t * Math.PI * 1.6), wobble);

      const landing = t > 0.86 ? (1 - t) * 6 : 0;
      const squash = Math.max(0, landing * 0.08);
      this.coinGroup.scale.set(1 + squash * 0.25, 1 - squash * 0.35, 1 + squash * 0.25);

      const shadowScale = 1 + arc * 0.32;
      const shadowFade = Math.max(0.12, (this._getPalette().shadow ?? 0.2) - arc * 0.12);
      this.shadowMesh.scale.set(shadowScale * 1.3, shadowScale * 1.1, 1);
      if (this.shadowMesh.material) this.shadowMesh.material.opacity = shadowFade;

      if (t >= 1) {
        this.playing = false;
        this.coinGroup.position.y = 0.08;
        this.coinGroup.rotation.set(this.targetIsOne ? Math.PI : 0, 0, 0);
        this.coinGroup.scale.set(1, 1, 1);
        this.setStatus(this.targetIsOne ? "|1⟩" : "|0⟩");
        this._applyOutcomeHighlight(this.targetIsOne ? 1 : 0);
        this.setOdds(null);
        const r = this._resolve;
        if (r) {
          setTimeout(() => {
            const cb = this._resolve;
            this._resolve = null;
            if (cb) cb();
          }, this.resultHoldMs);
        }
      }
    }

    _clearHighlights() {
      if (this.statusEl) {
        this.statusEl.classList.remove("coin-hit", "coin-pulse");
      }
      if (this.oddsEl) {
        this.oddsEl.classList.remove("coin-miss");
      }
    }

    _applyOutcomeHighlight() {
      if (this.statusEl) {
        this.statusEl.classList.add("coin-hit", "coin-pulse");
      }
      if (this.oddsEl) {
        this.oddsEl.classList.add("coin-miss");
      }
    }

    setTheme(theme) {
      this.theme = theme === "light" ? "light" : "dark";
      this._resetScene();
      requestAnimationFrame(() => this.init());
    }

    _getPalette() {
      const base = COIN_THEMES[this.theme] || COIN_THEMES.dark;
      return {
        ...base,
        table: getCssColor("--bg", base.table),
        text: base.text,
      };
    }
  }


  return { CoinFlipAnimator };
})();

const { BlochSphereWidget, makeLatexLabel } = (() => {
  // Bloch sphere widget separated for clarity.

  const lerp = (a, b, t) => a + (b - a) * Math.max(0, Math.min(1, t));
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeOutBack = (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };

  const BLOCH_THEMES = {
    dark: {
      bg: "#050505",
      sphere: "#0f0f0f",
      wire: "#ffffff",
      axis: "#67d5ff",
      arrow: "#ffffff",
      emissive: "#7a7a7a",
      trace: "#ffffff",
    },
    light: {
      bg: "#f8f8f6",
      sphere: "#ffffff",
      wire: "#2a2a2a",
      axis: "#c91873",
      arrow: "#000000",
      emissive: "#444444",
      trace: "#000000",
    },
  };

  function getCssColor(name, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
    return raw?.trim() || fallback;
  }

  function makeNoiseTexture(colorA, colorB, size = 16) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const colorAStyle = colorA.getStyle ? colorA.getStyle() : colorA;
    const colorBStyle = colorB.getStyle ? colorB.getStyle() : colorB;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        ctx.fillStyle = Math.random() > 0.5 ? colorAStyle : colorBStyle;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    // radial alpha mask to keep the fog circular, avoiding square artifacts on dark mode
    const alpha = ctx.getImageData(0, 0, size, size);
    const cx = (size - 1) / 2;
    const cy = (size - 1) / 2;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        const r = Math.sqrt(dx * dx + dy * dy);
        const falloff = Math.max(0, 1 - r);
        const idx = (y * size + x) * 4 + 3;
        alpha.data[idx] = Math.round(alpha.data[idx] * Math.pow(falloff, 1.5));
      }
    }
    ctx.putImageData(alpha, 0, 0);
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }

  function makeGlyphTexture(text = "ENT") {
    const canvas = document.createElement("canvas");
    canvas.width = 48;
    canvas.height = 48;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.font = "600 16px 'Space Grotesk', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }

  // -------------------- MathJax label helper (existing) --------------------
  function makeLatexLabel(latex, scale = 0.12, color = "#ffffff") {
    return new Promise((resolve) => {
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.visibility = "hidden";
      container.style.pointerEvents = "none";
      container.innerHTML = `\\(${latex}\\)`;
      document.body.appendChild(container);

      const finalizeSprite = (material) => {
        material.depthTest = false;
        material.depthWrite = false;
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(scale, scale, scale);
        document.body.removeChild(container);
        resolve(sprite);
      };

      if (typeof MathJax === "undefined") {
        const material = new THREE.SpriteMaterial({ color: new THREE.Color(color) });
        finalizeSprite(material);
        return;
      }

      MathJax.typesetPromise([container]).then(() => {
        const svg = container.querySelector("svg");
        if (!svg) {
          const material = new THREE.SpriteMaterial({ color: new THREE.Color(color) });
          finalizeSprite(material);
          return;
        }

        svg.setAttribute("fill", color);
        svg.setAttribute("stroke", color);
        svg.querySelectorAll("*").forEach((el) => {
          el.setAttribute("fill", color);
          el.setAttribute("stroke", color);
        });

        const xml = new XMLSerializer().serializeToString(svg);
        const svg64 = btoa(xml);
        const image64 = "data:image/svg+xml;base64," + svg64;

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(image64, (texture) => {
          const material = new THREE.SpriteMaterial({ map: texture, transparent: true, color: new THREE.Color(color) });
          finalizeSprite(material);
        });
      });
    });
  }

  // -------------------- Bloch widget --------------------
  class BlochSphereWidget {
    constructor({ mountEl, qubitIndex }) {
      this.mountEl = mountEl;
      this.qubitIndex = qubitIndex;
      this.state = normalizeState({ alpha: c(1, 0), beta: c(0, 0) });
      this.quietMode = document.body.classList.contains("quiet-mode");

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

      this.currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      this.palette = this._getPalette(this.currentTheme);
      this.labelSprites = [];
      this.axisMaterials = [];
      this.sphereMat = null;
      this.sphereWireMat = null;
      this.detailVisible = true;
      this.detailTarget = 0.18;
      this.baseCameraPos = null;

      this.entanglement = {
        level: 0,
        colorA: new THREE.Color(getCssColor("--pop-cyan", "#67d5ff")),
        colorB: new THREE.Color(getCssColor("--pop-pink", "#ff6fa3")),
        mix: new THREE.Color("#ffffff"),
        fogTexture: null,
        fogMaterial: null,
        fogSprite: null,
        fogOffset: new THREE.Vector2(Math.random(), Math.random()),
        fogSeed: Math.random() * 1000,
        glyphTexture: null,
        glyphSprite: null,
        glyphLabel: "ENT",
        glyphScale: 0,
        flash: 0,
        rgbShift: new THREE.Vector2(0, 0),
        cameraShake: 0,
        lastTick: performance.now(),
      };
      this.entanglement.mix.copy(this.entanglement.colorA.clone().lerp(this.entanglement.colorB, 0.5));
    }

    init() {
      const width = this.mountEl.clientWidth || 300;
      const height = this.mountEl.clientHeight || 300;

      this.scene = new THREE.Scene();
      this.scene.background = this.quietMode ? null : new THREE.Color(this.palette.bg);

      this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      this.camera.position.set(2.8, 2.2, 2.8);
      this.baseCameraPos = this.camera.position.clone();

      this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.domElement.style.imageRendering = "pixelated";
      if (this.quietMode) this.renderer.setClearColor(0x000000, 0);
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
      this.sphereMat = new THREE.MeshPhongMaterial({
        color: new THREE.Color(this.palette.sphere),
        transparent: true,
        opacity: 0.42,
      });
      this.blochGroup.add(new THREE.Mesh(sphereGeom, this.sphereMat));

      this.sphereWireMat = new THREE.LineBasicMaterial({ color: new THREE.Color(this.palette.wire), opacity: 0.55, transparent: true });
      const sphereWire = new THREE.LineSegments(
        new THREE.EdgesGeometry(sphereGeom),
        this.sphereWireMat
      );
      this.blochGroup.add(sphereWire);
      const axisLine = (p1, p2) => {
        const mat = new THREE.LineBasicMaterial({ color: new THREE.Color(this.palette.axis), transparent: true, opacity: 0.55 });
        this.axisMaterials.push(mat);
        return new THREE.Line(new THREE.BufferGeometry().setFromPoints([p1, p2]), mat);
      };

      this.blochGroup.add(
        axisLine(new THREE.Vector3(-1.2, 0, 0), new THREE.Vector3(1.2, 0, 0)),
        axisLine(new THREE.Vector3(0, -1.2, 0), new THREE.Vector3(0, 1.2, 0)),
        axisLine(new THREE.Vector3(0, 0, -1.2), new THREE.Vector3(0, 0, 1.2))
      );

      (async () => {
        const labelColor = this.palette.label;
        const addLabel = async (latex, pos) => {
          const sprite = await makeLatexLabel(latex, 0.12, labelColor);
          sprite.position.set(...pos);
          sprite.material?.color?.set(labelColor);
          this.labelSprites.push(sprite);
          this.blochGroup.add(sprite);
        };
        await addLabel("|0\\rangle", [0, 0, 1.25]);
        await addLabel("|1\\rangle", [0, 0, -1.25]);
        await addLabel("|+\\rangle", [1.25, 0, 0]);
        await addLabel("|-\\rangle", [-1.25, 0, 0]);
        await addLabel("|i\\rangle", [0, 1.25, 0]);
        await addLabel("|-i\\rangle", [0, -1.25, 0]);
      })();

      const v = getBlochVectorFromState(this.state);
      const vec = new THREE.Vector3(v.x, v.y, v.z);

      this.arrow = new THREE.ArrowHelper(
        vec.clone().normalize(),
        new THREE.Vector3(0, 0, 0),
        0.9,
        new THREE.Color(this.palette.arrow),
        0.12,
        0.06
      );
      this.blochGroup.add(this.arrow);

      this.point = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 24, 24),
        new THREE.MeshPhongMaterial({ color: new THREE.Color(this.palette.arrow), emissive: new THREE.Color(this.palette.emissive) })
      );
      this.point.position.copy(vec);
      this.blochGroup.add(this.point);

      this.tracePoints = [vec.clone()];
      this.traceLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(this.tracePoints),
        new THREE.LineBasicMaterial({ color: new THREE.Color(this.palette.trace), transparent: true, depthTest: false })
      );
      this.traceLine.renderOrder = 10;
      this.traceLine.visible = true;
      this.blochGroup.add(this.traceLine);

      this._initFogOverlay();
      this._initGlyph();

      this._applyPalette();
      this.setDetailVisibility(this.detailVisible);
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

    setDetailVisibility(show) {
      if (!this.quietMode) return;
      const visible = !!show;
      this.detailVisible = visible;
      this.detailTarget = visible ? 0.18 : 0.18;
      if (this.sphereMat) {
        this.sphereMat.transparent = true;
        this.sphereMat.needsUpdate = true;
      }
      if (this.sphereWireMat) {
        this.sphereWireMat.transparent = true;
        this.sphereWireMat.needsUpdate = true;
      }
      if (this.traceLine) this.traceLine.visible = false;
    }

    setStateAndTrace(state, traceVecs, { hideArrow = false, hideTrace = false } = {}) {
      this.isAnimating = false;
      this._animResolve?.();
      this._animResolve = null;
      this.forceHideArrow = !!hideArrow;
      this.forceHideTrace = this.quietMode ? false : !!hideTrace;

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
      this._tickEntanglement();
      if (this.isAnimating) this._animateGateStep();
      if (this.quietMode && this.sphereMat && this.sphereWireMat) {
        const next = lerp(this.sphereMat.opacity ?? 0, this.detailTarget ?? 0, 0.08);
        this.sphereMat.opacity = next;
        this.sphereWireMat.opacity = next;
      }
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
      this._applyVectorVisuals(dir, scaledLen, len > eps && !this.forceHideArrow, current);

      this.tracePoints.push(this._projectToSphere(current));
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
      const visible = len > eps && !this.forceHideArrow;
      this._applyVectorVisuals(dir, scaledLen, visible, vec);

      if (resetTrace) {
        this.tracePoints = [this._projectToSphere(vec)];
        this._rebuildTraceGeometry();
      }

      if (this.traceLine?.material) {
        const allow = !this.forceHideTrace;
        this.traceLine.visible = allow;
        this.traceLine.material.opacity = allow ? 1 : 0;
      }
    }

    _rebuildTraceGeometry() {
      if (!this.traceLine) return;
      this.traceLine.geometry.dispose();
      const points = this.tracePoints.map((pt) => this._projectToSphere(pt));
      this.traceLine.geometry = new THREE.BufferGeometry().setFromPoints(points);
    }

    _projectToSphere(vec) {
      const v = vec.clone();
      const len = v.length();
      if (len < 1e-4) return new THREE.Vector3(0, 0, 1);
      return v.normalize();
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

    setTheme(theme) {
      this.currentTheme = theme === "light" ? "light" : "dark";
      this.palette = this._getPalette(this.currentTheme);
      this.entanglement.colorA.set(getCssColor("--pop-cyan", "#67d5ff"));
      this.entanglement.colorB.set(getCssColor("--pop-pink", "#ff6fa3"));
      this.entanglement.mix.copy(this.entanglement.colorA.clone().lerp(this.entanglement.colorB, 0.5));
      this._refreshFogTexture();
      this._applyPalette();
      this._redrawFromState(false);
    }

    setEntanglementVisuals({ level = 0, colorA, colorB, flash = 0, rgbShift, cameraShake = 0, label } = {}) {
      this.entanglement.level = Math.max(0, Math.min(1, level));
      let paletteChanged = false;
      if (colorA && !this.entanglement.colorA.equals(colorA)) {
        this.entanglement.colorA.copy(colorA);
        paletteChanged = true;
      }
      if (colorB && !this.entanglement.colorB.equals(colorB)) {
        this.entanglement.colorB.copy(colorB);
        paletteChanged = true;
      }
      if (flash > 0) this.entanglement.flash = Math.max(this.entanglement.flash, flash);
      if (rgbShift) this.entanglement.rgbShift.copy(rgbShift);
      else this.entanglement.rgbShift.set(0, 0);
      this.entanglement.cameraShake = cameraShake;
      if (label) this._updateGlyphLabel(label);
      if (paletteChanged) {
        this.entanglement.mix.copy(this.entanglement.colorA.clone().lerp(this.entanglement.colorB, 0.5));
        this._refreshFogTexture();
      }
    }

    _applyPalette() {
      if (!this.palette) return;
      const p = this.palette;
      if (this.quietMode) {
        this.scene.background = null;
        this.renderer?.setClearColor(0x000000, 0);
        if (this.renderer?.domElement) this.renderer.domElement.style.backgroundColor = "transparent";
      } else {
        this.scene.background = new THREE.Color(p.bg);
        this.renderer?.setClearColor(new THREE.Color(p.bg), 1);
        if (this.renderer?.domElement) this.renderer.domElement.style.backgroundColor = p.bg;
      }
      if (this.sphereMat) this.sphereMat.color.set(p.sphere);
      if (this.sphereWireMat) this.sphereWireMat.color.set(p.wire);
      this.axisMaterials.forEach((m) => m.color.set(p.axis));
      if (this.arrow) this.arrow.setColor(new THREE.Color(p.arrow));
      if (this.point?.material) {
        this.point.material.color.set(p.arrow);
        this.point.material.emissive.set(p.emissive);
      }
      if (this.traceLine?.material) this.traceLine.material.color.set(p.trace);
      this.labelSprites.forEach((sprite) => sprite.material?.color?.set(p.label));
      if (this.sphereMat) {
        this.sphereMat.emissive = new THREE.Color(p.axis).multiplyScalar(0.08);
        this.sphereMat.emissiveIntensity = 0.5;
      }
      if (this.entanglement.fogMaterial) this.entanglement.fogMaterial.color.set(this.entanglement.mix);
      if (this.entanglement.glyphSprite?.material) this.entanglement.glyphSprite.material.color.set(this.entanglement.mix);
    }

    _applyVectorVisuals(dir, len01, visible, rawVec) {
      const scale = lerp(1, 0.25, this.entanglement.level);
      const opacityScale = lerp(1, 0.25, this.entanglement.level);
      this.arrow.setDirection(dir);
      this.arrow.setLength(Math.max(0.08, len01 * scale), 0.12 * scale, 0.06 * scale);
      const opacity = Math.max(0.2, Math.min(1, len01)) * opacityScale;
      if (this.arrow.line && this.arrow.line.material) {
        this.arrow.line.material.transparent = true;
        this.arrow.line.material.opacity = visible ? opacity : 0;
      }
      if (this.arrow.cone && this.arrow.cone.material) {
        this.arrow.cone.material.transparent = true;
        this.arrow.cone.material.opacity = visible ? opacity : 0;
      }
      this.point.visible = visible;
      if (visible) {
        this.point.position.copy(rawVec.clone().multiplyScalar(scale));
      } else {
        this.point.position.set(0, 0, 0);
      }
    }

    _initFogOverlay() {
      const tex = makeNoiseTexture(this.entanglement.colorA, this.entanglement.colorB, 12);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: this.entanglement.mix,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(2.4, 2.4, 2.4);
      sprite.renderOrder = 5;
      this.blochGroup.add(sprite);
      this.entanglement.fogTexture = tex;
      this.entanglement.fogMaterial = mat;
      this.entanglement.fogSprite = sprite;
    }

    _initGlyph() {
      const glyphTex = makeGlyphTexture(this.entanglement.glyphLabel || "ENT");
      const glyphMat = new THREE.SpriteMaterial({
        map: glyphTex,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        color: this.entanglement.mix,
        opacity: 0,
      });
      const sprite = new THREE.Sprite(glyphMat);
      sprite.position.set(1.5, 0.2, 1.1);
      sprite.scale.set(0.001, 0.001, 0.001);
      sprite.renderOrder = 12;
      this.blochGroup.add(sprite);
      this.entanglement.glyphTexture = glyphTex;
      this.entanglement.glyphSprite = sprite;
    }

    _updateGlyphLabel(label) {
      const next = label || "ENT";
      if (this.entanglement.glyphLabel === next) return;
      this.entanglement.glyphLabel = next;
      if (!this.entanglement.glyphSprite?.material) return;
      const tex = makeGlyphTexture(next);
      this.entanglement.glyphTexture?.dispose?.();
      this.entanglement.glyphTexture = tex;
      this.entanglement.glyphSprite.material.map = tex;
      this.entanglement.glyphSprite.material.needsUpdate = true;
    }

    _refreshFogTexture() {
      if (!this.entanglement.fogMaterial) return;
      const tex = makeNoiseTexture(this.entanglement.colorA, this.entanglement.colorB, 12);
      this.entanglement.fogTexture?.dispose?.();
      this.entanglement.fogTexture = tex;
      this.entanglement.fogMaterial.map = tex;
      this.entanglement.fogMaterial.color.copy(this.entanglement.mix);
    }

    _tickEntanglement() {
      const now = performance.now();
      const dt = Math.max(0, (now - this.entanglement.lastTick) / 1000);
      this.entanglement.lastTick = now;
      const level = this.entanglement.level;

      if (this.entanglement.fogMaterial && this.entanglement.fogTexture && this.entanglement.fogSprite) {
        const easedLevel = easeOutCubic(level);
        const opacity = lerp(0, 0.8, easedLevel);
        this.entanglement.fogMaterial.opacity = opacity * (1 + this.entanglement.flash * 0.8);
        this.entanglement.fogMaterial.color.copy(this.entanglement.mix);
        this.entanglement.fogSprite.visible = opacity > 0.01;
        // Keep fog stationary (no scrolling) to hide sprite edges.
        this.entanglement.fogTexture.offset.set(0.5 * this.entanglement.rgbShift.x, 0.5 * this.entanglement.rgbShift.y);
        this.entanglement.fogSprite.scale.setScalar(2.05);
      }

      if (this.entanglement.glyphSprite?.material) {
        const target = level > 0.05 ? 1 : 0;
        const speed = level > 0.05 ? 4 : 6;
        this.entanglement.glyphScale = THREE.MathUtils.lerp(this.entanglement.glyphScale, target, 1 - Math.exp(-dt * speed));
        const eased = easeOutBack(this.entanglement.glyphScale);
        const pulse = 1 + 0.05 * Math.sin(now * 0.005);
        const finalScale = 0.6 * eased * pulse;
        this.entanglement.glyphSprite.scale.set(finalScale, finalScale, finalScale);
        this.entanglement.glyphSprite.material.opacity = Math.min(1, eased) * Math.max(0, level);
        this.entanglement.glyphSprite.material.color.copy(this.entanglement.mix);
      }

      if (this.camera) {
        if (this.entanglement.cameraShake > 0) {
          const basePos = this.baseCameraPos || this.camera.position.clone();
          const shakeAmp = this.entanglement.cameraShake * (0.5 + 0.5 * Math.sin(now * 0.09));
          const jitter = new THREE.Vector3(
            (Math.random() - 0.5) * shakeAmp,
            (Math.random() - 0.5) * shakeAmp,
            (Math.random() - 0.5) * shakeAmp
          );
          this.camera.position.copy(basePos.clone().add(jitter));
          this.camera.lookAt(0, 0, 0);
        } else {
          this.baseCameraPos = this.camera.position.clone();
        }
      }

      if (this.sphereMat) {
        const flashBoost = this.entanglement.flash * 0.9;
        this.sphereMat.emissiveIntensity = 0.5 + flashBoost;
      }

      if (this.entanglement.flash > 0) {
        this.entanglement.flash = Math.max(0, this.entanglement.flash - dt * 4);
      }
      if (this.entanglement.fogMaterial) this.entanglement.fogMaterial.needsUpdate = true;
    }

    _getPalette(theme) {
      const base = BLOCH_THEMES[theme] || BLOCH_THEMES.dark;
      return {
        ...base,
        label: getCssColor("--bloch-label", base.axis),
      };
    }
  }


  return { BlochSphereWidget, makeLatexLabel };
})();

const { EntanglementVisuals } = (() => {

  const lerp = (a, b, t) => a + (b - a) * Math.max(0, Math.min(1, t));
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  function getCssColor(name, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
    return raw?.trim() || fallback;
  }

  class EntanglementVisuals {
    constructor({ containerEl, widgets = [], pair = [0, 1], pairs = null } = {}) {
      this.containerEl = containerEl;
      this.widgets = widgets;
      this.pairs = pairs || [pair];

      this.currentLevel = 0;
      this.levelAnim = null;

      this.colorA = new THREE.Color(getCssColor("--pop-cyan", "#67d5ff"));
      this.colorB = new THREE.Color(getCssColor("--pop-pink", "#ff6fa3"));
      this.palette = [];
      this.pairColors = [];
      this.pairColorMap = new Map();
      this.pairLabels = new Map();

      this.burst = {
        flashUntil: 0,
        rgbUntil: 0,
        shakeUntil: 0,
      };

      this.segmentCount = 10;
      this.baseJitter = 6;
      this.pulseSpeed = 0.6;
      this._phaseSeeds = Array.from({ length: this.segmentCount }, () => Math.random() * Math.PI * 2);
      this._resizeObserver = null;

      this.canvas = null;
      this.ctx = null;

      this._raf = null;
      this._lastTime = performance.now();

      this.refreshPalette();
      this._initScene();
      this._loop();
    }

    setWidgets(widgets = []) {
      this.widgets = widgets;
    }

    setPair(pair = [0, 1]) {
      this.pairs = [pair];
      this._assignPairColors();
    }

    setPairs(pairs = []) {
      if (!pairs?.length) {
        this.pairs = [];
        this.pairColors = [];
        return;
      }
      this.pairs = pairs.map((p) => [p[0], p[1]]);
      this._assignPairColors();
    }

    setPairLabels(labels = new Map()) {
      this.pairLabels = new Map(labels);
    }

    getPairColorStyles() {
      const styles = new Map();
      if (!this.pairs?.length) return styles;
      this.pairs.forEach((pair) => {
        const key = this._pairKey(pair);
        const paletteIndex = this.pairColorMap?.get?.(key);
        const color = (Number.isInteger(paletteIndex) && this.palette?.[paletteIndex])
          ? this.palette[paletteIndex]
          : (this.palette?.[0] || this.colorA);
        styles.set(key, color.getStyle());
      });
      return styles;
    }

    refreshPalette() {
      const palette = [
        new THREE.Color(getCssColor("--pop-cyan", "#67d5ff")),
        new THREE.Color(getCssColor("--pop-pink", "#ff6fa3")),
        new THREE.Color(getCssColor("--pop-lime", "#9dff7a")),
        new THREE.Color(getCssColor("--pop-amber", "#ffd36a")),
        new THREE.Color(getCssColor("--pop-blue", "#7aa8ff")),
      ];
      this.palette = palette;
      this.colorA.copy(palette[0]);
      this.colorB.copy(palette[1] || palette[0]);
      this._assignPairColors();
    }

    isAnimating() {
      return !!this.levelAnim;
    }

    setEntanglementLevel(level) {
      const clamped = Math.max(0, Math.min(1, level));
      this.currentLevel = clamped;
      this.levelAnim = null;
    }

    clearEntanglement(duration = 420) {
      this._startLevelAnim(0, duration);
    }

    triggerEntanglementBurst(durationMs = 150) {
      const now = performance.now();
      this.burst.flashUntil = now + 30;
      this.burst.rgbUntil = now + durationMs + 60;
      this.burst.shakeUntil = now + 140;
      this._startLevelAnim(1, 480, durationMs);
    }

    dispose() {
      if (this._raf) cancelAnimationFrame(this._raf);
      this._resizeObserver?.disconnect?.();
      if (this.canvas?.parentNode) this.canvas.parentNode.removeChild(this.canvas);
      this.canvas = null;
      this.ctx = null;
    }

    _startLevelAnim(target, duration = 360, delayMs = 0) {
      const now = performance.now();
      this.levelAnim = {
        from: this.currentLevel,
        to: Math.max(0, Math.min(1, target)),
        start: now + delayMs,
        duration: Math.max(50, duration),
      };
    }

    _initScene() {
      if (!this.containerEl) return;
      const { clientWidth: w = 400, clientHeight: h = 400 } = this.containerEl;
      this.canvas = document.createElement("canvas");
      this.canvas.width = w;
      this.canvas.height = h;
      this.canvas.style.position = "absolute";
      this.canvas.style.left = "0";
      this.canvas.style.top = "0";
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.style.pointerEvents = "none";
      this.canvas.style.imageRendering = "pixelated";
      this.canvas.style.zIndex = "2";
      this.ctx = this.canvas.getContext("2d");
      this.containerEl.appendChild(this.canvas);
      this._watchResize();
    }

    _loop() {
      this._raf = requestAnimationFrame(() => this._loop());
      this._update();
    }

    resize() {
      if (!this.canvas || !this.containerEl) return;
      const rect = this.containerEl.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      this.canvas.width = width;
      this.canvas.height = height;
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
    }

    _update() {
      const now = performance.now();
      const dt = Math.max(0, (now - this._lastTime) / 1000);
      this._lastTime = now;

      const anim = this.levelAnim;
      if (anim) {
        if (now < anim.start) {
          // hold
        } else if (now >= anim.start + anim.duration) {
          this.currentLevel = anim.to;
          this.levelAnim = null;
        } else {
          const t = (now - anim.start) / anim.duration;
          this.currentLevel = lerp(anim.from, anim.to, easeOutCubic(t));
        }
      }

      this._updateBlochVisuals(now);
      this._updateTether(now, dt);
    }

    _updateBlochVisuals(now) {
      const flash = now < this.burst.flashUntil ? 1 : 0;
      const rgbSplit = now < this.burst.rgbUntil ? new THREE.Vector2((Math.random() - 0.5) * 0.35, (Math.random() - 0.5) * 0.35) : null;
      const shake = now < this.burst.shakeUntil ? 0.05 : 0;
      const level = this.currentLevel;
      const activePairs = this.pairs || [];
      const involved = new Set();
      activePairs.forEach(([a, b]) => { involved.add(a); involved.add(b); });
      this.widgets.forEach((entry, idx) => {
        const w = entry?.widget;
        if (!w || !w.setEntanglementVisuals) return;
        const isPair = involved.has(idx);
        const pairIdx = activePairs.findIndex((p) => p[0] === idx || p[1] === idx);
        const color = this.pairColors[pairIdx] || this.palette[0] || this.colorA;
        const label = this._labelForPair(activePairs[pairIdx]);
        w.setEntanglementVisuals({
          level: isPair ? level : 0,
          colorA: color,
          colorB: color,
          label,
          flash: isPair ? flash : 0,
          rgbShift: rgbSplit,
          cameraShake: isPair ? shake : 0,
        });
      });
    }

    _updateTether(now, dt) {
      if (!this.canvas || !this.ctx || !this.containerEl) return;
      const anchors = this._computeAnchors();
      const level = this.currentLevel;
      const opacity = lerp(0, 0.9, level);
      const hasAnchors = !!anchors?.length;

      if (!hasAnchors || opacity < 0.01) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return;
      }

      this._resizeIfNeeded();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const jitterAmp = lerp(0, this.baseJitter * 1.2, level) * (0.5 + 0.5 * Math.sin(now * 0.018 * 18));
      const pulsePhase = (now * 0.001 * this.pulseSpeed) % 1;

      this.ctx.lineCap = "square";
      this.ctx.lineJoin = "miter";
      this.ctx.globalAlpha = 1;
      const blend = (t, c1, c2) => {
        const col = new THREE.Color(c1).lerp(new THREE.Color(c2), t);
        return col.getStyle();
      };

      anchors.forEach(({ ax, ay, bx, by, colorA, colorB }) => {
        const jitter = () => (Math.random() - 0.5) * jitterAmp;
        const cx = (ax + bx) / 2 + jitter();
        const cy = (ay + by) / 2 + jitter();
        for (let i = 0; i < this.segmentCount; i++) {
          const t0 = i / this.segmentCount;
          const t1 = (i + 1) / this.segmentCount;
          const px0 = ax + (cx - ax) * t0 + jitter();
          const py0 = ay + (cy - ay) * t0 + jitter();
          const px1 = ax + (cx - ax) * t1 + jitter();
          const py1 = ay + (cy - ay) * t1 + jitter();
          const qx0 = cx + (bx - cx) * t0 + jitter();
          const qy0 = cy + (by - cy) * t0 + jitter();
          const qx1 = cx + (bx - cx) * t1 + jitter();
          const qy1 = cy + (by - cy) * t1 + jitter();

          const tPulse = (t0 + pulsePhase) % 1;
          const alpha = (0.4 + 0.4 * Math.sin(tPulse * Math.PI * 2)) * opacity;
          const col1 = blend(t0, colorA, colorB);
          const col2 = blend(t1, colorA, colorB);

          this.ctx.strokeStyle = col1;
          this.ctx.globalAlpha = alpha;
          this.ctx.lineWidth = 5;
          this.ctx.beginPath();
          this.ctx.moveTo(px0, py0);
          this.ctx.lineTo(px1, py1);
          this.ctx.stroke();

          this.ctx.strokeStyle = col2;
          this.ctx.beginPath();
          this.ctx.moveTo(qx0, qy0);
          this.ctx.lineTo(qx1, qy1);
          this.ctx.stroke();
        }
      });
    }

    _resizeIfNeeded() {
      const rect = this.containerEl.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width)) || window.innerWidth;
      const height = Math.max(1, Math.floor(rect.height)) || window.innerHeight;
      const canvas = this.canvas;
      if (canvas && (canvas.width !== width || canvas.height !== height)) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
      }
      return { width, height };
    }

    _computeAnchors() {
      if (!this.containerEl || !this.widgets?.length) return null;
      if (!this.pairs?.length) return null;
      const root = this.containerEl.getBoundingClientRect();
      const scrollX = this.containerEl.scrollLeft;
      const scrollY = this.containerEl.scrollTop;
      const anchors = [];
      this.pairs.forEach((pair, idx) => {
        const [aIdx, bIdx] = pair;
        const a = this.widgets[aIdx];
        const b = this.widgets[bIdx];
        if (!a || !b) return;
        const aRect = (a.widget?.renderer?.domElement || a.mountEl)?.getBoundingClientRect?.();
        const bRect = (b.widget?.renderer?.domElement || b.mountEl)?.getBoundingClientRect?.();
        if (!aRect || !bRect) return;
        const ax = aRect.left + aRect.width / 2 - root.left + scrollX;
        const ay = aRect.top + aRect.height / 2 - root.top + scrollY;
        const bx = bRect.left + bRect.width / 2 - root.left + scrollX;
        const by = bRect.top + bRect.height / 2 - root.top + scrollY;
        const colorA = (this.pairColors[idx] || this.palette[0] || this.colorA).getStyle();
        const colorB = colorA;
        anchors.push({ ax, ay, bx, by, colorA, colorB });
      });
      return anchors;
    }

    _assignPairColors() {
      const pairCount = this.pairs?.length || 0;
      if (!pairCount) {
        this.pairColors = [];
        this.pairColorMap = new Map();
        return;
      }
      const palette = this.palette?.length ? this.palette : [this.colorA, this.colorB];
      const paletteCount = palette.length;
      const previousMap = this.pairColorMap || new Map();
      const nextMap = new Map();
      const used = new Set();
      const available = Array.from({ length: paletteCount }, (_, idx) => idx);

      const pickAvailableIndex = () => {
        if (!available.length) {
          return Math.floor(Math.random() * paletteCount);
        }
        const choiceIdx = Math.floor(Math.random() * available.length);
        const [picked] = available.splice(choiceIdx, 1);
        return picked;
      };

      this.pairs.forEach((pair) => {
        const key = this._pairKey(pair);
        const prevIndex = previousMap.get(key);
        if (Number.isInteger(prevIndex) && prevIndex >= 0 && prevIndex < paletteCount && !used.has(prevIndex)) {
          nextMap.set(key, prevIndex);
          used.add(prevIndex);
          const availIdx = available.indexOf(prevIndex);
          if (availIdx >= 0) available.splice(availIdx, 1);
        }
      });

      this.pairs.forEach((pair) => {
        const key = this._pairKey(pair);
        if (nextMap.has(key)) return;
        const picked = pickAvailableIndex();
        nextMap.set(key, picked);
        used.add(picked);
      });

      this.pairColorMap = nextMap;
      this.pairColors = [];
      for (let i = 0; i < pairCount; i++) {
        const key = this._pairKey(this.pairs[i]);
        const paletteIndex = nextMap.get(key);
        this.pairColors[i] = palette[paletteIndex] || palette[0];
      }
    }

    _pairKey(pair = []) {
      const a = pair[0] ?? 0;
      const b = pair[1] ?? 0;
      return a < b ? `${a}-${b}` : `${b}-${a}`;
    }

    _labelForPair(pair) {
      if (!pair) return "ENT";
      const key = this._pairKey(pair);
      const label = this.pairLabels?.get?.(key);
      return label || "ENT";
    }

    _watchResize() {
      if (!this.containerEl || typeof ResizeObserver === "undefined") return;
      this._resizeObserver = new ResizeObserver(() => this.resize());
      this._resizeObserver.observe(this.containerEl);
    }
  }


  return { EntanglementVisuals };
})();

const { NoiseOverlayEngine } = (() => {

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


  return { NoiseOverlayEngine };
})();

const CX_REVERSED = mat4Mul(mat4Mul(SWAP4, CX4), SWAP4);

// -------------------- App state --------------------
const MAX_QUBITS = 10;
let qubitCount = 1;
let selectedQubit = 0;
let widgets = [];
let initialStates = [];
const BEGINNER_MODE_KEY = "beginnerMode";
const BEGINNER_TIMELINE_KEY = "beginnerTimelineVisible";
const BEGINNER_BLOCH_KEY = "beginnerBlochVisible";
const MEASUREMENT_SEED_KEY = "measurementSeed";
const QUIET_MODE = document.body.classList.contains("quiet-mode");

const INIT_STATE_MAP = {
  "0": { alpha: c(1, 0), beta: c(0, 0), label: "|0\\rangle" },
  "1": { alpha: c(0, 0), beta: c(1, 0), label: "|1\\rangle" },
  "+": { alpha: c(SQ, 0), beta: c(SQ, 0), label: "|+\\rangle" },
  "-": { alpha: c(SQ, 0), beta: c(-SQ, 0), label: "|-\\rangle" },
  "i": { alpha: c(SQ, 0), beta: c(0, SQ), label: "|i\\rangle" },
  "-i": { alpha: c(SQ, 0), beta: c(0, -SQ), label: "|-i\\rangle" },
};
const TIP_MAP = {
  prevStep: "⬅️ Step back one gate",
  nextStep: "➡️ Step forward one gate",
  playPause: "⏯ Play / pause timeline",
  resetState: "🔄 Reset visualization state",
  addQubitTop: "➕ Add a qubit wire",
  removeQubitTop: "➖ Remove a qubit wire",
  addQubit: "➕ Add a qubit wire",
  removeQubit: "➖ Remove a qubit wire",
  openProbPopover: "📊 Show probabilities",
  openBackendDrawer: "📐 Open math drawer",
  toggleTrajectory: "🧭 Toggle Bloch trail",
  toggleTrajectoryBtn: "🧭 Toggle Bloch trail",
  toggleMeasurementAnim: "🪙 Toggle measurement flip animation",
  gateLibToggle: "📚 Collapse / expand gate library",
  moreMenuBtn: "⋮ More options",
  menuClearCircuit: "🧹 Clear entire circuit",
  menuExportJson: "💾 Export circuit JSON",
  menuExportPng: "🖼 Export screenshot",
  menuBellPhiPlus: "Prepare Bell Phi+ state",
  menuBellPhiMinus: "Prepare Bell Phi- state",
  menuBellPsiPlus: "Prepare Bell Psi+ state",
  menuBellPsiMinus: "Prepare Bell Psi- state",
  themeToggle: "Switch dark / light mode",
  menuTheme: "Toggle theme",
  inspectRho: "⧉ Inspect density matrix",
  measureQ0: "📏 Measure qubit 0",
  measureQ1: "📏 Measure qubit 1",
  copyLatex: "⧉ Copy LaTeX",
  closeBackendDrawer: "✕ Close drawer",
  openProbBtn: "📊 Show probabilities",
  openMathBtn: "📐 Open math drawer",
  beginnerToggle: "Toggle beginner mode",
  beginnerShowBloch: "Reveal the Bloch sphere view",
  beginnerShowTimeline: "Reveal the timeline view",
  beginnerActionUndecided: "Make the qubit undecided (Hadamard)",
  beginnerActionFlip: "Flip the qubit (X)",
  beginnerActionTwist: "Add a phase twist (Z)",
  beginnerActionMeasure: "Measure now (collapse)",
  beginnerActionReset: "Reset the beginner story",
  beginnerSeedApply: "Set measurement seed",
  beginnerSeedReroll: "Reroll measurement seed",
};
let latestGlobalRho = null;
let measurementOverrideRho = null;
let measurementOutcomes = []; // [step][qubit] => 0/1/null
let measurementOdds = []; // [step][qubit] => { p0, p1 } | null
let measuredVisualOutcomes = []; // per-qubit latest measured result (manual or gate collapse)
let measurementAnimEnabled = true;
let coinAnimator = null;
let measurementAnimRunId = 0;
let entangledPairIndices = [0, 1];
let entanglementVisuals = null;
let noiseOverlay = null;
let entanglementLevel = 0;
let entangledPairs = new Map(); // key -> { qubits: [a,b], rho }
let latestPairStates = new Map(); // key -> { qubits: [a,b], rho }
let latestStateVector = null;
let entangleDemo = null;
let corrPairKey = null;
const ENTANGLEMENT_LABEL_DEFAULT = "State stored in correlations";
const BLOCH_TILE_SIZE_KEY = "blochTileMinPx";
const NOISE_LEVEL_KEY = "noiseLevel";
const SETTINGS_POS_KEY = "settingsPanelPos";
const SETTINGS_COLLAPSE_KEY = "settingsPanelCollapsed";
let tooltipEl = null;
let tooltipTimer = null;
let tooltipTarget = null;
let tooltipRefreshQueued = false;
let dragRoleBadgeEl = null;
const PURITY_EPS = 1e-6;
const THEME_KEY = "pixelMode";
let themeMode = "dark";
let beginnerMode = true;
let beginnerShowTimeline = false;
let beginnerShowBloch = false;
let beginnerHasScrubbed = false;
let beginnerHasSeenProbChange = false;
let measurementSeed = null;
let manualMeasureCounter = 0;
let quietDetailTimer = null;
let quietMeasureTimer = null;
let quietWheelOpen = false;
let quietDetailVisible = false;
let quietShowCircuit = false;

function loadThemePreference() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return "dark";
}

function updateThemeToggleUI() {
  const label = $("themeToggleLabel");
  if (label) label.textContent = themeMode === "dark" ? "Dark" : "Light";
}

function applyTheme(mode) {
  themeMode = mode === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", themeMode);
  document.body.setAttribute("data-theme", themeMode);
  try { localStorage.setItem(THEME_KEY, themeMode); } catch {}
  updateThemeToggleUI();
  widgets.forEach(({ widget }) => widget?.setTheme?.(themeMode));
  coinAnimator?.setTheme?.(themeMode);
  entanglementVisuals?.refreshPalette?.();
  noiseOverlay?.setTheme?.(themeMode);
}

function toggleThemeMode() {
  applyTheme(themeMode === "dark" ? "light" : "dark");
}

function loadBeginnerPreference() {
  try {
    const saved = localStorage.getItem(BEGINNER_MODE_KEY);
    if (saved === "0") return false;
    if (saved === "1") return true;
  } catch {}
  return true;
}

function loadBeginnerToggleState(key, fallback = false) {
  try {
    const saved = localStorage.getItem(key);
    if (saved === "1") return true;
    if (saved === "0") return false;
  } catch {}
  return fallback;
}

function updateBeginnerToggleUI() {
  const label = $("beginnerToggleLabel");
  if (label) label.textContent = beginnerMode ? "Beginner" : "Advanced";
}

function setBeginnerTimelineVisible(on) {
  beginnerShowTimeline = !!on;
  document.body.classList.toggle("beginner-show-timeline", beginnerShowTimeline);
  const btn = $("beginnerShowTimeline");
  if (btn) btn.textContent = beginnerShowTimeline ? "Hide Timeline" : "Show Timeline";
  try { localStorage.setItem(BEGINNER_TIMELINE_KEY, beginnerShowTimeline ? "1" : "0"); } catch {}
  requestAnimationFrame(() => {
    resizeAllWidgets();
    noiseOverlay?.resize?.();
  });
}

function setBeginnerBlochVisible(on) {
  beginnerShowBloch = !!on;
  document.body.classList.toggle("beginner-show-bloch", beginnerShowBloch);
  const btn = $("beginnerShowBloch");
  if (btn) btn.textContent = beginnerShowBloch ? "Hide Bloch" : "Show Bloch";
  try { localStorage.setItem(BEGINNER_BLOCH_KEY, beginnerShowBloch ? "1" : "0"); } catch {}
  requestAnimationFrame(() => resizeAllWidgets());
}

function applyBeginnerMode(on) {
  beginnerMode = QUIET_MODE ? true : !!on;
  document.body.classList.toggle("beginner-mode", beginnerMode);
  updateBeginnerToggleUI();
  if (beginnerMode) {
    beginnerHasScrubbed = false;
    beginnerHasSeenProbChange = false;
    setBeginnerTimelineVisible(beginnerShowTimeline);
    setBeginnerBlochVisible(beginnerShowBloch);
  }
  updateBeginnerPanels();
  try { localStorage.setItem(BEGINNER_MODE_KEY, beginnerMode ? "1" : "0"); } catch {}
}

function toggleBeginnerMode() {
  applyBeginnerMode(!beginnerMode);
}

function loadMeasurementSeed() {
  try {
    const saved = localStorage.getItem(MEASUREMENT_SEED_KEY);
    if (saved == null || saved === "") return null;
    const n = Number(saved);
    return Number.isFinite(n) ? n : null;
  } catch {}
  return null;
}

function setMeasurementSeed(seed) {
  const next = Number(seed);
  measurementSeed = Number.isFinite(next) ? Math.trunc(next) : null;
  manualMeasureCounter = 0;
  clearMeasurementOutcomesFrom(0);
  measurementOverrideRho = null;
  if (measurementSeed == null) {
    try { localStorage.removeItem(MEASUREMENT_SEED_KEY); } catch {}
  } else {
    try { localStorage.setItem(MEASUREMENT_SEED_KEY, String(measurementSeed)); } catch {}
  }
  rebuildToStep(activeStep);
}

function rerollMeasurementSeed() {
  const next = Math.floor(Date.now() % 1e9);
  setMeasurementSeed(next);
}

function seededRandom(seed) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function measurementRandom(step, qubit, salt = 0) {
  if (!Number.isFinite(measurementSeed)) return Math.random();
  const base = measurementSeed >>> 0;
  const mix = (step + 2) * 0x9e3779b9;
  const mix2 = (qubit + 3) * 0x85ebca6b;
  const mix3 = (salt + 5) * 0xc2b2ae35;
  return seededRandom((base ^ mix ^ mix2 ^ mix3) >>> 0);
}

// -------------------- Bloch layout --------------------
function rebuildBlochGrid() {
  const grid = $("bloch-grid");
  if (!grid) throw new Error("Missing #bloch-grid in index.html");

  grid.innerHTML = "";

  widgets.forEach(({ widget, ro }) => {
    ro?.disconnect?.();
    widget?.destroy?.();
  });
  widgets = [];

  for (let i = 0; i < qubitCount; i++) {
    const tile = document.createElement("div");
    tile.className = "bloch-tile" + (i === selectedQubit ? " selected" : "");

    const header = document.createElement("div");
    header.className = "bloch-tile-header";
    header.textContent = `Qubit q${i}`;
    const selPill = document.createElement("span");
    selPill.className = "selection-pill";
    selPill.textContent = "Selected";
    header.appendChild(selPill);
    const entPill = document.createElement("span");
    entPill.className = "entangled-tag";
    entPill.textContent = "Entangled";
    header.appendChild(entPill);
    const bellPill = document.createElement("span");
    bellPill.className = "bell-tag";
    bellPill.textContent = "";
    header.appendChild(bellPill);
    tile.appendChild(header);

    const mount = document.createElement("div");
    mount.className = "tile-canvas";
    tile.appendChild(mount);

    const purity = document.createElement("div");
    purity.className = "purity-chip";
    purity.textContent = "ρ purity: 1.00";
    tile.appendChild(purity);

    const meas = document.createElement("div");
    meas.className = "measurement-badge";
    meas.textContent = "";
    tile.appendChild(meas);

    const stateChip = document.createElement("div");
    stateChip.className = "state-chip";
    stateChip.textContent = "";
    tile.appendChild(stateChip);

    grid.appendChild(tile);

    const widget = new BlochSphereWidget({ mountEl: mount, qubitIndex: i });
    widget.init();
    widget.setTheme?.(themeMode);

    const ro = new ResizeObserver(() => widget.resize());
    ro.observe(mount);
    ro.observe(tile);

    widgets.push({
      tileEl: tile,
      mountEl: mount,
      widget,
      ro,
      purityEl: purity,
      measEl: meas,
      stateChipEl: stateChip,
      entTagEl: entPill,
      bellTagEl: bellPill,
    });
  }

  if (QUIET_MODE) setQuietDetailVisible(quietDetailVisible);

  refreshSelectedUI();
  ensureEntanglementVisuals();
  requestAnimationFrame(resizeAllWidgets);
  queueTooltipRefresh();
}

// -------------------- Entanglement visuals --------------------
function ensureEntanglementVisuals() {
  const container = $("blochCanvas");
  if (!container) return;
  if (!entanglementVisuals) {
    entanglementVisuals = new EntanglementVisuals({ containerEl: container, widgets, pairs: Array.from(entangledPairs.values()).map((p) => p.qubits) });
  } else {
    entanglementVisuals.setWidgets(widgets);
    entanglementVisuals.setPairs(Array.from(entangledPairs.values()).map((p) => p.qubits));
    entanglementVisuals.refreshPalette();
    entanglementVisuals.setEntanglementLevel(entanglementLevel);
    entanglementVisuals.resize?.();
  }
}

function setEntanglementLevel(level) {
  entanglementLevel = clamp(Number(level) || 0, 0, 1);
  ensureEntanglementVisuals();
  entanglementVisuals?.setEntanglementLevel(entanglementLevel);
}

function triggerEntanglementBurst(durationMs = 150) {
  ensureEntanglementVisuals();
  entanglementVisuals?.triggerEntanglementBurst(durationMs);
  entanglementLevel = 1;
}

function clearEntanglement() {
  ensureEntanglementVisuals();
  entanglementLevel = 0;
  entanglementVisuals?.clearEntanglement(420);
}

if (typeof window !== "undefined") {
  window.setEntanglementLevel = setEntanglementLevel;
  window.triggerEntanglementBurst = triggerEntanglementBurst;
  window.clearEntanglement = clearEntanglement;
}

function stopEntangleDemo() {
  if (!entangleDemo) return;
  document.body.classList.remove("entangle-demo-on");
  if (entangleDemo.timer) clearTimeout(entangleDemo.timer);
  entangleDemo.visuals?.dispose?.();
  entangleDemo.widgets?.forEach((w) => w?.destroy?.());
  entangleDemo.container?.remove?.();
  const grid = $("bloch-grid");
  if (grid?.dataset.entangleHidden === "1") {
    grid.style.opacity = "";
    grid.style.pointerEvents = "";
    grid.style.visibility = "";
    delete grid.dataset.entangleHidden;
  }
  const btn = document.querySelector('.quiet-action[data-action="entangle-demo"]');
  if (btn) btn.textContent = "entangle";
  const animBtn = $("quietEntangleAnimBtn");
  if (animBtn) animBtn.textContent = "Entanglement";
  entangleDemo = null;
}

function startEntangleDemo() {
  stopEntangleDemo();
  const host = $("blochCanvas") || document.body;
  if (!host) return;

  const container = document.createElement("div");
  container.id = "entangleDemo";
  container.className = "entangle-demo";

  const left = document.createElement("div");
  left.className = "entangle-demo-sphere";
  const right = document.createElement("div");
  right.className = "entangle-demo-sphere";
  container.appendChild(left);
  container.appendChild(right);
  host.appendChild(container);

  const widgetA = new BlochSphereWidget({ mountEl: left, qubitIndex: 0 });
  const widgetB = new BlochSphereWidget({ mountEl: right, qubitIndex: 1 });
  widgetA.init();
  widgetB.init();
  widgetA.setTheme?.(themeMode);
  widgetB.setTheme?.(themeMode);

  const visuals = new EntanglementVisuals({
    containerEl: container,
    widgets: [{ widget: widgetA, mountEl: left }, { widget: widgetB, mountEl: right }],
    pairs: [[0, 1]],
  });
  visuals.setEntanglementLevel(1);
  visuals.triggerEntanglementBurst(700);

  document.body.classList.add("entangle-demo-on");
  const grid = $("bloch-grid");
  if (grid) {
    grid.dataset.entangleHidden = "1";
    grid.style.opacity = "0";
    grid.style.pointerEvents = "none";
    grid.style.visibility = "hidden";
  }
  const btn = document.querySelector('.quiet-action[data-action="entangle-demo"]');
  if (btn) btn.textContent = "stop animation";
  const animBtn = $("quietEntangleAnimBtn");
  if (animBtn) animBtn.textContent = "Stop entanglement";
  const desc = $("funEntangleDesc");
  if (desc) typesetNode(desc);

  entangleDemo = {
    container,
    visuals,
    widgets: [widgetA, widgetB],
    timer: null,
  };
}

function resizeAllWidgets() {
  widgets.forEach(({ widget }) => widget.resize());
  entanglementVisuals?.resize?.();
}

function refreshSelectedUI() {
  widgets.forEach(({ tileEl }, idx) => tileEl.classList.toggle("selected", idx === selectedQubit));
}

function syncQubitCountUI() {
  setText("qubitCountNum", String(qubitCount));
  // keep the /10 part in HTML; only update count number
  const addBtn = $("addQubitTop");
  const remBtn = $("removeQubitTop");
  const addBtn2 = $("addQubit");
  const remBtn2 = $("removeQubit");
  if (addBtn) addBtn.disabled = qubitCount >= MAX_QUBITS;
  if (remBtn) remBtn.disabled = qubitCount <= 1;
  if (addBtn2) addBtn2.disabled = qubitCount >= MAX_QUBITS;
  if (remBtn2) remBtn2.disabled = qubitCount <= 1;
}

// -------------------- Primary splitter --------------------
const SPLIT_STORAGE_KEY = "primarySplitLeftPx";
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function lerp(a, b, t) { return a + (b - a) * clamp(t, 0, 1); }
function makePairKey(a, b) { return a < b ? `${a}-${b}` : `${b}-${a}`; }
function entangledPairForQubit(q, map = entangledPairs) {
  for (const [key, pair] of map.entries()) {
    if (pair?.qubits?.[0] === q || pair?.qubits?.[1] === q) return { key, pair };
  }
  return null;
}
function isPairMember(q, map = entangledPairs) { return !!entangledPairForQubit(q, map); }

function applyStoredSplit() {
  const saved = localStorage.getItem(SPLIT_STORAGE_KEY);
  if (!saved) return;
  const px = Number(saved);
  if (!Number.isFinite(px) || px <= 0) return;
  document.documentElement.style.setProperty("--splitLeft", `${px}px`);
}

function applyBlochTileSize(px) {
  const clamped = clamp(px, 120, 520);
  document.documentElement.style.setProperty("--blochTileMin", `${clamped}px`);
  const label = $("blochTileSizeVal");
  if (label) label.textContent = `${clamped}px`;
  const slider = $("blochTileSize");
  if (slider && Number(slider.value) !== clamped) slider.value = String(clamped);
  document.body.classList.toggle("bloch-single-col", clamped >= 520);
}

function applyNoiseLevel(level) {
  const clamped = clamp(level, 0, 1);
  const pct = Math.round(clamped * 100);
  const label = $("noiseLevelVal");
  if (label) label.textContent = `${pct}%`;
  const slider = $("noiseLevel");
  if (slider && Number(slider.value) !== pct) slider.value = String(pct);
  noiseOverlay?.setConfig?.({
    temperature: clamped,
    p_gate: lerp(0.12, 0.46, clamped),
    crosstalk_strength: lerp(0.06, 0.36, clamped),
    visualIntensity: clamped,
  });
}

function initBlochTileSizer() {
  const saved = Number(localStorage.getItem(BLOCH_TILE_SIZE_KEY));
  const initial = Number.isFinite(saved) ? saved : 320;
  applyBlochTileSize(initial);
  const slider = $("blochTileSize");
  if (slider) {
    slider.addEventListener("input", (e) => {
      const val = Number(e.target.value);
      applyBlochTileSize(val);
      localStorage.setItem(BLOCH_TILE_SIZE_KEY, String(clamp(val, 120, 520)));
      requestAnimationFrame(resizeAllWidgets);
    });
  }
}

function initNoiseSlider() {
  const saved = Number(localStorage.getItem(NOISE_LEVEL_KEY));
  const initial = Number.isFinite(saved) ? clamp(saved, 0, 1) : 0.45;
  applyNoiseLevel(initial);
  const slider = $("noiseLevel");
  if (slider) {
    slider.addEventListener("input", (e) => {
      const val = clamp(Number(e.target.value) / 100, 0, 1);
      applyNoiseLevel(val);
      localStorage.setItem(NOISE_LEVEL_KEY, String(val));
    });
  }
}

function initSettingsPanelDrag() {
  const panel = $("blochOverlay");
  const header = $("settingsHeader");
  if (!panel || !header) return;

  const applyPos = (pos) => {
    panel.classList.remove("corner-tl", "corner-tr", "corner-bl", "corner-br");
    if (pos?.corner) {
      panel.classList.add(`corner-${pos.corner}`);
      panel.style.left = "";
      panel.style.top = "";
      panel.style.right = "";
      panel.style.bottom = "";
    } else if (Number.isFinite(pos?.left) && Number.isFinite(pos?.top)) {
      panel.style.left = `${pos.left}px`;
      panel.style.top = `${pos.top}px`;
      panel.style.right = "auto";
      panel.style.bottom = "auto";
    }
  };

  const savedRaw = localStorage.getItem(SETTINGS_POS_KEY);
  if (savedRaw) {
    try { applyPos(JSON.parse(savedRaw)); } catch {}
  } else {
    applyPos({ corner: "bl" });
  }

  let drag = null;
  const onMove = (e) => {
    if (!drag) return;
    const left = drag.startLeft + (e.clientX - drag.startX);
    const top = drag.startTop + (e.clientY - drag.startY);
    applyPos({ left, top });
  };
  const endDrag = () => {
    if (!drag) return;
    localStorage.setItem(SETTINGS_POS_KEY, JSON.stringify({ left: drag.lastLeft ?? panel.offsetLeft, top: drag.lastTop ?? panel.offsetTop }));
    drag = null;
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", endDrag);
    window.removeEventListener("pointercancel", endDrag);
  };
  header.addEventListener("pointerdown", (e) => {
    drag = {
      startX: e.clientX,
      startY: e.clientY,
      startLeft: panel.offsetLeft,
      startTop: panel.offsetTop,
    };
    window.addEventListener("pointermove", (ev) => {
      if (!drag) return;
      drag.lastLeft = drag.startLeft + (ev.clientX - drag.startX);
      drag.lastTop = drag.startTop + (ev.clientY - drag.startY);
      applyPos({ left: drag.lastLeft, top: drag.lastTop });
    });
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
  });

  const collapseBtn = $("settingsCollapse");
  const body = $("settingsBody");
  const restoreCollapsed = localStorage.getItem(SETTINGS_COLLAPSE_KEY) === "1";
  if (restoreCollapsed) panel.classList.add("collapsed");
  collapseBtn?.addEventListener("click", () => {
    const now = panel.classList.toggle("collapsed");
    localStorage.setItem(SETTINGS_COLLAPSE_KEY, now ? "1" : "0");
  });
}

function initPrimarySplitter() {
  const splitter = $("primarySplitter");
  const main = $("main");
  if (!splitter || !main) return;

  let dragging = false;

  const onMove = (e) => {
    if (!dragging) return;
    const rect = main.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const minLeft = 340;
    const minRight = 420;
    const maxLeft = rect.width - minRight;

    const leftPx = clamp(x, minLeft, Math.max(minLeft, maxLeft));
    document.documentElement.style.setProperty("--splitLeft", `${leftPx}px`);
    localStorage.setItem(SPLIT_STORAGE_KEY, String(Math.round(leftPx)));
    requestAnimationFrame(resizeAllWidgets);
  };

  const stop = () => {
    if (!dragging) return;
    dragging = false;
    document.body.classList.remove("split-dragging");
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", stop);
    window.removeEventListener("pointercancel", stop);
  };

  splitter.addEventListener("pointerdown", (e) => {
    const isMobile = window.matchMedia("(max-width: 980px)").matches;
    if (isMobile) return;

    dragging = true;
    document.body.classList.add("split-dragging");
    splitter.setPointerCapture?.(e.pointerId);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", stop, { passive: true });
    window.addEventListener("pointercancel", stop, { passive: true });
  });

  window.addEventListener("resize", () => requestAnimationFrame(resizeAllWidgets));
}

// -------------------- Circuit model/render (existing) --------------------
const C_LABEL_W = 90;
const C_STEP_W = 64;
const C_ROW_H = 64;
const C_TOP_PAD = 34;

const INITIAL_STEP_COUNT = 6;

let stepCount = INITIAL_STEP_COUNT;
let singleQ = [];
let multiQ = [];
let pendingCX = null;

const PALETTE_GATES = ["H", "X", "Y", "Z", "S", "T", "CX", "M"];

let draggingGate = null;
let draggingFrom = null;
let draggingOp = null;

function initCircuitModel() {
  singleQ = Array.from({ length: qubitCount }, () => Array(stepCount).fill(null));
  multiQ = Array.from({ length: stepCount }, () => []);
  pendingCX = null;
  ensureInitialStates();
  measurementOverrideRho = null;
  latestGlobalRho = null;
  latestStateVector = null;
  entangledPairs = new Map();
  latestPairStates = new Map();
  entangledPairIndices = [0, Math.min(1, Math.max(0, qubitCount - 1))];
  measurementOutcomes = Array.from({ length: stepCount }, () => Array(qubitCount).fill(null));
  measurementOdds = Array.from({ length: stepCount }, () => Array(qubitCount).fill(null));
  measuredVisualOutcomes = Array.from({ length: qubitCount }, () => null);
  updateSelectionState();
}

function extendCircuitSteps(nextCount) {
  const desired = Math.max(stepCount + 1, nextCount ?? stepCount + 1);
  if (desired <= stepCount) return;
  stepCount = desired;
  ensureCircuitDimensions();
  renderCircuit();
  updateActiveStepUI();
  updateBeginnerTimelineUI();
  noiseOverlay?.setStepCount?.(stepCount);
}

function ensureCircuitDimensions() {
  if (!singleQ.length || !multiQ.length) initCircuitModel();
  ensureInitialStates();
  measurementOverrideRho = null;

  if (singleQ.length !== qubitCount) {
    const newSingle = Array.from({ length: qubitCount }, (_, q) => {
      const oldRow = singleQ[q] || [];
      return Array.from({ length: stepCount }, (_, s) => oldRow[s] ?? null);
    });
    singleQ = newSingle;
  }

  singleQ = singleQ.map((row) => {
    if (row.length === stepCount) return row;
    if (row.length < stepCount) return row.concat(Array(stepCount - row.length).fill(null));
    return row.slice(0, stepCount);
  });

  if (multiQ.length !== stepCount) {
    const old = multiQ;
    multiQ = Array.from({ length: stepCount }, (_, s) => (old[s] ? [...old[s]] : []));
  }

  if (!measurementOutcomes.length) {
    measurementOutcomes = Array.from({ length: stepCount }, () => Array(qubitCount).fill(null));
  } else {
    if (measurementOutcomes.length !== stepCount) {
      const old = measurementOutcomes;
      measurementOutcomes = Array.from({ length: stepCount }, (_, s) => old[s] ? [...old[s]].slice(0, qubitCount) : Array(qubitCount).fill(null));
    }
    measurementOutcomes = measurementOutcomes.map((row) => {
      if (row.length === qubitCount) return row;
      if (row.length < qubitCount) return row.concat(Array(qubitCount - row.length).fill(null));
      return row.slice(0, qubitCount);
    });
  }
  if (!measurementOdds.length) {
    measurementOdds = Array.from({ length: stepCount }, () => Array(qubitCount).fill(null));
  } else {
    if (measurementOdds.length !== stepCount) {
      const old = measurementOdds;
      measurementOdds = Array.from({ length: stepCount }, (_, s) => old[s] ? [...old[s]].slice(0, qubitCount) : Array(qubitCount).fill(null));
    }
    measurementOdds = measurementOdds.map((row) => {
      if (row.length === qubitCount) return row;
      if (row.length < qubitCount) return row.concat(Array(qubitCount - row.length).fill(null));
      return row.slice(0, qubitCount);
    });
  }
  measuredVisualOutcomes = Array.from({ length: qubitCount }, (_, i) => measuredVisualOutcomes[i] ?? null);

  for (let s = 0; s < stepCount; s++) {
    multiQ[s] = multiQ[s].filter(
      (op) => op.type !== "CX" || (op.control < qubitCount && op.target < qubitCount)
    );
  }

  if (pendingCX && (pendingCX.control >= qubitCount || pendingCX.step >= stepCount)) {
    pendingCX = null;
    updateSelectionState();
  }
}

function clearMeasurementOutcomesFrom(stepIdx) {
  if (!measurementOutcomes?.length) return;
  for (let s = stepIdx; s < stepCount; s++) {
    if (measurementOutcomes[s]) measurementOutcomes[s].fill(null);
    if (measurementOdds[s]) measurementOdds[s].fill(null);
  }
}

function stepFromX(x) {
  const xInSteps = x - C_LABEL_W;
  const idx = Math.floor(xInSteps / C_STEP_W);
  return Math.max(0, Math.min(stepCount - 1, idx));
}
function wireFromY(y) {
  const idx = Math.floor((y - C_TOP_PAD) / C_ROW_H);
  return Math.max(0, Math.min(qubitCount - 1, idx));
}
function wireCenterY(q) { return C_TOP_PAD + q * C_ROW_H + C_ROW_H / 2; }
function stepCenterX(s) { return C_LABEL_W + s * C_STEP_W + C_STEP_W / 2; }

function wirePositionAt(q, t) {
  const maxStep = Math.max(1, stepCount) - 1;
  const base = clamp(Math.floor(t), 0, maxStep);
  const next = clamp(base + 1, 0, maxStep);
  const frac = clamp(t - base, 0, 1);
  const x = lerp(stepCenterX(base), stepCenterX(next), frac);
  const y = wireCenterY(q);
  return { x, y };
}

function getActiveGatesAtTime(t) {
  if (stepCount <= 0) return [];
  const step = clamp(Math.floor(t), 0, stepCount - 1);
  const gates = [];
  for (let q = 0; q < qubitCount; q++) {
    const g = singleQ[q]?.[step];
    if (!g) continue;
    gates.push({ type: g, targets: [q], start: step, duration: 1 });
  }
  for (const op of multiQ[step] || []) {
    if (op.type !== "CX") continue;
    gates.push({
      type: "CX",
      targets: [op.target],
      controls: [op.control],
      start: step,
      duration: 1,
    });
  }
  return gates;
}

function ensureNoiseOverlay() {
  const canvas = $("circuit-canvas");
  if (!canvas) return null;
  if (!noiseOverlay) {
    noiseOverlay = new NoiseOverlayEngine({
      containerEl: canvas,
      getActiveGates: getActiveGatesAtTime,
      getWirePosition: wirePositionAt,
      qubitCount,
      stepCount,
    });
    noiseOverlay.setTheme?.(themeMode);
    noiseOverlay.setEntangledPairs?.(Array.from(entangledPairs.values()).map((p) => p.qubits));
    noiseOverlay.setActiveStep?.(activeStep);
    noiseOverlay.setPlaying?.(playing);
    const slider = $("noiseLevel");
    const saved = Number(localStorage.getItem(NOISE_LEVEL_KEY));
    const fallback = Number(slider?.value ?? NaN);
    const level = Number.isFinite(saved) ? saved : (Number.isFinite(fallback) ? fallback / 100 : 0.45);
    applyNoiseLevel(level);
  } else {
    noiseOverlay.attachTo(canvas);
    noiseOverlay.setQubitCount(qubitCount);
    noiseOverlay.setStepCount(stepCount);
  }
  return noiseOverlay;
}

function gateColorClass(g) {
  if (g === "X") return "gate-x";
  if (g === "Y") return "gate-y";
  if (g === "Z") return "gate-z";
  if (g === "H") return "gate-h";
  if (g === "S" || g === "Sdg") return "gate-s";
  if (g === "T" || g === "Tdg") return "gate-t";
  if (g === "M") return "gate-m";
  return "";
}

function gateTooltip(g) {
  const descriptions = {
    H: "Hadamard: maps |0> -> (|0>+|1>)/√2",
    X: "Pauli-X: bit flip",
    Y: "Pauli-Y: phase+bit flip",
    Z: "Pauli-Z: phase flip",
    S: "S gate: phase π/2",
    T: "T gate: phase π/4",
    CX: "CNOT: drop control (C) first, then target (T)",
    M: "Measurement symbol (visual)",
  };
  return descriptions[g] || `Gate ${g}`;
}

function gateHoverBlurb(g) {
  const blurbs = {
    X: "Flip the answer. Turns a definite 0 into 1, and 1 into 0.",
    Y: "Flip + twist. Like X, but adds a hidden twist that changes interference.",
    Z: "Change the attitude, not the outcome. Probabilities stay, interference shifts.",
    H: "Make it undecided. A balanced mix of 0 and 1.",
    S: "Quarter twist. A subtle phase shift that reshapes interference.",
    T: "Eighth twist. Finer phase adjustment beyond Clifford gates.",
    CX: "Control decides if the target flips.",
    M: "Measure now. Collapse to a single outcome.",
  };
  return blurbs[g] || "";
}

function gateDescription(g) {
  const descriptions = {
    CX: "Controlled-X (CNOT) flips target if control=1.",
    M: "Measurement glyph used for visualization.",
  };
  return descriptions[g] || "";
}

function ensureGateQuickTip() {
  let tip = $("gateQuickTip");
  if (tip) return tip;
  tip = document.createElement("div");
  tip.id = "gateQuickTip";
  document.body.appendChild(tip);
  return tip;
}

function gateHoverContent(gateName) {
  const narratives = {
    X: {
      title: "X gate (bit flip)",
      lines: [
        "\"Flip the answer.\"",
        "Turns a definite 0 into 1, and 1 into 0.",
        "If the qubit was undecided, it swaps the chances instead of choosing.",
      ],
      matrix: "\\\\begin{bmatrix}0 & 1\\\\\\n1 & 0\\\\end{bmatrix}",
      dirac: "X\\\\lvert 0 \\\\rangle = \\\\lvert 1 \\\\rangle",
      mult: "\\\\begin{bmatrix}0 & 1\\\\\\n1 & 0\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}=\\\\begin{bmatrix}0\\\\\\\\1\\\\end{bmatrix}",
    },
    Y: {
      title: "Y gate",
      lines: [
        "\"Flip + twist.\"",
        "Like X, but it also adds a hidden twist that affects future interference.",
        "You will not see the difference immediately, but it changes what happens next.",
      ],
      matrix: "\\\\begin{bmatrix}0 & -i\\\\\\ni & 0\\\\end{bmatrix}",
      dirac: "Y\\\\lvert 0 \\\\rangle = i\\\\lvert 1 \\\\rangle",
      mult: "\\\\begin{bmatrix}0 & -i\\\\\\ni & 0\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}=\\\\begin{bmatrix}0\\\\\\\\i\\\\end{bmatrix}",
    },
    Z: {
      title: "Z gate (phase flip)",
      lines: [
        "\"Change the attitude, not the outcome.\"",
        "Does nothing to the probabilities you see right now, but changes how the qubit interferes later.",
        "This gate matters only when superposition is involved.",
      ],
      matrix: "\\\\begin{bmatrix}1 & 0\\\\\\n0 & -1\\\\end{bmatrix}",
      dirac: "Z\\\\lvert 0 \\\\rangle = \\\\lvert 0 \\\\rangle",
      mult: "\\\\begin{bmatrix}1 & 0\\\\\\n0 & -1\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}=\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}",
    },
    H: {
      title: "H gate (Hadamard)",
      lines: [
        "\"Make it undecided.\"",
        "Turns a definite answer into a balanced mix of 0 and 1.",
        "This is the gateway to everything quantum: interference, entanglement, and weirdness.",
      ],
      matrix: "\\\\frac{1}{\\\\sqrt{2}}\\\\begin{bmatrix}1 & 1\\\\\\n1 & -1\\\\end{bmatrix}",
      dirac: "H\\\\lvert 0 \\\\rangle = \\\\frac{\\\\lvert 0 \\\\rangle + \\\\lvert 1 \\\\rangle}{\\\\sqrt{2}}",
      mult: "\\\\frac{1}{\\\\sqrt{2}}\\\\begin{bmatrix}1 & 1\\\\\\n1 & -1\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}=\\\\frac{1}{\\\\sqrt{2}}\\\\begin{bmatrix}1\\\\\\\\1\\\\end{bmatrix}",
    },
    S: {
      title: "S gate",
      lines: [
        "\"Quarter twist.\"",
        "Adds a subtle phase shift.",
        "On its own it feels invisible, but it reshapes interference patterns downstream.",
      ],
      matrix: "\\\\begin{bmatrix}1 & 0\\\\\\n0 & i\\\\end{bmatrix}",
      dirac: "S\\\\lvert 0 \\\\rangle = \\\\lvert 0 \\\\rangle",
      mult: "\\\\begin{bmatrix}1 & 0\\\\\\n0 & i\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}=\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}",
    },
    T: {
      title: "T gate",
      lines: [
        "\"Eighth twist.\"",
        "An even finer phase adjustment.",
        "Important because it lets you reach behaviors Clifford gates alone cannot.",
      ],
      matrix: "\\\\begin{bmatrix}1 & 0\\\\\\n0 & e^{i\\\\pi/4}\\\\end{bmatrix}",
      dirac: "T\\\\lvert 0 \\\\rangle = \\\\lvert 0 \\\\rangle",
      mult: "\\\\begin{bmatrix}1 & 0\\\\\\n0 & e^{i\\\\pi/4}\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}=\\\\begin{bmatrix}1\\\\\\\\0\\\\end{bmatrix}",
    },
  };

  const narrative = narratives[gateName];
  if (!narrative) return null;
  const descLines = narrative.lines.map((line) => `<div>${line}</div>`).join("");
  return `
    <div class="gate-desc">
      <div><strong>${narrative.title}</strong></div>
      ${descLines}
    </div>
    \\\\[${narrative.matrix}\\\\]
    \\\\[${narrative.dirac}\\\\]
    \\\\[${narrative.mult}\\\\]
  `;
}

function clearAt(q, s) {
  singleQ[q][s] = null;
  multiQ[s] = multiQ[s].filter((op) => !(op.type === "CX" && (op.control === q || op.target === q)));
  clearMeasurementOutcomesFrom(s);
}

function placeSingleGate(q, s, gate) {
  if (gate === "CLEAR") { clearAt(q, s); return; }
  if (!GATES[gate]) return;
  singleQ[q][s] = gate;
  multiQ[s] = multiQ[s].filter((op) => !(op.type === "CX" && (op.control === q || op.target === q)));
  clearMeasurementOutcomesFrom(s);
}

function placeCX(q, s) {
  if (!pendingCX) { pendingCX = { step: s, control: q }; updateSelectionState(); return; }
  if (pendingCX.step !== s) { pendingCX = { step: s, control: q }; updateSelectionState(); return; }

  const control = pendingCX.control;
  const target = q;
  pendingCX = null;
  updateSelectionState();
  if (control === target) return;

  singleQ[control][s] = null;
  singleQ[target][s] = null;

  multiQ[s] = multiQ[s].filter((op) => {
    if (op.type !== "CX") return true;
    const touches = [op.control, op.target].includes(control) || [op.control, op.target].includes(target);
    return !touches;
  });

  multiQ[s].push({ type: "CX", control, target });
  clearMeasurementOutcomesFrom(s);
}

function placeCXDirect(step, control, target) {
  if (control === target) return;

  singleQ[control][step] = null;
  singleQ[target][step] = null;

  multiQ[step] = multiQ[step].filter((op) => {
    if (op.type !== "CX") return true;
    const touches = [op.control, op.target].includes(control) || [op.control, op.target].includes(target);
    return !touches;
  });

  multiQ[step].push({ type: "CX", control, target });
  clearMeasurementOutcomesFrom(step);
}

function circuitIsEmpty() {
  const noSingles = singleQ.every((row) => row.every((cell) => !cell));
  const noMulti = multiQ.every((ops) => ops.length === 0);
  return noSingles && noMulti;
}

function seedReferenceCircuit() {
  if (!circuitIsEmpty()) return;
  qubitCount = Math.max(qubitCount, 2);
  ensureCircuitDimensions();
  placeSingleGate(0, 1, "H");
  placeCXDirect(3, 0, 1);
  placeSingleGate(0, 5, "M");
}

function prepareBellState(kind = "phiPlus") {
  if (!circuitIsEmpty()) {
    const ok = window.confirm("Replace the current circuit with a Bell state preset?");
    if (!ok) return;
  }
  stopPlayback();
  if (qubitCount < 2) setQubitCount(2);
  initCircuitModel();

  initialStates[0] = "0";
  initialStates[1] = "0";
  ensureCircuitDimensions();

  const preStep = 0;
  const hStep = 1;
  const cxStep = 3;
  const presets = {
    phiPlus: [],
    phiMinus: [{ q: 0, gate: "X" }],
    psiPlus: [{ q: 1, gate: "X" }],
    psiMinus: [{ q: 0, gate: "X" }, { q: 1, gate: "X" }],
  };
  const preOps = presets[kind] || presets.phiPlus;
  preOps.forEach(({ q, gate }) => placeSingleGate(q, preStep, gate));
  placeSingleGate(0, hStep, "H");
  placeCXDirect(cxStep, 0, 1);

  renderCircuit();
  activeStep = -1;
  ensureNoiseOverlay();
  noiseOverlay?.resize?.();
  updateActiveStepUI();
  rebuildToStep(activeStep);
}

function ensureInitialStates() {
  initialStates = Array.from({ length: qubitCount }, (_, idx) => initialStates[idx] ?? "0");
}

function setInitialStateForQubit(q, state) {
  if (q < 0 || q >= qubitCount) return;
  const s = INIT_STATE_MAP[state] ? state : "0";
  initialStates[q] = s;
  renderCircuit();
  rebuildToStep(activeStep);
}

function getInitialState(q) {
  const key = INIT_STATE_MAP[initialStates[q]] ? initialStates[q] : "0";
  const base = INIT_STATE_MAP[key];
  return {
    alpha: c(base.alpha.re, base.alpha.im),
    beta: c(base.beta.re, base.beta.im),
  };
}

let initStateMenuEl = null;

function ensureInitStateMenu() {
  if (initStateMenuEl) return initStateMenuEl;
  const menu = document.createElement("div");
  menu.id = "initStateMenu";
  menu.innerHTML = `
    <div class="init-title">Initial state</div>
    <div class="init-options">
      <button type="button" data-state="0">\\(|0\\rangle\\)</button>
      <button type="button" data-state="1">\\(|1\\rangle\\)</button>
      <button type="button" data-state="+">\\(|+\\rangle\\)</button>
      <button type="button" data-state="-">\\(|-\\rangle\\)</button>
      <button type="button" data-state="i">\\(|i\\rangle\\)</button>
      <button type="button" data-state="-i">\\(|-i\\rangle\\)</button>
    </div>
  `;
  menu.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-state]");
    if (!btn) return;
    const q = Number(menu.dataset.q ?? -1);
    setInitialStateForQubit(q, btn.dataset.state);
    hideInitStateMenu();
  });
  document.body.appendChild(menu);
  typesetNode(menu);
  initStateMenuEl = menu;
  return menu;
}

function showInitStateMenu(q, anchorEl) {
  const menu = ensureInitStateMenu();
  const rect = anchorEl.getBoundingClientRect();
  menu.dataset.q = String(q);
  menu.style.left = `${rect.left + window.scrollX}px`;
  menu.style.top = `${rect.bottom + 6 + window.scrollY}px`;
  menu.classList.add("on");
}

function hideInitStateMenu() {
  if (!initStateMenuEl) return;
  initStateMenuEl.classList.remove("on");
  initStateMenuEl.dataset.q = "";
}

// -------------------- Tooltips (global hover help) --------------------
function ensureTooltipEl() {
  if (tooltipEl) return tooltipEl;
  const el = document.createElement("div");
  el.id = "hoverTooltip";
  document.body.appendChild(el);
  tooltipEl = el;
  return el;
}

function hideTooltip() {
  if (tooltipTimer) {
    clearTimeout(tooltipTimer);
    tooltipTimer = null;
  }
  tooltipTarget = null;
  if (tooltipEl) tooltipEl.classList.remove("on");
}

function showTooltip(target) {
  if (!target) return;
  const tip = target.dataset.tip || target.getAttribute("title") || target.getAttribute("aria-label") || target.textContent?.trim();
  if (!tip) return;
  const el = ensureTooltipEl();
  el.innerHTML = `🔘 ${tip}`;
  const rect = target.getBoundingClientRect();
  const pad = 8;
  const x = rect.left + rect.width / 2;
  const y = rect.top - 10;
  el.style.left = `${Math.max(pad, Math.min(window.innerWidth - pad, x))}px`;
  el.style.top = `${Math.max(pad, y)}px`;
  el.classList.add("on");
}

function attachTooltipHandlers(nodes) {
  nodes.forEach((btn) => {
    if (btn.dataset.tipBound) return;
    btn.dataset.tipBound = "1";
    btn.addEventListener("pointerenter", () => {
      hideTooltip();
      tooltipTarget = btn;
      tooltipTimer = setTimeout(() => showTooltip(btn), 520);
    });
    const cancel = () => hideTooltip();
    btn.addEventListener("pointerleave", cancel);
    btn.addEventListener("pointerdown", cancel);
    btn.addEventListener("keydown", cancel);
  });
}

function initTooltips() {
  const selectors = [
    "button",
    "input[type=button]",
    "input[type=submit]",
    "label.micro-toggle",
    ".palette-gate",
    ".cgate",
    ".gate-box",
    ".micro-btn",
    ".icon-btn",
    ".menu-item",
    ".micro-icon",
  ];
  const nodes = Array.from(document.querySelectorAll(selectors.join(",")));
  nodes.forEach((n) => {
    if (!n.dataset.tip) {
      const mapped = TIP_MAP[n.id];
      const label = mapped || n.getAttribute("aria-label") || n.getAttribute("title") || n.textContent?.trim();
      if (label) n.dataset.tip = label;
    }
  });
  attachTooltipHandlers(nodes.filter((n) => !n.dataset.tipBound));
}

function queueTooltipRefresh() {
  if (tooltipRefreshQueued) return;
  tooltipRefreshQueued = true;
  requestAnimationFrame(() => {
    tooltipRefreshQueued = false;
    initTooltips();
  });
}

// -------------------- Drag role badge (CX clarity) --------------------
function ensureDragRoleBadge() {
  if (dragRoleBadgeEl) return dragRoleBadgeEl;
  const el = document.createElement("div");
  el.id = "dragRoleBadge";
  document.body.appendChild(el);
  dragRoleBadgeEl = el;
  return el;
}

function showDragRoleBadge(text) {
  const el = ensureDragRoleBadge();
  el.textContent = text;
  el.classList.add("on");
}

function hideDragRoleBadge() {
  if (dragRoleBadgeEl) dragRoleBadgeEl.classList.remove("on");
}

function updateDragRoleBadgePosition(e) {
  if (!dragRoleBadgeEl || !dragRoleBadgeEl.classList.contains("on")) return;
  const pad = 8;
  const x = Math.min(window.innerWidth - pad, e.clientX + 16);
  const y = Math.min(window.innerHeight - pad, e.clientY + 16);
  dragRoleBadgeEl.style.left = `${Math.max(pad, x)}px`;
  dragRoleBadgeEl.style.top = `${Math.max(pad, y)}px`;
}

// -------------------- Gate matrix LaTeX (used for hover preview) --------------------
function gateMatrixLatex(g) {
  const gate = GATES[g];
  const identity = [[c(1, 0), c(0, 0)], [c(0, 0), c(1, 0)]];
  const M = gate?.matrix ?? identity;
  const f = (z) => formatExactComplex(z);
  return `\\[
${g || "I"} =
\\begin{pmatrix}
${f(M[0][0])} & ${f(M[0][1])} \\\\
${f(M[1][0])} & ${f(M[1][1])}
\\end{pmatrix}
\\]`;
}

function matrixLatex(label, matrix) {
  const f = (z) => formatExactComplex(z);
  return `\\[
${label} =
\\begin{pmatrix}
${f(matrix[0][0])} & ${f(matrix[0][1])} \\\\
${f(matrix[1][0])} & ${f(matrix[1][1])}
\\end{pmatrix}
\\]`;
}

function densityMatrix(state) {
  return densityFromState(state);
}

function computeBlochTraces(stepIdx) {
  const cappedStep = Math.max(-1, Math.min(stepCount - 1, stepIdx ?? stepCount - 1));
  const stateList = Array.from({ length: qubitCount }, (_, q) => normalizeState(getInitialState(q)));
  const traces = Array.from({ length: qubitCount }, () => []);
  const measuredLatest = Array.from({ length: qubitCount }, () => null);
  const measuredEvents = [];
  let stateVector = buildProductStateVector(stateList.map((s) => normalizeState(cloneState(s))));

  const pushAllVecs = () => {
    for (let q = 0; q < qubitCount; q++) {
      const rho = reducedRhoFromStateVector(stateVector, q, qubitCount);
      const v = blochFromRho(rho);
      stateList[q] = stateFromRho(rho);
      traces[q]?.push(v);
    }
  };

  pushAllVecs();

  if (cappedStep >= 0) {
    for (let s = 0; s <= cappedStep; s++) {
      for (let q = 0; q < qubitCount; q++) {
        const g = singleQ[q]?.[s];
        if (g && GATES[g]) {
          if (g === "M") {
            const storedOdds = measurementOdds?.[s]?.[q];
            const probs = storedOdds || measureProbabilitiesVector(stateVector, q, qubitCount);
            const total = Math.max(0, probs.p0 + probs.p1) || 1;
            let outcome = measurementOutcomes?.[s]?.[q];
            if (outcome == null) {
              const r = measurementRandom(s, q, 0);
              outcome = (r < probs.p0 / total) ? 0 : 1;
              if (measurementOutcomes[s]) measurementOutcomes[s][q] = outcome;
            }
            if (!storedOdds && measurementOdds[s]) {
              measurementOdds[s][q] = { p0: probs.p0, p1: probs.p1 };
            }
            stateVector = collapseStateVectorOnMeasurement(stateVector, q, outcome, qubitCount);
            measuredLatest[q] = outcome;
            measuredEvents.push({ qubit: q, outcome, step: s, probs: { p0: probs.p0 / total, p1: probs.p1 / total } });
            pushAllVecs();
            continue;
          }

          const beforeRho = reducedRhoFromStateVector(stateVector, q, qubitCount);
          const beforeV = blochFromRho(beforeRho);
          const beforeVec = new THREE.Vector3(beforeV.x, beforeV.y, beforeV.z);
          const U = GATES[g].matrix;
          stateVector = applySingleToStateVector(stateVector, U, q, qubitCount);
          const afterRho = reducedRhoFromStateVector(stateVector, q, qubitCount);
          const afterV = blochFromRho(afterRho);
          stateList[q] = stateFromRho(afterRho);
          const axis = new THREE.Vector3(GATES[g].axis.x, GATES[g].axis.y, GATES[g].axis.z).normalize();
          const steps = 36;
          for (let i = 1; i <= steps; i++) {
            const t = i / steps;
            const theta = GATES[g].angle * t;
            const vt = rotateVectorAroundAxis(beforeVec, axis, theta);
            traces[q]?.push({ x: vt.x, y: vt.y, z: vt.z });
          }
          traces[q]?.push(afterV);
        }
      }

      for (const op of multiQ[s]) {
        if (op.type !== "CX") continue;
        stateVector = applyCXToStateVector(stateVector, op.control, op.target, qubitCount);
        pushAllVecs();
      }
    }
  }

  const states = stateList.map((s) => cloneState(s));
  const pairStates = new Map();
  const entangledOnly = new Map();
  for (let a = 0; a < qubitCount; a++) {
    for (let b = a + 1; b < qubitCount; b++) {
      const rho = pairRhoFromStateVector(stateVector, a, b, qubitCount);
      const key = makePairKey(a, b);
      const entry = { qubits: [a, b], rho };
      pairStates.set(key, entry);
      if (isEntangledFromRho(rho)) entangledOnly.set(key, entry);
    }
  }
  const primaryEntry = entangledOnly.values().next().value || pairStates.values().next().value || null;
  const pairIndices = primaryEntry?.qubits ?? findPrimaryPair(cappedStep);
  const rho2 = primaryEntry?.rho ?? (pairIndices ? pairRhoFromStateVector(stateVector, pairIndices[0], pairIndices[1], qubitCount) : null);

  return { states, traces, rho2, measuredEvents, measuredLatest, pairIndices, pairStates, entangledPairs: entangledOnly, stateVector };
}

function updateGateHoverMath(gateName) {
  const el = $("gateHoverMath");
  if (!el) return;

  if (!gateName || !GATES[gateName]) {
    el.innerHTML = `\\[\\text{Hover a gate to preview its matrix.}\\]`;
    if (typeof MathJax !== "undefined") MathJax.typesetPromise([el]);
    return;
  }

  const rich = gateHoverContent(gateName);
  const desc = gateDescription(gateName);

  if (gateName === "M") {
    el.innerHTML = `<div class="gate-desc">${desc}</div>`;
    if (typeof MathJax !== "undefined") MathJax.typesetPromise([el]);
    return;
  }

  if (gateName === "CX") {
    const m = GATES.CX.matrix;
    el.innerHTML = `<div class="gate-desc">${desc}</div>${matrixLatex("\\text{CX}", m)}`;
    if (typeof MathJax !== "undefined") MathJax.typesetPromise([el]);
    return;
  }

  if (rich) {
    el.innerHTML = rich;
  } else {
    el.innerHTML = `<div class="gate-desc">${desc}</div>${gateMatrixLatex(gateName)}`;
  }
  if (typeof MathJax !== "undefined") MathJax.typesetPromise([el]);
}

// -------------------- Gate library palette renderer (fix drag/drop reliability + hover preview) --------------------
function renderGatePalette() {
  const row = $("gatePaletteRow");
  if (!row) return;
  row.innerHTML = "";

  PALETTE_GATES.forEach((g) => {
    const item = document.createElement("div");
    item.className = "palette-gate";
    item.setAttribute("draggable", "true");
    item.dataset.gate = g;
    item.dataset.tip = gateTooltip(g);
    item.dataset.desc = gateHoverBlurb(g) || gateTooltip(g);

    const box = document.createElement("div");
    box.className = "gate-box " + gateColorClass(g);
    if (g === "M") {
      box.classList.add("gate-measure");
      const mIcon = document.createElement("div");
      mIcon.className = "measure-icon";
      box.appendChild(mIcon);
    } else {
      box.textContent = g;
    }

    item.appendChild(box);

    // Hover matrix preview (MathJax)
    item.addEventListener("mouseenter", () => updateGateHoverMath(g));
    item.addEventListener("mouseleave", () => updateGateHoverMath(null));

    // IMPORTANT: setData must happen in dragstart, and some browsers require a value.
    item.addEventListener("dragstart", (e) => {
      draggingGate = g;
      draggingFrom = { kind: "palette" };
      draggingOp = null;

      try {
        e.dataTransfer.setData("text/plain", String(g));
      } catch {}
      e.dataTransfer.effectAllowed = "copy";

      // Some browsers need a drag image; keep it invisible + default.
      if (e.dataTransfer.setDragImage) {
        e.dataTransfer.setDragImage(box, 20, 20);
      }

      if (g === "CX") {
        const role = pendingCX ? "target" : "control";
        showDragRoleBadge(`CNOT: drop ${role} (${role === "control" ? "C" : "T"})`);
      } else {
        hideDragRoleBadge();
      }
    });

    item.addEventListener("dragend", () => {
      draggingGate = null;
      draggingFrom = null;
      draggingOp = null;
      hideDropHighlight();
      hideDragRoleBadge();
    });

    row.appendChild(item);
  });

  // Drag-to-library-to-remove behavior relies on these handlers
  row.ondragover = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = (draggingFrom && draggingFrom.kind !== "palette") ? "move" : "copy";
  };

  row.ondrop = (e) => {
    e.preventDefault();

    // If a gate was dragged from circuit into the library, it should disappear.
    // Existing logic already "removes on dragstart" for circuit gates; we just finalize UI state.
    draggingGate = null;
    draggingFrom = null;
    draggingOp = null;
    hideDropHighlight();
    hideDragRoleBadge();

    renderCircuit();
    rebuildToStep(activeStep);
  };
}

// -------------------- Drag helpers --------------------
function getGridLocalXY(e, gridEl, canvasEl) {
  const r = gridEl.getBoundingClientRect();
  const xInGrid = (e.clientX - r.left) + gridEl.scrollLeft;
  const yInGrid = (e.clientY - r.top) + gridEl.scrollTop;
  const x = xInGrid - canvasEl.offsetLeft;
  const y = yInGrid - canvasEl.offsetTop;
  return { x, y };
}

let dropHighlightEl = null;

function showDropHighlight(stepIdx, wireIdx) {
  if (!dropHighlightEl) return;
  const x = stepCenterX(stepIdx);
  const y = wireCenterY(wireIdx);
  dropHighlightEl.style.transform = `translate(${x - 23}px, ${y - 23}px)`;
  dropHighlightEl.classList.add("on");
}

function hideDropHighlight() {
  if (!dropHighlightEl) return;
  dropHighlightEl.classList.remove("on");
  dropHighlightEl.style.transform = `translate(-9999px, -9999px)`;
}

// -------------------- Step cursor + playback (existing) --------------------
let activeStep = -1;
let playing = false;
let playTimer = null;
let stepBusy = false;

function updateActiveStepUI() {
  setText("activeStepLabel", activeStep < 0 ? "–" : String(activeStep));
  setText("stepCountLabel", String(stepCount));
  noiseOverlay?.setActiveStep?.(activeStep);

  document.querySelectorAll(".cstep-label").forEach((el) => {
    const s = Number(el.dataset.step);
    el.classList.toggle("is-active", s === activeStep);
  });

  document.querySelectorAll(".cstep-highlight").forEach((el) => {
    const s = Number(el.dataset.step);
    el.classList.toggle("on", s === activeStep);
  });

  scrollCircuitStepWindow();

  updateBackendMath();
  updateBeginnerTimelineUI();
}

function scrollCircuitStepWindow() {
  const grid = $("circuit-grid");
  if (!grid || activeStep < 0) return;
  const groupStart = activeStep <= 5 ? 0 : (Math.floor((activeStep - 1) / 5) * 5 + 1);
  const left = Math.max(0, C_LABEL_W + groupStart * C_STEP_W - 12);
  if (Math.abs(grid.scrollLeft - left) > 2) {
    grid.scrollTo({ left, behavior: "instant" });
  }
}

function rotateVectorAroundAxis(vec, axis, angle) {
  const v = vec.clone();
  const k = axis.clone().normalize();
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  const term1 = v.clone().multiplyScalar(cosA);
  const term2 = new THREE.Vector3().crossVectors(k, v).multiplyScalar(sinA);
  const term3 = k.clone().multiplyScalar(k.dot(v) * (1 - cosA));
  return term1.add(term2).add(term3);
}

function rebuildToStep(stepIdx) {
  measurementOverrideRho = null;

  measuredVisualOutcomes = Array.from({ length: qubitCount }, () => null);
  refreshMeasurementClasses();

  const { states, traces, rho2, measuredEvents, measuredLatest, pairIndices, pairStates, entangledPairs: entPairs, stateVector } = computeBlochTraces(stepIdx);
  entangledPairIndices = pairIndices;
  entangledPairs = entPairs;
  latestPairStates = pairStates;
  latestGlobalRho = rho2;
  latestStateVector = stateVector;
  entanglementVisuals?.setPairs?.(Array.from(entangledPairs.values()).map((p) => p.qubits));
  noiseOverlay?.setEntangledPairs?.(Array.from(entangledPairs.values()).map((p) => p.qubits));
  noiseOverlay?.setActiveStep?.(stepIdx);
  const entangledNow = entangledPairs.size > 0;
  const eventsThisStep = (measuredEvents || []).filter((ev) => ev.step === stepIdx);
  noiseOverlay?.notifyMeasurements?.(eventsThisStep);
  const shouldAnimateMeasure = measurementAnimEnabled && !!coinAnimator && stepIdx >= 0 && eventsThisStep.length > 0;
  const holdMap = new Map();

  for (let q = 0; q < qubitCount; q++) {
    const w = widgets[q]?.widget;
    if (!w) continue;
    const state = states[q] ?? normalizeState(getInitialState(q));
    const trace = traces[q] ?? [];
    const hold = shouldAnimateMeasure && eventsThisStep.some((ev) => ev.qubit === q);
    const entangledHere = entangledNow && measuredVisualOutcomes[q] == null && isPairMember(q, entangledPairs);
    const hideArrow = hold || entangledHere;
    const hideTrace = hideArrow;
    w.setStateAndTrace(state, trace, { hideArrow, hideTrace });
    const rho = densityFromState(state);
    const purity = trace2MatSquared(rho);
    updatePurityChip(widgets[q]?.purityEl, purity);
    const m = measuredLatest?.[q] ?? null;

    const measBadge = widgets[q]?.measEl;
    const stateChip = widgets[q]?.stateChipEl;

    if (hold) {
      holdMap.set(q, { state, trace, outcome: m });
      if (measBadge) {
        measBadge.textContent = "Measuring…";
        measBadge.classList.add("on", "pending");
      }
      if (stateChip) {
        stateChip.textContent = "Measurement pending";
        stateChip.classList.add("on", "pending");
        stateChip.classList.remove("entangled");
      }
    } else {
      applyMeasurementVisual(q, m, { cue: false });
      updateStateChip(q, state, entangledPairs);
    }
  }

  updateEntanglementIndicators(entangledPairs);
  updateProbPopover();
  updateBackendMath();
  updateCorrelationsPanel();
  updateGlobalStateBadges(entangledPairs);
  updateBeginnerPanels();

  // cue the most recent measurement events (if any) to emphasize collapse
  measuredEvents?.forEach(({ qubit, outcome, step }) => {
    if (shouldAnimateMeasure && step === stepIdx && holdMap.has(qubit)) return;
    applyMeasurementVisual(qubit, outcome, { cue: false, snap: true });
  });

  if (shouldAnimateMeasure) {
    return playMeasurementAnimations(eventsThisStep, holdMap);
  }
}

function stopPlayback() {
  playing = false;
  document.body.classList.remove("is-playing");
  if (playTimer) {
    clearTimeout(playTimer);
    playTimer = null;
  }
  noiseOverlay?.setPlaying?.(false);
  const icon = $("playIcon");
  if (icon) icon.textContent = "▶";
}

function startPlayback() {
  if (playing) return;
  playing = true;
  document.body.classList.add("is-playing");
  noiseOverlay?.setPlaying?.(true);
  const icon = $("playIcon");
  if (icon) icon.textContent = "⏸";
  scheduleNextTick();
}

function togglePlayback() {
  if (playing) stopPlayback();
  else startPlayback();
}

function scheduleNextTick() {
  if (!playing) return;
  const dt = 480;

  playTimer = setTimeout(async () => {
    await stepForward();
    if (activeStep >= stepCount - 1) {
      stopPlayback();
      return;
    }
    scheduleNextTick();
  }, dt);
}

async function stepBack() {
  if (stepBusy) return;
  stopPlayback();
  if (activeStep <= -1) return;

  stepBusy = true;
  const s = activeStep;

  const jobs = [];
  for (let q = 0; q < qubitCount; q++) {
    const g = singleQ[q]?.[s];
    if (!g) continue;
    const inv = INVERSE_GATE[g];
    if (!inv) continue;
    const w = widgets[q]?.widget;
    if (!w) continue;
    jobs.push(w.applyGateAsync(inv, { animate: true, duration: 450 }));
  }

  await Promise.all(jobs);

  activeStep = clamp(activeStep - 1, -1, stepCount - 1);
  clearMeasurementOutcomesFrom(activeStep + 1);
  updateActiveStepUI();
  const animPromise = rebuildToStep(activeStep);
  if (animPromise?.then) await animPromise;

  if (beginnerMode) {
    beginnerHasScrubbed = true;
    maybeRevealBloch();
  }

  stepBusy = false;
}

async function stepForward() {
  if (stepBusy) return;
  if (activeStep >= stepCount - 1) {
    extendCircuitSteps(stepCount + 1);
  }

  stepBusy = true;
  const next = activeStep + 1;

  const jobs = [];
  for (let q = 0; q < qubitCount; q++) {
    const g = singleQ[q]?.[next];
    if (!g) continue;
    const w = widgets[q]?.widget;
    if (!w) continue;
    jobs.push(w.applyGateAsync(g, { animate: true, duration: 450 }));
  }

  await Promise.all(jobs);

  const quietGate = QUIET_MODE && qubitCount === 1 ? singleQ[0]?.[next] : null;
  const quietFastPath = QUIET_MODE && qubitCount === 1 && quietGate && quietGate !== "M" && !(multiQ[next]?.length);

  activeStep = clamp(next, -1, stepCount - 1);
  updateActiveStepUI();
  if (quietFastPath) {
    updateProbPopover();
    updateBeginnerPanels();
    stepBusy = false;
    return;
  }

  const animPromise = rebuildToStep(activeStep);
  if (animPromise?.then) await animPromise;

  if (beginnerMode) {
    beginnerHasScrubbed = true;
    maybeRevealBloch();
  }

  stepBusy = false;
}

function resetStepCursor() {
  stopPlayback();
  activeStep = -1;
  clearMeasurementOutcomesFrom(0);
  updateActiveStepUI();
  rebuildToStep(activeStep);
  noiseOverlay?.reset?.();
  if (beginnerMode) {
    beginnerHasScrubbed = false;
    beginnerHasSeenProbChange = false;
    setBeginnerBlochVisible(false);
  }
}

// -------------------- Circuit render (existing) --------------------
function renderCircuit() {
  const canvas = $("circuit-canvas");
  const grid = $("circuit-grid");
  if (!canvas || !grid) return;

  ensureCircuitDimensions();
  canvas.innerHTML = "";
  canvas.style.background = "var(--bg)";
  canvas.style.backgroundImage = "none";
  grid.style.background = "var(--bg)";
  grid.style.backgroundImage = "none";

  const width = C_LABEL_W + stepCount * C_STEP_W + 20;
  const height = C_TOP_PAD + qubitCount * C_ROW_H + 18;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  let labelLayer = $("circuit-labels");
  if (!labelLayer) {
    labelLayer = document.createElement("div");
    labelLayer.id = "circuit-labels";
    grid.appendChild(labelLayer);
  }
  labelLayer.innerHTML = "";
  labelLayer.style.width = `${C_LABEL_W}px`;
  labelLayer.style.height = `${height}px`;

  dropHighlightEl = document.createElement("div");
  dropHighlightEl.className = "cdrop-highlight";
  canvas.appendChild(dropHighlightEl);

  for (let s = 0; s < stepCount; s++) {
    const lbl = document.createElement("div");
    lbl.className = "cstep-label";
    lbl.dataset.step = String(s);
    if (s === activeStep) lbl.classList.add("is-active");
    lbl.style.left = `${C_LABEL_W + s * C_STEP_W}px`;
    lbl.style.width = `${C_STEP_W}px`;
    lbl.textContent = `t${s}`;
    canvas.appendChild(lbl);
  }

  for (let q = 0; q < qubitCount; q++) {
    const y = wireCenterY(q);

    const label = document.createElement("div");
    label.className = "cwire-label";
    label.style.top = `${y - 12}px`;
    label.textContent = `q${q}`;
    label.addEventListener("click", (e) => {
      e.stopPropagation();
      showInitStateMenu(q, label);
    });
    labelLayer.appendChild(label);

    const ket = document.createElement("div");
    ket.className = "cwire-ket";
    ket.style.top = `${y + 8}px`;
    const initLabel = INIT_STATE_MAP[initialStates[q]]?.label || "|0\\rangle";
    ket.innerHTML = `\\(${initLabel}\\)`;
    ket.dataset.q = String(q);
    ket.dataset.tip = "Set initial state |ψ⟩ for this wire";

    ket.addEventListener("click", (e) => {
      e.stopPropagation();
      showInitStateMenu(q, ket);
    });
    labelLayer.appendChild(ket);
  }

  for (let s = 0; s < stepCount; s++) {
    const hi = document.createElement("div");
    hi.className = "cstep-highlight";
    hi.dataset.step = String(s);
    hi.style.left = `${C_LABEL_W + s * C_STEP_W}px`;
    hi.style.width = `${C_STEP_W}px`;
    canvas.appendChild(hi);
  }

  scrollCircuitStepWindow();

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.classList.add("circuit-svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  for (let q = 0; q < qubitCount; q++) {
    const y = wireCenterY(q);
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", C_LABEL_W);
    line.setAttribute("x2", C_LABEL_W + stepCount * C_STEP_W);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "var(--circuit-wire)");
    line.setAttribute("stroke-width", "3");
    line.setAttribute("stroke-linecap", "round");
    svg.appendChild(line);
  }

  for (let s = 0; s < stepCount; s++) {
    for (const op of multiQ[s]) {
      if (op.type !== "CX") continue;
      const x = stepCenterX(s);
      const y1 = wireCenterY(op.control);
      const y2 = wireCenterY(op.target);

      const vline = document.createElementNS(svgNS, "line");
      vline.setAttribute("x1", x);
      vline.setAttribute("x2", x);
      vline.setAttribute("y1", y1);
      vline.setAttribute("y2", y2);
      vline.setAttribute("stroke", "var(--circuit-wire)");
      vline.setAttribute("stroke-width", "2.2");
      vline.setAttribute("stroke-linecap", "round");
      svg.appendChild(vline);
    }
  }

  canvas.appendChild(svg);

  // Single-qubit gates
  for (let q = 0; q < qubitCount; q++) {
    for (let s = 0; s < stepCount; s++) {
      const g = singleQ[q][s];
      if (!g) continue;

      const x = stepCenterX(s);
      const y = wireCenterY(q);

      const gate = document.createElement("div");
      gate.className = `cgate ${gateColorClass(g)}`;
      gate.dataset.gate = g;
      gate.style.left = `${x}px`;
      gate.style.top = `${y}px`;
      gate.dataset.tip = g === "M" ? "Measurement gate" : `Gate ${g}`;
      gate.dataset.desc = gateHoverBlurb(g) || gate.dataset.tip;
      if (g === "M") {
        gate.classList.add("cgate-measure");
        const icon = document.createElement("div");
        icon.className = "measure-icon";
        gate.appendChild(icon);
      } else {
        gate.textContent = g;
      }
      gate.setAttribute("draggable", "true");

      gate.addEventListener("dragstart", (e) => {
        draggingGate = g;
        draggingFrom = { kind: "single", q, s };
        draggingOp = null;
        singleQ[q][s] = null;
        pendingCX = null;
        updateSelectionState();

        try { e.dataTransfer.setData("text/plain", String(g)); } catch {}
        e.dataTransfer.effectAllowed = "move";

        requestAnimationFrame(() => renderCircuit());
      });

      gate.addEventListener("dragend", () => {
        draggingGate = null;
        draggingFrom = null;
        draggingOp = null;
        hideDropHighlight();
        renderCircuit();
        rebuildToStep(activeStep);
      });

      gate.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        clearAt(q, s);
        renderCircuit();
        rebuildToStep(activeStep);
      });

      canvas.appendChild(gate);
    }
  }

  // CX markers
  for (let s = 0; s < stepCount; s++) {
    for (const op of multiQ[s]) {
      if (op.type !== "CX") continue;
      const x = stepCenterX(s);

      // control
      {
        const y = wireCenterY(op.control);
        const g = document.createElement("div");
        g.className = "cgate cx-node";
        g.dataset.gate = "CX";
        g.style.left = `${x}px`;
        g.style.top = `${y}px`;
        g.dataset.tip = "CNOT control (C)";

        const dot = document.createElement("div");
        dot.className = "ccontrol";
        g.appendChild(dot);
        const label = document.createElement("span");
        label.className = "cx-drag-label";
        label.textContent = "C";
        g.appendChild(label);

        g.setAttribute("draggable", "true");

        g.addEventListener("dragstart", (e) => {
          draggingGate = "CX";
          draggingFrom = { kind: "cx", step: s, role: "control" };
          draggingOp = { ...op };
          multiQ[s] = multiQ[s].filter((o) => o !== op);
          pendingCX = null;
          updateSelectionState();
          showDragRoleBadge("CNOT: dragging control (C)");

          try { e.dataTransfer.setData("text/plain", "CX"); } catch {}
          e.dataTransfer.effectAllowed = "move";

          requestAnimationFrame(() => renderCircuit());
        });

        g.addEventListener("dragend", () => {
          draggingGate = null;
          draggingFrom = null;
          draggingOp = null;
          hideDropHighlight();
          hideDragRoleBadge();
          renderCircuit();
          rebuildToStep(activeStep);
        });

        canvas.appendChild(g);
      }

      // target
      {
        const y = wireCenterY(op.target);
        const g = document.createElement("div");
        g.className = "cgate cx-node";
        g.dataset.gate = "CX";
        g.style.left = `${x}px`;
        g.style.top = `${y}px`;
        g.dataset.tip = "CNOT target (T)";

        const tgt = document.createElement("div");
        tgt.className = "ctarget";
        g.appendChild(tgt);
        const label = document.createElement("span");
        label.className = "cx-drag-label";
        label.textContent = "T";
        g.appendChild(label);

        g.setAttribute("draggable", "true");

        g.addEventListener("dragstart", (e) => {
          draggingGate = "CX";
          draggingFrom = { kind: "cx", step: s, role: "target" };
          draggingOp = { ...op };
          multiQ[s] = multiQ[s].filter((o) => o !== op);
          pendingCX = null;
          updateSelectionState();
          showDragRoleBadge("CNOT: dragging target (T)");

          try { e.dataTransfer.setData("text/plain", "CX"); } catch {}
          e.dataTransfer.effectAllowed = "move";

          requestAnimationFrame(() => renderCircuit());
        });

        g.addEventListener("dragend", () => {
          draggingGate = null;
          draggingFrom = null;
          draggingOp = null;
          hideDropHighlight();
          hideDragRoleBadge();
          renderCircuit();
          rebuildToStep(activeStep);
        });

        canvas.appendChild(g);
      }
    }
  }

  // Drop behavior
  grid.ondragover = (e) => {
    // This MUST exist for drop to fire.
    e.preventDefault();

    const gate = draggingGate || e.dataTransfer.getData("text/plain");
    if (!gate) { hideDropHighlight(); return; }

    e.dataTransfer.dropEffect = (draggingFrom && draggingFrom.kind !== "palette") ? "move" : "copy";

    const { x, y } = getGridLocalXY(e, grid, canvas);
    const s = stepFromX(x);
    const q = wireFromY(y);
    showDropHighlight(s, q);
  };

  grid.ondragleave = (e) => {
    const related = e.relatedTarget;
    if (!related || !grid.contains(related)) hideDropHighlight();
  };

  grid.ondrop = (e) => {
    e.preventDefault();
    hideDropHighlight();
    hideDragRoleBadge();

    const gate = draggingGate || e.dataTransfer.getData("text/plain");
    if (!gate) {
      draggingGate = null; draggingFrom = null; draggingOp = null;
      return;
    }

    const { x, y } = getGridLocalXY(e, grid, canvas);
    const s = stepFromX(x);
    const q = wireFromY(y);

    if (draggingFrom && draggingFrom.kind === "cx" && draggingOp) {
      const role = draggingFrom.role;
      const old = draggingOp;

      draggingGate = null;
      draggingFrom = null;

      const control = (role === "control") ? q : old.control;
      const target  = (role === "target") ? q : old.target;

      draggingOp = null;

      if (control === target) {
        renderCircuit();
        rebuildToStep(activeStep);
        return;
      }

      placeCXDirect(s, control, target);
      pendingCX = null;
      updateSelectionState();

      renderCircuit();
      rebuildToStep(activeStep);
      return;
    }

    draggingGate = null;
    draggingFrom = null;
    draggingOp = null;

    if (gate === "CX") {
      placeCX(q, s);
      renderCircuit();
      rebuildToStep(activeStep);
      return;
    }

    placeSingleGate(q, s, gate);
    pendingCX = null;
    updateSelectionState();

    renderCircuit();
    rebuildToStep(activeStep);
  };

  ensureNoiseOverlay();
  noiseOverlay?.resize?.();
  updateActiveStepUI();

  if (typeof MathJax !== "undefined") MathJax.typesetPromise([canvas]);
  queueTooltipRefresh();
}

function clearCircuit() {
  stopPlayback();
  initCircuitModel();
  renderCircuit();
  activeStep = -1;
  updateActiveStepUI();
  rebuildToStep(activeStep);
  noiseOverlay?.reset?.();
}

function setActiveStepDirect(step) {
  stopPlayback();
  const prev = activeStep;
  activeStep = clamp(step, -1, stepCount - 1);
  if (activeStep < prev) clearMeasurementOutcomesFrom(activeStep + 1);
  updateActiveStepUI();
  rebuildToStep(activeStep);
}

function findNextEmptyStep(q, fromStep) {
  const start = Math.max(0, fromStep ?? 0);
  for (let s = start; s < stepCount; s++) {
    if (singleQ[q]?.[s]) continue;
    const blockedByCX = (multiQ[s] || []).some((op) => op.type === "CX" && (op.control === q || op.target === q));
    if (blockedByCX) continue;
    return s;
  }
  return null;
}

function applyBeginnerGate(gate, q = selectedQubit) {
  const nextStep = findNextEmptyStep(q, activeStep + 1);
  if (nextStep == null) {
    showToast("Timeline full. Clear or add steps.");
    return;
  }
  if (gate === "M") triggerQuietMeasureFlash();
  placeSingleGate(q, nextStep, gate);
  renderCircuit();
  ensureNoiseOverlay();
  noiseOverlay?.resize?.();
  if (nextStep === activeStep + 1) {
    beginnerHasScrubbed = true;
    stepForward();
  } else {
    beginnerHasScrubbed = true;
    setActiveStepDirect(nextStep);
  }
  maybeRevealBloch();
}

async function applyQuietAction(action) {
  if (!QUIET_MODE) {
    if (action === "undecided") applyBeginnerGate("H");
    else if (action === "flip") applyBeginnerGate("X");
    else if (action === "measure") applyBeginnerGate("M");
    else if (action === "reset") resetStepCursor();
    return;
  }

  stopPlayback();
  if (qubitCount !== 1) setQubitCount(1);
  if (action === "reset") {
    clearCircuit();
    resetStepCursor();
    return;
  }
  if (action === "undecided") {
    applyBeginnerGate("H");
  } else if (action === "flip") {
    applyBeginnerGate("X");
  } else if (action === "measure") {
    applyBeginnerGate("M");
  }
}

function resetBeginnerState() {
  beginnerHasScrubbed = false;
  beginnerHasSeenProbChange = false;
  selectedQubit = 0;
  setQubitCount(1);
  clearCircuit();
  setBeginnerBlochVisible(false);
  setBeginnerTimelineVisible(false);
}

function applyBeginnerPreset(kind) {
  stopPlayback();
  beginnerHasScrubbed = false;
  beginnerHasSeenProbChange = false;
  if (kind === "bell") {
    setQubitCount(2);
  } else {
    setQubitCount(1);
  }
  initCircuitModel();
  selectedQubit = 0;
  if (kind === "superposition") {
    placeSingleGate(0, 0, "H");
  } else if (kind === "interference") {
    placeSingleGate(0, 0, "H");
    placeSingleGate(0, 2, "Z");
    placeSingleGate(0, 4, "H");
  } else if (kind === "bell") {
    placeSingleGate(0, 0, "H");
    placeCXDirect(2, 0, 1);
  } else if (kind === "collapse") {
    placeSingleGate(0, 0, "H");
    placeSingleGate(0, 2, "M");
  }
  renderCircuit();
  activeStep = -1;
  updateActiveStepUI();
  rebuildToStep(activeStep);
  setBeginnerBlochVisible(false);
  maybeRevealBloch();
}

// -------------------- Qubit count (now always accessible from topbar) --------------------
function setQubitCount(n) {
  qubitCount = Math.max(1, Math.min(MAX_QUBITS, n));
  if (selectedQubit >= qubitCount) selectedQubit = qubitCount - 1;

  ensureCircuitDimensions();
  ensureInitialStates();
  rebuildBlochGrid();
  renderCircuit();
  noiseOverlay?.setQubitCount?.(qubitCount);

  activeStep = clamp(activeStep, -1, stepCount - 1);
  updateActiveStepUI();
  rebuildToStep(activeStep);

  syncQubitCountUI();
}

function addQubit() { if (qubitCount < MAX_QUBITS) setQubitCount(qubitCount + 1); }
function removeQubit() { if (qubitCount > 1) setQubitCount(qubitCount - 1); }

// -------------------- UI state (gate library is always visible now) --------------------
const uiState = {
  backendOpen: false,
  probOpen: false,
  menuOpen: false,
};

function updateBackdrop() {
  const on = uiState.backendOpen || uiState.probOpen || uiState.menuOpen;
  const b = $("overlayBackdrop");
  if (b) b.setAttribute("aria-hidden", on ? "false" : "true");
}

function openBackendDrawer() {
  uiState.backendOpen = true;
  document.body.classList.add("backend-open");
  const showMatrixToggle = $("toggleShowMatrix");
  if (showMatrixToggle) {
    showMatrixToggle.checked = true;
    document.body.classList.add("show-matrix");
  }
  $("backendDrawer")?.setAttribute("aria-hidden", "false");
  updateBackdrop();
  updateBackendMath();
}
function closeBackendDrawer() {
  uiState.backendOpen = false;
  document.body.classList.remove("backend-open");
  $("backendDrawer")?.setAttribute("aria-hidden", "true");
  updateBackdrop();
}
function toggleBackendDrawer() {
  if (uiState.backendOpen) closeBackendDrawer();
  else openBackendDrawer();
}

function openProbPopover() {
  uiState.probOpen = true;
  document.body.classList.add("prob-open");
  updateBackdrop();
  updateProbPopover();
}
function closeProbPopover() {
  uiState.probOpen = false;
  document.body.classList.remove("prob-open");
  updateBackdrop();
}
function toggleProbPopover() {
  if (uiState.probOpen) closeProbPopover();
  else openProbPopover();
}

function openMenu() {
  uiState.menuOpen = true;
  document.body.classList.add("menu-open");
  $("moreMenuBtn")?.setAttribute("aria-expanded", "true");
  updateBackdrop();
}
function closeMenu() {
  uiState.menuOpen = false;
  document.body.classList.remove("menu-open");
  $("moreMenuBtn")?.setAttribute("aria-expanded", "false");
  updateBackdrop();
}
function toggleMenu() {
  if (uiState.menuOpen) closeMenu();
  else openMenu();
}

function updateSelectionState() {
  const hasSel = !!pendingCX;
  document.body.classList.toggle("has-selection", hasSel);
}

const GATELIB_COLLAPSE_KEY = "gateLibCollapsed";
const GATELIB_POS_KEY = "gateLibPos";

function setGateLibCollapsed(collapsed) {
  document.body.classList.toggle("gate-lib-collapsed", !!collapsed);
  try { localStorage.setItem(GATELIB_COLLAPSE_KEY, collapsed ? "1" : "0"); } catch {}
}

function toggleGateLibCollapsed() {
  const isCollapsed = document.body.classList.contains("gate-lib-collapsed");
  setGateLibCollapsed(!isCollapsed);
}

function applyGateLibPosition(pos) {
  const panel = $("gateLibrary");
  if (!panel) return;
  const rect = panel.getBoundingClientRect();
  const pad = 8;
  const defaultTop = window.innerHeight - rect.height - 18;
  const defaultLeft = 18;
  const left = clamp(pos?.left ?? defaultLeft, pad, Math.max(pad, window.innerWidth - rect.width - pad));
  const top = clamp(pos?.top ?? defaultTop, pad, Math.max(pad, window.innerHeight - rect.height - pad));
  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
  panel.style.right = "auto";
  panel.style.bottom = "auto";
  return { left, top };
}

function initGateLibraryDrag() {
  const panel = $("gateLibrary");
  if (!panel) return;

  let savedPos = null;
  try { savedPos = JSON.parse(localStorage.getItem(GATELIB_POS_KEY)); } catch {}
  let currentPos = applyGateLibPosition(savedPos);

  let start = null;
  let activePointerId = null;

  const startDrag = (ev) => {
    if (ev.button !== 0) return;
    if (ev.target && ev.target.closest("[draggable]")) return;
    if (ev.target && ev.target.closest("button, input, select, label")) return;
    const rect = panel.getBoundingClientRect();
    start = {
      x: ev.clientX,
      y: ev.clientY,
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    activePointerId = ev.pointerId;
    panel.setPointerCapture?.(ev.pointerId);
    ev.preventDefault();
  };

  const moveDrag = (ev) => {
    if (!start) return;
    const dx = ev.clientX - start.x;
    const dy = ev.clientY - start.y;
    const pad = 8;
    const nextLeft = clamp(start.left + dx, pad, Math.max(pad, window.innerWidth - start.width - pad));
    const nextTop = clamp(start.top + dy, pad, Math.max(pad, window.innerHeight - start.height - pad));
    panel.style.left = `${nextLeft}px`;
    panel.style.top = `${nextTop}px`;
    panel.style.right = "auto";
    panel.style.bottom = "auto";
    currentPos = { left: nextLeft, top: nextTop };
  };

  const endDrag = () => {
    if (!start) return;
    try { localStorage.setItem(GATELIB_POS_KEY, JSON.stringify(currentPos)); } catch {}
    if (activePointerId != null) {
      panel.releasePointerCapture?.(activePointerId);
    }
    activePointerId = null;
    start = null;
  };

  panel.addEventListener("pointerdown", startDrag);
  panel.addEventListener("pointermove", moveDrag);
  panel.addEventListener("pointerup", endDrag);
  panel.addEventListener("pointercancel", endDrag);
  panel.addEventListener("pointerleave", endDrag);
  window.addEventListener("pointerup", endDrag, { passive: true });

  window.addEventListener("resize", () => {
    currentPos = applyGateLibPosition(currentPos);
  });
}

// -------------------- Bloch overlay controls --------------------
function setTrajectoryVisible(on) {
  widgets.forEach(({ widget }) => {
    if (!widget?.traceLine) return;
    widget.traceLine.visible = !!on;
  });
}

// -------------------- Prob popover --------------------
function formatProbabilityLatex(p) {
  const clamped = Math.max(0, Math.min(1, p));
  const frac = toFraction(clamped, 256, 1e-6);
  return fracLatex(frac);
}

function formatStateKet(alpha, beta, tol = 1e-6) {
  const isZero = (z) => Math.abs(z.re) < tol && Math.abs(z.im) < tol;
  const isOne = (z) => Math.abs(z.re - 1) < tol && Math.abs(z.im) < tol;
  const isNegOne = (z) => Math.abs(z.re + 1) < tol && Math.abs(z.im) < tol;

  const term = (z, basis) => {
    if (isZero(z)) return null;
    if (isOne(z)) return `|${basis}\\rangle`;
    if (isNegOne(z)) return `-|${basis}\\rangle`;
    return `${formatExactComplex(z, tol)}\\,|${basis}\\rangle`;
  };

  const terms = [term(alpha, "0"), term(beta, "1")].filter(Boolean);
  if (!terms.length) return "0";

  return terms
    .map((t, idx) => {
      if (idx === 0) return t;
      if (t.startsWith("-")) return `- ${t.slice(1)}`;
      return `+ ${t}`;
    })
    .join(" ");
}

function updatePurityChip(el, purity) {
  if (!el) return;
  const clamped = Math.max(0, Math.min(1, purity));
  el.textContent = `ρ purity: ${clamped.toFixed(2)}`;
  el.style.setProperty("--purity", String(clamped));
  const mixed = clamped < 1 - PURITY_EPS;
  el.classList.toggle("mixed", mixed);
  const tile = el.closest(".bloch-tile");
  tile?.classList.toggle("mixed", mixed);
}

function applyMeasurementVisual(q, outcome, { cue = false, snap = false } = {}) {
  const entry = widgets[q];
  if (!entry) return;
  measuredVisualOutcomes[q] = outcome;
  const { tileEl, measEl, widget, purityEl, stateChipEl } = entry;

  if (outcome == null) {
    tileEl?.classList.remove("measured");
    measEl.innerHTML = "";
    measEl.classList.remove("on");
    measEl.classList.remove("pending");
    stateChipEl?.classList.remove("pending");
    refreshMeasurementClasses();
    return;
  }

  tileEl?.classList.remove("entangled", "mixed");
  tileEl?.classList.add("measured");
  measEl.innerHTML = `State collapsed: \\(|${outcome}\\rangle\\)`;
  measEl.classList.add("on");
  measEl.classList.remove("pending");
  typesetNode(measEl);
  if (stateChipEl) {
    stateChipEl.innerHTML = `\\(|\\psi_{${q}}\\rangle = |${outcome}\\rangle\\)`;
    stateChipEl.classList.remove("entangled");
    stateChipEl.classList.remove("pending");
    typesetNode(stateChipEl);
  }

  // Snap arrow to Z with full length if requested
  if (snap && widget) {
    const pure = outcome === 0
      ? { alpha: c(1, 0), beta: c(0, 0) }
      : { alpha: c(0, 0), beta: c(1, 0) };
    widget.setStateAndTrace(normalizeState(pure), [{ x: 0, y: 0, z: outcome === 0 ? 1 : -1 }]);
    updatePurityChip(purityEl, 1);
  }

  refreshMeasurementClasses();
}

function revealHeldMeasurement(q, held) {
  if (!held) return;
  const entry = widgets[q];
  if (entry?.widget) {
    entry.widget.setStateAndTrace(held.state, held.trace, { hideArrow: false, hideTrace: false });
  }
  if (entry?.stateChipEl) {
    entry.stateChipEl.classList.remove("pending");
  }
  applyMeasurementVisual(q, held.outcome, { cue: true, snap: true });
  updateStateChip(q, held.state, entangledPairs);
}

function playMeasurementAnimations(events, holdMap) {
  if (!events?.length || !coinAnimator || !measurementAnimEnabled) return null;
  measurementAnimRunId += 1;
  const runId = measurementAnimRunId;
  document.body.classList.add("coin-anim-visible");

  const seq = (async () => {
    for (const ev of events) {
      const label = `q${ev.qubit}`;
      await coinAnimator.play(ev.outcome, { label, probs: ev.probs });
      if (runId !== measurementAnimRunId) return;
      revealHeldMeasurement(ev.qubit, holdMap.get(ev.qubit));
    }
  })();

  return seq.finally(() => {
    if (runId === measurementAnimRunId) document.body.classList.remove("coin-anim-visible");
  });
}

function refreshMeasurementClasses() {
  widgets.forEach((entry, idx) => {
    const tile = entry?.tileEl;
    if (!tile) return;
    tile.classList.remove("measured-hit", "measured-miss", "measure-pulse");
  });
}

function renderProbHistogram(host, p0, p1, useLatex = true) {
  if (!host) return;
  const label0 = useLatex ? "|0⟩" : "0";
  const label1 = useLatex ? "|1⟩" : "1";
  const p0Txt = useLatex ? `\\(\\Pr(|0\\rangle) = ${formatProbabilityLatex(p0)}\\)` : `Probability of 0: ${formatPercent(p0)}`;
  const p1Txt = useLatex ? `\\(\\Pr(|1\\rangle) = ${formatProbabilityLatex(p1)}\\)` : `Probability of 1: ${formatPercent(p1)}`;
  host.innerHTML = `
    <div class="bar prob-row">
      <div class="prob-state">${label0}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(0, Math.min(1, p0)) * 100}%"></div></div>
      <div class="prob-math">${p0Txt}</div>
    </div>
    <div class="bar prob-row">
      <div class="prob-state">${label1}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(0, Math.min(1, p1)) * 100}%"></div></div>
      <div class="prob-math">${p1Txt}</div>
    </div>
  `;
}

function updateProbPopover() {
  const w = widgets[selectedQubit]?.widget;
  if (!w) return;

  const rho = densityFromState(w.state);
  const { p0, p1 } = probsFromRho(rho);

  renderProbHistogram($("probHistogram"), p0, p1, true);
  renderProbHistogram($("probHistogramBeginner"), p0, p1, false);

  if (beginnerMode) {
    if (Math.abs(p0 - 1) > 1e-3 || Math.abs(p1) > 1e-3) {
      beginnerHasSeenProbChange = true;
      maybeRevealBloch();
    }
  }

  const targets = [$("probHistogram"), $("probHistogramBeginner")].filter(Boolean);
  if (typeof MathJax !== "undefined" && targets.length) MathJax.typesetPromise(targets);
}

function updateBeginnerTimelineUI() {
  const slider = $("beginnerTimeline");
  const label = $("beginnerTimelineLabel");
  if (!slider) return;
  slider.max = String(stepCount);
  slider.value = String(activeStep + 1);
  if (label) {
    label.textContent = activeStep < 0 ? "Start" : `Step ${activeStep}`;
  }
}

function maybeRevealBloch() {
  if (!beginnerMode) return;
  if (!beginnerShowBloch && beginnerHasScrubbed && beginnerHasSeenProbChange) {
    setBeginnerBlochVisible(true);
  }
}

function formatPercent(p) {
  const pct = Math.round(Math.max(0, Math.min(1, p)) * 100);
  return `${pct}%`;
}

function gateToBeginnerLabel(gate) {
  const map = {
    H: "Make it undecided",
    X: "Flip it",
    Z: "Add a twist",
    S: "Add a twist",
    M: "Measure",
  };
  return map[gate] || null;
}

function setQuietDetailVisible(on) {
  if (!QUIET_MODE) return;
  quietDetailVisible = !!on;
  document.body.classList.toggle("quiet-show-bloch", quietDetailVisible);
  widgets.forEach(({ widget }) => widget?.setDetailVisibility?.(quietDetailVisible));
}

function triggerQuietMeasureFlash() {
  if (!QUIET_MODE) return;
  document.body.classList.add("quiet-measure");
  if (quietMeasureTimer) clearTimeout(quietMeasureTimer);
  quietMeasureTimer = setTimeout(() => {
    document.body.classList.remove("quiet-measure");
  }, 700);
}

function setQuietCircuitVisible(on) {
  if (!QUIET_MODE) return;
  quietShowCircuit = !!on;
  document.body.classList.toggle("quiet-show-circuit", quietShowCircuit);
  const btn = document.querySelector('.quiet-action[data-action="detail"]');
  if (btn) btn.textContent = quietShowCircuit ? "hide circuit" : "show circuit";
  if (quietShowCircuit) {
    clearCircuit();
    try { localStorage.removeItem(GATELIB_POS_KEY); } catch {}
    const gateLib = $("gateLibrary");
    if (gateLib) {
      gateLib.style.setProperty("left", "clamp(18px, 6vw, 64px)", "important");
      gateLib.style.setProperty("right", "auto", "important");
      gateLib.style.setProperty("top", "50%", "important");
      gateLib.style.setProperty("bottom", "auto", "important");
      gateLib.style.setProperty("transform", "translateY(-50%)", "important");
    }
    const circuitPaneEl = $("circuitPane");
    const circuitCanvasEl = $("circuitCanvas");
    const circuitGridEl = $("circuit-grid");
    [circuitPaneEl, circuitCanvasEl, circuitGridEl].forEach((el) => {
      if (!el) return;
      el.style.setProperty("background", "transparent", "important");
      el.style.setProperty("background-image", "none", "important");
      el.style.setProperty("border", "none", "important");
      el.style.setProperty("box-shadow", "none", "important");
      el.style.setProperty("border-radius", "0", "important");
    });
    const pane = $("circuitPane");
    const focusTarget = $("circuitCanvas") || pane;
    if (focusTarget) {
      focusTarget.setAttribute("tabindex", "0");
      focusTarget.focus({ preventScroll: true });
    }
  }
}

function ensureCircuitKeyNav() {
  const canvas = $("circuitCanvas");
  if (!canvas || canvas.dataset.keyNav === "1") return;
  canvas.dataset.keyNav = "1";
  canvas.setAttribute("tabindex", "0");
  canvas.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      e.stopPropagation();
      stepBack();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      e.stopPropagation();
      stepForward();
    }
  });
}

function updateJointProbPanel(entry) {
  const grid = $("jointProbGrid");
  const cond = $("jointProbCondition");
  if (!grid || !entry?.pair?.rho) return;
  const rho = entry.pair.rho;
  const p00 = Math.max(0, rho[0][0].re);
  const p01 = Math.max(0, rho[1][1].re);
  const p10 = Math.max(0, rho[2][2].re);
  const p11 = Math.max(0, rho[3][3].re);
  grid.innerHTML = `
    <div class="joint-prob-cell"><div class="prob-label">00</div><div class="prob-value">${formatPercent(p00)}</div></div>
    <div class="joint-prob-cell"><div class="prob-label">01</div><div class="prob-value">${formatPercent(p01)}</div></div>
    <div class="joint-prob-cell"><div class="prob-label">10</div><div class="prob-value">${formatPercent(p10)}</div></div>
    <div class="joint-prob-cell"><div class="prob-label">11</div><div class="prob-value">${formatPercent(p11)}</div></div>
  `;
  if (cond) {
    const [qa, qb] = entry.pair.qubits;
    const pA0 = p00 + p01;
    const pA1 = p10 + p11;
    const bIfA0 = pA0 > 0 ? p01 / pA0 : 0;
    const bIfA1 = pA1 > 0 ? p11 / pA1 : 0;
    cond.textContent = `If q${qa}=0, q${qb}=1 with ${formatPercent(bIfA0)}. If q${qa}=1, q${qb}=1 with ${formatPercent(bIfA1)}.`;
  }
}

function updateInterferencePanel() {
  const grid = $("interferenceGrid");
  if (!grid) return;
  if (!Array.isArray(latestStateVector) || latestStateVector.length === 0) {
    grid.innerHTML = `<div class="card-note">No amplitudes available yet.</div>`;
    return;
  }
  if (qubitCount > 2) {
    grid.innerHTML = `<div class="card-note">Interference view is available for 1-2 qubits.</div>`;
    return;
  }

  const labels = qubitCount === 1 ? ["0", "1"] : ["00", "01", "10", "11"];
  const cells = labels.map((label, idx) => {
    const amp = latestStateVector[idx] || { re: 0, im: 0 };
    const mag = Math.min(1, Math.sqrt(cAbs2(amp)));
    const phase = Math.atan2(amp.im, amp.re);
    const deg = ((phase * 180) / Math.PI + 360) % 360;
    return `
      <div class="interference-cell">
        <div class="prob-label">${label}</div>
        <div class="interference-bar"><div class="interference-fill" style="width:${mag * 100}%"></div></div>
        <div class="interference-meta">
          <div class="phase-arrow" style="transform: rotate(${deg}deg)"></div>
          <div class="phase-text">${Math.round(deg)} deg</div>
        </div>
      </div>
    `;
  });
  grid.innerHTML = cells.join("");
}

function updateBeginnerPanels() {
  const w = widgets[selectedQubit]?.widget;
  if (!w) return;

  const rho = densityFromState(w.state);
  const { p0, p1 } = probsFromRho(rho);
  const purityNow = trace2MatSquared(rho);
  const entEntry = entangledPairForQubit(selectedQubit, entangledPairs);
  const entangled = !!entEntry && isEntangledFromRho(entEntry.pair.rho) && measuredVisualOutcomes[selectedQubit] == null;

  const stateEl = $("beginnerStateText");
  const deltaEl = $("beginnerDelta");
  const entNote = $("beginnerEntangledNote");
  if (entNote) entNote.classList.toggle("hidden", !entangled);

  if (stateEl && deltaEl) {
    if (entangled) {
      const pair = entEntry?.pair?.qubits || [];
      const other = pair.find((q) => q !== selectedQubit);
      const tag = other != null ? ` with q${other}` : "";
      stateEl.textContent = `This qubit is entangled${tag}. Only the pair has well-defined outcomes.`;
    } else {
      stateEl.textContent = `If you measure now, 0 happens ${formatPercent(p0)} of the time and 1 happens ${formatPercent(p1)}.`;
    }
  }

  const quietLine = $("quietStateLine");
  const quietSecondary = $("quietSecondaryLine");
  const quietSecondaryText = $("quietSecondaryText");
  const quietSecondaryValue = $("quietSecondaryValue");
  if (quietLine) {
    if (entangled) {
      quietLine.textContent = "These outcomes are linked.";
    } else {
      const p0Text = formatPercent(p0);
      const p1Text = formatPercent(p1);
      quietLine.textContent = `If measured now: 0 (${p0Text}) · 1 (${p1Text}).`;
    }
  }
  if (quietSecondary && quietSecondaryText && quietSecondaryValue) {
    const showPurity = !entangled && purityNow < 0.985;
    quietSecondary.classList.toggle("on", showPurity);
    if (showPurity) {
      quietSecondaryText.textContent = "This qubit is no longer fully its own.";
      const showValue = quietSecondary.classList.contains("reveal");
      quietSecondaryValue.textContent = showValue ? `(${purityNow.toFixed(2)})` : "";
    } else {
      quietSecondaryText.textContent = "";
      quietSecondaryValue.textContent = "";
      quietSecondary.classList.remove("reveal");
    }
  }

  const probPanel = $("probabilityPanel");
  const jointPanel = $("jointProbPanel");
  if (probPanel) probPanel.classList.toggle("hidden", entangled);
  if (jointPanel) jointPanel.classList.toggle("hidden", !entangled);
  if (entangled && entEntry) updateJointProbPanel(entEntry);

  if (deltaEl) {
    if (activeStep < 0) {
      deltaEl.textContent = "No changes yet.";
    } else {
      const prevState = computeStateAtStep(activeStep - 1, selectedQubit);
      const prevRho = densityFromState(prevState);
      const prevP0 = Math.max(0, prevRho[0][0].re);
      const dp0 = p0 - prevP0;
      const purityPrev = trace2MatSquared(prevRho);
      const deltaParts = [];
      if (Math.abs(dp0) > 1e-3) {
        deltaParts.push(`P(0) ${dp0 >= 0 ? "+" : "-"}${Math.abs(Math.round(dp0 * 100))}%`);
      }
      if (Math.abs(purityNow - purityPrev) > 1e-3) {
        deltaParts.push(`Purity ${purityNow > purityPrev ? "rose" : "fell"} to ${purityNow.toFixed(2)}`);
      }
      const prevEnt = activeStep > 0 ? computeBlochTraces(activeStep - 1).entangledPairs : new Map();
      if ((prevEnt?.size || 0) === 0 && entangledPairs.size > 0) deltaParts.push("Entanglement created");
      if ((prevEnt?.size || 0) > 0 && entangledPairs.size === 0) deltaParts.push("Entanglement broken");
      const gate = singleQ[selectedQubit]?.[activeStep];
      const cx = (multiQ[activeStep] || []).find((op) => op.type === "CX" && (op.control === selectedQubit || op.target === selectedQubit));
      const label = gateToBeginnerLabel(gate);
      if (label) deltaParts.unshift(`Action: ${label}`);
      if (cx) deltaParts.unshift(`Linked with q${cx.control === selectedQubit ? cx.target : cx.control}`);
      deltaEl.textContent = deltaParts.length ? deltaParts.join(" | ") : "State updated.";
    }
  }

  updateInterferencePanel();
  updateBeginnerTimelineUI();
}

function initQuietModeUI() {
  if (!QUIET_MODE) return;
  document.body.classList.add("quiet-mode");
  const canvas = $("blochCanvas");
  const pane = $("blochPane");
  const hud = $("quietHud");
  const prompt = $("quietPrompt");
  const wheel = $("quietActionWheel");
  const tooltip = $("quietTooltip");
  const secondary = $("quietSecondaryLine");
  const hideCircuitBtn = $("quietHideCircuit");
  const animMenuBtn = $("quietAnimMenuBtn");
  const animMenu = $("quietAnimMenu");
  const measureAnimBtn = $("quietMeasureAnimBtn");
  const entangleAnimBtn = $("quietEntangleAnimBtn");
  const stopAnimBtn = $("quietStopAnimBtn");
  if (!canvas || !prompt) return;
  if (pane && hud && hud.parentNode !== pane) pane.appendChild(hud);

  if (!wheel) {
    const actions = ["H", "X", "Z", "M"];
    let idx = 0;
    prompt.addEventListener("click", (e) => {
      e.stopPropagation();
      const gate = actions[idx % actions.length];
      idx += 1;
      applyBeginnerGate(gate);
    });
    setQuietDetailVisible(true);
    setQuietCircuitVisible(false);
    return;
  }
  ensureCircuitKeyNav();
  const gateTip = $("quietTooltip");
  const setEntangleAnimLabel = () => {
    if (!entangleAnimBtn) return;
    entangleAnimBtn.textContent = entangleDemo ? "Stop entanglement" : "Entanglement";
  };
  if (entangleAnimBtn) setEntangleAnimLabel();
  if (measureAnimBtn) {
    measureAnimBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      if (!coinAnimator || !measurementAnimEnabled) return;
      const w = widgets[selectedQubit]?.widget;
      if (!w) return;
      const rho = densityFromState(w.state);
      const { p0, p1 } = probsFromRho(rho);
      const total = Math.max(0, p0 + p1) || 1;
      const r = measurementRandom(activeStep, selectedQubit, manualMeasureCounter++);
      const outcome = r < p0 / total ? 0 : 1;
      measurementAnimRunId += 1;
      const runId = measurementAnimRunId;
      document.body.classList.add("coin-anim-visible");
      await coinAnimator.play(outcome, { label: `q${selectedQubit}`, probs: { p0: p0 / total, p1: p1 / total } });
      if (runId === measurementAnimRunId) document.body.classList.remove("coin-anim-visible");
    });
  }
  if (entangleAnimBtn) {
    entangleAnimBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (entangleDemo) stopEntangleDemo();
      else startEntangleDemo();
      setEntangleAnimLabel();
      document.body.classList.remove("quiet-anim-open");
      animMenuBtn?.setAttribute("aria-expanded", "false");
    });
  }
  if (stopAnimBtn) {
    stopAnimBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      stopEntangleDemo();
    });
  }
  if (animMenuBtn && animMenu) {
    const closeAnimMenu = () => {
      document.body.classList.remove("quiet-anim-open");
      animMenuBtn.setAttribute("aria-expanded", "false");
    };
    const toggleAnimMenu = () => {
      const isOpen = document.body.classList.toggle("quiet-anim-open");
      animMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };
    animMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAnimMenu();
    });
    animMenu.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("click", (e) => {
      if (!document.body.classList.contains("quiet-anim-open")) return;
      if (animMenu.contains(e.target) || animMenuBtn.contains(e.target)) return;
      closeAnimMenu();
    });
  }

  const openWheel = () => {
    quietWheelOpen = true;
    document.body.classList.add("quiet-wheel-open");
    wheel.dataset.tab = wheel.dataset.tab || "core";
  };
  const closeWheel = () => {
    if (entangleDemo) return;
    quietWheelOpen = false;
    document.body.classList.remove("quiet-wheel-open");
    wheel.dataset.tab = "core";
    wheel.querySelectorAll(".quiet-tab").forEach((btn) => {
      const on = btn.dataset.tab === "core";
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
  };

  const scheduleDetail = () => {
    if (quietDetailTimer) clearTimeout(quietDetailTimer);
    quietDetailTimer = setTimeout(() => setQuietDetailVisible(true), 900);
  };

  const clearDetail = () => {
    if (quietDetailTimer) clearTimeout(quietDetailTimer);
    setQuietDetailVisible(true);
  };

  canvas.addEventListener("mouseenter", () => {
    document.body.classList.add("quiet-hover");
    scheduleDetail();
  });
  canvas.addEventListener("mousemove", () => {
    document.body.classList.add("quiet-hover");
    clearDetail();
    scheduleDetail();
  });
  canvas.addEventListener("mouseleave", () => {
    document.body.classList.remove("quiet-hover");
    closeWheel();
    clearDetail();
  });

  prompt.addEventListener("click", (e) => {
    e.stopPropagation();
    if (quietWheelOpen) closeWheel();
    else openWheel();
  });

  wheel.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "entangle-demo") {
      if (entangleDemo) stopEntangleDemo();
      else startEntangleDemo();
      return;
    }
    if (["undecided", "flip", "measure", "reset"].includes(action)) {
      applyQuietAction(action);
    }
    if (action === "detail") setQuietCircuitVisible(!quietShowCircuit);
    closeWheel();
  });

  wheel.querySelectorAll(".quiet-tab").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const tab = btn.dataset.tab || "core";
      wheel.dataset.tab = tab;
      wheel.querySelectorAll(".quiet-tab").forEach((other) => {
        const on = other.dataset.tab === tab;
        other.classList.toggle("is-active", on);
        other.setAttribute("aria-selected", on ? "true" : "false");
      });
    });
  });

  hideCircuitBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    setQuietCircuitVisible(false);
  });

  wheel.querySelectorAll(".quiet-action").forEach((btn) => {
    const showTip = () => {
      if (!tooltip) return;
      const html = btn.dataset.desc || "";
      tooltip.innerHTML = html;
      tooltip.classList.toggle("on", !!html);
      if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
        const ready = MathJax.startup?.promise || Promise.resolve();
        ready.then(() => {
          MathJax.typesetClear?.([tooltip]);
          return MathJax.typesetPromise([tooltip]);
        });
      }
    };
    const hideTip = () => {
      if (!tooltip) return;
      tooltip.classList.remove("on");
      tooltip.innerHTML = "";
    };
    btn.addEventListener("mouseenter", showTip);
    btn.addEventListener("focus", showTip);
    btn.addEventListener("mouseleave", hideTip);
    btn.addEventListener("blur", hideTip);
  });

  document.addEventListener("mouseover", (e) => {
    if (!document.body.classList.contains("quiet-show-circuit")) return;
    const target = e.target.closest(".palette-gate, .cgate");
    if (!target || !gateTip) return;
    const text = target.dataset.desc || target.dataset.tip || "";
    if (!text) return;
    gateTip.textContent = text;
    gateTip.classList.add("on");
  });
  document.addEventListener("mouseout", (e) => {
    if (!gateTip) return;
    if (e.target.closest(".palette-gate, .cgate")) {
      gateTip.classList.remove("on");
      gateTip.textContent = "";
    }
  });

  secondary?.addEventListener("click", (e) => {
    if (!secondary.classList.contains("on")) return;
    e.stopPropagation();
    secondary.classList.toggle("reveal");
    updateBeginnerPanels();
  });

  document.addEventListener("click", (e) => {
    if (!quietWheelOpen) return;
    if (entangleDemo) return;
    if (wheel.contains(e.target) || prompt.contains(e.target)) return;
    closeWheel();
  });

  setQuietDetailVisible(true);
  setQuietCircuitVisible(false);
}

// -------------------- Entanglement + correlations --------------------
function getCurrentRho4() {
  return measurementOverrideRho || latestGlobalRho;
}

function measureProbabilities(rho4, qubit) {
  const proj0 = qubit === 0 ? tensor2(P0, ID2) : tensor2(ID2, P0);
  const proj1 = qubit === 0 ? tensor2(P1, ID2) : tensor2(ID2, P1);
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      p0 += cmul(proj0[i][j], rho4[j][i]).re;
      p1 += cmul(proj1[i][j], rho4[j][i]).re;
    }
  }
  return { p0: Math.max(0, p0), p1: Math.max(0, p1) };
}

function collapseOnOutcome(rho4, qubit, outcome) {
  const probs = measureProbabilities(rho4, qubit);
  const total = Math.max(0, probs.p0 + probs.p1);
  const prob = outcome === 0 ? probs.p0 : probs.p1;
  const proj = outcome === 0 ? P0 : P1;
  const P = qubit === 0 ? tensor2(proj, ID2) : tensor2(ID2, proj);
  const Pdag = mat4Adjoint(P);
  let collapsed = mat4Mul(mat4Mul(P, rho4), Pdag);
  if (prob > 0) collapsed = collapsed.map((row) => row.map((z) => cScale(z, 1 / prob)));
  return { rho: collapsed, prob, outcome };
}

function stateFromRho(rho) {
  const pure = rhoToPureState(rho);
  if (pure) return pure;
  return {
    rho: rho.map((row) => row.map((z) => ({ re: z.re, im: z.im }))),
  };
}

function cloneState(state) {
  if (!state) return null;
  if (state.rho) {
    return {
      rho: state.rho.map((row) => row.map((z) => ({ re: z.re, im: z.im }))),
    };
  }
  return {
    alpha: c(state.alpha.re, state.alpha.im),
    beta: c(state.beta.re, state.beta.im),
  };
}

function stateToPure(state) {
  if (!state) return normalizeState({ alpha: c(1, 0), beta: c(0, 0) });
  if (state.rho) {
    const pure = rhoToPureState(state.rho);
    if (pure) return pure;
    const { p0, p1 } = probsFromRho(state.rho);
    return normalizeState({
      alpha: c(Math.sqrt(Math.max(0, p0)), 0),
      beta: c(Math.sqrt(Math.max(0, p1)), 0),
    });
  }
  return normalizeState({
    alpha: c(state.alpha.re, state.alpha.im),
    beta: c(state.beta.re, state.beta.im),
  });
}

function findPrimaryPair(stepIdx) {
  const maxStep = Math.max(0, Math.min(stepCount - 1, stepIdx ?? stepCount - 1));
  for (let s = 0; s <= maxStep; s++) {
    for (const op of multiQ[s] || []) {
      if (op.type === "CX" && op.control < qubitCount && op.target < qubitCount) {
        return [op.control, op.target];
      }
    }
  }
  const fallbackA = 0;
  const fallbackB = Math.min(1, Math.max(0, qubitCount - 1));
  return [fallbackA, fallbackB];
}

function updateCorrelationsPanel() {
  const rho = getCurrentRho4();
  const panel = $("correlationsPanel");
  if (!panel) return;
  if (!rho) {
    panel.style.opacity = "0";
    return;
  }

  const vals = {
    XX: expectationPauliPair(rho, PAULI_X, PAULI_X),
    YY: expectationPauliPair(rho, PAULI_Y, PAULI_Y),
    ZZ: expectationPauliPair(rho, PAULI_Z, PAULI_Z),
  };

  ["XX", "YY", "ZZ"].forEach((k) => {
    const bar = $(`corr${k}`);
    const lab = $(`corr${k}Val`);
    const v = Math.max(-1, Math.min(1, vals[k]));
    if (bar) {
      const width = Math.abs(v) * 100;
      bar.style.width = `${width}%`;
      bar.style.left = v >= 0 ? "50%" : `${50 - width}%`;
    }
    if (lab) lab.textContent = v.toFixed(2);
  });
}

function updateEntanglementIndicators(pairMap = entangledPairs) {
  const entangled = !!pairMap && pairMap.size > 0;
  document.body.classList.toggle("entangled", entangled);
  document.body.classList.toggle("corr-active", entangled);
  // Drive the Three.js entanglement layer.
  if (entangled) {
    if (entanglementLevel <= 0) {
      triggerEntanglementBurst();
      entanglementLevel = 1;
    } else if (!entanglementVisuals?.isAnimating?.()) {
      setEntanglementLevel(1);
    }
  } else if (entanglementLevel > 0) {
    clearEntanglement();
  }
  widgets.forEach(({ tileEl, entTagEl }, idx) => {
    const ent = entangled && isPairMember(idx, pairMap) && measuredVisualOutcomes[idx] == null;
    tileEl?.classList.toggle("entangled", ent);
    entTagEl?.classList.toggle("on", ent);
  });
}

function describeBellState(rho4, eps = 1e-3) {
  // Checks overlap with Bell projectors.
  const proj = {
    phiPlus: [
      [c(0.5,0), c(0,0), c(0,0), c(0.5,0)],
      [c(0,0), c(0,0), c(0,0), c(0,0)],
      [c(0,0), c(0,0), c(0,0), c(0,0)],
      [c(0.5,0), c(0,0), c(0,0), c(0.5,0)],
    ],
    phiMinus: [
      [c(0.5,0), c(0,0), c(0,0), c(-0.5,0)],
      [c(0,0), c(0,0), c(0,0), c(0,0)],
      [c(0,0), c(0,0), c(0,0), c(0,0)],
      [c(-0.5,0), c(0,0), c(0,0), c(0.5,0)],
    ],
    psiPlus: [
      [c(0,0), c(0,0), c(0,0), c(0,0)],
      [c(0,0), c(0.5,0), c(0.5,0), c(0,0)],
      [c(0,0), c(0.5,0), c(0.5,0), c(0,0)],
      [c(0,0), c(0,0), c(0,0), c(0,0)],
    ],
    psiMinus: [
      [c(0,0), c(0,0), c(0,0), c(0,0)],
      [c(0,0), c(0.5,0), c(-0.5,0), c(0,0)],
      [c(0,0), c(-0.5,0), c(0.5,0), c(0,0)],
      [c(0,0), c(0,0), c(0,0), c(0,0)],
    ],
  };
  const overlap = (P) => {
    let s = 0;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += cmul(P[i][j], rho4[j][i]).re;
    return s;
  };
  const scores = {
    "Bell Φ+": overlap(proj.phiPlus),
    "Bell Φ-": overlap(proj.phiMinus),
    "Bell Ψ+": overlap(proj.psiPlus),
    "Bell Ψ-": overlap(proj.psiMinus),
  };
  const best = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a), ["", 0]);
  return best[1] > 1 - eps ? best[0] : null;
}

function updateGlobalStateBadges(pairMap = entangledPairs) {
  const bells = new Map();
  pairMap?.forEach((entry, key) => {
    if (isEntangledFromRho(entry.rho)) bells.set(key, describeBellState(entry.rho));
  });
  const entanglementBadge = $("entanglementBadge");
  if (entanglementBadge) {
    const primaryKey = makePairKey(entangledPairIndices[0], entangledPairIndices[1]);
    const bell = bells.get(primaryKey) || Array.from(bells.values()).find((label) => label) || null;
    entanglementBadge.innerHTML = bell ? `\\(${bellToLatex(bell)}\\)` : `\\(\\text{${ENTANGLEMENT_LABEL_DEFAULT}}\\)`;
    typesetNode(entanglementBadge);
  }
  const pairLabels = new Map();
  bells.forEach((label, key) => {
    if (label) pairLabels.set(key, bellToGlyph(label));
  });
  entanglementVisuals?.setPairLabels?.(pairLabels);
  const pairColors = entanglementVisuals?.getPairColorStyles?.() || new Map();
  widgets.forEach((w, idx) => {
    const badge = w?.stateChipEl;
    const entTag = w?.entTagEl;
    const bellTag = w?.bellTagEl;
    if (!badge) return;
    if (measuredVisualOutcomes[idx] != null) {
      // already handled by measurement visual
      badge.classList.remove("entangled");
      if (entTag) entTag.textContent = "Entangled";
      if (bellTag) bellTag.classList.remove("on");
      return;
    }
    const entry = entangledPairForQubit(idx, pairMap);
    if (entry && isEntangledFromRho(entry.pair.rho)) {
      const bell = bells.get(entry.key);
      const bellLatex = bell ? bellToLatex(bell) : null;
      badge.innerHTML = bellLatex ? `\\(${bellLatex}\\)` : `\\(\\text{Entangled state}\\)`;
      badge.classList.add("on");
      badge.classList.add("entangled");
      typesetNode(badge);
      if (entTag) entTag.textContent = "Entangled";
      if (bellTag) {
        const latex = bell ? bellToLatex(bell) : "";
        const color = pairColors.get(entry.key);
        bellTag.innerHTML = latex ? `\\(${latex}\\)` : "";
        bellTag.classList.toggle("on", !!latex);
        bellTag.style.backgroundColor = color || "";
        bellTag.style.color = color ? textColorForBg(color) : "";
        if (latex) typesetNode(bellTag);
      }
    } else {
      badge.classList.remove("entangled");
      if (entTag) entTag.textContent = "Entangled";
      if (bellTag) {
        bellTag.classList.remove("on");
        bellTag.style.backgroundColor = "";
        bellTag.style.color = "";
      }
    }
  });
}

function reducedStateDirac(rho) {
  const { p0, p1 } = probsFromRho(rho);
  const pseudoAlpha = { re: Math.sqrt(p0), im: 0 };
  const pseudoBeta = { re: Math.sqrt(p1), im: 0 };
  return formatStateKet(pseudoAlpha, pseudoBeta, 1e-6);
}

function formatDiracPlain(rho, qIdx = 0, eps = 1e-6) {
  const pure = rhoToPureState(rho, eps);
  const fmt = (z) => {
    const re = Math.abs(z.re) < eps ? 0 : z.re;
    const im = Math.abs(z.im) < eps ? 0 : z.im;
    if (im === 0) return re.toFixed(2);
    const sign = im >= 0 ? "+" : "-";
    return `${re.toFixed(2)} ${sign} ${Math.abs(im).toFixed(2)}i`;
  };
  if (pure) {
    return `|ψ_${qIdx}⟩ = ${fmt(pure.alpha)}|0⟩ + ${fmt(pure.beta)}|1⟩`;
  }
  // fallback: magnitudes from diagonal
  const { p0, p1 } = probsFromRho(rho);
  const a = Math.sqrt(Math.max(0, p0)).toFixed(2);
  const b = Math.sqrt(Math.max(0, p1)).toFixed(2);
  return `|ψ_${qIdx}⟩ = ${a}|0⟩ + ${b}|1⟩`;
}

function formatDiracLatex(rho, qIdx = 0, eps = 1e-6) {
  const pure = rhoToPureState(rho, eps);
  if (pure) {
    const a = formatExactComplex(pure.alpha);
    const b = formatExactComplex(pure.beta);
    return `|\\psi_{${qIdx}}\\rangle = ${a}\\,|0\\rangle + ${b}\\,|1\\rangle`;
  }
  const { p0, p1 } = probsFromRho(rho);
  const a = formatExactComplex({ re: Math.sqrt(Math.max(0, p0)), im: 0 });
  const b = formatExactComplex({ re: Math.sqrt(Math.max(0, p1)), im: 0 });
  return `|\\psi_{${qIdx}}\\rangle = ${a}\\,|0\\rangle + ${b}\\,|1\\rangle`;
}

function isSuperposed(rho, eps = 1e-3) {
  const { p0, p1 } = probsFromRho(rho);
  return p0 > eps && p1 > eps && p0 < 1 - eps && p1 < 1 - eps;
}

function bellToLatex(label) {
  if (label.includes("Φ+") || label.includes("Phi") || label.includes("phi")) return "|\\Phi^{+}\\rangle";
  if (label.includes("Φ-") || label.includes("Phi-") || label.includes("phi-")) return "|\\Phi^{-}\\rangle";
  if (label.includes("Ψ+") || label.includes("Psi") || label.includes("psi")) return "|\\Psi^{+}\\rangle";
  if (label.includes("Ψ-") || label.includes("Psi-") || label.includes("psi-")) return "|\\Psi^{-}\\rangle";
  return label;
}

function bellToGlyph(label) {
  if (label.includes("Φ+") || label.includes("Phi") || label.includes("phi")) return "Φ+";
  if (label.includes("Φ-") || label.includes("Phi-") || label.includes("phi-")) return "Φ-";
  if (label.includes("Ψ+") || label.includes("Psi") || label.includes("psi")) return "Ψ+";
  if (label.includes("Ψ-") || label.includes("Psi-") || label.includes("psi-")) return "Ψ-";
  return "ENT";
}

function bellToTagText(label) {
  if (label.includes("Φ+") || label.includes("Phi") || label.includes("phi")) return "|Φ+⟩";
  if (label.includes("Φ-") || label.includes("Phi-") || label.includes("phi-")) return "|Φ-⟩";
  if (label.includes("Ψ+") || label.includes("Psi") || label.includes("psi")) return "|Ψ+⟩";
  if (label.includes("Ψ-") || label.includes("Psi-") || label.includes("psi-")) return "|Ψ-⟩";
  return "Entangled";
}

function textColorForBg(color) {
  const rgb = color.match(/\d+/g)?.map((v) => Number(v));
  if (!rgb || rgb.length < 3) return "#0b0b0b";
  const [r, g, b] = rgb;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.6 ? "#0b0b0b" : "#fdfdfd";
}

function updateStateChip(q, state, pairMap = entangledPairs) {
  const entry = widgets[q];
  if (!entry) return;
  const chip = entry.stateChipEl;
  if (!chip) return;

  const rho = densityFromState(state);
  const diracLatex = formatDiracLatex(rho, q);

  const entEntry = entangledPairForQubit(q, pairMap);
  const entangled = !!entEntry && isEntangledFromRho(entEntry.pair.rho) && measuredVisualOutcomes[q] == null;
  const bell = entangled ? describeBellState(entEntry.pair.rho) : null;
  const superposed = isSuperposed(rho);

  const suffix = entangled && bell ? `\\quad(${bellToLatex(bell)})` : "";
  chip.innerHTML = `\\(${diracLatex}${suffix}\\)`;
  chip.classList.add("on");
  chip.classList.toggle("entangled", superposed || entangled);
  typesetNode(chip);
}

function showInspectPopover() {
  const pop = $("inspectPopover");
  if (!pop) return;
  const rho = getCurrentRho4();
  if (!rho) return;
  const grid = $("inspectGrid");
  if (grid) {
    grid.innerHTML = "";
    const maxVal = Math.max(...rho.flat().map((z) => Math.abs(z.re)), 1);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const z = rho[i][j];
        const norm = Math.min(1, Math.abs(z.re) / maxVal);
        const hue = z.re >= 0 ? 190 : 10;
        const cell = document.createElement("div");
        cell.className = "inspect-cell";
        cell.style.background = `hsla(${hue},70%,70%,${0.2 + 0.6 * norm})`;
        cell.textContent = z.re.toFixed(2);
        grid.appendChild(cell);
      }
    }
  }
  pop.classList.add("on");
}
function closeInspectPopover() { $("inspectPopover")?.classList.remove("on"); }

function computeBlochTracesFromRho(rho4, pair = entangledPairIndices) {
  const traces = Array.from({ length: qubitCount }, () => []);
  const pairA = pair?.[0] ?? 0;
  const pairB = pair?.[1] ?? Math.min(1, Math.max(0, qubitCount - 1));
  const rhoA = partialTraceQubit(rho4, 1);
  const rhoB = partialTraceQubit(rho4, 0);
  const vA = blochFromRho(rhoA);
  const vB = blochFromRho(rhoB);
  traces[pairA]?.push(vA);
  traces[pairB]?.push(vB);
  const states = Array.from({ length: qubitCount }, (_, idx) => {
    if (idx === pairA) return stateFromRho(rhoA);
    if (idx === pairB) return stateFromRho(rhoB);
    return stateFromRho(densityFromState(getInitialState(idx)));
  });
  widgets.forEach((w, i) => {
    const rho = i === pairA ? rhoA : (i === pairB ? rhoB : null);
    if (rho) updatePurityChip(w?.purityEl, trace2MatSquared(rho));
  });
  return { states, traces };
}

function measureQubit(idx) {
  const hasVector = Array.isArray(latestStateVector) && latestStateVector.length === 1 << qubitCount;
  if (hasVector) {
    const probs = measureProbabilitiesVector(latestStateVector, idx, qubitCount);
    const total = Math.max(0, probs.p0 + probs.p1) || 1;
    const r = measurementRandom(activeStep, idx, manualMeasureCounter++);
    const outcome = r < probs.p0 / total ? 0 : 1;
    latestStateVector = collapseStateVectorOnMeasurement(latestStateVector, idx, outcome, qubitCount);

    const pairMap = new Map();
    const entMap = new Map();
    for (let a = 0; a < qubitCount; a++) {
      for (let b = a + 1; b < qubitCount; b++) {
        const rho = pairRhoFromStateVector(latestStateVector, a, b, qubitCount);
        const key = makePairKey(a, b);
        const entry = { qubits: [a, b], rho };
        pairMap.set(key, entry);
        if (isEntangledFromRho(rho)) entMap.set(key, entry);
      }
    }
    latestPairStates = pairMap;
    entangledPairs = entMap;
    const primaryEntry = entMap.values().next().value || pairMap.values().next().value || null;
    entangledPairIndices = primaryEntry?.qubits ?? entangledPairIndices;
    latestGlobalRho = entangledPairIndices ? pairRhoFromStateVector(latestStateVector, entangledPairIndices[0], entangledPairIndices[1], qubitCount) : null;
    measurementOverrideRho = latestGlobalRho;
  entanglementVisuals?.setPairs?.(Array.from(entangledPairs.values()).map((p) => p.qubits));
  noiseOverlay?.setEntangledPairs?.(Array.from(entangledPairs.values()).map((p) => p.qubits));

    for (let q = 0; q < qubitCount; q++) {
      const rho = reducedRhoFromStateVector(latestStateVector, q, qubitCount);
      const state = stateFromRho(rho);
      const trace = [blochFromRho(rho)];
      const w = widgets[q]?.widget;
      widgets[q]?.purityEl && updatePurityChip(widgets[q].purityEl, trace2MatSquared(rho));
      if (w) w.setStateAndTrace(state, trace, { hideArrow: false });
      updateStateChip(q, state, entangledPairs);
    }

    applyMeasurementVisual(idx, outcome, { cue: true, snap: true });
    noiseOverlay?.triggerManualMeasurement?.(idx);
    updateEntanglementIndicators(entangledPairs);
    updateCorrelationsPanel();
    updateProbPopover();
    updateBackendMath();
    updateGlobalStateBadges(entangledPairs);
    updateBeginnerPanels();
    document.body.classList.add("measurement-flash");
    setTimeout(() => document.body.classList.remove("measurement-flash"), 280);
    showToast(`Measured q${idx} = ${outcome}`);
    return;
  }

  // Fallback: pair-only measurement if global state vector is unavailable.
  const entEntry = entangledPairForQubit(idx, entangledPairs);
  if (!entEntry) return;
  const rho = entEntry.pair.rho;
  if (!rho) return;
  const localIdx = entEntry.pair.qubits[0] === idx ? 0 : 1;
  const probs = measureProbabilities(rho, localIdx);
  const total = Math.max(0, probs.p0 + probs.p1) || 1;
  const r = measurementRandom(activeStep, idx, manualMeasureCounter++);
  const outcome = r < probs.p0 / total ? 0 : 1;

  const { rho: collapsed } = collapseOnOutcome(rho, localIdx, outcome);

  measurementOverrideRho = collapsed;
  latestGlobalRho = collapsed;
  const key = makePairKey(entEntry.pair.qubits[0], entEntry.pair.qubits[1]);
  const updatedPair = { qubits: [...entEntry.pair.qubits], rho: collapsed };
  latestPairStates = new Map([[key, updatedPair]]);
  entangledPairs = isEntangledFromRho(collapsed) ? new Map([[key, updatedPair]]) : new Map();
  entangledPairIndices = updatedPair.qubits;
  entanglementVisuals?.setPairs?.(Array.from(entangledPairs.values()).map((p) => p.qubits));
  const { states, traces } = computeBlochTracesFromRho(collapsed, updatedPair.qubits);
  for (let q = 0; q < qubitCount; q++) {
    const w = widgets[q]?.widget;
    if (!w) continue;
    w.setStateAndTrace(states[q], traces[q], { hideArrow: false });
    updateStateChip(q, states[q], entangledPairs);
  }
  applyMeasurementVisual(idx, outcome, { cue: true, snap: true });
  noiseOverlay?.triggerManualMeasurement?.(idx);
  updateEntanglementIndicators(entangledPairs);
  updateCorrelationsPanel();
  updateProbPopover();
  updateBackendMath();
  updateGlobalStateBadges(entangledPairs);
  updateBeginnerPanels();
  document.body.classList.add("measurement-flash");
  setTimeout(() => document.body.classList.remove("measurement-flash"), 280);
  showToast(`Measured q${idx} = ${outcome}`);
}

function showToast(msg) {
  const t = $("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("on");
  setTimeout(() => t.classList.remove("on"), 1500);
}

// -------------------- Backend MathJax view --------------------
function computeStateAtStep(stepIdx, q) {
  const states = computeStatesUpTo(stepIdx);
  return states[q];
}

function computeStatesUpTo(stepIdx) {
  const { states } = computeBlochTraces(stepIdx);
  return states;
}

function updateBackendMath() {
  if (!uiState.backendOpen) return;

  const simplify = $("toggleSimplify")?.checked ?? true;
  const tol = simplify ? 1e-4 : 1e-7;
  const showMatrix = $("toggleShowMatrix")?.checked ?? false;
  document.body.classList.toggle("show-matrix", !!showMatrix);

  const g = (activeStep >= 0) ? singleQ[selectedQubit]?.[activeStep] : null;
  const isMeasure = g === "M";

  const prevState = computeStateAtStep(activeStep - 1, selectedQubit);
  const curState  = computeStateAtStep(activeStep, selectedQubit);

  const prevRho = densityFromState(prevState);
  const curRho = densityFromState(curState);
  const prevP0 = Math.max(0, prevRho[0][0].re);
  const prevP1 = Math.max(0, prevRho[1][1].re);
  const curP0 = Math.max(0, curRho[0][0].re);
  const curP1 = Math.max(0, curRho[1][1].re);

  const prevA = formatExactComplex({ re: Math.sqrt(prevP0), im: 0 }, tol);
  const prevB = formatExactComplex({ re: Math.sqrt(prevP1), im: 0 }, tol);
  const curA  = formatExactComplex({ re: Math.sqrt(curP0), im: 0 }, tol);
  const curB  = formatExactComplex({ re: Math.sqrt(curP1), im: 0 }, tol);

  const gateStr = g ? `\\text{Gate: } ${isMeasure ? "\\text{Measure}" : g}` : `\\text{Gate: } I`;
  const updateStr = g
    ? (isMeasure ? `\\text{Measurement (visual only; state unchanged in this view)}` : `|\\psi_{t}\\rangle = ${g}\\,|\\psi_{t-1}\\rangle`)
    : `|\\psi\\rangle = |0\\rangle`;

  const stateLine = g
    ? `\\[
|\\psi_{t-1}\\rangle =
\\begin{pmatrix}
${prevA} \\\\
${prevB}
\\end{pmatrix}
\\quad\\Rightarrow\\quad
|\\psi_{t}\\rangle =
\\begin{pmatrix}
${curA} \\\\
${curB}
\\end{pmatrix}
\\]`
    : `\\[
|\\psi\\rangle =
\\begin{pmatrix}
1 \\\\
0
\\end{pmatrix}
\\]`;

  const blochStr = `\\[\\vec{r}' = R(U)\\,\\vec{r}\\]`;
  const notesStr = `\\[\\text{Showing single-qubit reduced state when entangled.}\\]`;

  const elGate = $("currentGateLatex");
  const elUpd = $("stateUpdateLatex");
  const elBloch = $("blochUpdateLatex");
  const elNotes = $("notesLatex");
  const elMat = $("optionalMatrixLatex");

  if (elGate) elGate.innerHTML = `\\[${gateStr}\\]`;
  if (elUpd) elUpd.innerHTML = `\\[${updateStr}\\]${stateLine}`;
  if (elBloch) elBloch.innerHTML = blochStr;
  if (elNotes) elNotes.innerHTML = notesStr;
  if (elMat) {
    const gateLatex = gateMatrixLatex(g || "I");
    const rhoLatex = matrixLatex(`\\rho_{${selectedQubit + 1}}`, curRho);
    elMat.innerHTML = (showMatrix && !isMeasure) ? gateLatex + rhoLatex : "";
  }

  if (typeof MathJax !== "undefined") {
    const nodes = [elGate, elUpd, elBloch, elNotes, elMat].filter(Boolean);
    MathJax.typesetPromise(nodes);
  }
}

async function copyBackendLatex() {
  const parts = [
    $("currentGateLatex")?.textContent ?? "",
    $("stateUpdateLatex")?.textContent ?? "",
    $("blochUpdateLatex")?.textContent ?? "",
    $("notesLatex")?.textContent ?? "",
    $("optionalMatrixLatex")?.textContent ?? "",
  ].filter(Boolean).join("\n\n");
  try { await navigator.clipboard.writeText(parts); } catch {}
}

// -------------------- Keyboard --------------------
function shouldIgnoreKey(e) {
  const el = e.target;
  if (!el) return false;
  const tag = el.tagName ? el.tagName.toLowerCase() : "";
  if (tag === "input" || tag === "textarea" || tag === "select") return true;
  if (el.isContentEditable) return true;
  return false;
}

function closeAllOverlays() {
  closeMenu();
  closeProbPopover();
  closeBackendDrawer();
}

function onGlobalKeydown(e) {
  if (shouldIgnoreKey(e)) return;

  if (e.key === "ArrowLeft") { e.preventDefault(); stepBack(); }
  else if (e.key === "ArrowRight") { e.preventDefault(); stepForward(); }
  else if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); togglePlayback(); }
  else if (e.key === "r" || e.key === "R") { e.preventDefault(); resetStepCursor(); }
  else if (e.key === "m" || e.key === "M") { e.preventDefault(); toggleBackendDrawer(); }
  else if (e.key === "Escape") {
    e.preventDefault();
    closeAllOverlays();
    pendingCX = null;
    updateSelectionState();
  }
}

// -------------------- Boot (UI wiring only) --------------------
window.addEventListener("load", () => {
  themeMode = QUIET_MODE ? "light" : loadThemePreference();
  applyTheme(themeMode);
  if (QUIET_MODE) document.body.classList.add("quiet-mode");
  applyStoredSplit();
  beginnerMode = QUIET_MODE ? true : loadBeginnerPreference();
  beginnerShowTimeline = QUIET_MODE ? false : loadBeginnerToggleState(BEGINNER_TIMELINE_KEY, false);
  beginnerShowBloch = QUIET_MODE ? false : loadBeginnerToggleState(BEGINNER_BLOCH_KEY, false);
  measurementSeed = loadMeasurementSeed();
  applyBeginnerMode(beginnerMode);
  setBeginnerTimelineVisible(beginnerShowTimeline);
  setBeginnerBlochVisible(beginnerShowBloch);
  initQuietModeUI();

  initCircuitModel();
  if (!beginnerMode) seedReferenceCircuit();
  rebuildBlochGrid();
  renderCircuit();
  updateActiveStepUI();
  rebuildToStep(activeStep);

  initPrimarySplitter();
  initBlochTileSizer();
  initNoiseSlider();
  initSettingsPanelDrag();

  // Gate library: always visible + render once
  renderGatePalette();
  updateGateHoverMath(null);
  initGateLibraryDrag();
  document.addEventListener("dragover", updateDragRoleBadgePosition);
  document.addEventListener("drag", updateDragRoleBadgePosition);

  // Keep qubit UI in sync at boot
  syncQubitCountUI();

  // Topbar wiring
  $("prevStep")?.addEventListener("click", () => stepBack());
  $("nextStep")?.addEventListener("click", () => stepForward());
  $("playPause")?.addEventListener("click", () => togglePlayback());
  $("resetState")?.addEventListener("click", () => resetStepCursor());
  $("themeToggle")?.addEventListener("click", () => toggleThemeMode());
  $("beginnerToggle")?.addEventListener("click", () => toggleBeginnerMode());

  // Qubit controls (topbar)
  $("addQubitTop")?.addEventListener("click", () => addQubit());
  $("removeQubitTop")?.addEventListener("click", () => removeQubit());

  // Circuit toolstrip qubit buttons (kept)
  $("addQubit")?.addEventListener("click", () => addQubit());
  $("removeQubit")?.addEventListener("click", () => removeQubit());

  // Bloch overlay wiring
  $("toggleTrajectory")?.addEventListener("change", (e) => setTrajectoryVisible(!!e.target.checked));
  $("openProbPopover")?.addEventListener("click", (e) => { e.stopPropagation(); toggleProbPopover(); });
  $("openBackendDrawer")?.addEventListener("click", (e) => { e.stopPropagation(); toggleBackendDrawer(); });
  $("toggleTrajectoryBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const cb = $("toggleTrajectory");
    const next = !(cb?.checked ?? true);
    if (cb) cb.checked = next;
    setTrajectoryVisible(next);
  });
  $("openProbBtn")?.addEventListener("click", (e) => { e.stopPropagation(); toggleProbPopover(); });
  $("openMathBtn")?.addEventListener("click", (e) => { e.stopPropagation(); openBackendDrawer(); });
  $("toggleMeasurementAnim")?.addEventListener("change", (e) => {
    measurementAnimEnabled = !!e.target.checked;
    if (!measurementAnimEnabled) document.body.classList.remove("coin-anim-visible");
  });

  // deleteSelection: conservative
  $("deleteSelection")?.addEventListener("click", () => {
    pendingCX = null;
    updateSelectionState();
  });

  // Backend drawer wiring
  $("closeBackendDrawer")?.addEventListener("click", () => closeBackendDrawer());
  $("toggleSimplify")?.addEventListener("change", () => updateBackendMath());
  $("toggleShowMatrix")?.addEventListener("change", () => updateBackendMath());
  $("copyLatex")?.addEventListener("click", () => copyBackendLatex());

  // Drawer resizing: drag the math panel (or handle) to resize/close
  {
    const handle = $("drawerHandle");
    const panel = $("unitaryMath");
    const drawer = $("backendDrawer");
    const parseLen = (val, fallbackPx) => {
      if (!val) return fallbackPx;
      const trimmed = String(val).trim();
      if (trimmed.endsWith("vh")) {
        const n = parseFloat(trimmed);
        return Number.isFinite(n) ? (window.innerHeight * n) / 100 : fallbackPx;
      }
      const n = parseFloat(trimmed);
      return Number.isFinite(n) ? n : fallbackPx;
    };
    const getBounds = () => {
      const root = getComputedStyle(document.documentElement);
      const minH = parseLen(root.getPropertyValue("--drawerMinH"), 160);
      const maxH = parseLen(root.getPropertyValue("--drawerMaxH"), window.innerHeight * 0.95);
      return { minH, maxH };
    };
    const getCurrentHeight = () => {
      if (drawer) return drawer.getBoundingClientRect().height;
      const root = getComputedStyle(document.documentElement);
      return parseLen(root.getPropertyValue("--drawerH"), window.innerHeight * 0.32);
    };
    const attachResize = (el) => {
      if (!el || !drawer) return;
      let startY = null;
      let startH = null;
      el.addEventListener("pointerdown", (ev) => {
        if (!uiState.backendOpen || ev.button !== 0) return;
        startY = ev.clientY;
        startH = getCurrentHeight();
        el.setPointerCapture?.(ev.pointerId);
        ev.preventDefault();
      });
      el.addEventListener("pointermove", (ev) => {
        if (startY == null || startH == null) return;
        const dy = ev.clientY - startY;
        if (dy > 140) {
          startY = null;
          startH = null;
          closeBackendDrawer();
          return;
        }
        const { minH, maxH } = getBounds();
        const nextH = Math.max(minH, Math.min(maxH, startH - dy));
        drawer.style.height = `${nextH}px`;
      });
      const resetDrag = () => { startY = null; startH = null; };
      el.addEventListener("pointerup", resetDrag);
      el.addEventListener("pointercancel", resetDrag);
    };
    attachResize(handle);
    attachResize(panel);
  }

  // More menu
  $("moreMenuBtn")?.addEventListener("click", (e) => { e.stopPropagation(); toggleMenu(); });

  $("menuClearCircuit")?.addEventListener("click", () => {
    closeMenu();
    const ok = window.confirm("Clear the circuit? This cannot be undone.");
    if (!ok) return;
    clearCircuit();
  });

  [
    ["menuBellPhiPlus", "phiPlus"],
    ["menuBellPhiMinus", "phiMinus"],
    ["menuBellPsiPlus", "psiPlus"],
    ["menuBellPsiMinus", "psiMinus"],
  ].forEach(([id, kind]) => {
    $(id)?.addEventListener("click", () => {
      closeMenu();
      prepareBellState(kind);
    });
  });

  ["menuExportJson","menuExportPng","menuTheme","menuShortcuts","menuSimulation"].forEach((id) => {
    $(id)?.addEventListener("click", () => closeMenu());
  });
  $("menuTheme")?.addEventListener("click", () => toggleThemeMode());

  $("inspectRho")?.addEventListener("click", (e) => { e.stopPropagation(); showInspectPopover(); });
  $("closeInspect")?.addEventListener("click", () => closeInspectPopover());
  $("measureQ0")?.addEventListener("click", () => measureQubit(0));
  $("measureQ1")?.addEventListener("click", () => measureQubit(1));

  // Beginner controls
  $("beginnerActionUndecided")?.addEventListener("click", () => applyBeginnerGate("H"));
  $("beginnerActionFlip")?.addEventListener("click", () => applyBeginnerGate("X"));
  $("beginnerActionTwist")?.addEventListener("click", () => applyBeginnerGate("Z"));
  $("beginnerActionMeasure")?.addEventListener("click", () => applyBeginnerGate("M"));
  $("beginnerActionReset")?.addEventListener("click", () => resetBeginnerState());
  $("beginnerShowTimeline")?.addEventListener("click", () => setBeginnerTimelineVisible(!beginnerShowTimeline));
  $("beginnerShowBloch")?.addEventListener("click", () => setBeginnerBlochVisible(!beginnerShowBloch));
  $("beginnerTimeline")?.addEventListener("input", (e) => {
    const val = Number(e.target.value);
    if (!Number.isFinite(val)) return;
    beginnerHasScrubbed = true;
    setActiveStepDirect(val - 1);
    maybeRevealBloch();
  });
  document.querySelectorAll("[data-preset]")?.forEach((btn) => {
    btn.addEventListener("click", () => applyBeginnerPreset(btn.dataset.preset));
  });
  $("beginnerSeedApply")?.addEventListener("click", () => {
    const val = $("beginnerSeed")?.value;
    setMeasurementSeed(val);
    const input = $("beginnerSeed");
    if (input) input.value = measurementSeed == null ? "" : String(measurementSeed);
  });
  $("beginnerSeedReroll")?.addEventListener("click", () => {
    rerollMeasurementSeed();
    const input = $("beginnerSeed");
    if (input) input.value = String(measurementSeed ?? "");
  });
  const seedInput = $("beginnerSeed");
  if (seedInput) {
    seedInput.value = measurementSeed == null ? "" : String(measurementSeed);
    seedInput.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      setMeasurementSeed(seedInput.value);
      seedInput.value = measurementSeed == null ? "" : String(measurementSeed);
    });
  }

  // Backdrop closes overlays (drawer/prob/menu only)
  $("overlayBackdrop")?.addEventListener("click", () => closeAllOverlays());

  // Click outside closes menu/prob (gate library stays)
  document.addEventListener("click", (e) => {
    const menu = $("moreMenuPopover");
    const menuBtn = $("moreMenuBtn");
    if (uiState.menuOpen && menu && menuBtn && !menu.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();

    const prob = $("probPopover");
    const probBtn = $("openProbPopover");
    if (uiState.probOpen && prob && probBtn && !prob.contains(e.target) && !probBtn.contains(e.target)) closeProbPopover();

    if (initStateMenuEl && !initStateMenuEl.contains(e.target)) {
      hideInitStateMenu();
    }

    const inspectPopoverEl = $("inspectPopover");
    if (!inspectPopoverEl?.contains(e.target) && e.target !== $("inspectRho")) {
      closeInspectPopover();
    }
  });

  // Global hotkeys
  window.addEventListener("keydown", onGlobalKeydown);


  // Restore collapsed state
try {
  const saved = localStorage.getItem(GATELIB_COLLAPSE_KEY);
  if (saved === "1") setGateLibCollapsed(true);
} catch {}

// Button click
$("gateLibToggle")?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleGateLibCollapsed();
});

  // Selection state boot
  updateSelectionState();

  // Trail default matches checkbox
  setTrajectoryVisible($("toggleTrajectory")?.checked ?? true);

  // Ensure Bloch renderer keeps up with circuit-grid resize
  const circuitGrid = $("circuit-grid");
  if (circuitGrid) {
    const ro = new ResizeObserver(() => requestAnimationFrame(() => {
      resizeAllWidgets();
      noiseOverlay?.resize?.();
    }));
    ro.observe(circuitGrid);
  }

  // Measurement animation boot
  const coinMount = $("coinMount");
  const coinLabel = $("coinOutcomeLabel");
  const coinOdds = $("coinOdds");
  if (coinMount) {
    coinAnimator = new CoinFlipAnimator({ mountEl: coinMount, statusEl: coinLabel, oddsEl: coinOdds });
    coinAnimator.theme = themeMode;
    coinAnimator.init();
    window.addEventListener("resize", () => coinAnimator?.resize?.());
  }

  // Hover tooltips for all interactable buttons
  initTooltips();
});
