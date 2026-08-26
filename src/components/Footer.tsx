import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-background">
      <div className="mx-auto max-w-350 px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-4 md:gap-10">
          <div className="md:pr-10">
            <p className="font-serif text-xl leading-snug">{company.name}</p>
            <p className="eyebrow mt-3 opacity-90">{company.business}</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed opacity-85">
              Mengembangkan dan mengelola homestay, hotel, serta kos dengan perhatian pada
              kenyamanan, kualitas ruang, dan pengalaman menginap yang berarti.
            </p>
          </div>

          <div>
            <p className="eyebrow opacity-85">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { to: "/", label: "Beranda" },
                { to: "/program", label: "Program" },
                { to: "/tentang", label: "Tentang" },
                { to: "/kontak", label: "Kontak" },
              ].map((item) => (
                <li key={item.to}>
                  <a href={item.to} className="opacity-85 transition-opacity hover:opacity-100">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow opacity-85">Programs</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["homestay", "hotel", "kos"].map((slug) => (
                <li key={slug}>
                  <a
                    href={`/program/${slug}`}
                    className="capitalize opacity-85 transition-opacity hover:opacity-100"
                  >
                    {slug}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow opacity-85">Contact</p>
            <div className="mt-6 space-y-3 text-sm opacity-85">
              <p>
                {company.director}
                <span className="block opacity-90">Director</span>
              </p>
              <p>
                <a href={`tel:+${company.phoneRaw}`} className="hover:opacity-100">
                  {company.phone}
                </a>
              </p>
              <p className="max-w-xs leading-relaxed">{company.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-background/15 pt-8">
          <p className="text-xs tracking-wide opacity-85">
            © 2026 {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}