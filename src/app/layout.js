
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "AboutUs", href: "/pages/aboutus" },
    { name: "Solutions", href: "/pages/solution" },
    { name: "Career", href: "/pages/career" },
    { name: "Blogs", href: "/pages/blogs" },
    { name: "Newsletter", href: "/pages/newsletter" },
    { name: "ContactUs", href: "/pages/contactus" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* ✅ PROFESSIONAL NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md transition-all duration-300 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-2.5 relative">

            {/* Logo — slightly more left */}
            <div className="flex-shrink-0 -ml-10">
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

            {/* Centered Navigation with bold text */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 font-semibold text-gray-900 text-[19px]">
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

            {/* Free Consultation Button — pushed right */}
            <div className="hidden md:flex justify-end flex-shrink-0 pr-0">
              <Link
                href="/contect-us"
                className="ml-8 bg-blue-700 text-white px-7 py-2.5 rounded-full font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200">
              <nav className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-semibold text-lg">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 px-3 hover:bg-blue-100 rounded-md w-full text-center transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contect-us"
                  onClick={() => setMenuOpen(false)}
                  className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
