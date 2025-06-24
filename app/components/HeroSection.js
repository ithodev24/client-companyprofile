import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] lg:h-screen">
      {/* Background Image */}
      <Image
        src="/images/heromainbg.png"
        alt="Gedung"
        fill
        style={{ objectFit: 'cover', zIndex: 1 }}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-32 text-white">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Yukk!</h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4">
          Bangun Gaya Hidup Lebih Praktis <br />
          dengan Layanan Rental dari <br />
          <span className="text-yellow-400">PT Dahlia Global Indo</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-6 max-w-xl">
          Temukan kenyamanan dan kemudahan dalam setiap kebutuhan Anda
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition">
            Kunjungi Layanan Kami
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}
