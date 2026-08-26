import storyImage from "@/assets/story.jpg";
import homestayImage from "@/assets/homestay.jpg";
import { company } from "@/data/company";

export const About = () => {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden">
        <img
          src={homestayImage}
          alt="Teras homestay dengan kursi kayu dan tanaman"
          width={1280}
          height={1600}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-16 text-background md:px-10 md:pb-24">
          <p className="eyebrow opacity-85">Tentang</p>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] sm:text-6xl">
            Dibangun dari perhatian pada cara orang tinggal.
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="grid gap-14 border-b border-border py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow text-muted-foreground">Company Story</p>
            <img
              src={storyImage}
              alt="Interior kamar dengan cahaya alami"
              width={1280}
              height={1600}
              loading="lazy"
              className="mt-8 aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-14">
            <p className="font-serif text-2xl leading-[1.5] sm:text-[1.75rem]">
              {company.description}
            </p>
            <p className="mt-8 text-sm leading-[1.9] text-muted-foreground sm:text-base">
              Kami bekerja dengan pendekatan yang tenang dan bertahap: memahami kawasan, merawat
              kualitas ruang, dan membangun hubungan jangka panjang dengan tamu, mitra, serta
              masyarakat sekitar.
            </p>

            <dl className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-border pt-4">
                <dt className="eyebrow text-muted-foreground">Established</dt>
                <dd className="mt-3 font-serif text-xl">{company.established}</dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="eyebrow text-muted-foreground">Director</dt>
                <dd className="mt-3 font-serif text-xl">{company.director}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="grid gap-10 border-b border-border py-20 md:grid-cols-12 md:py-28">
          <h2 className="eyebrow text-muted-foreground md:col-span-3">Vision</h2>
          <p className="font-serif text-2xl leading-[1.5] md:col-span-8 sm:text-3xl">
            {company.vision}
          </p>
        </section>

        <section className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 className="eyebrow text-muted-foreground md:col-span-3">Mission</h2>
          <ol className="md:col-span-8">
            {company.missions.map((mission, index) => (
              <li
                key={mission}
                className="flex gap-6 border-t border-border py-6 last:border-b sm:gap-10"
              >
                <span className="font-serif text-lg text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-[1.9] text-muted-foreground sm:text-base">
                  {mission}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-border py-20 md:py-28">
          <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
            Mari berbincang tentang ruang berikutnya.
          </h2>
          <a
            href="/kontak"
            className="link-underline mt-8 inline-block text-sm tracking-[0.14em] uppercase"
          >
            Hubungi Kami →
          </a>
        </section>
      </div>
    </>
  );
}

export default About;