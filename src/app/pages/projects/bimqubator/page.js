"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the primary color for BIMQubator (Technical/Engineering Blue)
const PRIMARY_COLOR = "text-sky-600";
const PRIMARY_BG = "bg-sky-600";
const ACCENT_BG = "bg-sky-50";

export default function BIMQubatorProject() {
  // --- CAROUSEL DATA (Kept the same structure) ---
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

  // --- CAROUSEL LOGIC ---
  const [index, setIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerScreen(window.innerWidth >= 768 ? 2 : 1);
    };
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

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < itemsPerScreen; i++) {
      visible.push(carouselItems[(index + i) % carouselItems.length]);
    }
    return visible;
  };

  return (
    <main className="min-h-screen bg-[#e6ebf1] text-slate-800 py-8 sm:py-16 px-4 font-sans">
      
      {/* The "Page" Container (Boxed Layout) */}
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-300 overflow-hidden">
        
        <div className="p-8 sm:p-12 lg:p-16">

          {/* --- 1. HEADER SECTION --- */}
          <header className="text-center mb-14 space-y-5">
            <div className={`inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full ${ACCENT_BG} border border-sky-100 ${PRIMARY_COLOR} text-xs font-bold tracking-widest uppercase`}>
              <span>Engineering Design Case Study</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              BIMQubator
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Web Platform Deployment
              </span>
              <span className="hidden sm:block text-gray-300">|</span>
              <span className="italic">BIM, MEP, Architecture & Structural Design</span>
            </div>
          </header>

          {/* --- 2. INTRO / CLIENT POSITIONING --- */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
              Engineering Trust through <span className={`${PRIMARY_COLOR} decoration-4 underline decoration-sky-100 underline-offset-4`}>Technical Transparency</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              BIMQubator is a forward-looking design-engineering services firm specializing in MEP 3D design, BIM, architectural, and structural engineering services. Our goal was to create a digital presence that reflects their mission to deliver "global-standard projects."
            </p>
          </div>

          {/* --- 3. CHALLENGE & OPPORTUNITIES SECTION (Based on your observations) --- */}
          <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 mb-12">
            <div className="flex items-center gap-3 mb-6">
               <span className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full font-bold text-xl">
                  ⚠️
               </span>
               <h3 className="text-xl font-bold text-slate-900">Pre-Launch Digital Challenges</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Challenge 1 */}
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2 text-sm">
                        <span className="text-yellow-600">→</span> Lack of Portfolio/Proof
                    </h4>
                    <p className="text-slate-600 text-sm">
                        Minimal publicly accessible detail about completed projects, service metrics, or client lists to build trust with new GCs and developers.
                    </p>
                </div>
                {/* Challenge 2 */}
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2 text-sm">
                        <span className="text-yellow-600">→</span> Service Clarity and Depth
                    </h4>
                    <p className="text-slate-600 text-sm">
                        The headline listed multiple complex services (BIM, MEP, Structural), but lacked deep, illustrative breakdowns on the front end.
                    </p>
                </div>
                {/* Challenge 3 */}
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2 text-sm">
                        <span className="text-yellow-600">→</span> Branding/Nomenclature Clarity
                    </h4>
                    <p className="text-slate-600 text-sm">
                        The unique spelling of "BIMQubator" needed to be reinforced with a professional, clean UI to prevent visitor confusion.
                    </p>
                </div>
                {/* Challenge 4 */}
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2 text-sm">
                        <span className="text-yellow-600">→</span> Converting Technical Inquiries
                    </h4>
                    <p className="text-slate-600 text-sm">
                        Needed specialized CTAs to turn technical visitors into qualified leads seeking project quotes, not just general contacts.
                    </p>
                </div>
            </div>
          </section>


          {/* --- 4. SOLUTION & DELIVERABLES (Your Contribution) --- */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className={`w-1 h-8 ${PRIMARY_BG} rounded-full`}></span>
              Luminate Web Solutions: The Technical Strategy
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Deliverable 1: Service Breakdown */}
                <div className={`p-6 rounded-xl ${ACCENT_BG} border-t-4 border-sky-400 shadow-lg`}>
                    <h4 className={`text-lg font-bold ${PRIMARY_COLOR} mb-2`}>Detailed Service Architecture</h4>
                    <p className="text-slate-700 text-sm">
                        Dedicated pages were created for **MEP 3D Design, BIM, and Structural Engineering**, each explaining the workflow, tools, and project benefits.
                    </p>
                </div>

                {/* Deliverable 2: Trust Building */}
                <div className={`p-6 rounded-xl ${ACCENT_BG} border-t-4 border-sky-400 shadow-lg`}>
                    <h4 className={`text-lg font-bold ${PRIMARY_COLOR} mb-2`}>Credibility & Portfolio Ready</h4>
                    <p className="text-slate-700 text-sm">
                        Developed a structured portfolio section ready to host 3D renderings, project metrics, and client logos to validate their "global-standard" claims.
                    </p>
                </div>

                {/* Deliverable 3: Technology */}
                <div className={`p-6 rounded-xl ${ACCENT_BG} border-t-4 border-sky-400 shadow-lg`}>
                    <h4 className={`text-lg font-bold ${PRIMARY_COLOR} mb-2`}>Engineering-Centric UI/UX</h4>
                    <p className="text-slate-700 text-sm">
                        Implemented a clean, professional, and fast UI/UX using Next.js/Tailwind, designed to appeal directly to architects and general contractors (GCs).
                    </p>
                </div>
            </div>
          </section>

          {/* --- 5. VISUAL PROOF SECTION (Large Image Card) --- */}
          <section className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden mb-12 group hover:border-sky-300 hover:shadow-lg transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Side */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
                <div className="h-full w-full relative group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src="/bimqubator.png"
                    alt="BIMQubator technical design website screenshot"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
                </div>
              </div>

              {/* Key Services / Deliverables Side */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Key Services Highlighted</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    The platform ensures every core technical service is given dedicated space to elaborate on BIMQubator's methodology and technical depth.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Engineering Focus Areas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        "MEP 3D Designing",
                        "Structural Detail Design",
                        "Architectural Design Services",
                        "BIM Coordination Services"
                    ].map((service, i) => (
                         <div key={i} className={`p-3 rounded-xl bg-white border border-sky-100 shadow-sm ${PRIMARY_COLOR} text-sm font-medium`}>
                             {service}
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
                    href="https://bimqubator.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`px-5 py-2.5 rounded-lg ${PRIMARY_BG} text-white font-medium text-sm shadow-lg shadow-sky-900/20 hover:bg-sky-700 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2`}
                  >
                    View Project Site
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* --- 6. CAROUSEL SECTION (KEPT THE SAME STYLE) --- */}
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
                    // Using index `i` because getVisibleItems already handles the circular logic
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
{/* Footer (copied from About Us) */}
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