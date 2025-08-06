

// import { getProducts } from '@/lib/api'; // çalışmadı
import Pagination from '@/components/Pagination/Pagination';
import ProductTable from '@/components/ProductTable/ProductTable';
import { mockApiData } from '@/data/mockProducts'; // Mock veri

export default async function Home() {
  // const productData = await getProducts(1); // çalısmadı 
  const productData = mockApiData; 
  const products = productData.products;

  const currentPage = productData.currentPage; // Mock veriden alıyoruz
  const totalPages = productData.totalPages;   // Mock veriden alıyoruz


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products Overview</h1>

      {/* Stats Cards Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Total Products</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{productData.totalProducts || '...'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Total Pages</p>
          <p className="text-2xl font-semibold text-blue-600 mt-1">{productData.totalPages || '...'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Current Page</p>
          <p className="text-2xl font-semibold text-yellow-600 mt-1">{productData.currentPage || '...'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Items per Page</p>
          <p className="text-2xl font-semibold text-green-600 mt-1">{products.length}</p>
        </div>
      </div>

      {/* Product Management Header (Search, Filter, Add Product) */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Product List</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
            + Add Products
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200">
            Filter
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200">
            Sort
          </button>
        </div>

        {/* Product Table */}
        <ProductTable products={products} />
        {/* Pagination Component */}
        {totalPages > 1 && ( // Eğer birden fazla sayfa varsa pagination'ı göster
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}