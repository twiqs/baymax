"use client";

import Link from "next/link";
import React, { useContext } from 'react';


export default function Header() {

  return (
    <header >
      <div className="container">
        <div className="">
          <nav className="header-wrap">
            <Link className="text-primary font-semibold text-2xl mr-2 " href="/">BookLine</Link>
            <div className="header-menu flex space-between items-center gap-2 med:text-sm">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact </Link>
            </div>

          </nav>
          
        </div>
      </div>
    </header>
  );
}
