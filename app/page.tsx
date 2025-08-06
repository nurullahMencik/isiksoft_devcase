import ProductTable from '@/components/ProductTable/ProductTable';
import Pagination from '@/components/Pagination/Pagination';
import StatsCard from '@/components/StatsCard/StatsCard';
import { mockApiData } from '@/data/mockProducts';
import { Suspense } from 'react'; 

export default async function Home() {
  const productData = mockApiData;
  const products = productData.products;

  const currentPage = productData.currentPage;
  const totalPages = productData.totalPages;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Products" value={productData.totalProducts} />
        <StatsCard title="New Products" value={`+${productData.itemsPerPage}`} valueColorClass="text-green-600" />
        <StatsCard title="Total Pages" value={productData.totalPages} valueColorClass="text-blue-600" />
        <StatsCard title="Current Page" value={productData.currentPage} valueColorClass="text-yellow-600" />
      </div>

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

        <ProductTable products={products} />

 
        {totalPages > 1 && (
          <Suspense fallback={<div>Loading pagination...</div>}> 
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </Suspense>
        )}
      </div>
    </div>
  );
}