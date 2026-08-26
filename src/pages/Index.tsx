import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import storyImage from "@/assets/story.jpg";
import landImage from "@/assets/land.jpg";
import { company } from "@/data/company";
import { categories } from "@/data/properties";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Teras kayu sebuah penginapan tropis pada sore hari"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/60" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-20 md:px-10 md:pb-28">
          <div className="fade-up max-w-3xl text-background">
            <p className="eyebrow opacity-85">{company.business}</p>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              Ruang untuk Tinggal.
              <span className="block italic">Tempat untuk Merasa Nyaman.</span>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed opacity-90 sm:text-base">
              {company.name} mengembangkan hospitality dan properti melalui
              homestay, hotel, dan kos yang dirancang untuk menghadirkan
              kenyamanan serta pengalaman yang berarti.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <a
                href="/program"
                className="link-underline text-sm tracking-[0.14em] uppercase"
              >
                Explore Programs →
              </a>
              <a
                href="/tentang"
                className="link-underline text-sm tracking-[0.14em] uppercase opacity-85"
              >
                Tentang Kami →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-1">
            <img
              src={storyImage}
              alt="Kamar dengan cahaya alami dan tekstur kayu"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-muted-foreground">Brand Story</p>
            <h2 className="mt-6 font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-[2.9rem]">
              Kami percaya bahwa tempat bukan sekadar ruang.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-[1.9] text-muted-foreground sm:text-base">
              <p>
                Sebuah tempat menyimpan cara orang beristirahat, bekerja,
                berbincang, dan memulai hari. Karena itu setiap properti yang
                kami kembangkan dimulai dari pertanyaan sederhana: bagaimana
                rasanya tinggal di sini.
              </p>
              <p>
                Dari homestay yang hangat hingga hotel dan kos yang tertata,
                kami merawat detail kecil yang membuat orang merasa diterima —
                cahaya, udara, ketenangan, dan pelayanan yang tulus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our spaces */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted-foreground">Our Spaces</p>
              <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                Tiga cara kami menghadirkan tempat tinggal.
              </h2>
            </div>
            <a
              href="/program"
              className="link-underline text-sm tracking-[0.14em] uppercase"
            >
              Semua Program →
            </a>
          </div>

          <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
            {categories.map((category, index) => (
              <article
                key={category.slug}
                className="grid items-center gap-8 md:grid-cols-12 md:gap-14"
              >
                <div
                  className={
                    index % 2 === 0
                      ? "md:col-span-7 md:col-start-1"
                      : "md:col-span-7 md:col-start-6 md:row-start-1"
                  }
                >
                  <a
                    href={`/program#${category.slug}`}
                    className="block overflow-hidden"
                  >
                    <img
                      src={category.image}
                      alt={`Suasana ${category.name}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                    />
                  </a>
                </div>
                <div
                  className={
                    index % 2 === 0
                      ? "md:col-span-4 md:col-start-9"
                      : "md:col-span-4 md:col-start-1 md:row-start-1"
                  }
                >
                  <p className="eyebrow text-muted-foreground">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-3xl">{category.name}</h3>
                  <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">
                    {category.tagline}
                  </p>
                  <p
                    onClick={()=>navigate(`/program/${category.slug}`)}
                    className="link-underline mt-7 inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase"
                  >
                    Lihat <ArrowUpRight className="size-4" />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality & Property */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="md:pt-10">
            <p className="eyebrow text-muted-foreground">Hospitality</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.5rem]">
              Hospitality, with intention.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground sm:text-base">
              Kenyamanan lahir dari hal-hal yang dipikirkan sejak awal: suasana
              yang tenang, ruang yang bersih dan terawat, serta pelayanan yang
              hadir tanpa berlebihan. Kami menjaga kualitas pengalaman menginap
              sebagai standar, bukan sebagai tambahan.
            </p>
          </div>
          <div className="border-t border-border pt-10 md:border-t-0 md:border-l md:pt-10 md:pl-16">
            <p className="eyebrow text-muted-foreground">Property</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.5rem]">
              Developing Potential
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground sm:text-base">
              Kami mengembangkan properti dan potensi kawasan menjadi ruang yang
              bernilai serta berkelanjutan — dikelola dengan perencanaan yang
              matang, hormat pada lingkungan sekitar, dan manfaat jangka panjang
              bagi masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow text-muted-foreground">Tentang Kami</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
              Perusahaan hospitality dan properti dari Gunungkidul.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-sm leading-[1.9] text-muted-foreground sm:text-base">
              {company.description}
            </p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-border pt-4">
                <dt className="eyebrow text-muted-foreground">Established</dt>
                <dd className="mt-3 font-serif text-xl">
                  {company.established}
                </dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="eyebrow text-muted-foreground">Director</dt>
                <dd className="mt-3 font-serif text-xl">{company.director}</dd>
              </div>
            </dl>
            <a
              href="/tentang"
              className="link-underline mt-10 inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase"
            >
              Selengkapnya <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Location preview */}
      <section className="relative overflow-hidden">
        <img
          src={landImage}
          alt="Perbukitan dan pesisir Gunungkidul saat senja"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-28 text-background md:px-10 md:py-40">
          <p className="eyebrow opacity-85">Location</p>
          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-tight sm:text-[2.75rem]">
            Berakar di Kemadang, Tanjungsari, Gunungkidul.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-[1.9] opacity-90">
            {company.address}
          </p>
          <a
            href="/kontak"
            className="link-underline mt-10 inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase"
          >
            Hubungi Kami <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;