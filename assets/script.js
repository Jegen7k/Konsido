// === Dynamiskt årtal i footern ===
const yearSpan = document.querySelector("[data-year]");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// === Hamburgermeny ===
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
}
