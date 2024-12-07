function toggleAccordion(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("payment-btn").addEventListener("click", function () {
    window.location.href = "404.html";
  });
});
