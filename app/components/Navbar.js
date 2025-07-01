"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentangkami" },
    { label: "Artikel", href: "/artikel" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <div className="bg-white px-4 md:px-8 py-0 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center text-sm md:text-base font-semibold text-gray-800 transition-all duration-300">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-16 mr-2 transition-transform duration-300 hover:scale-105"
          />
          PT DAHLIA GLOBAL INDO
        </div>

        {/* Tombol Menu untuk Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigasi */}
        <div
          className={`${
            menuOpen
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-2"
          } md:opacity-100 md:translate-y-0 md:flex items-center space-x-4 md:mt-0 absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block md:inline-block text-md font-medium px-4 py-2 mb-2 md:mb-0 rounded-b- lg md:rounded-b-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive(item.href)
                  ? "bg-yellow-400 text-black shadow-md"
                  : "text-black hover:text-yellow-500 hover:bg-yellow-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Hubungi Kami */}
          <a
            href="https://wa.me/6285829764860?text=Hallo,%20saya%20mau%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 md:mt-0 bg-gray-200 hover:bg-gray-300 text-sm md:text-base px-4 py-1 md:px-6 md:py-2 rounded-full text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
