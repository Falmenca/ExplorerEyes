"use client";

import { useEffect, useState } from "react";
import API_Out from "./components/API_Out";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Page() {


  return (
    
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] gap-4">
      <header className="sticky top-0 z-50 bg-navbar/90 backdrop-blur">
        <NavBar />
      </header>

      <main style={{ display: 'flex', alignContent: 'center', maxWidth: 980, margin: "40px auto", padding: "0 16px" }} >
        <API_Out />
      </main>

      <Footer />
    </div>
  );
}
