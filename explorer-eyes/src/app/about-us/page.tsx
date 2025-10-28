"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Page() {
  const [data, setData] = useState<{ ai: any; weather: any; health: any }>({
    ai: null,
    weather: null,
    health: null,
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/ai").then(r => (r.ok ? r.json() : null)),
      fetch("/api/weather").then(r => (r.ok ? r.json() : null)),
      fetch("/api/health").then(r => (r.ok ? r.json() : null)),
    ]).then(([ai, weather, health]) => setData({ ai, weather, health }));
  }, []);

  return (

    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] gap-4">
    
      <header className="sticky top-0 z-50 bg-navbar/90 backdrop-blur">
          <NavBar />
      </header>

      <main style={{ maxWidth: 980, margin: "40px auto", padding: "0 16px" }}>

        <Image
          src="/pictures/Misc/Posted.jpg"
          alt="Serious Image"
          width={500}
          height={400}
          className="mx-auto mb-8"
        />
        <p className="text-sm font-bold italic mb-15 mt-0 text-center">
          Left to Right: Jared Idica (EE), Enrique Delacruz (CpE), Kristel Vinluan (EE), Jorge Zepeda (EE)
        </p>

        <Image
          src="/pictures/Misc/Fun.jpg"
          alt="Fun Image"
          width={600}
          height={400}
          className="mx-auto mb-8"
        />

      </main>

      <Footer />

    </div>
  );
}
