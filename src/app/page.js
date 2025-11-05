"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const DMSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const sectionHeadingClass = `${DMSerif.className} text-[#0A0A0A] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight`;
  const sectionSubheadingClass = `${DMSans.className} text-[#045AD8] text-lg sm:text-xl md:text-2xl mt-2 mb-6`;
  const sectionMarginClass = "mx-4 sm:mx-8 md:mx-[150px] my-16";

  return (
    <main className={`bg-white text-gray-900 ${DMSans.className}`}>
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/Aboutus.jpg"
          alt="Team Working"
          fill
          className="object-cover brightness-[60%]"
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className={`${DMSerif.className} text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight`}>
            Elevating Brands Through Professional Web Development
          </h1>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contactus">
              <button className="bg-[#045AD8] hover:bg-[#0048b8] text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-200">
                Free Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white text-[#045AD8] border border-[#045AD8] hover:bg-gray-50 px-6 py-3 rounded-md text-lg font-medium transition-all duration-200">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* DISCOVER CTA */}
      <section className="bg-[#045AD8] text-white p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-xl md:text-2xl font-semibold max-w-2xl leading-snug">
          Discover how our web solutions can elevate your digital presence.
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Link href="/contactus">
            <button className="bg-white text-[#045AD8] px-5 py-3 rounded font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
          </Link>
          <Link href="/consultation">
            <button className="bg-transparent border border-white px-5 py-3 rounded font-semibold hover:bg-white hover:text-[#045AD8] transition">
              Inquiry
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>SERVICES</h1>
        <p className={sectionSubheadingClass}>See how our solutions grow your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
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
              className="bg-[#045AD8] rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 bg-white rounded-xl mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-[#045AD8] rounded" />
              </div>
              <h3 className="font-semibold text-2xl mb-3">{service.title}</h3>
              <p className="leading-relaxed opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGOS SECTION */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>What we build @Luminate</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-10 justify-items-center max-w-5xl mx-auto">
          {[
            "figma", "angularjs", "mongodb", "nodejs", "nextjs",
            "ts", "azure", "JS", "github", "mysql",
            "html5", "css", "bootstrap", "react", "php"
          ].map((tech) => (
            <div
              key={tech}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 w-20 h-20 flex items-center justify-center"
            >
              <Image
                src={`/${tech}.png`}
                alt={tech}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className={sectionMarginClass}>
  <h1 className={sectionHeadingClass}>CASE STUDIES</h1>
  <p className={sectionSubheadingClass}>
    Our Case Studies Show Our Capability To Provide Complex And Custom Solutions.
  </p>

  <div className="grid sm:grid-cols-2 gap-8 mt-8">
    {[
      {
        id: 1,
        title: "Case Study 1: Project Overview",
        desc: "Detailed analysis of our approach and impact on the client’s goals.",
        image: "/services-1.png", // Replace with your actual image path
      },
      {
        id: 2,
        title: "Case Study 2: Project Overview",
        desc: "Detailed analysis of our approach and impact on the client’s goals.",
        image: "/services-2.png", // Replace with your actual image path
      },
    ].map((caseItem) => (
      <div
        key={caseItem.id}
        className="bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-md transition"
      >
        <img
          src={caseItem.image}
          alt={caseItem.title}
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">{caseItem.title}</h3>
          <p className="text-gray-600 leading-relaxed">{caseItem.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* CTA BANNER */}
      <section className="relative w-full h-[300px] my-20 overflow-hidden rounded-2xl">
        <Image
          src="/images/BusinessTeamwork.jpg"
          alt="Team Working"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#045AD8]/85 flex flex-col justify-center px-10 md:px-20">
          <h2 className={`${DMSerif.className} text-white text-3xl md:text-4xl font-semibold mb-4 max-w-xl`}>
            Want to learn more about our Web services?
          </h2>
          <Link href="/contactus">
            <button className="bg-white text-[#045AD8] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Let's Talk →
            </button>
          </Link>
        </div>
      </section>

      {/* PROJECTS */}
     <section className={sectionMarginClass}>
  <h1 className={sectionHeadingClass}>OUR PROJECTS</h1>
  <p className={sectionSubheadingClass}>
    See how we’ve delivered best results to our clients.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {[
      {
        id: 1,
        title: "Skill Development HUB Qutubshahi 1",
        desc: "A case study showcasing our web development and design capabilities.",
        image: "/eiddo.png", // replace with your image path
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
          className="h-48 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
          <p className="text-gray-600 leading-relaxed">{project.desc}</p>
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
        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#045AD8] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <p className="italic mb-4 leading-relaxed">
                “I am impressed with their professionalism and dedication.
                The project was delivered on time and exceeded expectations.”
              </p>
              <div className="font-semibold text-lg">Md Zaheed Ali</div>
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

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
          className="h-52 w-full object-cover"
        />
        {/* Blog Content */}
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">{blog.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{blog.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-[#045AD8] text-white py-6 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-4">
          <Image
            src="/luminatewhitelogo.png"
            alt="Luminate Logo"
            width={140}
            height={40}
            className="object-contain"
          />
          <p className="text-center md:text-right text-sm">
            © 2025 Luminate Web Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
