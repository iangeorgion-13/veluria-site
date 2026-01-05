// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Block common devtools and save
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.key.toLowerCase() === "u") ||
    (e.ctrlKey && e.key.toLowerCase() === "s") ||
    (e.ctrlKey && e.key.toLowerCase() === "c")
  ) {
    e.preventDefault();
  }
});