import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: '首頁', href: '/' },
  { name: '公司簡介', href: '/about' },
  { name: '業務範圍', href: '/services' },
  { name: '工程案例', href: '/projects' },
  { name: '服務價目', href: '/pricing' },
  { name: '我們客戶', href: '/clients' },
  { name: '常見問題', href: '/faq' },
  { name: '聯繫我們', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="頂部導航">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="同發冷氣工程有限公司"
                width={180}
                height={40}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:ml-6 md:flex md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">打開主菜單</span>
              {/* 菜单图标 */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* 关闭图标 */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
} 