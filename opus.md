# Proje: Tripscop - Pixel-Perfect Landing Page Klonu

## 1. Genel Bakış
Görevimiz, ekte sağlanan landing page görselinin birebir (pixel-perfect) kopyasını oluşturmaktır. Tasarım estetiği, boşluklar (spacing) ve gölgelendirmeler (shadows) tamamen görsele sadık kalınarak yapılmalıdır.

## 2. Teknoloji Yığını
- Frontend Framework: React (Functional Components & Hooks)
- Styling: Tailwind CSS

## 3. Klasör ve Component Mimarisi
Lütfen spagetti kod yazma. Kodu mantıklı parçalara böl ve modüler bir yapı kur. Aşağıdaki component hiyerarşisini kullan:

- `Layout.jsx` (Ana kapsayıcı)
  - `Navbar.jsx` (Logo ve navigasyon menüsü)
  - `HeroSection.jsx` (Sol taraf metin, sağ taraf telefon mockup'ı)
  - `SocialProof.jsx` (10K+ Travelers, 50K+ Trips istatistikleri)
  - `Features.jsx` (Şeftali ve beyaz arka planlı özellik kartları)
  - `HowItWorks.jsx` (Adım adım çalışma şeması)
  - `Testimonials.jsx` (Kullanıcı yorumları kartları)
  - `BuilderStory.jsx` (Geliştirici hikayesi ve profil fotoğrafı)
  - `CTA.jsx` (En alttaki koyu mavi 'Your next adventure' alanı)
  - `Footer.jsx` (En alt telif ve linkler)

## 4. Görsel ve Asset Yönetimi (KRİTİK KURAL)
- Projede kullanılacak logolar, ikonlar, telefon mockup'ı ve profil fotoğrafları için **kesinlikle** ayrı component'lar oluştur.
- Örnek: `<HeroPhoneImage />`, `<Logo />`, `<AvatarPlaceholder />`.
- Bu component'ların içine şimdilik Tailwind ile boyutlandırılmış (örn: `w-64 h-[500px] bg-gray-200 rounded-3xl`) boş kutular (placeholder) yerleştir. 
- İleride bu kısımlara kendi `img src` asset'lerimi ekleyeceğim, bu yüzden kodun içinde nereye ekleyeceğim bariz belli olsun.

## 5. Renk Paleti ve Styling Detayları
- **Arka Plan:** Sayfanın genelinde şeftali (peach) ve açık mavi (light blue) tonlarında çok yumuşak, göz yormayan bir gradient var. Tailwind'in gradient class'larını (örn: `bg-gradient-to-br from-blue-50 via-white to-orange-50`) kullanarak bu geçişi mükemmelen simüle et.
- **Kartlar:** Beyaz arka plan ve Tailwind'in çok hafif shadow class'larını (`shadow-sm`, `shadow-md`) kullanarak sayfadan hafifçe koparılmış hissi ver. Şeftali rengi aktif karttaki tonlamaya dikkat et.
- **Tipografi:** Başlıklar kalın ve dikkat çekici (bold), alt metinler daha ince ve gri tonlarında (text-gray-500/600) olmalı.

## 6. Geliştirme Adımları (Planın)
1. Önce genel sayfa iskeletini ve arka plan gradient'ini oturt.
2. Component'ları içi boş bir şekilde oluştur.
3. Component'ların içini Tailwind ile tasarıma bakarak doldur.
4. Responsive yapı için mobil class'larını ekle.
