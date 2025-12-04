// Zodra de pagina geladen is
window.onload = function() {
  const banner = document.getElementById("cookie-banner");
  const button = document.getElementById("cookie-btn");

  // Toon de banner
  banner.style.display = "block";

  // Klik-handler
  button.addEventListener("click", function () {
    console.log("Cookie-melding weggeklikt.");
    banner.style.display = "none";
  });
};

