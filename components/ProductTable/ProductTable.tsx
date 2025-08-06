
import Image from 'next/image';


export interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
  status: 'Active' | 'Draft' | 'Pending'; 
}

interface ProductTableProps {
  products: Product[];
}

// Basit bir durum rozeti componenti
const ProductStatusBadge = ({ status }: { status: Product['status'] }) => {
  let bgColor = 'bg-gray-200';
  let textColor = 'text-gray-800';

  switch (status) {
    case 'Active':
      bgColor = 'bg-green-100';
      textColor = 'text-green-800';
      break;
    case 'Draft':
      bgColor = 'bg-yellow-100';
      textColor = 'text-yellow-800';
      break;
    case 'Pending':
      bgColor = 'bg-red-100';
      textColor = 'text-red-800';
      break;
    default:
      bgColor = 'bg-gray-200';
      textColor = 'text-gray-800';
      break;
  }

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bgColor} ${textColor}`}>
      {status}
    </span>
  );
};


export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating (Count)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span> {/* Erişilebilirlik için */}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.length === 0 ? (
            <tr>
              <td colSpan={8} className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                No products found.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={48}
                      height={48}
                      className="rounded-md object-cover"
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="text-sm font-medium text-gray-900">{product.title}</div>
                  <div className="text-sm text-gray-500 mt-1">
                      {/* Mock veriden gelen status'u kullanıyoruz */}
                      <ProductStatusBadge status={product.status} />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ⭐ {product.rating.rate} ({product.rating.count})
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                  {product.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}