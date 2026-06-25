// =============================================================
//  VILLA TANITIM SAYFASI - TUM BILGILER BURADAN DUZENLENIR
//  Bu dosyadaki degerleri kendi villaniza gore degistirin.
//  Kod bilgisine gerek yok; sadece tirnak icindeki yazilari guncelleyin.
// =============================================================

const VILLA = {
  // ---- Durum: "satilik" veya "kiralik" ----
  durum: "satilik",

  // ---- Ust baslik ----
  baslik: "Burcukent Sitesinde Satilik Mustakil Villa",
  altBaslik: "Havuzlu, yesil alanli site icinde, bahceli mustakil villa",

  // ---- Fiyat (istediginiz gibi yazin) ----
  fiyat: "Fiyat icin arayiniz",

  // ---- Konum (kisa metin, harita istemediginiz icin sadece yazi) ----
  konum: "Burcukent Sitesi",

  // ---- Ev bilgileri (ikonlu kartlar) ----
  //  goster: false yaparsaniz o kart gizlenir.
  bilgiler: [
    { ikon: "ruler",    etiket: "Brut Alan",    deger: "120 m2",          goster: true },
    { ikon: "home",     etiket: "Net Alan",     deger: "180 m2",          goster: true },
    { ikon: "bed",      etiket: "Oda Sayisi",   deger: "4+1",             goster: true },
    { ikon: "villa",    etiket: "Tip",          deger: "Mustakil Villa",  goster: true },
    { ikon: "fire",     etiket: "Isitma",       deger: "Kombi (Dogalgaz)", goster: true },
    { ikon: "shield",   etiket: "Mantolama",    deger: "Var (Yalitimli)", goster: true },
    { ikon: "tree",     etiket: "Bahce",        deger: "80 m2",          goster: true },
  ],

  // ---- Aciklama (serbest metin) ----
  aciklama:
    "Burcukent Sitesi icinde yer alan, kullanisli plani ve ferah odalariyla " +
    "ailenize uygun mustakil villa. Genis bahcesi, yalitimli yapisi ve " +
    "sitenin sosyal olanaklariyla konforlu bir yasam sunar.",

  // ---- Site / sosyal olanaklar (rozetler) ----
  olanaklar: [
    { ikon: "pool",   ad: "Yuzme Havuzu" },
    { ikon: "tree",   ad: "Genis Yesil Alanlar" },
    { ikon: "play",   ad: "Cocuk Oyun Alanlari" },
  ],

  // ---- Iletisim ----
  iletisim: {
    // Telefon numarasi (basinda ulke kodu olmadan da yazabilirsiniz, tel: icin kullanilir)
    telefon: "+90 542 823 41 42",
    // WhatsApp icin numara: SADECE rakamlar, ulke kodu ile (ornek: 905550000000)
    whatsapp: "905428234142",
    // WhatsApp'a tiklayinca gidecek hazir mesaj
    whatsappMesaj: "Merhaba, Burcukent'teki satilik villa ilaniniz hakkinda bilgi almak istiyorum.",
  },

  // ---- Fotograflar ----
  //  images/ klasorune fotograflarinizi koyun ve dosya adlarini buraya yazin.
  //  Sira onemli; ilk fotograf kapak olarak kullanilir.
  fotograflar: [
    { src: "images/disgorunum.jpeg", alt: "Villa dis gorunum" },
    // Yeni fotograf ekledikce asagidaki satirlari kendi dosya adlarinizla
    // doldurup basindaki // isaretini kaldirin:
    // { src: "images/salon.jpg", alt: "Salon" },
    // { src: "images/mutfak.jpg", alt: "Mutfak" },
    // { src: "images/yatakodasi.jpg", alt: "Yatak odasi" },
    // { src: "images/bahce.jpg", alt: "Bahce" },
    // { src: "images/havuz.jpg", alt: "Havuz" },
  ],
};
