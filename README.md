# Satılık Villa Tanıtım Sayfası (QR ile)

Burcukent sitesindeki müstakil villa için, pankarta basılan bir **QR kod** ile açılan tek sayfalık tanıtım sitesi. Telefonla taranınca villanın fotoğraflarını, bilgilerini ve site olanaklarını gösterir; WhatsApp ve telefon ile iletişim sunar.

## İçerik

- Fotoğraf galerisi (tıklayınca tam ekran, ileri/geri ve kaydırma)
- Villa bilgileri (m², oda sayısı, müstakil villa, ısıtma, mantolama, bahçe m²)
- Site olanakları (havuz, yeşil alanlar, çocuk oyun alanları)
- WhatsApp ve telefon ile iletişim
- QR kod üretme aracı (`qr.html`)

## Dosyalar

```
index.html      -> Ana sayfa
qr.html         -> QR kod üretme/indirme aracı
css/style.css   -> Tasarım
js/data.js      -> TÜM İÇERİK BURADAN DÜZENLENİR
js/main.js      -> Sayfa mantığı (değiştirmenize gerek yok)
images/         -> Fotoğraflar
```

## 1. İçeriği düzenleme

Tüm metinleri, fiyatı, bilgileri ve iletişim numaralarını **`js/data.js`** dosyasından düzenleyin. Kod bilgisi gerekmez; sadece tırnak içindeki yazıları değiştirin.

- Telefon: `iletisim.telefon`
- WhatsApp: `iletisim.whatsapp` (sadece rakamlar, ülke kodu ile — örn. `905550000000`)
- Bir bilgi kartını gizlemek için ilgili satırda `goster: false` yapın.

## 2. Fotoğraf ekleme

1. Kendi fotoğraflarınızı `images/` klasörüne kopyalayın (örn. `salon.jpg`).
2. `js/data.js` içindeki `fotograflar` listesinde dosya adlarını yazın:

```js
fotograflar: [
  { src: "images/disgorunum.jpg", alt: "Villa dis gorunum" },
  { src: "images/salon.jpg", alt: "Salon" },
],
```

İlk fotoğraf kapak (hero arka planı) olarak kullanılır. Örnek `.svg` yer tutucuları silebilirsiniz.

## 3. Bilgisayarda önizleme

Tarayıcıda `index.html` dosyasını açmanız yeterli. (Bazı tarayıcılar yerel dosyalarda kısıtlama yaparsa, klasörde basit bir sunucu çalıştırabilirsiniz: `python -m http.server` ve `http://localhost:8000` adresine gidin.)

## 4. GitHub Pages'te yayınlama

1. Bu klasörü GitHub'a bir repoya yükleyin (repo adı: `burcukent`).
2. GitHub'da repo > **Settings > Pages**.
3. **Build and deployment > Source: Deploy from a branch** seçin.
4. Branch olarak `main` ve klasör olarak `/ (root)` seçip **Save**.
5. Birkaç dakika sonra siteniz şu adreste yayında olur:
   `https://KULLANICI-ADINIZ.github.io/burcukent/`

## 5. QR kod oluşturma

1. Site yayına girdikten sonra `qr.html` sayfasını açın (yayındaki adresten veya bilgisayarınızdan).
2. Yayınlanan adresi yapıştırın.
3. **QR Oluştur** → **PNG olarak indir**.
4. İndirilen `villa-qr.png` dosyasını pankarta yüksek çözünürlükte bastırın.
5. QR altına örnek metin: *"Villayı telefonunla tara, detayları gör."*

## Notlar

- Site tamamen statiktir; arka uç (sunucu) gerektirmez.
- İletişim formu yoktur; WhatsApp ve telefon butonları doğrudan çalışır.
