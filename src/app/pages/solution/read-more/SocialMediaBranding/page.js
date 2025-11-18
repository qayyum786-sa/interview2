// app/social-media/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

export default function SocialMediaBrandingPage() {
  return (
    <div className="w-full antialiased text-slate-800">
      {/* HERO */}
      <header
        className="relative w-full h-[30rem] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6,11,34,0.6), rgba(11,102,195,0.35)), url('/social-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Social Media Branding
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            Crafting memorable brand experiences on socials that drive awareness, engagement and conversions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#offerings">
              <Button label="Our Offerings" className="bg-[#0b66c3] hover:bg-[#095aa3] text-white" />
            </Link>
            <a href="#packages">
              <Button label="See Packages" className="p-button-outlined" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 space-y-12">
        {/* Overview */}
        <section className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-10 ring-1 ring-slate-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-[#0b66c3] to-[#06b6d4] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2l3 6 6 .5-4.5 4 1 6L12 16l-5.5 3.5 1-6L3 8.5 9 8l3-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-500 font-medium uppercase text-xs tracking-wider">Brand</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                We build social identities that are consistent, creative, and conversion-focused. From visual systems to content calendars and paid-social creatives — we do the full stack needed to grow followers and revenue.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#eef6ff] text-[#0b66c3] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Brand visual systems & templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#f0fdf4] text-[#16a34a] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Content strategy & calendars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff7ed] text-[#f59e0b] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Creative production (static & video)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff1f2] text-[#ef4444] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Paid creative & testing</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md transform transition-all duration-400 hover:scale-[1.02]">
              <Image
                src="/social-illustration.jpg"
                width={900}
                height={600}
                alt="Social media branding illustration"
                className="w-full h-64 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section id="offerings" className="space-y-6">
          <h3 className="text-2xl font-bold">What We Offer</h3>
          <p className="text-slate-600">A modular service mix so you can start with branding basics and scale to full-funnel social growth.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Brand Kit", text: "Logo variations, color palettes, typography and visual guidelines." },
              { title: "Content Calendar", text: "Monthly content plans with post briefs, captions and hashtags." },
              { title: "Creative Production", text: "Short-form video, reels, carousels, and ad creatives." },
              { title: "Community Management", text: "Comment moderation, DMs and proactive engagement." },
              { title: "Paid Creative & Testing", text: "High-velocity creative testing for ROAS optimization." },
              { title: "Performance Reporting", text: "Weekly & monthly dashboards with actionable insights." },
            ].map((o, i) => (
              <div key={i} className="rounded-xl overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center rounded-lg w-12 h-12 mb-4 bg-gradient-to-br from-[#0b66c3] to-[#06b6d4] text-white shadow-md">
                    <span className="font-semibold text-sm">{o.title.split(" ")[0][0]}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{o.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{o.text}</p>
                  <a className="text-sm text-[#0b66c3] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    See examples
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creative Process */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Our Creative Process</h3>
          <p className="text-slate-600">Fast, iterative creative cycles with data-backed testing.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Discover", text: "Brand audit & competitor analysis", color: "from-[#7c3aed] to-[#06b6d4]" },
              { title: "Concept", text: "Moodboards, hooks & formats", color: "from-[#f97316] to-[#f43f5e]" },
              { title: "Produce", text: "Batch shoots, edits & templating", color: "from-[#06b6d4] to-[#0ea5a4]" },
              { title: "Test & Scale", text: "Creative testing, iterating winning formats", color: "from-[#0ea5a4] to-[#6366f1]" },
            ].map((c, idx) => (
              <div key={idx} className="relative rounded-xl p-5 overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300">
                <div className={`absolute -top-10 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${c.color}`} style={{mixBlendMode: "overlay"}}/>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center rounded-full w-10 h-10 mb-3 bg-gradient-to-br from-slate-100 to-white shadow-inner">
                    <span className="text-white bg-gradient-to-br p-2 rounded-full" style={{background: "linear-gradient(90deg,#111827,#0b66c3)", width: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center"}}>{idx+1}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{c.title}</h4>
                  <p className="text-sm text-slate-600">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits / Case-style */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Why It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Distinct Identity", text: "Create a consistent look that stands out in feeds.", accent: "bg-gradient-to-tr from-[#0b66c3] to-[#06b6d4]" },
              { title: "Higher Engagement", text: "Format-first creatives and contextual hooks increase engagement.", accent: "bg-gradient-to-tr from-[#10b981] to-[#06b6d4]" },
              { title: "Scalable Creative", text: "Templates & processes to produce more winning ads faster.", accent: "bg-gradient-to-tr from-[#f97316] to-[#ef4444]" },
            ].map((b,i)=>(
              <div key={i} className="relative rounded-xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300 group">
                <div className={`p-6 text-white ${b.accent}`}>
                  <h4 className="font-semibold text-lg">{b.title}</h4>
                  <p className="mt-3 text-sm opacity-90">{b.text}</p>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">Outcome</div>
                    <div className="text-sm text-slate-700 font-medium group-hover:text-[#0b66c3] transition-colors">See examples →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages">
          <h3 className="text-2xl font-bold mb-6">Packages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "₹15k/mo", items: ["Brand kit", "8 posts/month", "Monthly report"] },
              { name: "Growth", price: "₹40k/mo", items: ["Content calendar", "20 posts/month", "Paid creative"] },
              { name: "Scale", price: "₹85k/mo", items: ["Full production", "Community mgmt", "Weekly optimization"] },
            ].map((p,i)=>(
              <div key={i} className="rounded-2xl p-6 border hover:border-transparent hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{p.name}</h4>
                  <div className="text-sm text-slate-500">{p.price}</div>
                </div>
                <ul className="mb-6 text-sm text-slate-600 space-y-2">
                  {p.items.map((it,idx)=>(
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-sm mt-1 text-[#0b66c3]">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button label="Start Project" className="bg-[#0b66c3] text-white w-full hover:bg-[#095aa3]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-8 text-center bg-gradient-to-r from-[#f0f9ff] via-white to-[#eef2ff] shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Ready to make your brand memorable on social?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a strategy session — we’ll audit your current channels and propose a creative roadmap with testable ideas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#0b66c3] to-[#06b6d4] shadow-lg transform transition hover:-translate-y-1 focus:outline-none">
                Book Strategy
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
