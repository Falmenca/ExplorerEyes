// components/NavBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
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
      <Link href="/" className="mr-4 flex items-center gap-2">
        <Image 
          src="/pictures/Misc/Logo.jpg" 
          alt="ExplorerEyes" 
          width={80} 
          height={80} 
        />
      </Link>
      <h1 className="font-mono text-xl ml-0">
        ExplorerEyes
      </h1>

      <ul className="ml-9 flex gap-6">
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