import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IphoneSection from './components/IphoneSection';
import KenapaHarusKami from './components/KenapaHarusKami';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

      {/* Services Section */}
      <section
        className="relative py-12 text-center z-10 px-4"
        style={{
          backgroundImage: "url('/images/layanankamibg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">LAYANAN KAMI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* CARD */}
            {[
              {
                title: 'RENTALDAY',
                image: '/images/layanan1.png',
                desc: `RENTALDAY siap menemani setiap perjalanan Anda di kota. Tak perlu lagi khawatir soal kendaraan, cukup sewa, pakai, dan melaju bersama kami.`,
                highlight: 'text-red-600',
                button: (
                  <Link href="/RentalDay" passHref>
                    <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 w-full">
                      Kunjungi Rentalday
                    </button>
                  </Link>
                ),
              },
              {
                title: 'PIXELNESIA',
                image: '/images/layanan2.png',
                desc: `PIXELNESIA menyediakan berbagai pilihan smartphone terbaru dengan sistem sewa harian, mingguan, atau bulanan. Hemat biaya dan praktis digunakan.`,
                highlight: 'text-yellow-500',
                button: (
                  <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 w-full">
                    Kunjungi Pixelnesia
                  </button>
                ),
              },
              {
                title: 'PERFECT ROOM',
                image: '/images/layanan3.png',
                desc: `PERFECT ROOM memberikan kenyamanan dengan layanan profesional dan harga sewa yang kompetitif. Booking mudah, hunian langsung siap pakai.`,
                highlight: 'text-yellow-800',
                button: (
                  <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 w-full">
                    Kunjungi Perfect Room
                  </button>
                ),
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg flex flex-col">
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className={`text-sm text-gray-600 text-justify`}>
                      <span className={card.highlight}>{card.title}</span>{' '}
                      {card.desc.replace(card.title, '')}
                    </p>
                  </div>
                  {card.button}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating iPhone Section */}
      <div className="relative z-20 w-full -mt-2">
        <div
          className="w-full"
          style={{
            backgroundImage: "url('/images/kenapakami.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <IphoneSection />
        </div>
      </div>

      <KenapaHarusKami />
      <Footer />
    </div>
  );
}
