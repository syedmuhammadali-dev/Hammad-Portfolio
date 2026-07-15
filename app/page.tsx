import Image from "next/image";
import Link from "next/link";

const team = [
  { name: "Andreas", role: "Co Founder & Developer", img: "/images/team-andreas.jpg" },
  { name: "Matt", role: "Co Founder & Creative Director", img: "/images/team-matt.jpg" },
  { name: "Dustin", role: "Designer & Front End Developer", img: "/images/team-dustin.jpg" },
  { name: "Anna", role: "Designer", img: "/images/team-anna.jpg" },
];

const sections = [
  {
    title: "What We Do",
    img: "/images/content-1.jpg",
    text: "We craft motion, brand and digital experiences from start to finish. From concept sketches to final animation, every project gets the same attention to detail and love for storytelling.",
  },
  {
    title: "How We Work",
    img: "/images/content-2.jpg",
    text: "Collaboration comes first. We start with a conversation, build a plan together, and keep you in the loop at every stage so the final result feels like exactly what you imagined.",
  },
  {
    title: "Who We Are",
    img: "/images/content-1.jpg",
    text: "A small crew of designers, animators and developers who care about craft. We've spent years honing our tools so we can spend less time fighting software and more time making things beautiful.",
  },
  {
    title: "What We Believe",
    img: "/images/content-2.jpg",
    text: "Great design should feel effortless to the person experiencing it, even when it took countless hours to get there. That's the standard we hold every project to.",
  },
];

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
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/50" />
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Syed Hammad Ali
          </h1>
          <p className="mt-4 text-sm tracking-[0.3em] sm:text-base">
            DIGITAL ART DIRECTOR &amp; ANIMATOR
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Work &amp; Clients
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          We design great websites and all sorts of interactive products from
          start to finish
        </p>
      </section>

      <section className="bg-zinc-50 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Meet The Folks
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full sm:h-36 sm:w-36">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-[#e8447f] px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#d63873]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-20">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`flex flex-col items-center gap-10 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="relative h-64 w-full flex-1 overflow-hidden rounded-lg">
                <Image
                  src={section.img}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.title}
                </h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
