function updateCountdown() {
  const eventDate = new Date("May 8, 2026 18:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdownTimer").innerHTML = "Het feest is begonnen!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdownTimer").innerHTML =
    "Nog " + days + " dagen, " + hours + " uur, " + minutes + " minuten!";
}

setInterval(updateCountdown, 60000);
updateCountdown();
