"use client";

import { useState } from "react";
import Navbar from "../components/Navbar/Company/Navbar";
import Footer from "../components/Footer";
import Sejarah from "../components/Sejarah";
import { ChevronLeft, ChevronRight } from "lucide-react";

const documents = [
  { img: "/images/dokumen1.png" },
  { img: "/images/dokumen2.png" },
  { img: "/images/dokumen3.png" },
  { img: "/images/dokumen4.png" },
];

export default function TentangKami() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? documents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === documents.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Background and Navbar Section */}
      <div className="bg-white relative">
        <div className="relative h-[600px] text-center">
          <img
            src="/images/tentangkami_icon_bg.png"
            alt="Background with Icons"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Navbar Image */}
          <img
            src="/images/tentangkami.png"
            alt="Navbar Image"
            className="absolute top-0 w-full h-56 object-cover"
          />

          {/* Company Name and Description */}
          <div className="absolute top-20 w-full text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
              PT DAHLIA GLOBAL INDO
            </h1>
            <p className="text-white text-sm sm:text-base mt-2 font-medium">
              Perusahaan kami merupakan penyedia layanan rental terpercaya yang
              menawarkan<br />
              solusi sewa motor, iPhone, dan apartemen secara mudah, aman, dan
              efisien.
            </p>
          </div>

          {/* Team Section */}
          <div className="absolute bottom-0 w-full px-4 py-6">
            <div className="flex justify-center gap-4 sm:gap-6 items-end flex-wrap max-w-6xl mx-auto">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-md w-40 sm:w-44 text-center">
                <img
                  src="/images/kontenkreator.png"
                  alt="Diana Putri, Content Creator"
                  className="object-contain w-full h-48"
                />
                <div className="py-2">
                  <h3 className="text-xs text-gray-800">Konten Kreator</h3>
                  <p className="text-sm font-semibold text-gray-600">
                    Diana Putri
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-md w-40 sm:w-44 text-center mt-6">
                <img
                  src="/images/admin.png"
                  alt="Amelia Rahayu, Admin"
                  className="object-contain w-full h-48"
                />
                <div className="pb-4">
                  <h3 className="text-xs text-gray-800">Admin</h3>
                  <p className="text-sm font-semibold text-gray-600">
                    Amelia Rahayu
                  </p>
                </div>
              </div>

              {/* Team Member 3 (Owner) */}
              <div className="bg-white rounded-lg shadow-lg w-48 sm:w-60 text-center -mt-12">
                <img
                  src="/images/owner.png"
                  alt="Dahlia Febriani, Owner"
                  className="object-contain w-full h-56"
                />
                <div className="py-2">
                  <h3 className="text-xs text-gray-800">Pemilik Perusahaan</h3>
                  <p className="text-sm font-semibold text-gray-600">
                    Dahlia Qurratu Siva SM, M.Kom
                  </p>
                  <p className="text-xs text-gray-500">
                    ⁠Jakarta, 20 Januari 2002 - 08979156133
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white rounded-lg shadow-md w-40 sm:w-44 text-center mt-10">
                <img
                  src="/images/keuangan.png"
                  alt="Evi Dian Nuke, Finance"
                  className="object-contain w-full h-48"
                />
                <div className="pb-4">
                  <h3 className="text-xs text-gray-800">Keuangan</h3>
                  <p className="text-sm font-semibold text-gray-600">
                    Evi Dian Nuke
                  </p>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="bg-white rounded-lg shadow-md w-40 sm:w-44 text-center">
                <img
                  src="/images/driver.png"
                  alt="Aldi Hidayat, Driver"
                  className="object-contain w-full h-48"
                />
                <div className="py-2">
                  <h3 className="text-xs text-gray-800">Driver</h3>
                  <p className="text-sm font-semibold text-gray-600">
                    Aldi Hidayat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sejarah Section */}
      <Sejarah />

      {/* Visi Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-transparent p-0 rounded-lg text-black transform translate-y-[-50px]">
          <div className="text-center bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 inline-block relative">
              VISI
            </h2>
            <div className="flex justify-center">
              <span className="block h-[3px] bg-black w-[50%] sm:w-[50%] max-w-6xl mt-1"></span>
            </div>
            <p className="text-sm sm:text-base text-center leading-relaxed mt-4">
              Menjadi perusahaan penyedia jasa penyewaan apartemen, kendaraan, dan
              peralatan<br />
              dokumentasi yang terpercaya, inovatif, dan terdepan dalam memberikan
              kemudahan bagi masyarakat urban di Indonesia.
            </p>
          </div>
        </div>
      </div>

{/* Misi Section */}
<div className="w-full px-0 md:px-0 py-10 bg-white flex flex-col md:flex-row items-start justify-between gap-6 mx-auto">
  {/* Left Column: Stacked Images */}
  <div className="relative w-fit h-auto">
    <img
      src="/images/misi_bawah.png"
      alt="Background Image"
      className="absolute top-0 left-0 w-56 md:w-80 rounded-xl z-0"
    />
    <img
      src="/images/misi_atas.png"
      alt="Main Image"
      className="relative ml-20 mt-20 w-72 md:w-100  rounded-xl shadow-lg z-10"
    />
  </div>

  {/* Right Column: Misi Label and List */}
  <div className="flex-1">
    <div className="flex justify-start md:justify-end mb-6">
      <div className="flex items-center justify-center bg-yellow-300 px-6 h-16 rounded-l-full shadow-md">
        <h2 className="text-white font-bold text-xl">MISI</h2>
      </div>
    </div>
    <div className="space-y-4 ml-0 md:ml-[24%]"> {/* Menambahkan margin kiri untuk menggeser ke kanan */}
      {[
        "Menyediakan layanan penyewaan apartemen yang nyaman, aman, dan strategis untuk memenuhi kebutuhan hunian modern.",
        "Menawarkan layanan rental motor yang praktis, terjangkau, dan mendukung mobilitas harian pelanggan.",
        "Menyediakan layanan sewa kamera berkualitas untuk mendukung berbagai kebutuhan dokumentasi pribadi dan profesional.",
        "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan prima, kepercayaan, dan konsistensi.",
        "Berinovasi dalam pengembangan layanan berbasis teknologi untuk meningkatkan kenyamanan, efisiensi, dan kepuasan pelanggan.",
      ].map((text, idx) => (
        <div
          key={idx}
          className="flex items-start bg-gray-200 p-4 rounded-lg shadow-md w-[100%]"
        >
          <div className="bg-yellow-400 text-red-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold flex-shrink-0">
            {idx + 1}
          </div>
          <p className="text-gray-800 text-sm leading-relaxed flex-1">{text}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Documents Section (Carousel) */}
      <div className="relative w-full bg-yellow-400 py-10 overflow-hidden">
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={handlePrev}
            aria-label="Previous document"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto px-8">
            {documents.map((doc, i) => (
              <div
                key={i}
                className={`transition-opacity duration-300 ${
                  i >= index && i < index + 4 ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={doc.img}
                  alt={doc.title}
                  className="w-72 h-auto mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center mt-2 font-medium text-gray-800">{doc.title}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next document"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}