"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";

export default function SolutionsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const developmentServices = [
    {
      image: "/Ourstory.jpg",
      title: "ERP SOFTWARE DEVELOPMENT",
      slug: "/pages/solution/read-more/ERP",
      description:
        "ERP software connects inventory, finances, HR, and operations, boosting efficiency. Custom-built for any business, it streamlines operations and enhances productivity.",
    },
    {
      image: "/Ourstory.jpg",
      title: "CUSTOMER RELATIONSHIP MANAGEMENT",
      slug: "/pages/solution/read-more/CRM",
      description:
        "CRM software helps manage customers, automate workflows, and track engagement. Simplify sales and support with integrated solutions.",
    },
    {
      image: "/Ourstory.jpg",
      title: "SOCIAL MEDIA BRANDING",
      slug: "/pages/solution/read-more/SocialMediaBranding",
      description:
        "Social media branding crafts your unique online identity with consistent visuals and messaging that build engagement and loyalty.",
    },
    {
      image: "/Ourstory.jpg",
      title: "WHAT’S APP MARKETING",
      slug: "/pages/solution/read-more/WhatsAppMarketing",
      description:
        "A fast, direct way to connect with customers through messages, updates, offers, and support — right on their phones.",
    },
    {
      image: "/Ourstory.jpg",
      title: "CUSTOM APP DEVELOPMENT",
      slug: "/pages/solution/read-more/CustomAppDevelopment",
      description:
        "We build smart, user-friendly mobile apps that keep your customers connected and your brand accessible.",
    },
    {
      image: "/Ourstory.jpg",
      title: "WEBSITE / APP MAINTENANCE",
      slug: "/pages/solution/read-more/WebsiteAppMaintenance",
      description:
        "Keep your website and apps running smoothly with regular updates, performance optimization, and security checks.",
    },
  ];

  // Note: added `slug` for digital services so we can link to individual pages
  const digitalServices = [
    {
      image: "/Ourstory.jpg",
      title: "SEARCH ENGINE OPTIMIZATION (SEO)",
      slug: "/pages/solution/read-more/SEO",
      description:
        "Improve organic rankings and visibility with on-page, off-page and technical SEO tailored to your business goals.",
    },
    {
      image: "/Ourstory.jpg",
      title: "PAY-PER-CLICK (PPC) ADVERTISING",
      slug: "/pages/solution/read-more/ppc",
      description:
        "Targeted paid campaigns on Google and social platforms to drive qualified traffic and measurable ROI quickly.",
    },
    {
      image: "/Ourstory.jpg",
      title: "SOCIAL MEDIA MARKETING",
      slug: "/pages/solution/read-more/social-media",
      description:
        "Strategy, content and paid social to build brand awareness, engagement and conversions across platforms.",
    },
    {
      image: "/Ourstory.jpg",
      title: "CONTENT MARKETING",
      slug: "/pages/solution/read-more/content-marketing",
      description:
        "Create valuable content (blogs, videos, guides) that attracts, educates and converts your target audience.",
    },
    {
      image: "/Ourstory.jpg",
      title: "EMAIL MARKETING & AUTOMATION",
      slug: "/pages/solution/read-more/email-marketing",
      description:
        "Nurture leads and increase retention with segmented campaigns, drip flows and conversion-focused emails.",
    },
    {
      image: "/Ourstory.jpg",
      title: "ANALYTICS & PERFORMANCE REPORTING",
      slug: "/pages/solution/read-more/analytics",
      description:
        "Track campaigns and user behavior with clear dashboards and data-driven recommendations to scale growth.",
    },
  ];

  return (
    <div className="w-full">
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative w-full h-[25rem] flex items-center justify-center"
        style={{
          backgroundImage: "url('/Teammeet.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <div className="text-center text-white relative z-[2]">
          <h1 className="text-5xl font-bold mb-3">Solutions</h1>
          <p className="text-lg">See how our solutions grow your business.</p>
        </div>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <div className="max-w-6xl mx-auto px-5 py-6">
        <h2 className="text-3xl md:text-6xl font-bold text-black mb-3 tracking-wide text-left">
          SERVICES
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-[#004aad] text-left leading-snug">
          See how our solutions grow your business.
        </p>

        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel header="DEVELOPMENT">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentServices.map((service, index) => (
                <div key={index} className="p-3">
                  <div
                    className="relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                    style={{
                      height: "300px",
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Overlay */}
                    <div
                      className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between"
                      style={{
                        background: "rgba(0, 75, 173, 0.92)",
                        color: "white",
                      }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-base leading-relaxed">{service.description}</p>
                      </div>

                      {/* Wrap the button with Link when slug exists */}
                      {service.slug ? (
                        <Link href={service.slug} className="w-max">
                          <Button
                            label="READ MORE"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            className="bg-blue-900 border-sm text-white hover:bg-blue-800 w-max"
                          />
                        </Link>
                      ) : (
                        <Button
                          label="READ MORE"
                          icon="pi pi-arrow-right"
                          iconPos="right"
                          className="bg-blue-900 border-sm text-white hover:bg-blue-800 w-max"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel header="DIGITAL MARKETING">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalServices.map((service, index) => (
                <div key={index} className="p-3">
                  <div
                    className="relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                    style={{
                      height: "300px",
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between"
                      style={{
                        background: "rgba(0, 75, 173, 0.92)",
                        color: "white",
                      }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-base leading-relaxed">{service.description}</p>
                      </div>

                      {/* If the service has a slug, wrap the button with Link so it opens the page */}
                      {service.slug ? (
                        <Link href={service.slug} className="w-max">
                          <Button
                            label="READ MORE"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            className="bg-blue-900 border-sm text-white hover:bg-blue-800 w-max"
                          />
                        </Link>
                      ) : (
                        <Button
                          label="READ MORE"
                          icon="pi pi-arrow-right"
                          iconPos="right"
                          className="bg-blue-900 border-sm text-white hover:bg-blue-800 w-max"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </TabView>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0056d2] text-white px-10 py-8 mt-10">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
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
