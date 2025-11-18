// app/erp/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

export default function ERPPage() {
  return (
    <div className="w-full antialiased text-slate-800">
      {/* HERO */}
      <header
        className="relative w-full h-[30rem] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(7,20,40,0.6), rgba(3,105,161,0.45)), url('/erp-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            ERP SOFTWARE DEVELOPMENT
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            Integrated ERP systems to unify finance, inventory, HR and operations — built for scale, security and measurable ROI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#modules">
              <Button label="Explore Modules" className="bg-[#0b66c3] hover:bg-[#095aa3] text-white" />
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
                <div className="bg-gradient-to-br from-[#08306b] to-[#06b6d4] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-500 font-medium uppercase text-xs tracking-wider">Enterprise</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                We design custom ERP systems that centralize data, automate workflows, and give leadership actionable insights — so your teams move faster and decisions are data-driven.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#eef6ff] text-[#0b66c3] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Unified finance & accounting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#f0fdf4] text-[#16a34a] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Inventory & supply chain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff7ed] text-[#f59e0b] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">HR & payroll integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 bg-[#fff1f2] text-[#ef4444] font-semibold">✓</span>
                  <span className="text-sm text-slate-600">Custom dashboards & reporting</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md transform transition-all duration-400 hover:scale-[1.02]">
              <Image
                src="/erp-illustration.jpg"
                width={900}
                height={600}
                alt="ERP illustration"
                className="w-full h-64 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="space-y-6">
          <h3 className="text-2xl font-bold">Core Modules</h3>
          <p className="text-slate-600">Modular architecture so you can start with essentials and scale as needed.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon: "Finance", title: "Finance & Accounting", text: "Ledgers, invoicing, AR/AP, reconciliation, multi-currency."},
              {icon: "Inventory", title: "Inventory Management", text: "Stock tracking, warehouse management, reorder automation."},
              {icon: "Sales", title: "Sales & CRM", text: "Orders, quotations, pipeline, integration with customer portals."},
              {icon: "Manufacturing", title: "Manufacturing (MRP)", text: "BOMs, work orders, production planning."},
              {icon: "HR", title: "HR & Payroll", text: "Employee data, attendance, payroll, leave management."},
              {icon: "Reporting", title: "BI & Reporting", text: "Custom dashboards, exports and scheduled reports."},
            ].map((m, i) => (
              <div key={i} className="rounded-xl overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center rounded-lg w-12 h-12 mb-4 bg-gradient-to-br from-[#0b66c3] to-[#06b6d4] text-white shadow-md">
                    <span className="font-semibold text-sm">{m.icon[0]}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{m.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{m.text}</p>
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

        {/* Process */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Our Implementation Process</h3>
          <p className="text-slate-600">A proven delivery approach to deploy ERP with minimal disruption and maximum ROI.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {title: "Discover", text: "Requirement workshops & current-state analysis", color: "from-[#7c3aed] to-[#06b6d4]"},
              {title: "Design", text: "Process mapping, UX and data model", color: "from-[#f97316] to-[#f43f5e]"},
              {title: "Build", text: "Configuration, custom modules & integrations", color: "from-[#06b6d4] to-[#0ea5a4]"},
              {title: "Go-live & Support", text: "Training, migration and SLA-backed support", color: "from-[#0ea5a4] to-[#6366f1]"},
            ].map((step, idx) => (
              <div key={idx} className="relative rounded-xl p-5 overflow-hidden group bg-white shadow hover:shadow-2xl transition-all duration-300">
                <div className={`absolute -top-10 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${step.color}`} style={{mixBlendMode: "overlay"}}/>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center rounded-full w-10 h-10 mb-3 bg-gradient-to-br from-slate-100 to-white shadow-inner">
                    <span className="text-white bg-gradient-to-br p-2 rounded-full" style={{background: "linear-gradient(90deg,#111827,#0b66c3)", width: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center"}}>{idx+1}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title: "Operational Efficiency", text: "Automate manual work, reduce errors and speed processes.", accent: "bg-gradient-to-tr from-[#0b66c3] to-[#06b6d4]"},
              {title: "Better Visibility", text: "Unified data and dashboards for faster decisions.", accent: "bg-gradient-to-tr from-[#10b981] to-[#06b6d4]"},
              {title: "Scalable Foundation", text: "Modular ERP that grows with your business.", accent: "bg-gradient-to-tr from-[#f97316] to-[#ef4444]"},
            ].map((b,i)=>(
              <div key={i} className="relative rounded-xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300 group">
                <div className={`p-6 text-white ${b.accent}`}>
                  <h4 className="font-semibold text-lg">{b.title}</h4>
                  <p className="mt-3 text-sm opacity-90">{b.text}</p>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">Outcome</div>
                    <div className="text-sm text-slate-700 font-medium group-hover:text-[#0b66c3] transition-colors">Learn more →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages">
          <h3 className="text-2xl font-bold mb-6">Packages (Typical)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name: "Starter", price: "₹1.2L", items:["Core modules", "Basic integrations", "2 months support"]},
              {name: "Business", price: "₹3.5L", items:["Advanced modules", "3rd-party integrations", "6 months support"]},
              {name: "Enterprise", price: "Custom", items:["Tailored roadmap", "SLA & dedicated team", "Ongoing ops"]},
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
                  <Button label="Request Demo" className="bg-[#0b66c3] text-white w-full hover:bg-[#095aa3]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-8 text-center bg-gradient-to-r from-[#f0f9ff] via-white to-[#eef2ff] shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Ready to transform your operations?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a free demo — we’ll evaluate your current systems and propose a practical ERP roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#0b66c3] to-[#06b6d4] shadow-lg transform transition hover:-translate-y-1 focus:outline-none">
                Book a Demo
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
