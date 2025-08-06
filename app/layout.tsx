import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Işıksoft Frontend DevCase',
  description: 'Işıksoft Frontend DevCase Project with Next.js & Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100"> 
          
          <aside className="w-full md:w-64 bg-white shadow-md p-4 flex-shrink-0"> 
            {/* Mobilde hamburger menü veya üst bar için yer açılabilir */}
            <nav className="hidden md:block"> {/* Menüyü küçük ekranda gizle */}
              <ul>
                <li className="mb-2">
                  <a href="#" className="block py-2 px-3 rounded-md text-gray-700 hover:bg-gray-200 font-semibold bg-gray-200">
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block py-2 px-3 rounded-md text-gray-700 hover:bg-gray-200">
                    Orders
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block py-2 px-3 rounded-md text-gray-700 hover:bg-gray-200">
                    Customers
                  </a>
                </li>
              </ul>
            </nav>

            <div className="md:hidden flex justify-between items-center p-2 bg-white border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-800">Işıksoft</h1>
              {/* Hamburger menü ikonu buraya gelecek */}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 p-4 md:p-8 overflow-y-auto"> 
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}