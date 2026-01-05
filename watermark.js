const wm = document.querySelector(".watermark");
const container = document.querySelector(".video-container");

function moveWatermark() {
  if (!wm || !container) return;

  const maxX = container.offsetWidth - wm.offsetWidth;
  const maxY = container.offsetHeight - wm.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  wm.style.left = x + "px";
  wm.style.top = y + "px";
}

// Colocar al iniciar
moveWatermark();

// Reposicionar cada 45 segundos
setInterval(moveWatermark, 45000);