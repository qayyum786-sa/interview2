// app/ppc/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

export default function PPCPage() {
  return (
    <div className="w-full antialiased text-slate-800">
      {/* HERO */}
      <header
        className="relative w-full h-[30rem] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(3,7,18,0.6), rgba(11,102,195,0.35)), url('/ppc-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Pay-Per-Click (PPC) Advertising
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            Fast, measurable traffic from search and social — crafted campaigns that drive conversions and profitable growth.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#channels">
              <Button label="Channels & Approach" className="bg-[#0b66c3] hover:bg-[#095aa3] text-white" />
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
                    <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-500 font-medium uppercase text-xs tracking-wider">Paid Media</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Our PPC service builds high-performing paid campaigns across search, shopping and social channels. We focus on targeting, creative & bidding strategies that maximize return on ad spend (ROAS).
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#eef6ff] text-[#0b66c3] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Search & Shopping campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff7ed] text-[#f59e0b] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Social ads & remarketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#f0fdf4] text-[#16a34a] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Conversion tracking & attribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff1f2] text-[#ef4444] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">A/B testing & creative optimization</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md transform transition-all duration-400 hover:scale-[1.02]">
              <Image
                src="/ppc-illustration.jpg"
                width={900}
                height={600}
                alt="PPC illustration"
                className="w-full h-64 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Channels */}
        <section id="channels" className="space-y-6">
          <h3 className="text-2xl font-bold">Channels We Use</h3>
          <p className="text-slate-600">Select channels based on audience, funnel stage and unit economics.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Google Search", text: "Intent-driven traffic using keyword targeting and smart bidding." },
              { title: "Google Shopping", text: "Product feeds & shopping campaigns to capture purchase-ready users." },
              { title: "Meta (Facebook & Instagram)", text: "Awareness to conversion funnels with dynamic ads." },
              { title: "LinkedIn Ads", text: "B2B targeting, lead generation, and account-based campaigns." },
              { title: "YouTube / Video", text: "Brand lift and lower-funnel video creatives." },
              { title: "Remarketing", text: "Cross-channel remarketing to recover intent and increase conversions." },
            ].map((c, i) => (
              <div key={i} className="rounded-xl overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center rounded-lg w-12 h-12 mb-4 bg-gradient-to-br from-[#0b66c3] to-[#06b6d4] text-white shadow-md">
                    <span className="font-semibold text-sm">{c.title.split(" ")[0][0]}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{c.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{c.text}</p>
                  <a className="text-sm text-[#0b66c3] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy & Creative */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Strategy & Creative</h3>
          <p className="text-slate-600">We merge audience signals with creative testing to scale profitable campaigns.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Targeting", text: "Keyword intent, custom audiences & lookalikes." },
              { title: "Bidding", text: "Manual, smart bidding & bid adjustments for ROAS." },
              { title: "Creative", text: "High-velocity creative testing for headlines, images & CTAs." },
            ].map((s,i)=>(
              <div key={i} className="rounded-xl p-6 bg-white shadow hover:shadow-2xl transition-all duration-300">
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Measurement */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Measurement & Reporting</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tracking", text: "Conversion tags, GA4, server-side tracking and pixels." },
              { title: "Attribution", text: "Multi-touch and data-driven attribution to understand true performance." },
              { title: "Dashboards", text: "Custom dashboards with cost, conversions & LTV metrics." },
            ].map((m,i)=>(
              <div key={i} className="rounded-xl p-6 border bg-white hover:shadow-2xl transition-all duration-300">
                <h4 className="font-semibold mb-2">{m.title}</h4>
                <p className="text-sm text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ads & Creatives */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Ads & Creative Formats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Search text ads (expanded & responsive)",
              "Product feed creatives for Shopping",
              "Carousel & single-image ads for social",
              "Video ads & bumper formats for awareness",
            ].map((a, i) => (
              <div key={i} className="rounded-xl p-6 bg-white shadow hover:shadow-2xl transition-all duration-300">
                <h4 className="font-semibold mb-2">{a}</h4>
                <p className="text-sm text-slate-600">We produce short-turn creatives and iterate based on CTR and CPA signals.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages">
          <h3 className="text-2xl font-bold mb-6">Packages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "₹20k + ad spend", items: ["Account setup", "Basic search campaigns", "Monthly report"] },
              { name: "Growth", price: "₹60k + ad spend", items: ["Multi-channel campaigns", "Creative testing", "Bi-weekly reporting"] },
              { name: "Scale", price: "Custom", items: ["Dedicated strategist", "Full-funnel ops", "Custom attribution"] },
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
                  <Button label="Start Campaign" className="bg-[#0b66c3] text-white w-full hover:bg-[#095aa3]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-8 text-center bg-gradient-to-r from-[#f0f9ff] via-white to-[#eef2ff] shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Ready to scale paid growth?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a PPC audit — we’ll review account health, wasted spend and quick wins to improve ROAS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#0b66c3] to-[#06b6d4] shadow-lg transform transition hover:-translate-y-1 focus:outline-none">
                Book PPC Audit
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
