function updateCountdown() {
  const eventDate = new Date("May 8, 2026 19:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Haal labels uit translations.js
  const lang = localStorage.getItem("selectedLang") || "nl";
  const t = translations[lang];

  document.getElementById("countdownTimer").innerHTML =
    `${days} ${t.countdownDays} ${hours} ${t.countdownHours} ${minutes} ${t.countdownMinutes} ${seconds} ${t.countdownSeconds}`;
}

setInterval(updateCountdown
