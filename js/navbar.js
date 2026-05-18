// Marca el link activo según la página
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-links a").forEach(a => {
    if (a.getAttribute("href").endsWith(path)) a.classList.add("active");
  });
});
