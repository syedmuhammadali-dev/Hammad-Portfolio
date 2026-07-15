import Image from "next/image";
import Link from "next/link";

const gallery = [
  "/images/content-1.jpg",
  "/images/content-2.jpg",
  "/images/gallery-8c7dbfe1.jpg",
  "/images/gallery-48344ed8.jpg",
  "/images/gallery-7f083246.jpg",
  "/images/gallery-e7849a3b.jpg",
  "/images/gallery-b39e308c.jpg",
  "/images/gallery-e6b67d39.jpg",
  "/images/gallery-6e7e438d.jpg",
  "/images/gallery-df0f2959.jpg",
  "/images/gallery-746b43be.jpg",
  "/images/gallery-4169c21c.jpg",
];

const team = [
  { name: "Andreas", role: "Co Founder & Developer", img: "/images/team-andreas.jpg" },
  { name: "Matt", role: "Co Founder & Creative Director", img: "/images/team-matt.jpg" },
  { name: "Dustin", role: "Designer & Front End Developer", img: "/images/team-dustin.jpg" },
  { name: "Anna", role: "Designer", img: "/images/team-anna.jpg" },
];

const placeholderCopy = (
  <>
    <p className="mt-4 text-sm leading-relaxed text-zinc-300">
      I&apos;m a paragraph. Click here to add your own text and edit me.
      It&apos;s easy. Just click “Edit Text” or double click me to add your
      own content and make changes to the font. Feel free to drag and drop me
      anywhere you like on your page. I&apos;m a great place for you to tell
      a story and let your users know a little more about you.
    </p>
    <p className="mt-4 text-sm leading-relaxed text-zinc-300">
      This is a great space to write long text about your company and your
      services. You can use this space to go into a little more detail about
      your company. Talk about your team and what services you provide. Tell
      your visitors the story of how you came up with the idea for your
      business and what makes you different from your competitors. Make your
      company stand out and show your visitors who you are.
    </p>
  </>
);

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative flex h-[70vh] min-h-120 items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Mountain sunset background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#a3134f]/60 via-[#7a1f5c]/40 to-[#2e0f3d]/70" />
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Syed Hammad Ali
          </h1>
          <p className="mt-4 text-sm tracking-[0.3em] sm:text-base">
            DIGITAL ART DIRECTOR &amp; ANIMATOR
          </p>
          <div className="mt-10 flex justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      <div className="relative z-20 flex justify-center">
        <div className="relative -mt-6 bg-[#e8447f] px-10 py-3 text-center text-sm font-medium tracking-wide text-white shadow-lg">
          Work &amp; Clients
          <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-[#e8447f]" />
        </div>
      </div>

      <section className="grid grid-cols-2 sm:grid-cols-4">
        {gallery.map((src, i) => (
          <div key={src + i} className="relative aspect-square">
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </section>

      <div className="bg-[#e8447f] px-6 py-6 text-center">
        <p className="text-sm font-medium tracking-wide text-white sm:text-base">
          We design great websites and all sorts of interactive products from
          start to finish
        </p>
      </div>

      <section className="bg-zinc-50 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center font-serif text-2xl italic tracking-tight text-[#e8447f] sm:text-3xl">
            Meet The Folks:
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-72 overflow-hidden grayscale">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl text-[#e8447f]">
                  {member.name}
                </h3>
                <p className="text-xs tracking-wide text-zinc-500 dark:text-zinc-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/contact"
              className="bg-black px-8 py-3 text-xs font-medium tracking-widest text-white transition-colors hover:bg-zinc-800"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-24">
        <div
          className="pointer-events-none absolute -left-10 top-40 h-72 w-72 rounded-full bg-[#c81856] opacity-40 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#c81856] opacity-30 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-x-16 gap-y-16 px-6 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              What We Do
            </h3>
            {placeholderCopy}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Who We Are
            </h3>
            {placeholderCopy}
          </div>

          <div className="flex justify-center gap-2 sm:col-span-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              How We Work
            </h3>
            {placeholderCopy}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              What We Believe
            </h3>
            {placeholderCopy}
          </div>
        </div>

        <div className="relative mt-20 flex justify-center">
          <Link
            href="#top"
            className="border border-white bg-white px-8 py-3 text-xs font-medium tracking-widest text-black transition-colors hover:bg-zinc-200"
          >
            BACK TO TOP
          </Link>
        </div>
      </section>

      <footer className="bg-zinc-100 py-4 text-center text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
        © 2022 Syed Hammad Ali
      </footer>
    </main>
  );
}
