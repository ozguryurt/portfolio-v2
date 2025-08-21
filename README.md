## Portfolio v2 (React + TypeScript + Vite)

Kişisel portföy projesi. Modern, hızlı ve erişilebilir bir arayüzle; projeler, yetenekler ve iletişim bölümlerini barındırır. Tema seçimi, sayfa içi yumuşak geçişler ve mobil/masaüstü uyumlu alt sheet (bottom sheet) içerir.

### Özellikler
- **Hızlı ve modern**: React + Vite + TypeScript
- **Stil**: Tailwind CSS v4
- **Yönlendirme**: React Router ile hash tabanlı routing
- **Durum yönetimi**: Zustand ile global state
- **Animasyonlar**: Framer Motion ile giriş/çıkış ve sheet animasyonları
- **Bulanık arka planlı Sheet**: Mobilde neredeyse tam ekran, masaüstünde 3/4 yükseklik; ESC, tıkla kapat, sürükle-kapat desteği
- **Tema seçimi**: Açık/Koyu tema geçişi
- **İçerik**: `public/config.json` üzerinden yapılandırılabilir içerik

### Teknolojiler
- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4
- React Router 7
- Zustand 5
- Framer Motion (animasyonlar)
- React Icons

### Hızlı Başlangıç
Gereksinimler: Node.js 22+

```bash
npm install
npm run dev
```

Derleme ve önizleme:

```bash
npm run build
npm run preview
```

### Proje Yapısı
```text
portfolio-v2/
  public/
    config.json            # İçerik yapılandırması
    images/                # Görseller
      projeler/            # Projelerin görselleri (eklenmeli)
  src/
    components/            # Bileşenler (Navbar, Sheet, vb.)
    layouts/               # Layout dizaynları
    pages/                 # Route bileşenleri
    sections/              # Anasayfa bölümleri (Home, Projects, Skills, Contact)
    stores/                # Zustand store'ları (tema, sheet, config data)
    main.tsx               # Uygulama girişi
    index.css              # Global stiller
```

### İçerik ve Konfigürasyon
- İçerikler `public/config.json` dosyasından yüklenir. Beklenen alanlar:
  - `anasayfa` (başlıklar, yazı, görsel)
  - `hakkimda` (sayımsal veriler)
  - `projeler` (ad, url, resimler[])
  - `yetenekler` (isim, icon)
  - `iletisim` (başlık, bilgiler[])
- Proje görsellerini `public/images/projeler/` altına ekleyin ve `config.json` içinde ilgili yollara referans verin.
- Tüm iconlar için "iconify.design" paketini kullanın.

### Sheet Davranışı (Mobil/Masaüstü)
- Mobil: Tam genişlik, kenarlarda küçük boşluk; yükseklik neredeyse tam ekran (üstte küçük boşluk) ve sürükleyerek kapatma desteği.
- Masaüstü: Tam genişlik, kenarlarda boşluk; yükseklik ekranın 3/4'ü.
- Arka plan bulanık ve tıklanabilir. ESC ile de kapanır.

### Geliştirme Notları
- Tailwind sınıfları ile temalandırma yapılır; `dark` modu sınıfı üzerinden etkinleştirilir.
- Global durumlar `src/stores/` altında tutulur (`zustand`).
- Bileşen animasyonlarında `framer-motion` kullanılır.

### Dağıtım
- `npm run build` sonrası oluşan `dist/` klasörünü statik olarak herhangi bir CDN/hosting (Vercel, Netlify, Cloudflare Pages, GitHub Pages vb.) üzerinde sunabilirsiniz.