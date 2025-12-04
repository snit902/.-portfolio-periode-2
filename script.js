// Cookie melding

console.log("JavaScript werkt ook in een extern bestand!");
const cookieBanner = document.getElementById("cookie-banner");

if (cookieBanner) {
  cookieBanner.addEventListener("click", function () {
    cookieBanner.classList.add("hidden");
    console.log("Cookie-melding weggeklikt.");
  });
}

// Dark-mode toggle
const darkModeBtn = document.getElementById("darkmode-btn");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled.");
  });
}



