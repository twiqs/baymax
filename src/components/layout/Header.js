"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from 'react';

export default function Header() {
  return (
    <header>
      <div className="container container-header">
        <div className="header flex">
          <nav className="nav-main flex">
            <ul className="nav-main__list nav-main__list_1 flex">
              <li className="nav-main__item">
                <Link className="nav-main__link nav-main__link_selected" href="/">Home</Link>
              </li>
              <li className="nav-main__item">
                <Link className="nav-main__link" href="/about">About</Link>
              </li>
              <li className="nav-main__item">
                <Link className="nav-main__link" href="/menu">Menu</Link>
              </li>
              <li className="nav-main__item">
                <Link className="nav-main__link" href="/reservation">Reservation</Link>
              </li>
            </ul>
            <div className="logo">
              <Image 
                className="header__logo" 
                src="/logo.PNG" 
                width={100} 
                height={100} 
                alt="pizza" 
              />
            </div>
            <ul className="nav-main__list  nav-main__list_2 flex">
              <li className="nav-main__item">
                <Link className="nav-main__link" href="/songs">Songs</Link>
              </li>
              <li className="nav-main__item">
                <Link className="nav-main__link" href="/podcasts">Podcasts</Link>
              </li>
              <li className="nav-main__item">
                <Link className="nav-main__link" href="/movie">Movie</Link>
              </li>
              <li className="nav-main__item">
                <Link className="nav-main__link" href="/other">Other</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__burger">
          <span></span>
        </div>
      </div>
    </header>
  );
}