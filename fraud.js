// Simple anti-bot & abuse detection

let actions = 0;
let startTime = Date.now();

document.addEventListener("click", () => {
  actions++;
});

setInterval(() => {
  const elapsed = (Date.now() - startTime) / 1000;

  if (actions > 40 && elapsed < 10) {
    alert("Suspicious activity detected.");
    window.location.href = "index.html";
  }

  actions = 0;
  startTime = Date.now();
}, 10000);