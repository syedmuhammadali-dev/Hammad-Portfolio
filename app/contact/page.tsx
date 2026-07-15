export default function Contact() {
  return (
    <main className="flex-1 bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="font-serif text-4xl italic tracking-tight">Contact</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Tell us about your project or just say hello!
        </p>

        <h2 className="mt-12 text-center text-xl font-semibold tracking-tight text-[#e8447f]">
          Work With Us (Get a Quote)
        </h2>

        <form className="mt-6 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="rounded bg-[#e8447f] px-4 py-3 text-sm text-white placeholder-white/80 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded bg-[#e8447f] px-4 py-3 text-sm text-white placeholder-white/80 outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="rounded bg-[#e8447f] px-4 py-3 text-sm text-white placeholder-white/80 outline-none"
          />
          <textarea
            placeholder="Type your message here..."
            rows={6}
            className="rounded bg-[#e8447f] px-4 py-3 text-sm text-white placeholder-white/80 outline-none"
          />
          <button
            type="submit"
            className="mt-2 self-start rounded bg-white px-8 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-zinc-200"
          >
            Submit
          </button>
        </form>

        <div className="mt-16 border-t border-zinc-300 pt-10 dark:border-zinc-700">
          <h2 className="text-lg font-semibold">Become a Folkteer</h2>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            We&apos;re always looking for craftspeople to join our crew
          </p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">info@mysite.com</p>
        </div>

        <div className="mt-16 border-t border-zinc-300 pt-10 dark:border-zinc-700">
          <h2 className="text-lg font-semibold">Studio</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            500 Terry Francois Street
            <br />
            San Francisco, CA 94158
          </p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            info@mysite.com
            <br />
            Tel: 123-456-7890
            <br />
            Fax: 123-456-7890
          </p>
        </div>
      </div>
    </main>
  );
}
