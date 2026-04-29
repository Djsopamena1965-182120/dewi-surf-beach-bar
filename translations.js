const translations = {
  en: {
    bannerSubtitle: "Ride the Waves, Taste the Vibes",
    bannerBtn: "View Our Menu",
    navMenu: "Menu",
    navEvents: "Events",
    navGallery: "Gallery",
    navPrices: "Prices",
    navContact: "Contact",
    menuTitle: "Our Menu",
    menuDesc: "🍹 Tropical cocktails, cold Bintang beers, coconut drinks and various soft drinks • 🍔 Indonesian food • 🥗 Fresh salads",
    reserveBtn: "Reserve a Table",
    eventsTitle: "Events",
    eventsDesc: "🎶 Live music every Friday<br>🏄 Surf competitions every Sunday",
    galleryTitle: "Gallery",
    pricesTitle: "Surf Lesson Prices",
    pricePrivate: "Private",
    priceSemi: "Semi-Private",
    priceGroup: "Group",
    contactTitle: "Contact & Location",
    contactDesc: "📍 Dewi Surf & Beach Bar<br>Jl. Pantai Kuta, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361<br>📞 0852-6109-9023",
    footerText: "© 2026 Dewi Surf & Beach Bar | Ride the Waves, Taste the Vibes",
    // ✅ Countdown keys
    beachPartyTitle: "Beach Party",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    countdownStarted: "The event has started!"
  },

  id: {
    bannerSubtitle: "Nikmati Ombak, Rasakan Suasana",
    bannerBtn: "Lihat Menu Kami",
    navMenu: "Menu",
    navEvents: "Acara",
    navGallery: "Galeri",
    navPrices: "Harga",
    navContact: "Kontak",
    menuTitle: "Menu Kami",
    menuDesc: "🍹 Koktail tropis, bir Bintang dingin, minuman kelapa dan berbagai minuman ringan • 🍔 Makanan Indonesia • 🥗 Salad segar",
    reserveBtn: "Pesan Meja",
    eventsTitle: "Acara",
    eventsDesc: "🎶 Musik live setiap Jumat<br>🏄 Kompetisi selancar setiap Minggu",
    galleryTitle: "Galeri",
    pricesTitle: "Harga Pelajaran Selancar",
    pricePrivate: "Privat",
    priceSemi: "Semi-Privat",
    priceGroup: "Grup",
    contactTitle: "Kontak & Lokasi",
    contactDesc: "📍 Dewi Surf & Beach Bar<br>Jl. Pantai Kuta, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361<br>📞 0852-6109-9023",
    footerText: "© 2026 Dewi Surf & Beach Bar | Nikmati Ombak, Rasakan Suasana",
    // ✅ Countdown keys
    beachPartyTitle: "Pesta Pantai",
    countdownDays: "Hari",
    countdownHours: "Jam",
    countdownMinutes: "Menit",
    countdownSeconds: "Detik",
    countdownStarted: "Acara telah dimulai!"
  },

  nl: {
    bannerSubtitle: "Ride the Waves, Taste the Vibes",
    bannerBtn: "Bekijk ons menu",
    navMenu: "Menu",
    navEvents: "Evenementen",
    navGallery: "Galerij",
    navPrices: "Prijzen",
    navContact: "Contact",
    menuTitle: "Ons Menu",
    menuDesc: "🍹 Tropische cocktails, koude Bintang‑biertjes, kokosdrankjes en diverse frisdranken • 🍔 Indonesisch eten • 🥗 Verse salades",
    reserveBtn: "Reserveer een tafel",
    eventsTitle: "Evenementen",
    eventsDesc: "🎶 Live‑muziek elke vrijdag<br>🏄 Surfwedstrijden elke zondag",
    galleryTitle: "Galerij",
    pricesTitle: "Surf Prijzen",
    pricePrivate: "Privéles",
    priceSemi: "Semi‑privéles",
    priceGroup: "Groepsles",
    contactTitle: "Contact & Locatie",
    contactDesc: "📍 Dewi Surf & Beach Bar<br>Jl. Pantai Kuta, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361<br>📞 0852‑6109‑9023",
    footerText: "© 2026 Dewi Surf & Beach Bar | Ride the Waves, Taste the Vibes",
    // ✅ Countdown keys
    beachPartyTitle: "Beach Party",
    countdownDays: "Dagen",
    countdownHours: "Uren",
    countdownMinutes: "Minuten",
    countdownSeconds: "Seconden",
    countdownStarted: "Het evenement is gestart!"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[id]");
  elements.forEach(el => {
    const key = el.id;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
