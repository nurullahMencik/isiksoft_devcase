# Işıksoft Frontend DevCase Projesi

**Canlı Demo:** https://isiksoft-devcase-seven.vercel.app

Bu proje, Işıksoft Frontend DevCase mülakat sürecinin bir parçası olarak geliştirilmiştir. Verilen Figma tasarımını temel alarak, modern bir ürün listeleme arayüzü oluşturmak ve frontend geliştirme yetkinliklerini sergilemek amacıyla React (Next.js) ve Tailwind CSS kullanılarak hazırlanmıştır.

## 🌟 Özellikler

* **Figma Tasarımına Sadakat**: Uygulamanın genel layout'u, renkleri, fontları ve bileşen yerleşimleri Figma tasarımına mümkün olduğunca uygun şekilde oluşturulmuştur.
* **Component Tabanlı Mimari**: Uygulama, yeniden kullanılabilir ve yönetilebilir bileşenlere (`ProductTable`, `Pagination`, `StatsCard`, `ProductStatusBadge` vb.) ayrılarak modüler bir yapıya sahiptir.
* **Yerel Resim Desteği**: Ürün görselleri, harici API bağımlılığından kurtulmak ve daha güvenilir bir deneyim sunmak amacıyla projenin `public` klasöründe yerel olarak barındırılmaktadır.
* **Sayfalama (Pagination)**: Figma tasarımında yer alan sayfalama kontrolleri (`Prev`, `Next`, Sayfa Numaraları) işlevsel hale getirilmiştir. Sayfa değişimi, Next.js'in `useRouter` ve `useSearchParams` hook'ları kullanılarak URL parametreleri üzerinden yönetilmektedir.
* **Duyarlı (Responsive) Tasarım**: Tailwind CSS'in responsive sınıfları kullanılarak uygulamanın farklı ekran boyutlarında (masaüstü, tablet, mobil) düzgün görüntülenmesi sağlanmıştır. Özellikle ürün tablosu, mobil cihazlarda yatay kaydırma özelliğine (`overflow-x-auto`) sahiptir.
* **Temiz ve Sürdürülebilir Kod**: TypeScript'in kullanımı, anlamlı dosya ve klasör yapısı, ve Tailwind CSS'in okunabilirliği sayesinde temiz, anlaşılır ve bakımı kolay bir kod tabanı oluşturulmuştur.

## 🚀 Teknolojiler

Bu projede kullanılan temel teknolojiler ve kütüphaneler:

* **Next.js 14+**: React tabanlı bir framework olup, Server Components, Routing, sunucu tarafı veri çekme ve optimizasyon yetenekleri için kullanılmıştır.
* **React 18+**: Kullanıcı arayüzü oluşturmak için temel kütüphane.
* **TypeScript**: Kodun okunabilirliğini, tip güvenliğini ve hata yakalamayı artırmak için kullanılmıştır.
* **Tailwind CSS**: Hızlı ve duyarlı UI geliştirmesi için utility-first CSS framework.
* **`fetch` API**: Ürün verilerini harici API'den çekmek için kullanılmıştır.
* **`next/image`**: Resim optimizasyonu ve lazy loading için Next.js'in yerleşik Image componenti.
* **`next/navigation` (`useRouter`, `useSearchParams`)**: Client-side navigasyon ve URL parametre yönetimi için.

## 📂 Dosya Yapısı

Projenin temel dosya ve klasör yapısı aşağıda açıklanmıştır:
``````isiksoft-devcase/
├── public/                         # Statik dosyalar (resimler, ikonlar vb.)
│   ├── favicon.ico
│   ├── backpack.png                # Yerel ürün resimleri
│   ├── casual.png
│   ├── ceket.png
│   └── t-shirt.png
├── src/                            # Ana uygulama kodları
│   ├── app/                        # Next.js App Router yapısı
│   │   ├── layout.tsx              # Uygulamanın temel HTML ve ana layout (Sidebar vb. içeren)
│   │   └── page.tsx                # Ana ürün listeleme sayfası (Home component)
│   ├── components/                 # Yeniden kullanılabilir UI bileşenleri
│   │   ├── Pagination/             # Sayfalama bileşeni
│   │   │   └── Pagination.tsx
│   │   ├── ProductTable/           # Ürün tablosu bileşeni
│   │   │   └── ProductTable.tsx    # (Product interface'i de burada tanımlı)
│   │   └── StatsCard/              # İstatistik kartı bileşeni
│   │       └── StatsCard.tsx
│   ├── data/                       # Geçici (mock) veya sabit veri dosyaları
│   │   └── mockProducts.ts         # Ürünler için mock veri
│   ├── lib/                        # API servisleri, yardımcı fonksiyonlar vb.
│   │   └── api.ts                  # API veri çekme fonksiyonu (getProducts)
│   └── globals.css                 # Global CSS stilleri (Tailwind CSS importu burada)
├── .git/                           # Git versiyon kontrol sistemi dosyaları (gizli)
├── .gitignore                      # Git tarafından izlenmeyecek dosyalar/klasörler
├── next.config.ts                  # Next.js yapılandırma dosyası (resim domainleri vb.)
├── package.json                    # Proje bağımlılıkları ve scriptleri
├── pnpm-lock.yaml                  # (veya package-lock.json / yarn.lock) Bağımlılık kilit dosyası
├── postcss.config.js               # PostCSS yapılandırması (Tailwind için gerekli)
├── README.md                       # Proje açıklaması ve talimatları
├── tailwind.config.ts              # Tailwind CSS yapılandırma dosyası
└── tsconfig.json                   # TypeScript yapılandırma dosyası``````

## 📧 İletişim

* **Geliştirici:** Nurullah Mencik
* **E-posta:** nurullahmencik42@gmail.com
* **GitHub Profilim:** [https://github.com/nurullahMencik](https://github.com/nurullahMencik)

