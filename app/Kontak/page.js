import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function KontakKami() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Box Kuning */}
      <div className="px-4 sm:px-8 md:px-20 bg-white pt-24">
        <div className="relative bg-yellow-400 rounded-b-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-6 min-h-[400px]">
          
          {/* Info Kontak */}
          <div className="flex-1 text-black z-10">
            <h2 className="text-2xl font-bold mb-8">Kontak Kami</h2>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-semibold w-40">Alamat Email</span>
                <span>: ptdahliaglobalindo@gmail.com</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-semibold w-40">Nomor Telepon</span>
                <span>: +62 858-2976-4860</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-semibold w-40">Alamat</span>
                <span>: Jl. Kebon Kawung No.49, Pasir Kaliki, Kec. Cicendo, Kota Bandung, Jawa Barat 40171, Indonesia</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-semibold w-40">Jam Operasional</span>
                <span>: Senin - Minggu : 08.00 - 22.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Maps */}
          <div className="flex-1 relative z-0">
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Jl.+Kebon+Kawung+No.49,+Pasir+Kaliki,+Cicendo,+Bandung&output=embed"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Tombol Sosial Media */}
        <div className="mt-6 flex flex-col gap-3 items-start w-full pl-2 sm:pl-7 mb-16">
          <a
            href="https://wa.me/6285829764860"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full max-w-xs px-4 py-2 bg-white rounded-xl text-green-800 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            WhatsApp
            <img src="/images/logos_whatsapp-icon.png" alt="WA" className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/dahliaquranissiva?igsh=MTBmcjl5dDZpNzBpaA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full max-w-xs px-4 py-2 bg-white rounded-xl text-pink-500 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            Instagram
            <img src="/images/logos_instagram-icon.png" alt="IG" className="w-5 h-5" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
