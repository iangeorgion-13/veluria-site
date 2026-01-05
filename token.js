// Genera un token simple (demo)
function generateToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Guarda token en la sesión
const token = generateToken();
sessionStorage.setItem("streamToken", token);

// Agrega el token al video (como si fuera una URL firmada)
const video = document.querySelector("video");
if (video) {
  const src = video.querySelector("source");
  if (src) {
    src.src = src.src + "?token=" + token;
    video.load();
  }
}

// Verificación simple de token
function validateToken() {
  const current = sessionStorage.getItem("streamToken");
  if (!current) {
    alert("Invalid or expired session.");
    window.location.href = "index.html";
  }
}

// Revalidar cada 10 segundos (simula expiración)
setInterval(validateToken, 10000);