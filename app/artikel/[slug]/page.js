"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { HiArrowLeft } from "react-icons/hi";
import AnimatePage from "@/app/components/AnimatePage";
import { FaSpinner } from "react-icons/fa";

export default function DetailArtikel() {
  const { slug } = useParams();
  const [artikel, setArtikel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3333/article/${slug}`)
      .then((res) => res.json())
      .then((data) => setArtikel(data))
      .catch((err) => {
        console.error("Gagal mengambil data artikel:", err);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <FaSpinner className="text-4xl text-yellow-500 animate-spin" />
      </div>
    );
  }

  if (!artikel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Artikel tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        <div>
          <img
            src="/images/bgdetailartikel.png"
            alt="Navbar Image"
            className="w-full object-cover h-[320px]"
          />
          <button
            onClick={() => window.history.back()}
            className="cursor-pointer absolute top-24 left-12 bg-white/90 text-black px-3 py-3 rounded-full shadow font-medium flex items-center gap-2 hover:bg-gray-100 transition"
          >
            <HiArrowLeft className="text-xl" />
          </button>
        </div>

        <div className="relative z-10 -mt-48 px-4 sm:px-8 md:px-20 bottom-12">
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm border border-yellow-300 rounded-md shadow-lg py-8 px-6">
            <img
              src={`http://localhost:3333/${artikel.thumbnail}`}
              alt="Gambar Artikel"
              className="w-full h-64 object-cover rounded"
            />

            <div className="p-6">
              <h1 className="text-xl md:text-2xl font-bold text-black mb-4">
                {artikel.title}
              </h1>
              {artikel.content.split("\n").map((p, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-sm md:text-base mb-4 text-justify"
                >
                  {p.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </AnimatePage>
    </div>
  );
}
