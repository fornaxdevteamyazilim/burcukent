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
    { ikon: "ruler",    etiket: "Brut Alan",    deger: "140 m2",          goster: true },
    { ikon: "home",     etiket: "Net Alan",     deger: "120 m2",          goster: true },
    { ikon: "bed",      etiket: "Oda Sayisi",   deger: "3+1",             goster: true },
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
    { ikon: "pool",      ad: "Yuzme Havuzu" },
    { ikon: "tree",      ad: "Genis Yesil Alanlar" },
    { ikon: "play",      ad: "Cocuk Oyun Alanlari" },
    { ikon: "tank",      ad: "300 Ton Kapasiteli Su Deposu" },
    { ikon: "pump",      ad: "Hidrofor" },
    { ikon: "sprinkler", ad: "Bahce Sulama Duzenegi" },
    { ikon: "social",    ad: "Sosyal Tesis" },
    { ikon: "camera",    ad: "Site Kamera Sistemi" },
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
    { src: "images/GirisYonu.jpeg", alt: "Giris yonu" },
    { src: "images/AnaGiris.jpeg", alt: "Ana giris" },
    { src: "images/AnakapiCikis.jpeg", alt: "Ana kapi cikis" },
    { src: "images/Onbahce.jpeg", alt: "On bahce" },
    { src: "images/YanBahce.jpeg", alt: "Yan bahce" },
    { src: "images/Veranda.jpeg", alt: "Veranda" },
    { src: "images/VerandaYan.jpeg", alt: "Veranda yan" },
    { src: "images/Balkon.jpeg", alt: "Balkon" },
    { src: "images/Havuz.jpeg", alt: "Havuz" },
    { src: "images/Havuz2.jpeg", alt: "Havuz" },
    { src: "images/Barbeku.jpeg", alt: "Barbeku" },
    { src: "images/salon.jpeg", alt: "Salon" },
    { src: "images/Somine.jpeg", alt: "Somine" },
    { src: "images/SalonMerdiven.jpeg", alt: "Salon merdiven" },
    { src: "images/SalonInenMerdiven.jpeg", alt: "Salona inen merdiven" },
    { src: "images/UstKatMerdiven.jpeg", alt: "Ust kat merdiven" },
    { src: "images/catiMerdiven.jpeg", alt: "Cati merdiven" },
    { src: "images/Mutfak.jpeg", alt: "Mutfak" },
    { src: "images/MutfakServisPenceresi.jpeg", alt: "Mutfak servis penceresi" },
    { src: "images/oda1.jpeg", alt: "Oda 1" },
    { src: "images/oda2.jpeg", alt: "Oda 2" },
    { src: "images/GommeDolap.jpeg", alt: "Gomme dolap" },
    { src: "images/Portmanto.jpeg", alt: "Portmanto" },
    { src: "images/Banyo.jpeg", alt: "Banyo" },
    { src: "images/Tuvalet.jpeg", alt: "Tuvalet" },
    { src: "images/Kombi.jpeg", alt: "Kombi" },
  ],
};
