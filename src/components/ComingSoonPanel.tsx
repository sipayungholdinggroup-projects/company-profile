import { whatsappUrl } from "@/data/company";

type Props = {
  image: string;
  categoryName: string;
};

export default function ComingSoonPanel({ image, categoryName }: Props) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={`Suasana ${categoryName}`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-md px-6 text-center text-background">
          <p className="eyebrow opacity-90">Coming Soon</p>
          <p className="mt-4 font-serif text-2xl leading-snug sm:text-[1.75rem]">
            Daftar {categoryName} sedang kami siapkan.
          </p>
          <p className="mt-4 text-sm leading-[1.85] opacity-90">
            Properti pada kategori ini belum dibuka untuk publikasi. Informasi lengkap akan tersedia
            di halaman ini.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-7 inline-block text-xs font-medium tracking-[0.16em] uppercase"
          >
            Tanyakan Ketersediaan →
          </a>
        </div>
      </div>
    </div>
  );
}
