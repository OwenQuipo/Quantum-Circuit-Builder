// MathJax helper split for reuse.
function typesetNode(el) {
  if (typeof MathJax === "undefined" || !el) return;
  MathJax.typesetPromise([el]).catch(() => {});
}

export { typesetNode };
