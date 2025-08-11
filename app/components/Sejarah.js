import React from 'react';
import Image from 'next/image';

export default function Sejarah() {
  return (
    <div className="relative bg-[#FFC107] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Label Navbar */}
      <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-0 bg-white text-[#FBBF24] font-bold rounded-r-full px-4 sm:px-6 md:px-8 lg:px-16 py-2 sm:py-3 md:py-4 shadow text-base sm:text-lg md:text-xl lg:text-xl z-30">
        Sejarah Perusahaan
      </div>

      {/* Konten utama */}
      <div className="relative flex flex-col lg:flex-row w-full items-start justify-start px-2 sm:px-4 md:px-6 lg:px-0">
        {/* Teks box putih */}
        <div
          className="bg-white rounded-r-xl shadow-2xl z-20 relative w-full sm:w-[90%] md:w-[80%] lg:w-[750px] h-auto sm:h-[300px] md:h-[360px] lg:h-[420px] flex flex-col justify-center items-start py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-16 mt-6 sm:mt-8 md:mt-10 lg:mt-10 ml-0"
          style={{
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          }}
        >
          <div className="p-2 sm:p-4">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-l text-justify leading-relaxed">
              Didirikan oleh <strong>Dahliana Qur Anis Siva</strong>, PT Dahlia Global Indo hadir dengan semangat inovasi dan komitmen untuk memberikan layanan terbaik bagi pelanggan.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-l text-justify leading-relaxed mt-2 sm:mt-3 md:mt-4 lg:mt-4">
              Perjalanan bisnis dimulai dari penyewaan apartemen di Grand Kamala Lagoon, Bekasi, melalui unit <strong>Perfect Rooms</strong>. Seiring waktu dan dukungan pelanggan, perusahaan melebarkan sayap ke layanan rental motor di Bandung dengan brand <strong>Rentalday</strong>, serta sewa kamera untuk menunjang gaya hidup masyarakat urban yang dinamis.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-l text-justify leading-relaxed mt-2 sm:mt-3 md:mt-4 lg:mt-4">
              PT Dahlia Global Indo terus berkembang sebagai solusi mobilitas dan kebutuhan sewa modern di berbagai sektor.
            </p>
          </div>
        </div>

        {/* Gambar di bawah, posisi absolute */}
        <div className="absolute top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-52px] right-0 w-[60%] sm:w-[55%] md:w-[55%] lg:w-[55%] z-10 hidden sm:hidden md:hidden lg:block">
          {/* <Image
            src="/images/sejarah.png"
            alt="Sejarah Perusahaan"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[490px] object-cover rounded-l-2xl shadow-xl"
          /> */}
          <Image
  src="/images/sejarah.png"
  alt="Sejarah Perusahaan"
  width={1200}
  height={800}
  className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[490px] object-cover rounded-l-2xl shadow-xl"
/>

        </div>
      </div>
    </div>
  );
}