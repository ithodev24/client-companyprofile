import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatePage from "../components/AnimatePage";

export default function KontakKami() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        {/* Container Utama */}
        <div className="px-4 sm:px-8 md:px-20 bg-white relative pb-4 md:pb-6 lg:pb-8">
          {/* Box Kuning dengan Maps */}
          <div className="relative bg-yellow-300 rounded-b-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-6 min-h-[500px] shadow-xl">
            {/* Info Kontak */}
            <div className="flex-1 text-[#474747] z-10 py-6 lg:py-12 bg-white/50 rounded-lg ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 lg:mb-8 px-4 sm:px-8 lg:px-32 text-center">
                Kontak Kami
              </h2>

              <div className="space-y-4 lg:space-y-6 text-sm md:text-base px-4 sm:px-8 lg:px-20">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <span className="w-full sm:w-32 lg:w-40 mb-1 sm:mb-0 font-medium sm:font-normal">
                    Alamat Email
                  </span>
                  <span className="flex-1 break-all">
                    ptdahliaglobalindo@gmail.com
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start">
                  <span className="w-full sm:w-32 lg:w-40 mb-1 sm:mb-0 font-medium sm:font-normal">
                    Nomor Telepon
                  </span>
                  <span className="flex-1">+62 858-2976-4860</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start">
                  <span className="w-full sm:w-32 lg:w-40 mb-1 sm:mb-0 font-medium sm:font-normal">
                    Alamat
                  </span>
                  <span className="flex-1">
                    Jl. Kebon Kawung No.49, Pasir Kaliki, Kec. Cicendo, Kota
                    Bandung, Jawa Barat 40171, Indonesia
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start">
                  <span className="w-full sm:w-32 lg:w-40 mb-1 sm:mb-0 font-medium sm:font-normal">
                    Jam Operasional
                  </span>
                  <span className="flex-1">
                    Senin - Minggu : 08.00 - 22.00 WIB
                  </span>
                </div>
              </div>
            </div>

            {/* Maps dengan Overlay */}
            <div className="flex-1 relative">
              {/* Maps Container */}
              <div className="relative w-full h-64 lg:h-full shadow-lg">
                <div className="w-full">
                  <a
                    href="https://www.google.com/maps?q=Jl.+Kebon+Kawung+No.49,+Pasir+Kaliki,+Cicendo,+Bandung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-white text-blue-500 py-2 lg:py-3 rounded-t-lg text-xs lg:text-sm font-medium transition-colors"
                  >
                    Klik untuk Membuka Maps
                  </a>
                </div>

                <iframe
                  src="https://www.google.com/maps?q=Jl.+Kebon+Kawung+No.49,+Pasir+Kaliki,+Cicendo,+Bandung&output=embed"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Info Box di bawah Maps */}
              <div className="absolute -bottom-12 lg:-bottom-22 md:-bottom-16 sm:-bottom-100 left-0 right-0 bg-white rounded-b-lg shadow-xl p-3 lg:p-4 mx-2 lg:mx-0">
                <p className="text-xs lg:text-md text-gray-700 font-medium">
                  Jl. Kebon Kawung No.49, Pasir Kaliki, Kec. Cicendo, Kota
                  Bandung, Jawa Barat 40171, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Tombol WhatsApp */}
          <div className="mt-20 lg:mt-6 flex flex-col gap-3 items-center lg:items-start w-full px-4 sm:px-8 lg:px-32">
            <a
              href="https://wa.me/6285829764860"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full max-w-xs px-4 py-3 bg-white rounded-xl text-green-800 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              WhatsApp
              <img
                src="/images/logos_whatsapp-icon.png"
                alt="WA"
                className="w-6 lg:w-8 h-6 lg:h-8"
              />
            </a>

            <a
              href="https://www.instagram.com/dahliaquranissiva?igsh=MTBmcjl5dDZpNzBpaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full max-w-xs px-4 py-3 bg-white rounded-xl text-pink-500 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              Instagram
              <img
                src="/images/logos_instagram-icon.png"
                alt="IG"
                className="w-6 lg:w-8 h-6 lg:h-8"
              />
            </a>
          </div>
        </div>
        <Footer />
      </AnimatePage>
    </div>
  );
}
