"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatePage from "./components/AnimatePage";

import layananKami from "@/data/layanan";
import kenapaKami from "@/data/kenapakami";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatePage>
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] md:h-[90vh] lg:h-screen">
          <Image
            src="/images/heromainbg.png"
            alt="Gedung"
            fill
            priority
            style={{ objectFit: "cover", zIndex: 1 }}
          />
          <div className="absolute inset-0 z-10" />
          <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-32 text-white">
            <h1
              className="text-2xl md:text-4xl lg:text-[2.75rem] font-extralight leading-snug mb-4"
              style={{ color: "#002F66" }}
            >
              Yukk!
              <br />
              Bangun Gaya Hidup Lebih Praktis <br />
              dengan Layanan Rental dari <br />
              <span style={{ color: "#F7C00B" }}>
                PT Dahlia Global Indo
              </span>
            </h1>
            <p
              className="text-sm md:text-base lg:text-lg mb-6 max-w-xl"
              style={{ color: "#002F66" }}
            >
              Temukan kenyamanan dan kemudahan dalam setiap kebutuhan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="#layanankami">
                <button className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-l-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-900 before:to-blue-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out">
                  <span className="relative z-10">Kunjungi Layanan Kami</span>
                </button>
              </Link>
              <Link href="/Kontak">
                <button className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-8 py-4 rounded-r-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-blue-900 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out">
                  <span className="relative z-10">Hubungi Kami</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Layanan Kami */}
        <section
          id="layanankami"
          className="relative py-12 text-center z-10 px-4 pb-16 md:pb-20"
          style={{
            backgroundImage: "url('/images/layanankamibg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">
              LAYANAN KAMI
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {layananKami.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-xl rounded-lg flex flex-col transition-transform duration-300 hover:scale-105"
                >
                  {/* <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  /> */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg text-black font-semibold">{card.title}</h3>
                      <p className="text-sm text-gray-600 text-justify">
                        <span className={card.highlight}>{card.title}</span>{" "}
                        {card.desc.replace(card.title, "")}
                      </p>
                    </div>
                    {card.button}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kenapa Kami */}
        <section
          id="kenapakami"
          className="py-16 px-4 sm:px-6"
          style={{
            backgroundImage: "url('/images/kenapakami.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Kiri */}
            <div className="md:w-1/2">
              <h1 className="text-2xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] font-bold text-black">
                Kenapa <br className="hidden sm:block" />
                harus <br className="hidden sm:block" />
                memilih <br className="hidden sm:block" />
                Kami?
              </h1>
            </div>

            {/* Kanan */}
            <div className="md:w-1/2 flex flex-col gap-4">
              {kenapaKami.map((item, idx) => (
                <div key={idx} className="relative">
                  <div
                    className="bg-white rounded-xl shadow-md px-4 sm:px-6 py-3 flex justify-between items-center text-sm sm:text-base font-semibold text-black cursor-pointer transition-all duration-300 hover:shadow-lg"
                    onClick={() => toggleDropdown(idx)}
                  >
                    {item.title}
                    <span
                      className={`text-red-500 text-base transition-transform duration-300 ${
                        openIndex === idx ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === idx
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white rounded-b-xl shadow-md px-4 sm:px-6 py-3 mt-1 text-sm text-gray-600 break-words">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatePage>
      <Footer />
    </div>
  );
}
