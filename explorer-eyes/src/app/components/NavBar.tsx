"use client";

import Link from "next/link";
import React from "react";

export default function NavBar() {

  return (
    <div style={{display:'flex', alignItems:'start', textAlign:'left', width:'100%'}}>
      <h1 className="font-mono text-2xl top-0 mt-15 mb-8 ml-5">
          ExplorerEyes
      </h1>
      <div style={{flexGrow: 1, textAlign:'left'}} className="ml-20">

        <Link href="/">
        <button
          className="font-sans text-m mt-20 ml-5 hover:cursor-pointer"
        >
          Home
        </button>
        </Link>

        <Link href="/overview">
        <button
          className="font-sans text-m mt-20 ml-5 hover:cursor-pointer"
        >
          Overview
        </button>
        </Link>

        <Link href="/ourjourney">
          <button
            className="font-sans text-m mt-20 ml-5 hover:cursor-pointer"
          >
            Our Journey
          </button>
        </Link>

        <Link href="/aboutus">
          <button
            className="font-sans text-m mt-20 ml-5 hover:cursor-pointer"
          >
            About us
        </button>
        </Link>
      </div>
    </div>
  );
}
