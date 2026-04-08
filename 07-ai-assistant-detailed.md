# GÖREV: Bölüm 7 - AI Travel Assistant Detailed (Premium Klon)

## 1. Genel Bakış

Sana sağlanan görsel, "Tripscop" landing page'inin o "Premium" ve modern hissini veren en kritik bölümlerinden biridir. Görevin, bu görseldeki tasarımı React ve Tailwind CSS kullanarak, özellikle de o yumuşak gradient arka planı ve karmaşık telefon cluster'ını birebir (pixel-perfect) koda dökmektir.

## 2. Component Mimarisi

- `AIAssistantSection.jsx` (Ana kapsayıcı)
  - `AssistantTextColumn.jsx` (Sol taraftaki metinler ve liste)
  - `AssistantVisualColumn.jsx` (Sağ taraftaki telefon stack'i)
    - `iPhoneMockup.jsx`
    - `OverlappingUICard_Left.jsx`
    - `OverlappingUICard_Right_Background.jsx`

## 3. Arka Plan: Efsanevi Blurred Gradient (KRİTİK)

Görseldeki kupkuru arka plan hissini tamamen yok et. Bu bölümün arka planına, modern bir blurred/soft gradient efekti uygulamalısın.

- **Efekt Türü:** Soft, dairesel veya eliptik bir gradient (radial/elliptical).
- **Renk Kaynakları:**
  - Sol Üst (Heading Metninin Yakınından): `#E0F7FF` (Çok açık, buz mavisi)
  - Sağ Alt (Görsel Cluster'ının Arkasından): `#FDE0B4` (Soft, şeftali-turuncu)
- **Uygulama:** Bu iki rengi, merkezde beyaz ile buluşturacak şekilde yumuşak bir şekilde blendle. Sayfanın en kenarlarında beyaz tonları hakimken, içeride tarif ettiğim mavi ve şeftali tonları blurlu bir şekilde belirmeli. Tailwind ile `bg-gradient-to-br from-[#E0F7FF] via-white to-[#FDE0B4]` gibi bir yapı veya özel CSS `radial-gradient` kullanarak bu modern, blurlu ellipse etkisini tam olarak sağla.

## 4. Layout (Hizalama) ve Kaplanan Alanlar

- **Proportions (Oranlar):** Tüm sayfa genişliğinin, metin sütunu (Sol) %35-%40'ını kaplarken, görsel cluster'ı (Sağ) %60-%65'ini kaplamalıdır. Görsel kısım, metne göre çok daha yoğun ve büyük hissettirmeli.
- **Hizalama:** Sol taraftaki metin ve liste dikey olarak bu bölümün ortasında (center) durmalı.

## 5. Sol Sütun Detayları (Metinler)

- **Ana Başlık:** "Your personal AI travel assistant". Aşırı kalın, siyah, modern sans-serif font (`text-5xl font-extrabold mb-10 leading-tight`).
- **Bullet Liste:** 3 madde.
  - Madde İkonları: Basit, küçük gri dairesel noktalar (`w-2 h-2 rounded-full bg-gray-300`).
  - Madde Metinleri: "Personalized recommendations", "Live price tracking", "Smart itinerary builder".
  - Metin Stili: Koyu gri, okunaklı (`text-xl text-gray-700 font-medium leading-relaxed`). Madde arası boşluklar ferah (`gap-y-6`).

## 6. Sağ Sütun Detayları (Görsel Cluster) (KRİTİK)

Bu alan bir cluster gibi, iç içe geçmiş elementlerden oluşmalı. `AssistantVisualColumn` bileşeni `relative` olmalı.

- **iPhone Mockup:** Gerçekçi bir iPhone 15 Pro (koyu kasa, Dynamic Island).
  - Ekran: "Itinerary" ekranı, "Itinerary review" kartı ve "Found better trips" kartları.
- **Overlapping Card 1 (Float-on, Sol):** Telefonun solunda ve önünde duruyor.
  - İçerik: "Your personalized selection", card listesi, fiyatlar (`$50`), ve o koyu şeftali rengi "Book Now" butonları.
  - Stil: Clean UI, `shadow-xl`, `z-10`.
- **Overlapping Card 2 (Float-on, Sağ, Background):** Telefonun sağında ve arkasında duruyor. Daha büyük bir pane.
  - İçerik: "Sample itinerary" ekranı.
  - Stil: `shadow-md`, `z-[-5]`, daha gri-soluk bir UI.
- **Depth (Derinlik):** Z-index ve gölge (shadow) kullanarak bu 3 elementin (sol kart, telefon, sağ kart) dikey olarak bu cluster içinde farklı derinliklerde durmasını sağla.
