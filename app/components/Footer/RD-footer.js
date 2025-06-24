export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden">
      {/* Ornamen kiri atas */}
      <img
        src="/images/logo_footer_kiri.png"
        alt="Ornamen Kiri"
        className="absolute top-0 left-0 w-32 md:w-40"
      />

      {/* Ornamen kanan bawah */}
      <img
        src="/images/logo_footer_kanan.png"
        alt="Ornamen Kanan"
        className="absolute bottom-0 right-0 w-32 md:w-40"
      />

      {/* Konten utama */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {/* Kolom 1: Sosial Media & Logo Bank */}
        <div className="flex flex-col gap-6 items-start">
          {/* Sosial Media */}
          <div className="flex space-x-4">
            <a href="#"><img src="/images/icon_fb.png" alt="Facebook" className="w-7 h-7" /></a>
            <a href="#"><img src="/images/icon_tt.png" alt="TikTok" className="w-7 h-7" /></a>
            <a href="#"><img src="/images/icon_wa.png" alt="WhatsApp" className="w-7 h-7" /></a>
          </div>

          {/* Logo Bank & QRIS */}
          <div className="flex items-center space-x-4 mt-4">
            <img
              src="/images/pm_all.png"
              alt="Logo Bank"
              className="h-20 ml-[-80px] object-contain"
            />
            
          </div>
        </div>

        {/* Kolom 2: Navigasi & Kontak */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-yellow-500">Beranda</a></li>
              <li><a href="#" className="hover:text-yellow-500">Daftar Motor</a></li>
              <li><a href="#" className="hover:text-yellow-500">Testimoni</a></li>
              <li><a href="#" className="hover:text-yellow-500">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
            <p className="mt-2">ptdahliglobalindo@gmail.com</p>
            <p>(+62) 858-2976-4860</p>
          </div>
        </div>

        {/* Kolom 3: Alamat */}
        <div className="text-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
          <p>Jl. Kebon Kawung No.49, Pasir Kaliki,</p>
          <p>Kec. Cicendo, Kota Bandung, Jawa Barat 40171, Indonesia</p>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="bg-yellow-400 py-2 text-center text-xs text-black z-20 relative">
        ©Riyadatunnisa. Hak Cipta Dilindungi oleh undang-undang. |{' '}
        <a href="#" className="underline">Powered by GoEnt</a>
      </div>
    </footer>
  );
}
