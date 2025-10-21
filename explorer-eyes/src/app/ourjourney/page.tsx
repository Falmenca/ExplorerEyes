"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

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

    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center">


      <NavBar />

      <main style={{ maxWidth: 980, margin: "40px auto", padding: "0 16px" }}>

        <pre>{JSON.stringify(data, null, 2)}</pre>

      </main>

      <footer className="fixed bottom-0 text-xs/10 mt-20">
        <p style={{ textAlign: "center", marginBottom: 20 }}>
          &copy; ExplorerEyes - UNLV 2025
        </p>
      </footer>

    </div>
  );
}
