// app/email-marketing/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

export default function EmailMarketingPage() {
  return (
    <div className="w-full antialiased text-slate-800">
      {/* HERO */}
      <header
        className="relative w-full h-[30rem] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6,11,34,0.6), rgba(3,105,161,0.25)), url('/email-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Email Marketing & Automation
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            Build automated, personalized email journeys that nurture leads, recover customers and drive revenue.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#capabilities">
              <Button label="Our Capabilities" className="bg-[#0b66c3] hover:bg-[#095aa3] text-white" />
            </a>
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
                    <path d="M3 8.5v7A2.5 2.5 0 005.5 18h13a2.5 2.5 0 002.5-2.5v-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 8.5L12 13l9-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-500 font-medium uppercase text-xs tracking-wider">Lifecycle</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                We design email programs that convert — from welcome sequences and lead nurture to cart recovery and retention — combining design, copy, segmentation and automation to deliver measurable ROI.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#eef6ff] text-[#0b66c3] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Welcome & onboarding sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#f0fdf4] text-[#16a34a] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Behavioral & lifecycle automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff7ed] text-[#f59e0b] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Segmentation & personalization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff1f2] text-[#ef4444] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Deliverability & reputation management</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md transform transition-all duration-400 hover:scale-[1.02]">
              <Image
                src="/email-illustration.jpg"
                width={900}
                height={600}
                alt="Email marketing illustration"
                className="w-full h-64 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="space-y-6">
          <h3 className="text-2xl font-bold">Capabilities</h3>
          <p className="text-slate-600">Everything needed to run and scale high-performing email programs.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Strategy & Journey Mapping", text: "Define funnels, triggers and conversion goals." },
              { title: "Template Design & Build", text: "Responsive, on-brand HTML templates with modular blocks." },
              { title: "Automation Flows", text: "Welcome, nurture, cart recovery, re-engagement & win-back flows." },
              { title: "Segmentation & Personalization", text: "Dynamic content, merge tags and behavioral splits." },
              { title: "Deliverability", text: "IP warmup, authentication (SPF/DKIM/DMARC) and inbox placement." },
              { title: "Reporting & Optimization", text: "Open, CTR, revenue attribution and iterative tests." },
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

        {/* Automation Flows (visual cards) */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Automation Flows</h3>
          <p className="text-slate-600">Sample flows we frequently implement to increase activation and revenue.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Welcome Sequence", text: "3-step onboarding emails to engage new users and drive first action." },
              { title: "Cart Recovery", text: "Timed reminders with incentives to recover abandoned carts." },
              { title: "Re-Engagement", text: "Win-back campaigns with segmentation for lapsed users." },
            ].map((f, i) => (
              <div key={i} className="rounded-xl p-6 bg-white shadow hover:shadow-2xl transition-all duration-300">
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{f.text}</p>
                <div className="text-xs text-slate-500">Typical triggers: signup, cart abandon, 90-day inactivity</div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Integrations</h3>
          <p className="text-slate-600">Connect email with your CRM, product and analytics stack for better targeting and attribution.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "CRM (Salesforce, HubSpot)",
              "Ecommerce platforms (Shopify, WooCommerce)",
              "Analytics (GA4, Segment)",
              "CDP & Data Layers",
            ].map((t, i) => (
              <div key={i} className="rounded-xl p-5 bg-white shadow hover:shadow-2xl transition-all duration-300">
                <h4 className="font-semibold mb-2">{t}</h4>
                <p className="text-sm text-slate-600">We build reliable webhooks, server-side events and sync jobs.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Measurement & Optimization */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Measurement & Optimization</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Attribution", text: "Email-sourced revenue and assisted conversions." },
              { title: "A/B Testing", text: "Subject lines, creative, and send-time experiments." },
              { title: "Deliverability & Hygiene", text: "List cleaning, suppression and engagement-based sends." },
            ].map((m, i) => (
              <div key={i} className="rounded-xl p-6 border bg-white hover:shadow-2xl transition-all duration-300">
                <h4 className="font-semibold mb-2">{m.title}</h4>
                <p className="text-sm text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages">
          <h3 className="text-2xl font-bold mb-6">Packages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "₹12k/mo", items: ["Template setup", "Welcome sequence", "Monthly report"] },
              { name: "Growth", price: "₹35k/mo", items: ["Advanced automation", "Segmentation", "Bi-weekly reporting"] },
              { name: "Enterprise", price: "Custom", items: ["Dedicated strategist", "Server-side events", "SLA & support"] },
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
                  <Button label="Start Campaign" className="bg-[#0b66c3] text-white w-full hover:bg-[#095aa3]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-8 text-center bg-gradient-to-r from-[#f0f9ff] via-white to-[#eef2ff] shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Ready to automate revenue with email?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a program audit — we’ll evaluate your current setup and show an automation roadmap that drives conversions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#0b66c3] to-[#06b6d4] shadow-lg transform transition hover:-translate-y-1 focus:outline-none">
                Book Audit
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
