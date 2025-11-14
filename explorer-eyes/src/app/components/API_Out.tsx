"use client";

import { useEffect, useState } from "react";
import { set } from "zod/v4";

export default function Page() {
  const [data, setData] = useState<{ ai: any; weather: any; health: any }>({
    ai: null,
    weather: null,
    health: null,
  });
  const [ai, setAi] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [health, setHealth] = useState<any>(null);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([ fetch("/api/ai").then(r => (r.ok ? r.json() : null)) ]).then(([ai]) => [setAi(ai)]);
      await Promise.all([
      fetch("/api/weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latitude, longitude }),
      }).then(r => (r.ok ? r.json() : null))
    ]).then(([weather]) => [setWeather(weather)]);
      await Promise.all([ fetch("/api/health").then(r => (r.ok ? r.json() : null)) ]).then(([health]) => [setHealth(health)]);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop page reload

    await Promise.all([
      fetch("/api/weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latitude, longitude }),
      }).then(r => (r.ok ? r.json() : null))
    ]).then(([weather]) => [setWeather(weather)]);

  };

  return (
    <div
      style={{ width: 2000, margin: "40px auto", padding: "0 16px" }}
      className="bordered rounded-lg border-foreground/10 bg-background/80 p-9 shadow-[#313aaa] shadow-md justify-center text-center"
    >
      {/* AI Response */}
      <div>
        <header className="mb-1 mt-7 text-s font-bold">
          AI Prompt Response
        </header>
      </div>
      <pre className="justify-center text-center">{ai?.message}</pre>

      {/* Weather Response */}
      <div>
        <header className="mb-1 mt-7 text-s font-bold">
          Weather Data Fetcher
        </header>
      </div>

      <pre> {"Location: "} {weather?.location}</pre>
      <pre>{JSON.stringify(weather?.data, null, 2)}</pre>

       <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8, marginTop: 16 }}>
          <label>
            Lat:{" "}
            <input
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              placeholder="33.9400"
            />
          </label>
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>
            Lon:{" "}
            <input
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              placeholder="118.4039"
            />
          </label>
        </div>
        <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 cursor: pointer">Fetch data</button>
      </form>

      {/* Health Response */}
      <div>
        <header className="mb-1 mt-7 text-s font-bold">
          GPS
        </header>
      </div>
      <pre className="mb-10">{JSON.stringify(health, null, 2)}</pre>

    </div>
  );
}