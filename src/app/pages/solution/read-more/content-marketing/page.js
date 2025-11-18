// app/content-marketing/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

export default function ContentMarketingPage() {
  return (
    <div className="w-full antialiased text-slate-800">
      {/* HERO */}
      <header
        className="relative w-full h-[30rem] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6,11,34,0.6), rgba(11,102,195,0.25)), url('/content-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Content Marketing
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            Strategic content that attracts, educates and converts — built to scale organic growth and brand authority.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#services">
              <Button label="Our Services" className="bg-[#0b66c3] hover:bg-[#095aa3] text-white" />
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
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-500 font-medium uppercase text-xs tracking-wider">Content</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                We create content strategies and assets that align with your business goals — from awareness to conversion. Content that ranks, converts and builds long-term brand trust.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#eef6ff] text-[#0b66c3] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Strategy & content planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#f0fdf4] text-[#16a34a] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">SEO-led copy & long-form content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff7ed] text-[#f59e0b] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Content distribution & amplification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff1f2] text-[#ef4444] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Measurement & iterative optimization</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md transform transition-all duration-400 hover:scale-[1.02]">
              <Image
                src="/content-illustration.jpg"
                width={900}
                height={600}
                alt="Content marketing illustration"
                className="w-full h-64 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-6">
          <h3 className="text-2xl font-bold">Services</h3>
          <p className="text-slate-600">End-to-end content services from planning to distribution and measurement.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Content Strategy", text: "Audience research, content pillars and editorial calendars." },
              { title: "SEO Content", text: "Keyword-led articles, pillar pages and cluster content." },
              { title: "Thought Leadership", text: "Long-form guides, whitepapers and executive bylines." },
              { title: "Social Content", text: "Short-form posts, threads and repurposed snippets." },
              { title: "Video Scripts & Production", text: "Short & long-form scripts optimized for platforms." },
              { title: "Distribution & Outreach", text: "Newsletter, syndication and PR amplification." },
            ].map((s, i) => (
              <div key={i} className="rounded-xl overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center rounded-lg w-12 h-12 mb-4 bg-gradient-to-br from-[#0b66c3] to-[#06b6d4] text-white shadow-md">
                    <span className="font-semibold text-sm">{s.title.split(" ")[0][0]}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{s.text}</p>
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

        {/* Content Process */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Content Process</h3>
          <p className="text-slate-600">A repeatable process that ensures quality, velocity and SEO performance.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Research", text: "Keyword & audience insights", color: "from-[#7c3aed] to-[#06b6d4]" },
              { title: "Plan", text: "Editorial calendar & briefs", color: "from-[#f97316] to-[#f43f5e]" },
              { title: "Create", text: "Write, edit & produce assets", color: "from-[#06b6d4] to-[#0ea5a4]" },
              { title: "Distribute", text: "Publish, amplify & measure", color: "from-[#0ea5a4] to-[#6366f1]" },
            ].map((p, idx) => (
              <div key={idx} className="relative rounded-xl p-5 overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300">
                <div className={`absolute -top-10 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${p.color}`} style={{mixBlendMode: "overlay"}}/>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center rounded-full w-10 h-10 mb-3 bg-gradient-to-br from-slate-100 to-white shadow-inner">
                    <span className="text-white bg-gradient-to-br p-2 rounded-full" style={{background: "linear-gradient(90deg,#111827,#0b66c3)", width: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center"}}>{idx+1}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-slate-600">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formats */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Content Formats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Long-form blog posts & guides",
              "Case studies & whitepapers",
              "Email newsletters & sequences",
              "Short-form video and repurposed clips",
            ].map((f, i) => (
              <div key={i} className="rounded-xl p-6 bg-white shadow hover:shadow-2xl transition-all duration-300">
                <h4 className="font-semibold mb-2">{f}</h4>
                <p className="text-sm text-slate-600">We craft each format with distribution and SEO in mind.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Measurement */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Measurement & Growth</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "KPIs", text: "Traffic, leads, engagement & conversion rates." },
              { title: "Dashboards", text: "Custom dashboards for content performance and ROI." },
              { title: "Optimization", text: "A/B tests, content refreshes and republishing." },
            ].map((m,i)=>(
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
              { name: "Starter", price: "₹25k/mo", items: ["Content calendar", "4 long-form posts", "Monthly report"] },
              { name: "Growth", price: "₹70k/mo", items: ["12 posts + repurposing", "Newsletter setup", "Bi-weekly reporting"] },
              { name: "Authority", price: "Custom", items: ["Thought leadership", "Whitepapers & PR", "Dedicated editor"] },
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
          <h3 className="text-2xl font-bold mb-2">Ready to scale with content?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a content audit — we’ll review your current assets and propose a focused plan to grow traffic and leads.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#0b66c3] to-[#06b6d4] shadow-lg transform transition hover:-translate-y-1 focus:outline-none">
                Book Content Audit
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
