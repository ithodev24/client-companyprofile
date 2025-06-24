export default function IphoneSection() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden px-3 sm:px-4 py-4 sm:py-6">
      <div className="flex flex-col">
        {/* Gambar dengan tombol di kanan bawah */}
        <div className="relative">
          <img
            src="/images/iphonesection.png"
            alt="iPhone Rental"
            className="w-full object-cover rounded-t-xl max-h-56 sm:max-h-72 md:max-h-none"
          />
          <button className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white text-[10px] sm:text-sm text-gray-600 border border-gray-300 px-2 sm:px-4 py-1 rounded hover:bg-gray-100 shadow">
            Lihat Detail Artikel
          </button>
        </div>

        {/* Konten teks */}
        <div className="relative p-3 sm:p-6">
          <h3 className="text-sm sm:text-lg font-semibold mb-2 leading-snug">
            iPhone untuk Disewa: Solusi Cerdas di Era Digital
          </h3>
          <p className="text-xs sm:text-base text-gray-700 text-justify leading-relaxed">
            Di era serba digital saat ini, memiliki perangkat canggih seperti iPhone menjadi kebutuhan penting bagi banyak orang—baik untuk pekerjaan, bisnis, maupun gaya hidup. Namun, tak semua orang siap untuk berinvestasi besar demi memiliki satu unit iPhone terbaru. Di sinilah layanan rental iPhone dari{' '}
            <span className="font-bold">Pixelnesia</span> hadir sebagai solusi cerdas.
          </p>
        </div>
      </div>
    </div>
  );
}
