"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/book-online", label: "Book Online" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center gap-10 bg-[#2e0f3d] px-6 py-5">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm tracking-wide transition-colors ${active ? "text-white" : "text-[#e8447f] hover:text-white"
              }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
