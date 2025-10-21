"use client";

import { useEffect, useState } from "react";
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
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
        <Footer />

    </div>
  );
}
