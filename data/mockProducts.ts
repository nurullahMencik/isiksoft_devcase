import { Product } from '@/components/ProductTable/ProductTable';

export const mockProducts: Product[] = [
  {
    id: 1,
    image: "/backpack.png", 
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    category: 'men\'s clothing',
    price: 109.95,
    rating: {
      rate: 3.9,
      count: 120
    },
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday gear...',
    status: 'Active'
  },
  {
    id: 2,
    image: '/casual.png', 
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    category: 'men\'s clothing',
    price: 22.3,
    rating: {
      rate: 4.1,
      count: 259
    },
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing...',
    status: 'Draft'
  },
  {
    id: 3,
    image: '/ceket.png', 
    title: 'Mens Cotton Jacket',
    category: 'men\'s clothing',
    price: 55.99,
    rating: {
      rate: 4.7,
      count: 500
    },
    description: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for casual wear, business, dates, parties and outdoor sports activities like hiking, running, cycling, fishing...',
    status: 'Pending'
  },
  {
    id: 4,
    image: '/t-shirt.png', 
    title: 'Mens Casual Slim Fit',
    category: 'men\'s clothing',
    price: 15.99,
    rating: {
      rate: 2.1,
      count: 430
    },
    description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    status: 'Active'
  }
];

export const mockApiData = {
  products: mockProducts,
  totalProducts: 20,
  totalPages: 5,
  currentPage: 1,
  itemsPerPage: 4
};