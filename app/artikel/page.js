"use client";
import { FaSearch, FaSpinner } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { FaSearch } from "react-icons/fa";
// import articles from "@/data/artikel";
import Link from "next/link";
import AnimatePage from "../components/AnimatePage";
import { useState, useEffect } from "react";

export default function Artikel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3333/article")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Gagal fetch artikel:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  function formatTanggalIndo(tanggalString) {
    const tanggal = new Date(tanggalString);
    return tanggal.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <FaSpinner className="text-4xl text-yellow-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        {/* Header Section */}
        <div className="bg-white px-4 sm:px-8 md:px-20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Left side - Title and description */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
                ARTIKEL KAMI
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl">
                PT Dahlia Global Indo aktif menginformasikan berbagai kegiatan
                untuk meningkatkan kualitas layanan di bidang rental
              </p>
            </div>

            {/* Right side - Search */}
            <div className="w-full lg:w-auto lg:min-w-[300px]">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                <input
                  type="text"
                  placeholder="Cari berita"
                  className="bg-transparent outline-none text-black text-sm md:text-base w-full"
                />
                <FaSearch className="text-gray-500 text-lg cursor-pointer ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="bg-[#FFDD00] px-4 sm:px-8 md:px-20 py-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link href={`/artikel/${article.slug}`} key={article.id}>
                <div
                  key={article.id}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 shadow-xl"
                >
                  {/* Article Image */}
                  <div className="w-full h-32 relative overflow-hidden">
                    <img
                      src={`http://localhost:3333/${article.thumbnail}`}
                      alt={article.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-black mb-2 line-clamp-1">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.content}
                    </p>
                    <p className="text-xs text-gray-500 text-end">
                      {formatTanggalIndo(article.publishedAt)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </AnimatePage>
    </div>
  );
}
