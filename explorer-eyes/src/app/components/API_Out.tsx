"use client";

import { useEffect, useState } from "react";

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

    <div 
    style={{ width: 2000, margin: "40px auto", padding: "0 16px" }}
    className="bordered rounded-lg border-foreground/10 bg-background/80 p-9 shadow-[#313aaa] shadow-md"
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>

  );
}
