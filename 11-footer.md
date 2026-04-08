# GÖREV: Bölüm 11 - Footer Section (Minimalist Klon)

## 1. Genel Bakış

Landing page'in en alt kısmı olan Footer'ı kodlayacaksın. Bu bölüm son derece temiz, beyaz arka planlı ve minimalist bir tasarıma sahip. Elemanlar arası boşluklar (spacing) ve hizalama bu bölümün kalitesini belirleyecek.

## 2. Component Mimarisi

- `Footer.jsx` (Ana kapsayıcı)
- `Navbar`'da kullandığın `<LogoPlaceholder />` bileşenini burada da kullanabilirsin.

## 3. Üst Kısım: Ana İçerik (3 Sütunlu Yapı)

Footer'ın üst kısmı 3 ana bloktan oluşuyor. Geniş ekranlarda `flex` ve `justify-between` (veya `grid-cols-3`) kullanarak bu 3 bloğu hizala:

- **Sol Blok (Logo):** `<LogoPlaceholder />` ve yanında kalın "Tripscops" yazısı.
- **Orta Blok (Linkler):** "Features", "How it works", "Reviews", "Pricing" linkleri.
  - Bunlar yan yana DEĞİL, alt alta dikey (vertical) bir liste şeklinde sıralanmalı (`flex-col gap-y-3`).
  - Yazı rengi koyu gri (`text-gray-800`), font kalınlığı orta (`font-medium`).
- **Sağ Blok (Sosyal İkonlar):** GitHub, Twitter, LinkedIn ikonları.
  - Yan yana sıralanmış (`flex-row gap-x-4`).
  - İkonlar siyah renkte ve tıklanabilir (`cursor-pointer`) boyutta (örn: `text-2xl`). (React-icons kullanabilirsin).

## 4. Alt Kısım: Ayırıcı Çizgi ve Telif Hakları

Ana içeriğin hemen altında çok ince ve açık renkli bir ayırıcı çizgi var.

- **Çizgi (Divider):** Tüm genişliği kaplayan, çok ince ve çok açık gri bir çizgi (`border-t border-gray-100` veya `border-gray-200 mt-12 mb-6`).
- **Alt Satır (Flexbox):** Çizginin altında, iki yana yaslanmış (`justify-between`, `items-center`) bir satır.
  - **Sol Taraf:** "Copyright © 2022. Tripscops" yazısı (`text-sm text-gray-600`).
  - **Sağ Taraf:** "Made with ❤️" yazısı (`text-sm text-gray-600`). Kalp emojisini aynen kullan.

## 5. Boşluklar (Padding)

- Kutuya genel olarak üstten, alttan ve yanlardan ferah boşluklar ver (örn: `py-12 px-6 md:px-16`) ki içerik sıkışmasın, temiz görünsün.
