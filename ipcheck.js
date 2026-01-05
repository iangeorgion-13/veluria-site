// IP Geo + VPN check (client-side demo)
async function checkIP() {
  try {
    // Servicio público simple (no requiere API key)
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    // Guardamos datos básicos
    localStorage.setItem("ip_country", data.country_name || "");
    localStorage.setItem("ip_city", data.city || "");
    localStorage.setItem("ip_org", data.org || "");

    console.log("IP:", data.ip, data.country_name, data.city, data.org);

    // Heurística simple de VPN / hosting
    const org = (data.org || "").toLowerCase();
    const isVPN =
      org.includes("vpn") ||
      org.includes("hosting") ||
      org.includes("cloud") ||
      org.includes("datacenter");

    if (isVPN) {
      localStorage.setItem("ip_risk", "high");
      alert("VPN or proxy detected. Some features may be limited.");
    } else {
      localStorage.setItem("ip_risk", "low");
    }
  } catch (e) {
    console.warn("IP check failed", e);
  }
}

// Ejecutar al cargar
checkIP();