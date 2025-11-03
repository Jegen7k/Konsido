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

// === När sidan är laddad ===
document.addEventListener("DOMContentLoaded", () => {
  // PLANER
  const planCards = document.querySelectorAll(".plan-card");
  planCards.forEach(card => {
    const toggle = card.querySelector(".plan-toggle");
    const details = card.querySelector(".plan-details");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const isActive = card.classList.contains("active");
      planCards.forEach(c => {
        c.classList.remove("active");
        c.querySelector(".plan-details").style.maxHeight = null;
      });
      if (!isActive) {
        card.classList.add("active");
        details.style.maxHeight = details.scrollHeight + "px";
      }
    });
  });

  // TILLÄGG
  const addonCards = document.querySelectorAll(".addon");
  addonCards.forEach(card => {
    const toggle = card.querySelector(".addon-toggle");
    const details = card.querySelector(".addon-details");
    if (!toggle) return;
    toggle.addEventListener("click", e => {
      e.stopPropagation();
      const isActive = card.classList.contains("active");
      addonCards.forEach(c => {
        c.classList.remove("active");
        c.querySelector(".addon-details").style.maxHeight = null;
      });
      if (!isActive) {
        card.classList.add("active");
        details.style.maxHeight = details.scrollHeight + "px";
      }
    });
  });
});
