# GÖREV: Bölüm 8 - Testimonials (Müşteri Yorumları) Section (Pixel-Perfect Klon)

## 1. Genel Bakış

Bu bölümde kullanıcı yorumlarının sergilendiği "Testimonials" kısmını kodlayacaksın. Burada dümdüz bir grid yerine, **kartların hafifçe sağa ve sola eğik (rotate) olduğu** asimetrik ve modern bir yerleşim var. Arka plandaki yumuşak, sıcak gradient parlaması da tasarımın kalbini oluşturuyor.

## 2. Component Mimarisi

- `Testimonials.jsx` (Ana kapsayıcı ve arka plan)
- `TestimonialCard.jsx` (Tekil yorum kartı bileşeni - props alacak şekilde ayarla: name, text, rotationClass)
- `<AvatarPlaceholder />` (Profil fotoğrafları için boş dairesel alan)

## 3. Arka Plan ve Düzen (KRİTİK)

- **Başlık:** Üstte ortalanmış, kalın siyah "Testimonials" başlığı (`text-4xl font-bold mb-16`).
- **Arka Plan Parlaması (Glow):** Kartların tam arkasına denk gelen, şeftali/pembe tonlarında çok yumuşak bir radial parlaması (glow) var. Ana kapsayıcıya `relative` verip, kartların arkasına absolute bir div atarak `bg-gradient-to-r from-orange-100 to-pink-100 blur-[80px]` gibi bir efektle o sıcak atmosferi yarat.

## 4. Kart Stilleri ve "TILT" (Eğiklik) Efekti (KRİTİK KURAL)

3 adet beyaz kart yan yana duracak. Her birine yumuşak ama belirgin bir gölge ver (`shadow-xl` veya `shadow-2xl`). Köşeleri oldukça yuvarlak (`rounded-3xl`).

- **Kart 1 (Sol):** Sola doğru hafif eğik. Tailwind ile `-rotate-3` veya `-rotate-6` sınıfını kullan.
- **Kart 2 (Orta):** Dümdüz veya çok çok hafif eğik.
- **Kart 3 (Sağ):** Sağa doğru hafif eğik. Tailwind ile `rotate-3` veya `rotate-6` sınıfını kullan.
  _Not: Hover durumunda kartların düzelmesini (rotate-0) sağlayan tatlı bir animasyon eklersen bonus puan alırsın._

## 5. Kart İçi Elementler (Yukarıdan Aşağıya)

Kartların içinde yeterli boşluk (padding, örn: `p-8`) olmalı.

- **Avatar:** Sol üstte dairesel, içine sonradan fotoğraf eklenecek bir `<AvatarPlaceholder />` (`w-12 h-12 rounded-full bg-gray-200`).
- **İsim (Name):** Avatarın hemen altında, kalın ve siyah (`font-bold text-lg mt-4`).
- **Yorum Metni (Review):** İsmin altında, gri tonlarında ve okunaklı (`text-gray-600 text-sm mt-2 leading-relaxed`).
- **Yıldızlar (Stars):** En altta, yan yana dizilmiş 5 adet altın/sarı renkli yıldız ikonu (`text-yellow-400`). (Bunun için react-icons veya basit bir SVG dizisi kullan).
