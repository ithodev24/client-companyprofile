"use client";

import { useState } from "react";

export default function KenapaHarusKami() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Pelayanan 24 Jam",
      description:
        "Perusahaan kami menyediakan layanan rental dengan sistem pelayanan 24 jam, siap membantu Anda kapan saja, tak perlu khawatir, cukup sewa, pakai, dan nikmati perjalanan Anda bersama kami.",
    },
    {
      title: "Harga Terjangkau",
      description:
        "Kami menawarkan layanan rental dengan harga kompetitif, memberikan kualitas pelayanan dan kenyamanan pelanggan yang terjamin.",
    },
    {
      title: "Terpercaya",
      description:
        "Kami adalah penyedia layanan rental yang terpercaya, dengan tim yang profesional dan sistem yang terjamin, memberikan kualitas pelayanan yang terbaik untuk Anda.",
    },
    {
      title: "Banyak Unit Tersedia",
      description:
        "Kami menyediakan berbagai pilihan unit rental dengan kenyamanan dan keamanan yang terjamin, cocok untuk berbagai kebutuhan Anda.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/kenapakami.png')" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 py-12 sm:py-16 gap-8">
        {/* Kiri: Judul */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] font-bold text-black md:ml-20">
            Kenapa <br className="hidden sm:block" /> harus <br className="hidden sm:block" /> memilih <br className="hidden sm:block" /> Kami?
          </h1>
        </div>

        {/* Kanan: Box List */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="relative">
              <div
                className="bg-white rounded-xl shadow-md px-4 sm:px-6 py-3 flex justify-between items-center text-sm sm:text-[15px] font-semibold text-black cursor-pointer"
                onClick={() => toggleDropdown(idx)}
              >
                {item.title}
                <span className="text-red-500 text-base">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </div>
              {openIndex === idx && (
                <div className="bg-white rounded-b-xl shadow-md px-4 sm:px-6 py-3 mt-1 text-xs sm:text-[13px] text-gray-600 break-words">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
