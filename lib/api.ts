// src/lib/api.ts

export async function getProducts(page: number = 1) {
  const res = await fetch(`https://devcase.isiksoftyazilim.com/api/products?page=${page}`, {
    // Bu, verilerin sunucu tarafında her istekte yeniden alınmasını sağlar.
    // Eğer verilerin sıklıkla güncellenmediğini düşünüyorsanız,
    // revalidate süresi ekleyerek önbelleğe almayı düşünebilirsiniz:
    // next: { revalidate: 60 } // Her 60 saniyede bir yeniden doğrulama
  });

  if (!res.ok) {
    // Eğer API'den bir hata dönerse, hatayı fırlat
    throw new Error('Failed to fetch products');
  }

  return res.json();
}