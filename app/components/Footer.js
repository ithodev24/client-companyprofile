import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden">
      {/* Ornamen Kiri Atas */}
      <Image
        src="/images/logo_footer_kiri.png"
        alt="Ornamen Kiri"
        width={400}
        height={200}
        className="absolute top-0 left-0 w-64 sm:w-96 md:w-[20rem] lg:w-[28rem] xl:w-[36rem] z-10"
      />

      {/* Ornamen Kanan Bawah */}
      <Image
        src="/images/logo_footer_kanan.png"
        alt="Ornamen Kanan"
        width={300}
        height={150}
        className="absolute bottom-10 right-0 w-48 sm:w-64 md:w-[20rem] lg:w-[24rem] xl:w-[28rem] z-10"
      />

      {/* Konten Utama */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6 text-sm">
          {/* Kolom 1: Sosial Media + Bank */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex space-x-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/ptdahliaglobalindo?igsh=ZWZxYnNrYTYzNHA0"
                aria-label="Instagram"
              >
                <Image
                  src="/images/icon_ig.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>

              {/* WhatsApp */}
              <Link href="https://wa.me/6285829764860" aria-label="WhatsApp">
                <Image
                  src="/images/icon_wa.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>

            {/* Logo Bank */}
            <div className="-ml-10 md:-ml-40 self-start bg-yellow-300 rounded-full px-6 py-2 shadow-md flex items-center space-x-6">
              <Image
                src="/images/pm_bni.png"
                alt="BNI"
                width={64}
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src="/images/pm_bca.png"
                alt="BCA"
                width={64}
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src="/images/pm_mandiri.png"
                alt="Mandiri"
                width={64}
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src="/images/pm_qris.png"
                alt="QRIS"
                width={64}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Kolom 2: Halaman */}
          <div>
            <h4 className="text-base font-semibold mb-3">Halaman</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/TentangKami">Tentang Kami</Link></li>
              <li><Link href="/Kontak">Kontak</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Isi Pendukung */}
          <div>
            <h4 className="text-base font-semibold mb-3">Isi Pendukung</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/#layanankami">Layanan Kami</Link></li>
              <li><Link href="/#kenapakami">Keunggulan</Link></li>
              <li><Link href="/TentangKami#dokumen">Dokumen</Link></li>
              <li><Link href="/TentangKami#sejarah">Sejarah Perusahaan</Link></li>
              <li><Link href="/TentangKami#visimisi">Visi & Misi</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak Kami */}
          <div>
            <h4 className="text-base font-semibold mb-3">Kontak Kami</h4>
            <p className="text-gray-600 mb-1">
              Jl. Kebon Kawung No.49, Pasir Kaliki, Kec. Cicendo, Kota Bandung,
              Jawa Barat 40171, Indonesia
            </p>
            <p className="text-gray-600">ptdahliglobalindo@gmail.com</p>
            <p className="text-gray-600">(+62) 858-2976-4860</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#FFDD00] py-3 text-center text-xs text-gray-800 font-medium">
        @ptdahliglobalindo. Hak Cipta Dilindungi oleh undang-undang. 
      </div>
    </footer>
  );
}
