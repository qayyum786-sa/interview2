"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/pages/aboutus" },
    { name: "Solutions", href: "/pages/solution" },
    { name: "Career", href: "/pages/career" },
    { name: "Blogs", href: "/pages/blogs" },
    { name: "Newsletter", href: "/pages/newsletter" },
    { name: "Contact Us", href: "/pages/contactus" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 relative">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/luminatelogo.png"
              alt="Luminate Web Solutions"
              width={100}
              height={35}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 lg:space-x-7 font-semibold text-gray-900 text-[16px] md:text-[18px]">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group tracking-wide transition-all duration-300"
            >
              <span className="transition-colors duration-300 group-hover:text-blue-700">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex justify-end flex-shrink-0 ml-auto">
          <Link
            href="/pages/freeconsultation"
            className="bg-blue-700 text-white px-5 md:px-7 py-2.5 rounded-full font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
          >
            Free Consultation
          </Link>
        </div>

        <button
          className="md:hidden ml-2 p-2 rounded-md text-2xl text-gray-800 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200">
          <nav className="flex flex-col items-stretch space-y-2 py-4 text-gray-800 font-semibold text-base px-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-3 hover:bg-blue-50 rounded-md transition-all text-center"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/pages/freeconsultation"
                onClick={() => setMenuOpen(false)}
                className="inline-block w-full text-center bg-blue-700 text-white px-4 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
