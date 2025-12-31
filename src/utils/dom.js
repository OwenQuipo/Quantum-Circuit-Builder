// DOM helpers used across modules.
function $(id) { return document.getElementById(id); }
function setText(id, value) { const el = $(id); if (el) el.textContent = value; }

export { $, setText };
