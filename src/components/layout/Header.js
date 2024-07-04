"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from 'react';


export default function Header() {

  return (
    <header>
      <div class="container container-header">
        <div class="header flex">
          <nav class="nav-main flex">
            <ul class="nav-main__list nav-main__list_1 flex">
              <li class="nav-main__item">
                <Link class="nav-main__link nav-main__link_selected" href="#">Home</Link>
              </li>
              <li class="nav-main__item">
                <Link class="nav-main__link" href="#">About</Link>
              </li>
              <li class="nav-main__item">
                <Link class="nav-main__link" href="#">Menu</Link>
              </li>
              <li class="nav-main__item">
                <Link class="nav-main__link" href="#">Reservation</Link>
              </li>
            </ul>
            <div class="logo">
        <Image className="header__logo" src={'/logo.PNG'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />

              
            </div>

            <ul class="nav-main__list  nav-main__list_2 flex">
              <li class="nav-main__item">
                <Link class="nav-main__link" href="#">Songs</Link>
              </li>
              <li class="nav-main__item">
                <Link class="nav-main__link" href="#">Podcasts</Link>
              </li>
              <li class="nav-main__item">
                <Link class="nav-main__link" href="#">Movie</Link>
              </li>
              <li class="nav-main__item">
                <Link class="nav-main__link" href="#">Movie</Link>
              </li>
            </ul>
          </nav>

          
        </div>
        <div class="header__burger">
          <span></span>
        </div>
      </div>
    </header>
  );
}
