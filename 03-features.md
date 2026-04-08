# GÖREV: Bölüm 3 - Features (Özellikler) Section (Pixel-Perfect Klon)

## 1. Genel Bakış

Bu görevde, sitenin temel özelliklerini anlatan 3'lü kart yapısını (Features) kodlayacaksın. Kartların içindeki ince detaylara, ikonların arka plan gradientlerine ve özellikle "Aktif" kartın vurgusuna ekstra dikkat etmelisin.

## 2. Component Mimarisi

Kodu temiz tutmak için map'lenebilir bir yapı kur:

- `Features.jsx` (Ana kapsayıcı ve Section başlığı)
- `FeatureCard.jsx` (Tekil kart bileşeni)
- `MiniMockupPlaceholder.jsx` (Kartların alt kısmındaki minik UI görselleri için yer tutucu)

## 3. Layout ve Hizalama

- **Ana Başlık:** En üstte, ortalanmış, kalın siyah bir "Features" başlığı (`text-3xl` veya `text-4xl`, `font-bold`, `mb-12`).
- **Grid Yapısı:** 3 kart yan yana duracak. Masaüstünde `grid-cols-3` ve aralarında yeterli boşluk (`gap-8`) olan bir grid sistemi kullan.

## 4. Kart Stilleri (KRİTİK DETAYLAR)

Her kartın ortak özellikleri: Beyaz arka plan (`bg-white`), yuvarlatılmış köşeler (`rounded-3xl`), çok hafif bir gölge (`shadow-sm` veya `shadow-md`), ve iç padding (`p-6` veya `p-8`).

**Aktif Kart Farkı (1. Kart - AI Trip Suggestions):**

- Referans görselde soldaki ilk kart "aktif" durumdadır.
- Bu karta özel olarak ince, şeftali/turuncu tonlarında bir kenarlık eklemelisin (örn: `border border-orange-200`).
- Diğer kartlarda (2 ve 3) bu kenarlık olmamalıdır (`border-transparent` veya bordersız).

## 5. Kart İçi Elementler (Yukarıdan Aşağıya)

- **İkon Kutusu:** Her kartın sol üstünde, içinde ikon olan kare/hafif yuvarlak bir kutu var (`w-14 h-14 rounded-2xl`).
  - 1. Kart İkon Arka Planı: Açık mavi-şeftali gradient. (İkon: Yıldız/Sparkle)
  - 2. Kart İkon Arka Planı: Düz şeftali/turuncu. (İkon: Uçak)
  - 3. Kart İkon Arka Planı: Açık mavi/mor gradient. (İkon: Takvim/Check)
  - İkonları şimdilik React Icons ile veya basit SVG'lerle temsil et.
- **Kart Başlığı:** İkonun hemen altında kalın ve siyah (örn: `text-xl font-bold mt-6 leading-tight`).
- **Açıklama Metni:** Başlığın altında, daha küçük ve gri renkli (örn: `text-sm text-gray-600 mt-3`).
- **Mini Mockup (En Alt Kısım):** Metnin altında, özelliklerin UI detayını gösteren minik görseller var. Bunlar için `<MiniMockupPlaceholder />` adında, alt köşeleri kartla uyumlu yuvarlatılmış (alt kısımlardan taşmayan), içi açık gri (`bg-gray-50`) boş div'ler oluştur. Bu alanlara daha sonra gerçek `img src` eklenecek.

## 6. Arka Plan Etkileşimi

- Bu bölümün kendi arka planı saydam (`bg-transparent`) olmalı ki, Hero section'dan aşağı doğru süzülen o genel şeftali/mavi sayfa gradient'i bu kartların arkasından hissedilebilsin.
