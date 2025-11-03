// === GLOBAL SCRIPT FÖR ALLA SIDOR ===
document.addEventListener("DOMContentLoaded", () => {

  // === 1. Dynamiskt årtal i footern (alla sidor inkl. 404, About, Contact) ===
  const yearSpan = document.querySelector("[data-year]");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // === 2. Hamburgermeny ===
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // === 3. Prisplaner (Prices-sidan) ===
  const planCards = document.querySelectorAll(".plan-card");
  if (planCards.length > 0) {
    planCards.forEach(card => {
      const toggle = card.querySelector(".plan-toggle");
      const details = card.querySelector(".plan-details");
      if (!toggle || !details) return;

      toggle.addEventListener("click", () => {
        const isActive = card.classList.contains("active");
        planCards.forEach(c => {
          c.classList.remove("active");
          const d = c.querySelector(".plan-details");
          if (d) d.style.maxHeight = null;
        });
        if (!isActive) {
          card.classList.add("active");
          details.style.maxHeight = details.scrollHeight + "px";
        }
      });
    });
  }

  // === 4. Tillägg (Addons på Prices-sidan) ===
  const addonCards = document.querySelectorAll(".addon");
  if (addonCards.length > 0) {
    addonCards.forEach(card => {
      const toggle = card.querySelector(".addon-toggle");
      const details = card.querySelector(".addon-details");
      if (!toggle || !details) return;

      toggle.addEventListener("click", e => {
        e.stopPropagation();
        const isActive = card.classList.contains("active");
        addonCards.forEach(c => {
          c.classList.remove("active");
          const d = c.querySelector(".addon-details");
          if (d) d.style.maxHeight = null;
        });
        if (!isActive) {
          card.classList.add("active");
          details.style.maxHeight = details.scrollHeight + "px";
        }
      });
    });
  }

  // === 5. Kontaktformulär (Contact-sidan) ===
  const form = document.getElementById("konsidoForm");
  if (form) {
    const success = document.getElementById("alertSuccess");
    const error = document.getElementById("alertError");

    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (success) success.style.display = "none";
      if (error) error.style.display = "none";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          form.reset();
          if (success) success.style.display = "block";
        } else {
          if (error) error.style.display = "block";
        }
      } catch {
        if (error) error.style.display = "block";
      }
    });
  }

});
