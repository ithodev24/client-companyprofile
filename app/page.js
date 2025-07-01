"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import layananKami from "@/data/layanan";
import kenapaKami from "@/data/kenapakami";
import AnimatePage from "./components/AnimatePage";
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
            style={{ objectFit: "cover", zIndex: 1 }}
            priority
          />
          <div className="absolute inset-0 z-10" />

          <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-32 text-white">
            <h1
              className="text-2xl md:text-4xl lg:text-5xl font-extralight leading-snug mb-4"
              style={{ color: "#002F66" }}
            >
              Yukk!
              <br />
              Bangun Gaya Hidup Lebih Praktis <br />
              dengan Layanan Rental dari <br />
              <span className="text-yellow-400" style={{ color: "#F7C00B" }}>
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
              <button className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-l-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-900 before:to-blue-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out">
                <span className="relative z-10">Kunjungi Layanan Kami</span>
              </button>
              <button className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-8 py-4 rounded-r-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-blue-900 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out">
                <span className="relative z-10">Hubungi Kami</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="layanankami"
          className="relative py-12 text-center z-10 px-4 pb-32 md:pb-40 min-h-160"
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
              {/* CARD */}
              {layananKami.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-xl rounded-lg flex flex-col transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className={`text-sm text-gray-600 text-justify`}>
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

        {/* Container untuk background transition */}
        <div className="relative">
          <div
            className="h-auto w-full"
            style={{
              backgroundImage: "url('/images/kenapakami.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Berita Artikel */}
            <div className="relative left-1/2 -translate-x-1/2 -translate-y-32 z-20 w-full max-w-7xl">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src="/images/iphonesection.png"
                      alt="iPhone Rental"
                      className="w-full object-cover rounded-t-xl max-h-56 sm:max-h-72 md:max-h-none"
                    />
                    <Link href="/detail">
                      <button className="absolute cursor-pointer bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white text-[12px] sm:text-sm text-gray-600 border border-gray-300 px-2 sm:px-4 py-1 rounded hover:bg-gray-100 shadow">
                        Lihat Detail Artikel
                      </button>
                    </Link>
                  </div>

                  {/* Konten teks */}
                  <div className="relative p-3 sm:p-6">
                    <h3 className="text-sm sm:text-lg font-semibold mb-2 leading-snug">
                      iPhone untuk Disewa: Solusi Cerdas di Era Digital
                    </h3>
                    <p className="text-xs sm:text-base text-gray-700 text-justify leading-relaxed">
                      Di era serba digital saat ini, memiliki perangkat canggih
                      seperti iPhone menjadi kebutuhan penting bagi banyak
                      orang—baik untuk pekerjaan, bisnis, maupun gaya hidup.
                      Namun, tak semua orang siap untuk berinvestasi besar demi
                      memiliki satu unit iPhone terbaru. Di sinilah layanan
                      rental iPhone dari{" "}
                      <span className="font-bold">Pixelnesia</span> hadir
                      sebagai solusi cerdas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kenapa Harus Kami */}
            <section style={{ marginTop: "-64px" }} id="kenapakami">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 pb-8 gap-8">
                {/* Kiri: Judul */}
                <div className="w-1/2">
                  <h1 className="text-2xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] font-bold text-black md:ml-20">
                    Kenapa <br className="hidden sm:block" /> harus{" "}
                    <br className="hidden sm:block" /> memilih{" "}
                    <br className="hidden sm:block" /> Kami?
                  </h1>
                </div>

                {/* Kanan: Box List */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  {kenapaKami.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div
                        className="bg-white rounded-xl shadow-md px-4 sm:px-6 py-3 flex justify-between items-center text-sm sm:text-[15px] font-semibold text-black cursor-pointer transition-all duration-300 hover:shadow-lg"
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

                      {/* Dropdown Content dengan Transisi */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === idx
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-white rounded-b-xl shadow-md px-4 sm:px-6 py-3 mt-1 text-md text-gray-600 break-words">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      <Footer />
      </AnimatePage>
    </div>
  );
}
