# Işıksoft Frontend DevCase Projesi

**Canlı Demo:** [https://isiksoft-devcase.vercel.app/](https://isiksoft-devcase.vercel.app/)

## 🚀 Teknolojiler

Bu projede kullanılan temel teknolojiler ve kütüphaneler:

* **Next.js 14+**: React tabanlı bir framework olup, Server Components, Routing, sunucu tarafı veri çekme ve optimizasyon yetenekleri için kullanılmıştır.
* **React 18+**: Kullanıcı arayüzü oluşturmak için temel kütüphane.
* **TypeScript**: Kodun okunabilirliğini, tip güvenliğini ve hata yakalamayı artırmak için kullanılmıştır.
* **Tailwind CSS**: Hızlı ve duyarlı UI geliştirmesi için utility-first CSS framework.
* **`fetch` API**: Ürün verilerini harici API'den çekmek için kullanılmıştır.
* **`next/image`**: Resim optimizasyonu ve lazy loading için Next.js'in yerleşik Image componenti.
* **`next/navigation` (`useRouter`, `useSearchParams`)**: Client-side navigasyon ve URL param
```
isiksoft-devcase/
├── public/                         # Statik dosyalar (resimler, ikonlar vb.)
│   └── favicon.ico
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
└── tsconfig.json                   # TypeScript yapılandırma dosyası

## 📧 İletişim

* **Geliştirici:** Nurullah Mencik
* **E-posta:** nurullahmencik42@gmail.com
* **GitHub Profilim ** [https://github.com/nurullahMencik](https://github.com/nurullahMencik)
