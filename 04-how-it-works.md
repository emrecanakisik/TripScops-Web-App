# GÖREV: Bölüm 4 - How It Works Section (Pixel-Perfect Klon)

## 1. Genel Bakış

Bu bölümde kullanıcıya sürecin 3 adımını anlatan "How It Works" kısmını kodlayacaksın. Burada yatay bir akış var. En kritik nokta, adımların arasındaki yön oklarının dikey (vertical) hizalaması ve resimlerin üzerindeki numara rozetleridir.

## 2. Component Mimarisi

- `HowItWorks.jsx` (Ana section)
- `StepItem.jsx` (Görsel ve altındaki metni içeren tekil adım bileşeni)
- `StepArrow.jsx` (Adımlar arasındaki ince gri sağ ok)

## 3. Layout ve Okların Hizalanması (KRİTİK KURAL)

- **Başlık:** Üstte ortalanmış, büyük ve kalın siyah "How It Works" başlığı (`text-4xl font-bold mb-16`).
- **Yatay Akış:** 3 adım yan yana duracak. Aralarında da `StepArrow` bileşeni olacak.
- **Okların Merkezlenmesi (Çok Önemli):** Oklar (→), sütunun tamamına göre dikey ortalanmamalı! Oklar SADECE üstteki görsel/mockup kutularının dikey merkezine hizalanmalıdır. (Öneri: Layout'u kurarken görsellerin olduğu satırı ayrı bir flex, metinlerin olduğu satırı ayrı bir grid yapabilirsin veya CSS Grid ile ince ayar çekebilirsin. Okların metinlerin yanına kaymasına kesinlikle izin verme).

## 4. Görsel Kutuları ve Numara Rozetleri (Badges)

Her adımın üst kısmında açık mavi/gri tonlarında yumuşak bir arka plana sahip dikdörtgen bir kutu var (Mockup placeholder).

- Bu kutular için `<StepImagePlaceholder />` oluştur (`bg-[#EBF0FF] rounded-3xl h-48` gibi).
- **Numara Rozeti (Overlap):** Bu kutuların SADECE sol üst köşesinde, kutunun dışına taşacak şekilde (overlap) turuncu/şeftali renginde kareye yakın bir rozet var. İçinde 1, 2, 3 yazıyor.
- **Uygulama:** Kutuya `relative` ver, rozete `absolute -top-4 -left-4` veya benzeri bir değer vererek o taşma efektini milimetrik olarak sağla. Rozetin kendi arka planı şeftali rengi, yazısı beyaz ve kalın olmalı.

## 5. Tipografi (Metinler)

- Görsel kutusunun hemen altında adım başlığı yer alıyor: "Search your destination" vb. Kalın, siyah ve oldukça büyük (`text-2xl font-bold mt-8`).
- Onun altında açıklama metni var. Rengi gri, font boyutu normal, satır aralığı ferah (`text-gray-600 text-base leading-relaxed`).
- Metinler sola hizalı (text-left) olmalıdır.

## 6. Boşluklar

- Bölümün üstünde ve altında geniş padding'ler (`py-24`) bırakarak tasarımın nefes almasını sağla.
