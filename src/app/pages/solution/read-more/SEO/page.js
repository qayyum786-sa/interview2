// app/seo/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import Link from "next/link";

export default function SEOPage() {
  return (
    <div className="w-full antialiased text-slate-800">
      {/* HERO */}
      <header
        className="relative w-full h-[30rem] flex items-center"
        aria-label="SEO hero"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(2,6,23,0.6), rgba(3,105,161,0.45)), url('/seo-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Search Engine Optimization (SEO)
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            Drive targeted organic traffic, increase visibility, and convert more users with a data-driven SEO strategy.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#process" className="inline-flex">
              <Button label="See Our Process" className="bg-[#0b66c3] hover:bg-[#0a5bb0] text-white" />
            </Link>
            <a href="#packages" className="inline-flex">
              <Button label="View Packages" className="p-button-outlined" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 space-y-12">
        {/* Overview Card */}
        <section className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-10 ring-1 ring-slate-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-[#0b66c3] to-[#06b6d4] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  {/* subtle SEO icon */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-500 font-medium uppercase text-xs tracking-wider">Service</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Our SEO approach blends technical excellence, purposeful content, and high-quality authority signals so your site ranks for the keywords that matter most to your business.
                We prioritize user intent, performance, and measurable ROI.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#eef6ff] text-[#0b66c3] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Technical audits & site fixes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff7ed] text-[#f59e0b] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Keyword research & content mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#f0fdf4] text-[#16a34a] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Content strategy & on-page optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff1f2] text-[#ef4444] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Link building & authority growth</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md transform transition-all duration-400 hover:scale-[1.02]">
              <Image
                src="/seo-illustration.jpg"
                width={900}
                height={600}
                alt="SEO illustration"
                className="w-full h-64 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Process — colorful timeline cards */}
        <section id="process" className="space-y-6">
          <h3 className="text-2xl font-bold">Our SEO Process</h3>
          <p className="text-slate-600">A clear, measurable workflow designed to deliver lasting gains.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Discovery", text: "Goals, competitors & baseline metrics", color: "from-[#7c3aed] to-[#06b6d4]" },
              { title: "Audit", text: "Technical & content gap analysis", color: "from-[#f97316] to-[#f43f5e]" },
              { title: "Implementation", text: "On-page fixes & content rollouts", color: "from-[#06b6d4] to-[#0ea5a4]" },
              { title: "Measure & Iterate", text: "Reporting, insights & scaling", color: "from-[#0ea5a4] to-[#6366f1]" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-xl p-5 overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300"
                aria-hidden={false}
              >
                <div
                  className={`absolute -top-10 -right-24 w-56 h-56 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${step.color}`}
                  style={{ mixBlendMode: "overlay" }}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center rounded-lg w-12 h-12 mb-3 bg-gradient-to-br from-slate-100 to-white shadow-inner">
                    <span className="text-white bg-gradient-to-br p-2 rounded-full" style={{ background: "linear-gradient(90deg,#111827,#0b66c3)", width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {idx + 1}
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.text}</p>
                  <div className="mt-4">
                    <a className="inline-flex items-center gap-2 text-sm font-medium text-[#0b66c3] group-hover:translate-x-1 transition-transform">
                      Learn more
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits — colored cards with hover lift */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Benefits You Can Expect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Higher Visibility", text: "Appear for relevant searches and increase brand awareness.", accent: "bg-gradient-to-tr from-[#0b66c3] to-[#06b6d4]" },
              { title: "Qualified Traffic", text: "Bring visitors with real purchase intent to your site.", accent: "bg-gradient-to-tr from-[#10b981] to-[#06b6d4]" },
              { title: "Long-term ROI", text: "Investments compound over time — traffic that keeps coming.", accent: "bg-gradient-to-tr from-[#f97316] to-[#ef4444]" },
            ].map((b, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300 group">
                <div className={`p-6 ${b.accent} text-white`}>
                  <h4 className="font-semibold text-lg">{b.title}</h4>
                  <p className="mt-3 text-sm opacity-90">{b.text}</p>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">What you get</div>
                    <div className="text-sm text-slate-700 font-medium group-hover:text-[#0b66c3] transition-colors">Learn more →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages — elevated cards */}
        <section id="packages">
          <h3 className="text-2xl font-bold mb-6">Packages (Sample)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", items: ["Basic audit", "5 keywords", "Monthly report"], price: "₹25k/mo" },
              { name: "Growth", items: ["Full audit", "20 keywords", "Content & outreach"], price: "₹60k/mo" },
              { name: "Enterprise", items: ["Custom roadmap", "Large site ops", "Dedicated reporting"], price: "Custom" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl p-6 border hover:border-transparent hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{p.name}</h4>
                  <div className="text-sm text-slate-500">{p.price}</div>
                </div>
                <ul className="mb-6 text-sm text-slate-600 space-y-2">
                  {p.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-sm mt-1 text-[#0b66c3]">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button label="Get Started" className="bg-[#0b66c3] text-white w-full hover:bg-[#095aa3]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA — animated gradient */}
        <section className="rounded-2xl p-8 text-center bg-gradient-to-r from-[#eef2ff] via-white to-[#f0f9ff] shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Ready to grow organic traffic?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a free SEO consultation — we'll audit your site and provide a clear, prioritized roadmap to improve rankings and conversions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#0b66c3] to-[#06b6d4] shadow-lg transform transition hover:-translate-y-1 focus:outline-none"
                aria-label="Book Consultation"
              >
                Book Consultation
                <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>

            <a href="#packages" className="inline-block">
              <Button label="See Packages" className="p-button-outlined" />
            </a>
          </div>
        </section>
      </main>
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
    </div>
  );
}
