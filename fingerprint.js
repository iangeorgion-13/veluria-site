function getFingerprint() {
  const data = [
    navigator.userAgent,
    screen.width,
    screen.height,
    navigator.language,
    new Date().getTimezoneOffset()
  ].join("|");

  // Hash simple
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    hash = ((hash << 5) - hash) + data.charCodeAt(i);
    hash |= 0;
  }

  return "fp_" + Math.abs(hash);
}

// Guardar fingerprint
const fp = getFingerprint();
localStorage.setItem("device_fingerprint", fp);

// Para debug
console.log("Device fingerprint:", fp);