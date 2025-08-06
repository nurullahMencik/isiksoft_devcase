

export async function getProducts(page: number = 1) {
  const res = await fetch(`https://devcase.isiksoftyazilim.com/api/products?page=${page}`, {

  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}