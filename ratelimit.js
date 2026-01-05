let events = 0;
let windowStart = Date.now();

document.addEventListener("click", () => {
  events++;
});

document.addEventListener("submit", () => {
  events += 5; // enviar formularios pesa más
});

setInterval(() => {
  const elapsed = (Date.now() - windowStart) / 1000;

  if (events > 30 && elapsed < 15) {
    alert("Too many actions. Please slow down.");
    window.location.href = "index.html";
  }

  events = 0;
  windowStart = Date.now();
}, 15000);