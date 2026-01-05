const translations = {
  en: {
    enter: "Enter Veluria",
    login: "Login",
    register: "Register",
    age: "I am 18+",
    creators: "For Creators",
    fans: "For Fans",
    dashboard: "Dashboard",
    content: "Content",
    earnings: "Earnings",
    logout: "Logout",
    admin: "Admin",
    users: "Users",
    reports: "Reports",
    subs: "Subscribers",
    revenue: "Revenue",
    views: "Views",
    user: "User",
    status: "Status",
    action: "Action",
    checkout_title: "Subscribe to Sofia Lux",
    checkout_price: "$15.99 / month",
    country: "Country",
    pay: "Pay Now",
    name: "Full Name",
    card: "Card Number",
    expiry: "MM / YY",
    cvc: "CVC",
    street: "Street Address",
    city: "City",
    postal: "Postal Code"
  },
  es: {
    enter: "Entrar a Veluria",
    login: "Iniciar sesión",
    register: "Registrarse",
    age: "Soy mayor de 18",
    creators: "Para Creadores",
    fans: "Para Fans",
    dashboard: "Panel",
    content: "Contenido",
    earnings: "Ganancias",
    logout: "Salir",
    admin: "Administrador",
    users: "Usuarios",
    reports: "Reportes",
    subs: "Suscriptores",
    revenue: "Ingresos",
    views: "Vistas",
    user: "Usuario",
    status: "Estado",
    action: "Acción",
    checkout_title: "Suscribirse a Sofia Lux",
    checkout_price: "$15.99 por mes",
    country: "País",
    pay: "Pagar ahora",
    name: "Nombre completo",
    card: "Número de tarjeta",
    expiry: "MM / AA",
    cvc: "CVC",
    street: "Dirección",
    city: "Ciudad",
    postal: "Código postal"
  }
};

function setLang(lang) {
  localStorage.setItem("veluria_lang", lang);
  applyLang();
}

function applyLang() {
  const lang = localStorage.getItem("veluria_lang") || "en";
  const t = translations[lang];

  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (t[key]) el.innerText = t[key];
  });

  document.querySelectorAll("[data-ph]").forEach(el => {
document.querySelectorAll("select option[data-lang]").forEach(el => {
  const key = el.getAttribute("data-lang");
  if (t[key]) el.innerText = t[key];
});
    const key = el.getAttribute("data-ph");
    if (t[key]) el.placeholder = t[key];
  });
}

applyLang();