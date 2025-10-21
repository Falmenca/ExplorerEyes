// components/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/overview", label: "Overview" },
  { href: "/our-journey", label: "Our Journey" },
  { href: "/about-us", label: "About us" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="h-20 w-full px-4 flex items-center shadow bg-navbar">
      <h1 className="font-mono text-xl">ExplorerEyes</h1>

      <ul className="ml-8 flex gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`text-sm hover:opacity-80 ${
                pathname === l.href ? "font-semibold underline" : ""
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}