"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sejarah from "../components/Sejarah";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import AnimatePage from "../components/AnimatePage";
import Image from "next/image";

const teamMembers = [
  {
    Image: "/images/kontenkreator.png",
    title: "Konten Kreator",
    name: "Diana Putri",
  },
  {
    Image: "/images/admin.png",
    title: "Admin",
    name: "Amelia Rahayu",
  },
  {
    Image: "/images/owner.png",
    title: "Pemilik Perusahaan",
    name: "Dahliana Quranis Siva SM, M.Kom",
    extra: "Jakarta, 20 Januari 2002 - 08979156133",
  },
  {
    Image: "/images/keuangan.png",
    title: "Keuangan",
    name: "Evi Dian Nuke S",
  },
  {
    Image: "/images/driver.png",
    title: "Driver",
    name: "Aldi Hidayat",
  },
];

const documents = [
  {
    Image: "/images/dokumen1.png",
    isi: ["/images/isidokumen1.png"],
  },
  {
    Image: "/images/dokumen2.png",
    isi: [
      "/images/NIB - PTP DAHLIA GLOBAL INDO-1.png",
      "/images/NIB - PTP DAHLIA GLOBAL INDO-2.png",
      "/images/NIB - PTP DAHLIA GLOBAL INDO-3.png",
    ],
  },
  {
    Image: "/images/dokumen3.png",
    isi: ["/images/isisk.jpg"],
  },
  {
    Image: "/images/pernyataanmandiri.png",
    isi: ["/images/isipernyataanmandiri.jpg"],
  },
  {
    Image: "/images/dokumendaftar.png",
    isi: ["/images/isisktpajak.jpg"],
  },
  {
    Image: "/images/dok-npwp.png",
    isi: ["/images/isi-npwp.png"],
  },
  {
    Image: "/images/dok-sktp.png",
    isi: ["/images/isi-sktp.png"],
  },
  {
    Image: "/images/dok-sppl.png",
    isi: [
      "/images/isi-sppl-1.png",
      "/images/isi-sppl-2.png",
    ],
  },
  {
    Image: "/images/dok-akun.png",
    isi: ["/images/isi-akun.png"],
  },
  {
    Image: "/images/dok-tataruang.png",
    isi: [
      "/images/isi-tataruang-1.png",
      "/images/isi-tataruang-2.png",
    ],
  },
];

