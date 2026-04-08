# GÖREV: Bölüm 10 - Final CTA (Call to Action) Section (Premium Klon)

## 1. Genel Bakış

Sitenin en altındaki final kapanış alanını (CTA) kodlayacaksın. Bu bölüm sıradan bir kutu değil; içinde hafif bir dünya haritası silüeti barındıran, lüks ve derinlikli koyu mavi bir banner.

## 2. Component Mimarisi

- `FinalCTA.jsx` (Ana kapsayıcı ve arka plan)

## 3. Ana Kapsayıcı ve Arka Plan (KRİTİK DETAYLAR)

- **Kutu Yapısı:** Sayfada sağdan soldan makul boşlukları olan (container içinde), köşeleri oldukça yuvarlak (`rounded-[2.5rem]`) devasa bir banner.
- **Renk Gradienti:** Koyu lacivertten, biraz daha canlı bir maviye giden yatay bir geçiş. (Örn: `bg-gradient-to-r from-[#0F172A] to-[#1E3A8A]`).
- **Dünya Haritası Silüeti (Çok Önemli):** Kutunun `relative` ve `overflow-hidden` olduğundan emin ol. İçine `absolute inset-0` olan bir div aç. Bu div'in içine şimdilik bir dünya haritası görseli placeholder'ı koy (`backgroundImage: url('MAP_PLACEHOLDER')`). Bu haritanın opaklığını çok düşük tut (`opacity-10` veya `opacity-20`) ve harmanlama modunu ayarla (`mix-blend-overlay` veya `luminosity`) ki sadece silüet gibi dürünsün.

## 4. Tipografi (Metinler)

Tüm metinler kutunun tam ortasında (centered) yer alacak. Üstten ve alttan çok geniş boşluklar (`py-24`) bırak ki kutu heybetli dursun.

- **Ana Başlık:** "Your next adventure starts here." Bembeyaz, çok kalın ve büyük (`text-4xl md:text-5xl font-bold text-white mb-6`). Maksimum genişliğini ayarlayarak (`max-w-2xl mx-auto`) iki satıra referans görseldeki gibi şık bir şekilde kırılmasını sağla.
- **Alt Metin:** "Start planning your trip in under 30 seconds." Hafif şeffaf beyaz veya çok açık mavi (`text-blue-100` veya `text-white/80`, `text-lg`).

## 5. Butonlar (Flex Group)

Metnin hemen altında, yan yana duran (flex, justify-center, gap-4) iki buton var:

- **Download App Butonu (Sol):** İçi tam beyaz (`bg-white`), yazısı siyah ve kalın (`text-black font-semibold`). Arka plandan hafifçe kopması için net bir gölge ver (`shadow-lg`). Köşeleri orta yuvarlaklıkta (`rounded-xl` veya `rounded-lg`, `px-6 py-3`).
- **Learn More Butonu (Sağ):** Arka planı tamamen şeffaf (`bg-transparent`), etrafında ince ve hafif saydam beyaz bir kenarlık var (`border border-white/30`). Yazısı beyaz ve kalın.
