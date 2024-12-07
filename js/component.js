document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeBtn = document.getElementById("close-btn");
  const navbarMenu = document.getElementById("navbar-menu");

  hamburgerBtn?.addEventListener("click", () => {
    navbarMenu.classList.add("open");
  });

  closeBtn?.addEventListener("click", () => {
    navbarMenu.classList.remove("open");
  });

  const cartIcon = document.getElementById("shopping-cart");
  const overlay = document.getElementById("cart-overlay");
  const closeOverlay = document.getElementById("close-overlay");

  cartIcon?.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  closeOverlay?.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  document
    .getElementById("checkout-btn")
    .addEventListener("click", function () {
      window.location.href = "checkout.html";
    });
});
