import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 border-t border-gray-100">
      {/* Ornamen bunga kiri atas */}
      <img
        src="/images/logo_footer_kiri.png"
        alt="Flower Top Left"
        className="absolute top-0 left-0 w-130 z-10"
      />

      {/* Ornamen bunga kanan bawah */}
      <img
        src="/images/logo_footer_kanan.png"
        alt="Flower Bottom Right"
        className="absolute bottom-0 right-0 mb-10 w-100 z-10"
      />

      {/* Konten utama */}
      <div className="relative z-20 max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 place-items-center lg:place-items-start text-center lg:text-left">
          {/* Kolom 1: Media Sosial & Bank */}
          <div className="ml-0 lg:-ml-42 sm:ml-0 md:ml-0 flex flex-col gap-6 items-center md:items-start m-auto">
            {/* <div className="text-center md:text-left"> */}

            {/* Ikon Media Sosial */}
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="#"
                className="group bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <img
                  src="/images/icon_ig.png"
                  alt="Instagram"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="#"
                className="group bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <img
                  src="/images/icon_wa.png"
                  alt="WhatsApp"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Logo Bank */}
            <div className="rounded-r-full bg-yellow-400 p-2 px-4 flex gap-2">
              <img
                src="/images/pm_bca.png"
                alt="Logo Bank"
                className="h-8 w-auto object-contain mx-auto md:mx-0"
              />{" "}
              <img
                src="/images/pm_bni.png"
                alt="Logo Bank"
                className="h-8 w-auto object-contain mx-auto md:mx-0"
              />{" "}
              <img
                src="/images/pm_mandiri.png"
                alt="Logo Bank"
                className="h-8 w-auto object-contain mx-auto md:mx-0"
              />{" "}
              <img
                src="/images/pm_qris.png"
                alt="Logo Bank"
                className="h-8 w-auto object-contain mx-auto md:mx-0"
              />
            </div>
            {/* </div> */}
          </div>

          {/* Kolom 2: Halaman Utama */}
          <div className="lg:col-span-1 mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative">
              Halaman
              <hr className="w-16 border-yellow-300 border-t-4 mx-auto lg:mx-0" />
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentangkami"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div className="lg:col-span-1 mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative">
              Layanan
              <hr className="w-16 border-yellow-300 border-t-4 mx-auto lg:mx-0" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#layanankami"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="/artikel"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Artikel
                </a>
              </li>
              <li>
                <a
                  href="/#kenapakami"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Keunggulan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Dokumen
                </a>
              </li>
              <li>
                <a
                  href="/tentangkami#sejarah"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Sejarah Perusahaan
                </a>
              </li>
              <li>
                <a
                  href="/tentangkami#visi"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                >
                  {/* <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span> */}
                  Visi & Misi
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div className="lg:col-span-1 mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative">
              Hubungi Kami
              <hr className="w-16 border-yellow-300 border-t-4 mx-auto lg:mx-0" />
            </h3>

            <div className="space-y-5">
              {/* Alamat */}
              <div className="flex items-start space-x-3">
                {/* <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p>Jl. Kebon Kawung No.49, Pasir Kaliki,</p>
                  <p>Kec. Cicendo, Kota Bandung,</p>
                  <p>Jawa Barat 40171, Indonesia</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:ptdahliglobalindo@gmail.com"
                  className="text-sm text-gray-600 hover:text-yellow-600 transition-colors duration-300"
                >
                  ptdahliglobalindo@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                {/* <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center"> */}
                <svg
                  className="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {/* </div> */}
                <a
                  href="tel:+6285829764860"
                  className="text-sm text-gray-600 hover:text-yellow-600 transition-colors duration-300"
                >
                  (+62) 858-2976-4860
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-20 bg-yellow-400 border-t border-yellow-500">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-800">
            <p className="mb-2 sm:mb-0 font-medium">
              ©Riyadatunnisa. Hak Cipta Dilindungi oleh undang-undang.
            </p>
            <a
              href="#"
              className="font-semibold hover:text-gray-900 transition-colors duration-300"
            >
              Powered by GoEnt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
