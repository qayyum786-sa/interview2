"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const DMSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const sectionHeadingClass = `${DMSerif.className} text-[#0A0A0A] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight`;
  const sectionSubheadingClass = `${DMSans.className} text-[#045AD8] text-lg sm:text-xl md:text-2xl mt-2 mb-6`;
  // made margins responsive and less extreme on md
  const sectionMarginClass = "mx-4 sm:mx-8 md:mx-24 lg:mx-36 my-12";

  return (
    <main className={`bg-white text-gray-900 ${DMSans.className}`}>
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/Aboutus.jpg"
          alt="Team Working"
          fill
          className="object-cover brightness-[60%]"
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className={`${DMSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight`}>
            Elevating Brands Through Professional Web Development
          </h1>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            <Link href="/pages/freeconsultation">
              <button className="bg-[#045AD8] hover:bg-[#0048b8] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-all duration-200">
                Free Consultation
              </button>
            </Link>
            <Link href="/pages/solution">
              <button className="bg-white text-[#045AD8] border border-[#045AD8] hover:bg-gray-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-all duration-200">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* DISCOVER CTA */}
      <section className="bg-[#045AD8] text-white p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <h2 className="text-lg md:text-2xl font-semibold max-w-2xl leading-snug text-center md:text-left">
          Discover how our web solutions can elevate your digital presence.
        </h2>
        <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
          <Link href="/contactus">
            <button className="bg-white text-[#045AD8] px-4 py-2 rounded font-semibold hover:bg-gray-100 transition text-sm md:text-base">
              Get Started
            </button>
          </Link>
          <Link href="/consultation">
            <button className="bg-transparent border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-[#045AD8] transition text-sm md:text-base">
              Inquiry
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>SERVICES</h1>
        <p className={sectionSubheadingClass}>See how our solutions grow your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
          {[
            {
              title: "Web Development",
              description: "Custom websites and web applications built with modern technologies",
            },
            {
              title: "UI/UX Design",
              description: "User-centered design solutions that enhance user experience",
            },
            {
              title: "Digital Strategy",
              description: "Comprehensive digital solutions to grow your online presence",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-[#045AD8] rounded-2xl p-6 sm:p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white rounded-xl mb-4 flex items-center justify-center">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#045AD8] rounded" />
              </div>
              <h3 className="font-semibold text-xl sm:text-2xl mb-2">{service.title}</h3>
              <p className="leading-relaxed opacity-90 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGOS SECTION */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>What we build @Luminate</h1>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8 mt-8 justify-items-center max-w-5xl mx-auto">
          {[
            // Row 1
            "figma", "angularjs", "mongodb", "nodejs", "nextjs",
            // Row 2
            "ts", "azure", "JS", "github", "mysql",
            // Row 3
            "html5", "css", "bootstrap", "react", "php",
          ].map((tech, index) => {
            // Center position (kept same index logic)
            const isCenterLogo = index === 7;

            return (
              <div
                key={tech}
                className={`flex items-center justify-center rounded-xl transition-transform duration-300
                ${isCenterLogo
                  ? "p-0 scale-110 sm:scale-125"
                  : "bg-white p-3 sm:p-4 shadow-md hover:shadow-lg hover:-translate-y-1"
                }`}
                style={{
                  width: isCenterLogo ? "5.5rem" : undefined,
                  height: isCenterLogo ? "5.5rem" : undefined,
                }}
              >
                {isCenterLogo ? (
                  <Image
                    src="/luminatelogo.png"
                    alt="Luminate Web Solutions"
                    width={140}
                    height={140}
                    className="object-contain drop-shadow-xl"
                  />
                ) : (
                  <Image
                    src={`/${tech}.png`}
                    alt={tech}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>CASE STUDIES</h1>
        <p className={sectionSubheadingClass}>
          Our Case Studies Show Our Capability To Provide Complex And Custom Solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6">
          {[
            {
              id: 1,
              title: "Case Study 1: Project Overview",
              desc: "Detailed analysis of our approach and impact on the client’s goals.",
              image: "/services-1.png",
            },
            {
              id: 2,
              title: "Case Study 2: Project Overview",
              desc: "Detailed analysis of our approach and impact on the client’s goals.",
              image: "/services-2.png",
            },
          ].map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="h-44 sm:h-56 w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-lg sm:text-xl mb-2">{caseItem.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{caseItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative w-full h-44 sm:h-56 md:h-[380px] my-12 sm:my-16 overflow-hidden rounded-2xl">
        <Image
          src="/blog.jpg"
          alt="Team Working"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#045AD8]/85 flex flex-col justify-center px-6 sm:px-10 md:px-20">
          <h2 className={`${DMSerif.className} text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 max-w-xl text-center md:text-left`}>
            Want to learn more about our Web services?
          </h2>
          <div className="flex justify-center md:justify-start">
            <Link href="/contactus">
              <button className="bg-white text-[#045AD8] font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-gray-100 transition text-sm sm:text-base">
                Let's Talk →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>OUR PROJECTS</h1>
        <p className={sectionSubheadingClass}>
          See how we’ve delivered best results to our clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
          {[
            {
              id: 1,
              title: "Skill Development HUB Qutubshahi 1",
              desc: "A case study showcasing our web development and design capabilities.",
              image: "/eiddo.png",
            },
            {
              id: 2,
              title: "Skill Development HUB Qutubshahi 2",
              desc: "A case study showcasing our web development and design capabilities.",
              image: "/coverImage.png",
            },
            {
              id: 3,
              title: "Skill Development HUB Qutubshahi 3",
              desc: "A case study showcasing our web development and design capabilities.",
              image: "/coverImage2.png",
            },

          ].map((project) => (
            <div
              key={project.id}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 sm:h-48 w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-lg sm:text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>TESTIMONIALS</h1>
        <p className={sectionSubheadingClass}>
          See how we’ve delivered best results to our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#045AD8] text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <p className="italic mb-4 leading-relaxed text-sm sm:text-base">
                “I am impressed with their professionalism and dedication.
                The project was delivered on time and exceeded expectations.”
              </p>
              <div className="font-semibold text-base sm:text-lg">Md Zaheed Ali</div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOGS */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>BLOGS</h1>
        <p className={sectionSubheadingClass}>
          Insights, guides, and tips to help your business grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
          {[
            {
              id: 1,
              title: "Helping you build smart, scalable solutions",
              desc: "Learn how modern design and web practices can elevate your business.",
              image: "/services-1.png", // replace with your image path
            },
            {
              id: 2,
              title: "Modern design that drives growth",
              desc: "Explore strategies that help you scale faster with a powerful web presence.",
              image: "/services-2.png",
            },
            {
              id: 3,
              title: "Boosting efficiency with custom web apps",
              desc: "Discover how tailored applications can streamline your business processes.",
              image: "/Teammeet.jpg",
            },
          ].map((blog) => (
            <div
              key={blog.id}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-40 sm:h-52 w-full object-cover"
              />
              {/* Blog Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-lg sm:text-xl mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0056d2] text-white px-6 sm:px-10 py-8 sm:py-10">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-start w-full md:w-1/3">
            <Image
              src="/luminatewhitelogo.png"
              alt="Luminate Web Solutions"
              width={180}
              height={64}
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
        <div className="text-center text-sm opacity-80 space-x-3">
          <span>Privacy Policy</span>|
          <span>Terms & Conditions</span>|
          <span>Disclaimer</span>|
          <span>Refund Policy</span>|
          <span>Cancellation Policy</span>
        </div>
      </footer>
    </main>
  );
}
