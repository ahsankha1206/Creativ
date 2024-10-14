// components/Navbar.js
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineSegment } from 'react-icons/md';

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">
        <img src="logo-1.png" alt="" width='12%' />
      </div>
      <div className={`toggel ${isMenuVisible ? 'active' : ''}`} onClick={toggleMenu}>
        <MdOutlineSegment />
      </div>
      <nav className={`menu ${isMenuVisible ? 'visible' : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;