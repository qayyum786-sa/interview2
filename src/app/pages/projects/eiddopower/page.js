"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EiddoPowerProject() {
  // Carousel sample items
  const carouselItems = [
    {
      title: "EIDDO POWER",
      desc: "Renewable energy company website featuring solar EPC services and energy trading solutions.",
      img: "/eiddo.png",
      link: "/pages/projects/eiddopower",
    },
    {
      title: "EIDDO GLOBAL",
      desc: "Renewable energy infrastructure portal for tracking large-scale project development and assets.",
      img: "/coverImage.png",
      link: "/pages/projects/eiddoglobal",
    },
    {
      title: "BIMQABATOR",
      desc: "Interior design portfolio & brochure site. Showcases high-resolution imagery and project details.",
      img: "/coverImage2.png",
      link: "/pages/projects/bimqubator",
    },
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(1);

  // Adjust items per screen based on window width (Responsive)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerScreen(window.innerWidth >= 768 ? 2 : 1);
    };
    // Set initial value
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + carouselItems.length) % carouselItems.length);
  }

  function next() {
    setIndex((i) => (i + 1) % carouselItems.length);
  }

  // Helper to get the visible items based on the circular index
  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < itemsPerScreen; i++) {
      visible.push(carouselItems[(index + i) % carouselItems.length]);
    }
    return visible;
  };

  return (
    <main className="min-h-screen bg-[#e6ebf1] text-slate-800 py-8 sm:py-16 px-4 sm:px-6 font-sans">
      
      {/* The "Page" Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-[1rem] shadow-lg border border-gray-300 overflow-hidden">
        
        <div className="p-8 sm:p-12 lg:p-16">

          {/* Header Section */}
          <header className="text-center mb-14 space-y-5">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase">
              <span>Client Case Study</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              EiddoPower
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Website Launched
              </span>
              <span className="hidden sm:block text-gray-300">|</span>
              <span className="italic">Energy & Infrastructure (Renewables)</span>
            </div>
          </header>

          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
              Web Design & Development for <span className="text-[#0b60a8] decoration-4 underline decoration-blue-100 underline-offset-4">Renewable Energy</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Luminate Web Solutions engineered the digital presence for EiddoPower. 
              Our design strategy focused on a clean, corporate identity that builds trust 
              within the renewable energy trading and infrastructure sectors.
            </p>
          </div>

          {/* Main Feature Card */}
          <section className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden mb-12 group hover:border-blue-300 hover:shadow-lg transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Side */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
                <div className="h-full w-full relative group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src="/eiddopower-solar.jpg"
                    alt="EiddoPower homepage screenshot"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Project Overview</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    EiddoPower required a platform to showcase four distinct service lines. 
                    The challenge was to organize complex technical information into an accessible 
                    structure.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Services Showcased</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Renewable Trading", sub: "Green power brokerage" },
                      { title: "Solar EPC", sub: "Engineering to Construction" },
                      { title: "Infrastructure Dev", sub: "Grid & Plant support" },
                      { title: "Energy Efficiency", sub: "Audits & Upgrades" },
                    ].map((item) => (
                      <div key={item.title} className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-[#0b60a8] hover:shadow-md transition-all cursor-default">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0b60a8]"></span>
                          <strong className="text-slate-800 text-sm">{item.title}</strong>
                        </div>
                        <div className="text-xs text-slate-500 pl-3.5">{item.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <Link
                    href="/projects"
                    className="px-5 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-slate-600 font-medium text-sm hover:bg-white hover:border-gray-400 hover:text-slate-900 transition-all"
                  >
                    ← Back to Portfolio
                  </Link>
                  <a
                    href="https://eiddopower.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#0b60a8] text-white font-medium text-sm shadow-lg shadow-blue-900/20 hover:bg-[#094e85] hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="pl-2">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0b60a8] rounded-full"></span>
                Deliverables
              </h3>
              <ul className="space-y-4">
                {[
                  "Responsive Next.js Architecture",
                  "Tailwind CSS Styling",
                  "SEO & Performance Optimization",
                  "Dynamic Component Library"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 group">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold group-hover:bg-green-600 group-hover:text-white transition-colors">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-slate-900 rounded-2xl p-8 text-center text-white overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center">
                <h3 className="text-xl font-bold mb-2">Ready to scale?</h3>
                <p className="text-slate-300 text-sm mb-6 max-w-xs mx-auto">
                  We build websites that position your brand as an industry leader.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full max-w-[200px] py-3 rounded-lg bg-[#0b60a8] text-white font-bold text-sm hover:bg-[#0d74c9] hover:scale-105 transition-all"
                >
                  Start Project
                </Link>
              </div>
            </div>
          </div>

          {/* --- 5. CAROUSEL SECTION (MATCHING YOUR IMAGE) --- */}
          <section className="border-t border-slate-100 pt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Explore other Projects</h3>

            <div className="relative flex items-center gap-4">
              
              {/* LEFT ARROW */}
              <button 
                onClick={prev} 
                className="shrink-0 w-12 h-12 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-full transition-colors focus:outline-none"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* VIEWPORT */}
              <div className="flex-1 overflow-hidden">
                <div className="flex gap-6">
                  {getVisibleItems().map((item, i) => (
                    <div key={`${item.title}-${i}`} className="flex-1 min-w-0">
                      
                      {/* CARD DESIGN FROM IMAGE */}
                      <div className="h-full flex flex-col border-2 border-blue-100 rounded-2xl bg-sky-50/50 p-6 text-center hover:border-blue-300 transition-colors">
                        
                        {/* IMAGE / LOGO AREA */}
                        <div className="relative w-full h-48 mb-4 bg-white rounded-xl overflow-hidden border border-blue-50 flex items-center justify-center">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-contain p-4" 
                          />
                        </div>

                        {/* CONTENT */}
                        <h4 className="text-lg font-bold text-slate-800 uppercase tracking-wide mb-3">
                          {item.title}
                        </h4>
                        
                        <p className="text-xs text-slate-500 mb-6 leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>

                        {/* BUTTON */}
                        <div className="mt-auto">
                          <Link
                            href={item.link}
                            className="inline-block bg-blue-500 text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow hover:bg-blue-600 transition-colors"
                          >
                            View Case Study
                          </Link>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT ARROW */}
              <button 
                onClick={next} 
                className="shrink-0 w-12 h-12 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-full transition-colors focus:outline-none"
                aria-label="Next"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* DOTS INDICATORS */}
            <div className="flex justify-center gap-2 mt-8">
              {carouselItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === index ? "bg-blue-500 scale-110" : "bg-blue-200 hover:bg-blue-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </section>

          

        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0056d2] text-white px-10 py-8 mt-10">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-start w-full md:w-1/3">
            <Image
              src="/luminatewhitelogo.png"
              alt="Luminate Web Solutions"
              width={180}
              height={70}
              className="mb-3"
            />
            <p className="text-sm leading-6">
              © 2024-25 <span className="font-semibold">Luminate Web Solutions</span>.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col w-full md:w-1/3 text-left">
            <h4 className="font-bold text-lg mb-3">Quick Links</h4>
            <ul className="list-none space-y-2 text-base">
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">Home</li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">About Us</li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">Contact Us</li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">Solutions</li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">Career</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col w-full md:w-1/3 text-left">
            <h4 className="font-bold text-lg mb-3">Contact Info</h4>
            <p className="leading-7">
              Dubai, UAE
              <br />
              Hyderabad, Telangana, India
            </p>
            <div className="mt-3 space-y-2 text-base">
              <p className="flex items-center gap-2">
                <span>📞</span> +971 56 674 9492
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> +91 720 734 7455
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> info@luminatewebsdl.com
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white/30" />
        <p className="text-center text-sm opacity-80">
          Designed & Developed by <span className="font-semibold">Luminate Web Solutions</span>
        </p>
      </footer>
    </main>
  );
}