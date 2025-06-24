'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/TentangKami' },
    { label: 'Kontak', href: '/Kontak' },
  ];

  return (
    <div className="bg-white px-4 md:px-8 py-0 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center text-sm md:text-base font-semibold text-gray-800">
          <img src="/images/logo.png" alt="Logo" className="w-6 h-6 mr-2" />
          PT DAHLIA GLOBAL INDO
        </div>

        {/* Tombol Menu untuk Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          <Menu size={24} />
        </button>

        {/* Navigasi */}
        <div
          className={`${
            menuOpen ? 'block mt-4' : 'hidden'
          } md:flex items-center space-x-4 md:mt-0`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium px-4 py-2 ${
                isActive(item.href)
                  ? 'bg-yellow-400 text-black rounded-b-xl shadow-md'
                  : 'text-black hover:text-yellow-500'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Hubungi Kami */}
          <a
            href="https://wa.me/6285829764860?text=Hallo,%20saya%20mau%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 md:mt-0 bg-gray-200 hover:bg-gray-300 text-sm md:text-base font-semibold px-4 py-1 md:px-6 md:py-2 rounded-full text-black"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
