"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/TentangKami" },
    { label: "Kontak", href: "/Kontak" },
  ];

  return (
    <nav className="bg-white px-4 md:px-8 py-0 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center text-base font-semibold text-gray-800">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="mr-2 hover:scale-105 transition-transform duration-300"
          />
          PT DAHLIA GLOBAL INDO
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 p-2 rounded hover:bg-gray-100"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop + Mobile */}
        <div
          className={`${
            menuOpen
              ? "block absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-40"
              : "hidden"
          } md:flex md:items-center md:static md:bg-transparent md:shadow-none md:p-0 transition-all duration-300 ease-in-out`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block md:inline-block px-4 py-2 text-sm md:text-base rounded transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-yellow-400 text-black rounded-b-xl shadow-md"
                  : "text-black hover:text-yellow-500 hover:bg-yellow-100"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Tombol WA */}
          <a
            href="https://wa.me/6285829764860"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline-block mt-2 md:mt-0 bg-gray-200 hover:bg-gray-300 text-sm md:text-base px-4 py-2 rounded-full text-black transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}
