import { Phone, MapPin } from "lucide-react";
import { company, mapsEmbedUrl, mapsLinkUrl, whatsappUrl } from "@/data/company";
const Contact = () => {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-32">
      <section className="grid gap-14 border-b border-border pb-20 md:grid-cols-12 md:pb-28">
        <div className="md:col-span-7">
          <p className="eyebrow text-muted-foreground">Kontak</p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-6xl">
            Mari Menciptakan Ruang yang Berarti.
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:pt-24">
          <p className="font-serif text-2xl">{company.director}</p>
          <p className="eyebrow mt-2 text-muted-foreground">Director</p>
          <a
            href={`tel:+${company.phoneRaw}`}
            className="link-underline mt-8 inline-flex items-center gap-3 text-base"
          >
            <Phone className="size-4" />
            {company.phone}
          </a>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-foreground px-8 py-4 text-xs tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-charcoal hover:text-background"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-10 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-4">
          <h2 className="eyebrow text-muted-foreground">Find Us</h2>
          <p className="mt-6 flex gap-3 text-sm leading-[1.9] text-muted-foreground">
            <MapPin className="mt-1 size-4 shrink-0" />
            <span>{company.address}</span>
          </p>
          <a
            href={mapsLinkUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-8 inline-block text-sm tracking-[0.14em] uppercase"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="md:col-span-8">
          <div className="aspect-[4/3] w-full overflow-hidden border border-border md:aspect-[16/9]">
            <iframe
              title={`Peta lokasi ${company.name}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="size-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;