"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function SolutionsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      image: "/Ourstory.jpg",
      title: "ERP SOFTWARE DEVELOPMENT",
      description:
        "ERP software connects inventory, finances, HR, and operations, boosting efficiency. Custom-built for any business, it streamlines operations and enhances productivity.",
    },
    {
      image: "/Ourstory.jpg",
      title: "CUSTOMER RELATIONSHIP MANAGEMENT",
      description:
        "CRM software helps manage customers, automate workflows, and track engagement. Simplify sales and support with integrated solutions.",
    },
    {
      image: "/Ourstory.jpg",
      title: "SOCIAL MEDIA BRANDING",
      description:
        "Social media branding crafts your unique online identity with consistent visuals and messaging that build engagement and loyalty.",
    },
    {
      image: "/Ourstory.jpg",
      title: "WHAT’S APP MARKETING",
      description:
        "A fast, direct way to connect with customers through messages, updates, offers, and support — right on their phones.",
    },
    {
      image: "/Ourstory.jpg",
      title: "CUSTOM APP DEVELOPMENT",
      description:
        "We build smart, user-friendly mobile apps that keep your customers connected and your brand accessible.",
    },
    {
      image: "/Ourstory.jpg",
      title: "WEBSITE / APP MAINTENANCE",
      description:
        "Keep your website and apps running smoothly with regular updates, performance optimization, and security checks.",
    },
  ];

  return (
    <div className="w-full">
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative w-full h-25rem flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/Aboutus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black-alpha-60"></div>
        <div className="text-center text-white relative z-2">
          <h1 className="text-5xl font-bold mb-3">Solutions</h1>
          <p className="text-lg">See how our solutions grow your business.</p>
        </div>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <div className="px-5 py-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-3 tracking-wide text-left">
          SERVICES
        </h2>
        <p className="text-2xl md:text-3xl font-serif text-[#004aad] text-left leading-snug">
          See how our solutions grow your business.
        </p>

        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel header="DEVELOPMENT">
            <div className="grid">
              {services.map((service, index) => (
                <div key={index} className="col-12 md:col-6 lg:col-4 p-3">
                  <div
                    className="relative border-round-lg shadow-3 overflow-hidden"
                    style={{
                      height: "380px",
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Overlay */}
                    <div
                      className="absolute top-0 left-0 w-full h-full p-4 flex flex-column justify-content-between"
                      style={{
                        background: "rgba(0, 75, 173, 0.92)",
                        color: "white",
                      }}
                    >
                      <div>
                        <h3 className="text-lg font-bold mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm line-height-3">
                          {service.description}
                        </p>
                      </div>
                      <Button
                        label="READ MORE"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        className="bg-blue-900 border-none text-white hover:bg-blue-800 w-max"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel header="DIGITAL MARKETING">
            <div className="grid">
              {services.map((service, index) => (
                <div key={index} className="col-12 md:col-6 lg:col-4 p-3">
                  <div
                    className="relative border-round-lg shadow-3 overflow-hidden"
                    style={{
                      height: "380px",
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-full p-4 flex flex-column justify-content-between"
                      style={{
                        background: "rgba(0, 75, 173, 0.92)",
                        color: "white",
                      }}
                    >
                      <div>
                        <h3 className="text-lg font-bold mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm line-height-3">
                          {service.description}
                        </p>
                      </div>
                      <Button
                        label="READ MORE"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        className="bg-blue-900 border-none text-white hover:bg-blue-800 w-max"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </TabView>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#004aad] text-white px-6 py-10 mt-8">
        <div className="grid grid-nogutter justify-content-between align-items-start">
          {/* === Left Section: Logo & Brand Info === */}
          <div className="col-12 md:col-4 text-center md:text-left mb-5 md:mb-0">
            <img
              src="/luminatewhitelogo.png"
              alt="Luminate Web Solutions"
              style={{ width: "180px", margin: "0 auto" }}
              className="mb-3 md:ml-0"
            />
            <p className="text-lg font-semibold">Luminate Web Solutions</p>
            <p className="text-sm mt-2 opacity-90">
              © 2024-25 All rights reserved.
            </p>
          </div>

          {/* === Middle Section: Quick Links === */}
          <div className="col-12 md:col-4 text-center md:text-left mb-5 md:mb-0">
            <h3 className="text-xl font-bold mb-4 underline underline-offset-4 decoration-white/60">
              Quick Links
            </h3>
            <ul className="list-none p-0 line-height-3 text-base">
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">
                <i className="pi pi-home mr-2"></i>Home
              </li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">
                <i className="pi pi-info-circle mr-2"></i>About Us
              </li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">
                <i className="pi pi-envelope mr-2"></i>Contact Us
              </li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">
                <i className="pi pi-cog mr-2"></i>Solutions
              </li>
              <li className="hover:text-blue-300 transition-all duration-200 cursor-pointer">
                <i className="pi pi-briefcase mr-2"></i>Career
              </li>
            </ul>
          </div>

          {/* === Right Section: Contact Info === */}
          <div className="col-12 md:col-4 text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 underline underline-offset-4 decoration-white/60">
              Contact Info
            </h3>
            <p className="text-base leading-7">
              Dubai, UAE <br />
              Hyderabad, Telangana, India
            </p>
            <p className="mt-3 leading-7">
              <i className="pi pi-phone mr-2"></i>+971 56 574 4992 <br />
              <i className="pi pi-phone mr-2"></i>+91 720 736 7455
            </p>
            <p className="mt-2 leading-7">
              <i className="pi pi-envelope mr-2"></i>
              info@luminatewebsol.com
            </p>
          </div>
        </div>

        <hr className="my-5 border-white/30" />

        <p className="text-center text-sm opacity-90">
          Designed & Developed by{" "}
          <span className="font-semibold text-blue-200">
            Luminate Web Solutions
          </span>
        </p>
      </footer>

    </div>
  );
}
