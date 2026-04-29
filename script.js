function changeLanguage(lang) {
  const t = translations[lang];

  // Navigatie
  document.getElementById("navMenu").textContent = t.navMenu;
  document.getElementById("navEvents").textContent = t.navEvents;
  document.getElementById("navGallery").textContent = t.navGallery;
  document.getElementById("navPrices").textContent = t.navPrices;
  document.getElementById("navContact").textContent = t.navContact;

  // Sectie titels
  document.getElementById("menuTitle").textContent = t.menuTitle;
  document.getElementById("eventsTitle").textContent = t.eventsTitle;
  document.getElementById("galleryTitle").textContent = t.galleryTitle;
  document.getElementById("pricesTitle").textContent = t.pricesTitle;
  document.getElementById("contactTitle").textContent = t.contactTitle;

  // Contact sectie
  document.getElementById("contactDesc").childNodes[0].textContent = t.contactDesc + "\n";
  document.getElementById("contactOpposite").textContent = t.contactOpposite;

  // Footer
  document.getElementById("footerText").innerHTML = t.footerText;

  // Dropdown selectie updaten
  document.getElementById("languageSelect").value = lang;
}

// ✅ standaard Engels activeren bij laden
window.addEventListener("DOMContentLoaded", () => {
  changeLanguage("en"); // opent in Engels
});
