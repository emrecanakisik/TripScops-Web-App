# GÖREV: Bölüm 2 - Social Proof (İstatistikler) Section (Pixel-Perfect Klon)

## 1. Genel Bakış

Bu görevde, Hero bölümünün hemen altına gelecek olan "Social Proof" (Sosyal Kanıt) alanını kodlayacaksın. Tasarım çok temiz, minimalist ve güven verici olmalı.

## 2. Component Mimarisi

- `SocialProof.jsx` adında tek ve modüler bir component oluştur.

## 3. Layout (Düzen) ve Hizalama

- **Ana Başlık:** En üstte ortalanmış, nispeten kalın (örn: `text-2xl font-bold`) bir "Social Proof" yazısı var.
- **Grid/Flex Yapısı:** İstatistikler yan yana, eşit aralıklarla (justify-between veya gap'li bir grid ile) dizilmeli.
- **Dikey Çizgiler (KRİTİK):** İstatistik bloklarının arasında çok ince, açık gri dikey çizgiler (divider) var. Tailwind'in `divide-x divide-gray-200` class'ını kullanarak veya aralara 1px genişliğinde `bg-gray-200` div'ler atarak bu ayrımı kesinlikle yapmalısın. En sondaki elemanın sağında çizgi olmayacak.

## 4. Tipografi ve Stiller

Her bir istatistik bloğu alt alta iki satırdan oluşuyor:

- **Rakamlar (Üst Satır):** "10K+", "50K+", "4.8", "120+". Bunlar devasa ve kapkalın olmalı (örn: `text-4xl` veya `text-5xl`, `font-extrabold`, `text-black`).
- **Yazılar (Alt Satır):** "Travelers", "Trips Planned", vs. Bunlar ince, küçük ve gri tonda olmalı (örn: `text-sm`, `text-gray-500`, `font-medium`).

## 5. İkon Detayı

- "4.8" rakamının hemen sağında siyah, içi dolu bir yıldız (star) ikonu var. Bunun için `react-icons` kullanabilirsin veya basit bir SVG yıldız `<StarIconPlaceholder />` çakabilirsin. Rakamla aynı boyutta ve aynı hizada (items-center) olmasına dikkat et.

## 6. Boşluklar (Spacing)

- Üstteki "Social Proof" başlığı ile rakamlar arasında yeterince boşluk (`mt-8` gibi) bırak.
- Tüm bu section'ın üstünde ve altında, sayfanın nefes almasını sağlayacak geniş padding'ler (`py-16` gibi) kullan.
