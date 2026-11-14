document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.getElementById("menu-btn");
  const nav = document.getElementById("nav-menu");

  if (botonMenu && nav) {
    botonMenu.addEventListener("click", () => {
      nav.classList.toggle("abierto");
      botonMenu.textContent = nav.classList.contains("abierto") ? "✕" : "☰";
    });
  }
});
