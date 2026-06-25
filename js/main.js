// =============================================================
//  Sayfa mantigi: VILLA verisini okuyup ekrani olusturur.
//  Bu dosyayi degistirmenize gerek yok; icerik icin js/data.js'i duzenleyin.
// =============================================================

(function () {
  "use strict";

  // ---- Basit SVG ikon seti ----
  const ICONS = {
    ruler: '<svg viewBox="0 0 24 24"><path d="M3 17l14-14 4 4-14 14H3v-4z M7 13l2 2 M10 10l2 2 M13 7l2 2"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8 M5 10v10h14V10"/></svg>',
    bed: '<svg viewBox="0 0 24 24"><path d="M3 18V8h14a4 4 0 0 1 4 4v6 M3 12h18 M7 12V9"/></svg>',
    villa: '<svg viewBox="0 0 24 24"><path d="M3 21V9l9-6 9 6v12 M9 21v-6h6v6"/></svg>',
    fire: '<svg viewBox="0 0 24 24"><path d="M12 2c2 4-2 5-2 8a4 4 0 1 0 8 0c0-1-1-3-2-4 .5 3-2 3-2 1 0-3-2-4 0-5z"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9 12l2 2 4-4"/></svg>',
    tree: '<svg viewBox="0 0 24 24"><path d="M12 2a6 6 0 0 0-4 10 5 5 0 0 0 8 0 6 6 0 0 0-4-10z M12 14v8 M9 19h6"/></svg>',
    pool: '<svg viewBox="0 0 24 24"><path d="M2 18c2 0 2 1.5 4 1.5S10 18 12 18s2 1.5 4 1.5S18 18 20 18 M2 22c2 0 2 1.5 4 1.5 M7 16V5a2 2 0 0 1 4 0 M17 16V5a2 2 0 0 0-4 0 M7 10h6"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M12 4l8 4-8 4-8-4 8-4z M4 8v6c0 2 3.5 4 8 4s8-2 8-4V8 M12 12v6"/></svg>',
    tank: '<svg viewBox="0 0 24 24"><path d="M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3v10c0 1.7-3.1 3-7 3s-7-1.3-7-3V7z M5 7c0 1.7 3.1 3 7 3s7-1.3 7-3 M9 13v4 M15 13v4"/></svg>',
    pump: '<svg viewBox="0 0 24 24"><path d="M4 20h10v-7H4v7z M14 15h4a2 2 0 0 0 2-2V8 M7 13V8a3 3 0 0 1 3-3h2 M17 5l3 3-3 3"/></svg>',
    sprinkler: '<svg viewBox="0 0 24 24"><path d="M12 22V9 M6 22h12 M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M12 9c-3 0-5-1.5-7-3 M12 9c3 0 5-1.5 7-3"/></svg>',
    social: '<svg viewBox="0 0 24 24"><path d="M3 21h18 M5 21V8l7-4 7 4v13 M9 21v-5h6v5 M9 11h.01 M15 11h.01"/></svg>',
    camera: '<svg viewBox="0 0 24 24"><path d="M3 8l13-3 1 4-13 3-1-4z M4 12l11.5-2.6 M6 16v4 M14 14v3a2 2 0 0 1-2 2H6 M18.5 7.5l2.5-1v4l-2.5-1"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || ICONS.home;
  }

  const $ = (id) => document.getElementById(id);

  // ---------------------------------------------------------
  //  HERO
  // ---------------------------------------------------------
  const isSatilik = (VILLA.durum || "satilik").toLowerCase() === "satilik";
  $("badge").textContent = isSatilik ? "SATILIK" : "KIRALIK";
  $("badge").classList.add(isSatilik ? "badge--sale" : "badge--rent");
  $("title").textContent = VILLA.baslik || "";
  $("subtitle").textContent = VILLA.altBaslik || "";
  $("price").textContent = VILLA.fiyat || "";
  $("location").textContent = VILLA.konum ? "\uD83D\uDCCD " + VILLA.konum : "";
  document.title = (isSatilik ? "Satilik" : "Kiralik") + " Villa | " + (VILLA.konum || "Burcukent");

  if (VILLA.fotograflar && VILLA.fotograflar.length) {
    $("heroBg").style.backgroundImage = "url('" + VILLA.fotograflar[0].src + "')";
  }

  // ---------------------------------------------------------
  //  GALERI
  // ---------------------------------------------------------
  const gallery = $("gallery");
  const fotos = VILLA.fotograflar || [];
  fotos.forEach((f, i) => {
    const div = document.createElement("div");
    div.className = "gallery__item";
    div.innerHTML =
      '<img loading="lazy" src="' + f.src + '" alt="' + (f.alt || "") + '" />';
    div.addEventListener("click", () => openLightbox(i));
    gallery.appendChild(div);
  });

  // ---------------------------------------------------------
  //  EV BILGILERI
  // ---------------------------------------------------------
  const grid = $("infoGrid");
  (VILLA.bilgiler || [])
    .filter((b) => b.goster !== false)
    .forEach((b) => {
      const card = document.createElement("div");
      card.className = "info-card";
      card.innerHTML =
        '<span class="info-card__icon">' + icon(b.ikon) + "</span>" +
        '<span class="info-card__value">' + b.deger + "</span>" +
        '<span class="info-card__label">' + b.etiket + "</span>";
      grid.appendChild(card);
    });
  $("description").textContent = VILLA.aciklama || "";

  // ---------------------------------------------------------
  //  SITE OLANAKLARI
  // ---------------------------------------------------------
  const amen = $("amenities");
  (VILLA.olanaklar || []).forEach((o) => {
    const item = document.createElement("div");
    item.className = "amenity";
    item.innerHTML =
      '<span class="amenity__icon">' + icon(o.ikon) + "</span>" +
      '<span class="amenity__label">' + o.ad + "</span>";
    amen.appendChild(item);
  });

  // ---------------------------------------------------------
  //  ILETISIM
  // ---------------------------------------------------------
  const c = VILLA.iletisim || {};
  if (c.whatsapp) {
    const msg = encodeURIComponent(c.whatsappMesaj || "");
    $("whatsappBtn").href =
      "https://wa.me/" + c.whatsapp.replace(/\D/g, "") + (msg ? "?text=" + msg : "");
  } else {
    $("whatsappBtn").style.display = "none";
  }
  if (c.telefon) {
    $("phoneBtn").href = "tel:" + c.telefon.replace(/\s/g, "");
    $("phoneText").textContent = c.telefon;
  } else {
    $("phoneBtn").style.display = "none";
  }

  $("footerText").textContent =
    (VILLA.konum || "Burcukent") + " \u00B7 " + new Date().getFullYear();

  // ---------------------------------------------------------
  //  LIGHTBOX
  // ---------------------------------------------------------
  let current = 0;
  const lb = $("lightbox");
  const lbImg = $("lbImg");
  const lbCounter = $("lbCounter");

  function openLightbox(i) {
    current = i;
    render();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function step(d) {
    current = (current + d + fotos.length) % fotos.length;
    render();
  }
  function render() {
    if (!fotos[current]) return;
    lbImg.src = fotos[current].src;
    lbImg.alt = fotos[current].alt || "";
    lbCounter.textContent = current + 1 + " / " + fotos.length;
  }

  $("lbClose").addEventListener("click", closeLightbox);
  $("lbPrev").addEventListener("click", () => step(-1));
  $("lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // Dokunmatik kaydirma (swipe)
  let touchX = null;
  lb.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX));
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });
})();
