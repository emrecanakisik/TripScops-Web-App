# GÖREV: Bölüm 1 - Navbar ve Hero Section (Pixel-Perfect Klon)

## 1. Genel Bakış

Sana verdiğim görsel, büyük bir projenin sadece "Navbar ve Hero" bölümünü içeriyor. Görevin, bu görseldeki tasarımı React ve Tailwind CSS kullanarak milimetrik olarak (pixel-perfect) koda dökmek.

## 2. Kritik Görev: Gradient Arka Plan

Sayfanın o ruhsuz beyazlığını acilen yok etmeliyiz. Görselde sol üstten (açık mavi) sağ alta (şeftali/turuncu) doğru akan, çok yumuşak bir renk geçişi var.

- **Uygulanacak Stil:** Ana kapsayıcıya (container) özel Tailwind renkleriyle bir gradient ekle. Örnek bir başlangıç noktası: `bg-gradient-to-br from-[#E6F3FF] via-white to-[#FBE5D6]`.
- Bu geçişin çok keskin olmamasına, pastel ve ferah durmasına dikkat et.

## 3. Component Mimarisi

Bu bölümü tek bir dosyaya yığma. Şu parçaları oluştur:

- `HeroLayout.jsx` (Ana kapsayıcı ve gradient burada olacak)
- `Navbar.jsx`
- `HeroContent.jsx` (Sol taraftaki yazılar ve butonlar)
- `HeroPhone.jsx` (Sağ taraftaki telefon görseli için placeholder)

## 4. Bölüm Detayları ve Stiller

### A. Navbar

- **Logo:** Sol tarafta. Şimdilik `<LogoPlaceholder />` isimli bir bileşen yap. Yanında "Tripscops" yazısı kalın (font-semibold) ve siyah.
- **Menü:** Ortada. "Features", "How it works", "Reviews", "Pricing" linkleri. Metin rengi koyu gri (`text-gray-800`), font boyutu küçük/orta arası.
- **Sağ Taraf:** "Download App" butonu (arka planı çok koyu lacivert/siyah, köşeleri tam yuvarlak `rounded-full`, beyaz yazı). Yanında "Login" yazısı.

### B. Hero Sol Taraf (Metinler ve CTA)

- **Ana Başlık:** "Plan smarter. Travel better." Aşırı büyük (örn: `text-6xl` veya `text-7xl`), çok kalın (`font-extrabold` veya `font-bold`), satır aralığı dar (`leading-tight`) ve siyah.
- **Alt Metin:** "Create complete travel plans..." Gri tonlarında (`text-gray-600`), okunaklı boyut (`text-lg` veya `text-xl`).
- **Aksiyon Alanı:** 1. "Download on the App Store" butonu için siyah, köşeleri hafif yuvarlak bir `<AppStoreButtonPlaceholder />` bileşeni yap. 2. Yanında bir Play ikonu placeholder'ı ve altı çizili "See how it works" metni.
- **Sosyal Kanıt:** En altta onay tiki ikonu ve "Trusted by 10,000+ travelers" yazısı (`text-sm`, `font-medium`).

### C. Hero Sağ Taraf (Telefon Mockup)

- Sağ tarafa telefon için büyükçe bir `<HeroPhone />` placeholder bileşeni yerleştir.
- Görseldeki telefon hafif açılı duruyor, Tailwind'in `rotate` ve `shadow-2xl` sınıflarını kullanarak bu 3 boyutlu, gölgeli duruşu simüle eden havalı bir boş kutu veya basit bir CSS şekli yap. İçine gerçek bir görsel (img tag'i) koyacağım yeri `src=""` ile hazır beklet.
