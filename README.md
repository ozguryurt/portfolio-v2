# Portfolio v2

Türkçe ve İngilizce destekli, mobil uyumlu kişisel portföy sitesi. React, TypeScript ve Vite ile geliştirilmiştir.

## Özellikler

- Türkçe ve İngilizce arayüz ve içerik; dil URL'den belirlenir ve seçilen dil saklanır.
- Ana sayfa, yetenekler, projeler, tüm projeler ve iletişim sayfaları.
- Açık/koyu tema; tercih tarayıcıda saklanır.
- Mobil ve masaüstü için uyarlanabilir gezinme, kartlar ve proje ayrıntı paneli.
- Proje kartlarında tembel yüklenen WebP küçük görseller; ayrıntı panelinde tam boy WebP. WebP bulunamazsa bileşen özgün görsel biçimine geri döner.
- Ana sayfada Plasma arka plan efekti; mobilde, düşük hareket tercihi olanlarda ve veri tasarrufu açıkken statik görünüm.
- Sayfa ve ayrıntı paneli bileşenleri ihtiyaç duyuldukça yüklenir.

## Teknolojiler

- React 19, TypeScript ve Vite 8
- Tailwind CSS 4
- React Router 8
- Zustand 5
- Motion ve OGL
- React Icons

## Gereksinimler

Node.js `^20.19.0` veya `>=22.12.0` ve npm gerekir.

## Geliştirme

```bash
npm install
npm run dev
```

Diğer komutlar:

```bash
npm run build    # TypeScript kontrolü ve üretim derlemesi
npm run preview  # Üretim derlemesini yerelde önizleme
npm run lint     # ESLint
```

Derleme çıktısı `dist/` klasörüne yazılır.

## Sayfalar ve URL'ler

| Sayfa | Türkçe | English |
| --- | --- | --- |
| Ana sayfa | `/tr` | `/en` |
| Yetenekler / Skills | `/tr/yetenekler` | `/en/skills` |
| Projeler / Projects | `/tr/projeler` | `/en/projects` |
| Tüm projeler / All projects | `/tr/projeler/tumu` | `/en/projects/all` |
| İletişim / Contact | `/tr/iletisim` | `/en/contact` |

Kök URL (`/`), tarayıcıda kayıtlı veya tarayıcı dilinden algılanan dile yönlendirir. Uygulama sunucusunda bu URL'lerin SPA giriş sayfasına yönlendirilmesi etkin olmalıdır.

## İçerik ve görseller

İçerik `public/locales/tr.json` ve `public/locales/en.json` dosyalarından yüklenir. İki dosyanın veri yapısı `src/stores/dataStore.ts` içindeki `ApiData` tipiyle eşleşmelidir. Başlıca alanlar `anasayfa`, `hakkimda`, `projeler`, `yetenekler` ve `iletisim` şeklindedir.

Proje görsellerinin yolları çeviri dosyalarındaki `projeler[].resimler` dizisinde tutulur. Proje görsellerini `public/images/projeler/` altına yerleştirin. Bu klasörün içeriği `.gitignore` ile Git dışında tutulur; bu nedenle GitHub'a veya başka bir dağıtım ortamına görseller otomatik olarak gönderilmez. Dağıtım sırasında görselleri ayrıca sunucuya/CDN'e yükleyin veya dağıtım girdisine dahil edin. Klasördeki `.gitkeep` yalnızca boş klasörün Git'te korunmasını sağlar.

Proje kartları için her kaynak görselin `.thumb.webp` önizlemesi, ayrıntı paneli için `.webp` sürümü kullanılır. Dönüştürme aracı bu çalışma alanında `scripts/convert_images_to_webp.py` konumundadır ve FFmpeg'in `PATH` üzerinde bulunmasını gerektirir:

```bash
python scripts/convert_images_to_webp.py
```

Araç özgün görselleri silmez; var olan WebP çıktılarının üzerine yazmak için `--overwrite` verilebilir. Dönüştürme scripti `.gitignore` içinde olduğundan repoya dahil edilmez.

## Proje yapısı

```text
public/
  favicon.ico
  locales/                 # Türkçe ve İngilizce içerik JSON'ları
  images/
    projeler/               # Yerel proje görselleri (Git dışında)
src/
  components/               # Navbar, görsel, Sheet, Plasma ve ikon bileşenleri
  layouts/                  # Ortak sayfa düzeni ve içerik yükleme
  pages/                    # Ana sayfa ve içerik sayfaları
  stores/                   # Zustand tema, dil, içerik ve Sheet durumları
  utils/                    # Dil metinleri ve rota eşlemeleri
  App.tsx                    # Dil tabanlı rotalar ve tembel sayfa yükleme
  main.tsx                   # Uygulama girişi
```

## Dağıtım

`npm run build` komutundan sonra `dist/` içeriğini bir statik barındırma servisine yükleyin. İstemci tarafı yönlendirme nedeniyle sunucu fallback ayarını etkinleştirin ve `public/images/projeler/` dosyalarını Git dışından ayrıca sağlayın.
