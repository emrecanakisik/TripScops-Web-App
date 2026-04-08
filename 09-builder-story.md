# GÖREV: Bölüm 9 - Builder / Story Section (BİREBİR / Pixel-Perfect Klon)

## 1. Genel Bakış

Bu bölümde, projeyi geliştiren kişinin hikayesinin anlatıldığı "Builder / Story" kısmını kodlayacaksın. Bu tasarımın BİREBİR (1:1) aynısını istiyorum. İki sütunlu yapının oranları, görselin köşe yuvarlaklığı ve en alttaki sosyal/rozet satırı kusursuz olmalıdır.

## 2. Component Mimarisi

- `BuilderStory.jsx` (Ana kapsayıcı)
- `<ProfileImagePlaceholder />` (Sol taraftaki büyük fotoğraf alanı)

## 3. Layout (Düzen) ve Hizalama

- **Ana Başlık:** En üstte ortalanmış, kalın siyah "Builder / Story" başlığı (`text-4xl font-bold mb-16`).
- **İçerik Izgarası (Grid):** İki sütunlu bir yapı kur (Masaüstünde `grid-cols-2` veya `flex` ile %40'a %60 oranında bir dağılım). Sol tarafta büyük bir fotoğraf, sağ tarafta metinler yer alacak. Bu iki sütun dikeyde birbirine tam ortalanmış (vertically centered, `items-center`) olmalıdır.

## 4. Sol Sütun (Fotoğraf Alanı)

- `<ProfileImagePlaceholder />` bileşenini oluştur.
- Bu, dikey dikdörtgene yakın büyük bir kutu olmalı (Örn: `aspect-[4/5]` veya sabit bir yükseklik).
- **Köşeler:** Görseldeki gibi oldukça yuvarlak olmalı (`rounded-3xl`).
- Gerçek görsel eklenene kadar içine `bg-gray-200` veya açık gri bir arka plan ver. Etrafında ağır bir gölge YOK, çok temiz ve flat duruyor.

## 5. Sağ Sütun (İçerik ve Tipografi) - KRİTİK DETAYLAR

- **Başlık:** "Why I built Tripscops" yazısı kalın, siyah ve büyük (`text-3xl font-bold mb-6`).
- **Paragraflar:** Alt alta iki paragraf var. Rengi orta gri (`text-gray-600`), fontu normal ağırlıkta ve satır aralıkları ferah (`leading-relaxed`). İki paragraf arasında belirgin bir boşluk (`mb-6`) bırak.
- **Sosyal Medya ve Rozet Satırı (Flexbox):** En alttaki bu satır tam bir yatay hiza (flex, items-center) gerektirir.
  - **İkonlar ve Linkler:** GitHub, Twitter, LinkedIn ikonları (React Icons kullanabilirsin) ve yanlarında kalın/siyah metinleri (`font-semibold text-sm`). Aralarında makul bir boşluk olsun (`gap-x-6`).
  - **Indie Developer Rozeti (Badge):** Bu satırın en sağında yer alıyor. Arka planı çok açık mavi/buz rengi (`bg-blue-50` veya `bg-[#EAF0FF]`), şekli tam yuvarlak (pill shape, `rounded-full`), iç boşluğu (padding) orantılı (`px-4 py-1.5`).
  - **Rozet İçindeki Nokta:** "Indie Developer" yazısının hemen solunda, minik şeftali/kırmızımsı bir yuvarlak nokta var (`w-2 h-2 rounded-full bg-red-400`). Bunu kesinlikle atlama.