export default function TentangKami() {
  const [index, setIndex] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0);
  const [mobileDocIndex, setMobileDocIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? Math.max(0, documents.length - 4) : prev - 1
    );
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= documents.length - 4 ? 0 : prev + 1));
  };

  const openModal = (doc) => {
    setSelectedDoc(doc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDoc(null);
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        {/* Header */}
        <div className="relative">
          <div className="relative h-[500px] sm:h-[600px] text-center">
            <Image
    src="/images/tentangkami_icon_bg.png"
    alt="Background"
    fill
    className="object-cover z-0"
  />
  <Image
    src="/images/tentangkami.png"
    alt="Overlay"
    fill
    className="object-cover"
    style={{ marginTop: "-380px" }}
  />
            <div className="absolute top-15 sm:top-10 w-full text-center px-4 z-20">
              <h1 className="text-2xl sm:text-4xl font-bold text-yellow-400">
                PT DAHLIA GLOBAL INDO
              </h1>
              <p className="text-white text-sm sm:text-base mt-2 font-medium hidden sm:block">
                Perusahaan kami merupakan penyedia layanan rental terpercaya
                yang menawarkan solusi <br></br> sewa motor, iPhone, dan
                apartemen secara mudah, aman, dan efisien.
              </p>
            </div>

            {/* Team Desktop */}
            <div className="absolute bottom-0 w-full py-6">
              <div className="hidden md:flex justify-center gap-4 sm:gap-6 items-end flex-wrap max-w-6xl mx-auto">
                {teamMembers.map((member, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg w-40 sm:w-44 text-center shadow-md"
                  >
                    {/* <Image
                      src={member.Image}
                      alt={member.title}
                      className="bg-cover mx-auto"
                    /> */}
                    <Image
                      src={member.Image}
                      alt={member.title}
                      width={150}
                      height={150}
                      className="object-cover mx-auto"
                    />
                    <div className="py-2">
                      <h3 className="text-xs text-gray-800">{member.title}</h3>
                      <p className="text-sm font-semibold text-gray-600">
                        {member.name}
                      </p>
                      {member.extra && (
                        <p className="text-xs text-gray-500">{member.extra}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Mobile */}
              <div className="flex md:hidden justify-center items-center gap-4 px-4">
                <button
                  onClick={() =>
                    setMobileTeamIndex((prev) =>
                      prev === 0 ? teamMembers.length - 1 : prev - 1
                    )
                  }
                  className="bg-white p-2 rounded-full shadow"
                >
                  <ChevronLeft />
                </button>
                <div className="bg-white rounded-lg w-64 text-center shadow-md">
                  {/* <Image
                    src={teamMembers[mobileTeamIndex].Image}
                    alt={teamMembers[mobileTeamIndex].title}
                    className="bg-cover mx-auto"
                  /> */}
                  <Image
  src={teamMembers[mobileTeamIndex].Image}
  alt={teamMembers[mobileTeamIndex].title}
  width={200}
  height={200}
  className="bg-cover mx-auto"
/>

                  <div className="py-2">
                    <h3 className="text-xs text-gray-800">
                      {teamMembers[mobileTeamIndex].title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600">
                      {teamMembers[mobileTeamIndex].name}
                    </p>
                    {teamMembers[mobileTeamIndex].extra && (
                      <p className="text-xs text-gray-500">
                        {teamMembers[mobileTeamIndex].extra}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() =>
                    setMobileTeamIndex((prev) =>
                      prev === teamMembers.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="bg-white p-2 rounded-full shadow"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section id="sejarah">
        <Sejarah />
        </section>

        {/* Visi */}
        <section id="visimisi">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-7">
          <div className="bg-transparent p-0 rounded-lg text-black transform translate-y-[-50px]">
            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 inline-block relative">
                VISI
              </h2>
              <div className="flex justify-center">
                <span className="block h-[3px] bg-black w-[50%] sm:w-[50%] max-w-6xl mt-1"></span>
              </div>
              <p className="text-sm sm:text-base text-center leading-relaxed mt-4">
                Menjadi perusahaan penyedia jasa penyewaan apartemen, kendaraan,
                dan peralatan
                <br />
                dokumentasi yang terpercaya, inovatif, dan terdepan dalam
                memberikan kemudahan bagi masyarakat urban di Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Misi Section */}
        <div className="w-full px-0 md:px-0 py-10 bg-white flex flex-col md:flex-row items-start justify-between gap-6 mx-auto">
          <div className="relative w-fit h-auto">
            {/* <Image
              src="/images/misi_bawah.png"
              alt="Background Image"
              className="absolute top-0 left-0 w-56 md:w-80 rounded-xl z-0"
            />
            <Image
              src="/images/misi_atas.png"
              alt="Main Image"
              className="relative ml-20 mt-20 w-72 md:w-100 rounded-xl shadow-lg z-10"
            /> */}
            <Image
  src="/images/misi_bawah.png"
  alt="Background Image"
  width={320} // misal: 320px = 20rem
  height={200} // bisa disesuaikan
  className="absolute top-0 left-0 w-56 md:w-80 rounded-xl z-0"
/>

<Image
  src="/images/misi_atas.png"
  alt="Main Image"
  width={400}
  height={300}
  className="relative ml-20 mt-20 w-72 md:w-100 rounded-xl shadow-lg z-10"
/>
          </div>
          <div className="flex-1">
            <div className="flex justify-end mb-6">
              <div className="flex items-center justify-center bg-yellow-400 h-16 shadow-md rounded-l-full md:rounded-l-full md:px-12 px-24 w-[220px] md:w-auto transition-all duration-300">
                <h2 className="text-white font-bold text-xl">MISI</h2>
              </div>
            </div>
            <div className="space-y-4 ml-4 mr-4 md:ml-[24%] md:mr-0">
              {[
                "Menyediakan layanan penyewaan apartemen yang nyaman, aman, dan strategis untuk memenuhi kebutuhan hunian modern.",
                "Menawarkan layanan rental motor yang praktis, terjangkau, dan mendukung mobilitas harian pelanggan.",
                "Menyediakan layanan sewa kamera berkualitas untuk mendukung berbagai kebutuhan dokumentasi pribadi dan profesional.",
                "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan prima, kepercayaan, dan konsistensi.",
                "Berinovasi dalam pengembangan layanan berbasis teknologi untuk meningkatkan kenyamanan, efisiensi, dan kepuasan pelanggan.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-gray-200 p-4 rounded-l-full shadow-md w-[100%]"
                >
                  <div className="bg-yellow-400 text-red-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-lg font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed flex-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        {/* Dokumen */}
        <section id="dokumen">
        <div className="relative w-full bg-gradient-to-br bg-[#FFDD00] py-12 overflow-hidden">
          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8 px-12 max-w-7xl mx-auto">
            <button
              onClick={handlePrev}
              className="z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaPlay className="w-3 h-3 text-yellow-400 rotate-180" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
              {documents.slice(index, index + 4).map((doc, i) => (
                <div
                  key={i}
                  className="group transition-all duration-500 ease-out transform hover:scale-105"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    {/* <Image
                      src={doc.Image}
                      alt={`Dokumen ${i + 1}`}
                      onClick={() => openModal(doc)}
                      className="w-72 h-auto mx-auto cursor-pointer transition-all duration-300 group-hover:brightness-105"
                    /> */}
                    <Image
                        src={doc.Image}
                        alt={`Dokumen ${i + 1}`}
                        width={288} // 72 * 4 px
                        height={200}
                        onClick={() => openModal(doc)}
                        className="mx-auto cursor-pointer transition-all duration-300 group-hover:brightness-105"
                      />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaPlay className="w-3 h-3 text-yellow-400" />
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex justify-center items-center gap-6 px-4">
            <button
              onClick={() =>
                setMobileDocIndex((prev) =>
                  prev === 0 ? documents.length - 1 : prev - 1
                )
              }
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaPlay className="w-3 h-3 text-yellow-400 rotate-180" />
            </button>

            <div className="w-[75%] relative">
              <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* <Image
                  src={documents[mobileDocIndex].Image}
                  alt={`Dokumen ${mobileDocIndex + 1}`}
                  onClick={() => openModal(documents[mobileDocIndex])}
                  className="w-full max-w-xs h-auto mx-auto cursor-pointer hover:brightness-105 transition-all duration-300"
                /> */}
                <Image
  src={documents[mobileDocIndex].Image}
  alt={`Dokumen ${mobileDocIndex + 1}`}
  width={300}
  height={200}
  onClick={() => openModal(documents[mobileDocIndex])}
/>
              </div>
            </div>

            <button
              onClick={() =>
                setMobileDocIndex((prev) =>
                  prev === documents.length - 1 ? 0 : prev + 1
                )
              }
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaPlay className="w-3 h-3 text-yellow-400" />
            </button>
          </div>
        </div>

        {/* Modal dengan Smooth Animation */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out bg-black/50 ${
            showModal
              ? "opacity-100 pointer-events-auto bg-opacity-60"
              : "opacity-0 pointer-events-none bg-opacity-0"
          }`}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden transition-all duration-300 ease-out transform ${
              showModal
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Detail Dokumen
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
            

            {/* Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              {selectedDoc && (
                <div
                  className={`grid gap-4 sm:gap-6 ${
                    selectedDoc.isi.length < 3
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {selectedDoc.isi.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="group overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Isi Dokumen ${idx + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-auto max-h-[350px] object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        </section>

        <Footer />
      </AnimatePage>
    </div>
  );
}
