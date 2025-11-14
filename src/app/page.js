"use client";
import { FaUserCircle } from "react-icons/fa";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-montserrat" });

export default function Home() {
  const sectionHeadingClass = `${montserrat.className} text-[#0A0A0A] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight`;
  const sectionSubheadingClass = `${montserrat.className} text-[#045AD8] text-lg sm:text-xl md:text-2xl mt-2 mb-6`;
  const sectionMarginClass = "mx-4 sm:mx-8 md:mx-24 lg:mx-36 my-12";

  const SERVICE_TABS = [
    {
      id: "web",
      title: "Web Development",
      intro:
        "Our expertise lies in building impactful websites that go beyond visual appeal. We design intuitive, responsive platforms that deliver seamless user experiences and drive meaningful engagement.",
      bullets: [
        "Discovery & Planning",
        "Design & Prototyping",
        "Development",
        "Testing & Launch",
      ],
      image: "/setting3.png",
    },
    {
      id: "app",
      title: "App Mobile Development",
      intro:
        "Designing high-performance native & hybrid mobile apps with pixel-perfect UI and efficient APIs — focused on performance and delightful UX.",
      bullets: ["Native & Hybrid", "API Integration", "Push Notifications", "Store Deployment"],
      image: "/setting3.png",
    },
    {
      id: "erp",
      title: "ERP Software Development",
      intro:
        "Custom ERP systems tailored to your business workflows with role-based access, reporting and integrations that scale with your organization.",
      bullets: ["Modular Architecture", "User Roles", "Reporting", "Integrations"],
      image: "/setting3.png",
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      intro:
        "Cloud architecture, migration and managed services to keep your infrastructure secure, resilient and cost-effective.",
      bullets: ["Cloud Migration", "Security & Compliance", "Managed DevOps", "Cost Optimization"],
      image: "/setting3.png",
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      intro:
        "We create visually stunning interfaces that captivate users and simplify interactions. From wireframes to polished designs, we ensure every detail aligns with your brand identity.",
      bullets: ["Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      image: "/setting3.png",
    },

    {
      id: "digital",
      title: "Digital Marketing",
      intro:
        "Data-driven digital marketing strategies that boost your online presence, engage your audience, and drive conversions across channels.", bullets: ["SEO", "PPC", "Social Media Management", "Email Marketing"], image: "/setting3.png"
    },
    {
      id: "devops",
      title: "DevOps Engineering",
      intro:
        "Streamlined software delivery through automation, collaboration, and continuous integration/deployment.",
      bullets: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring & Alerts", "Continuous Improvement"],
      image: "/setting3.png",
    },
    {
      id: "data",
      title: "Big Data Analytics",
      intro:
        "Advanced data analytics solutions for insights-driven decision-making and predictive modeling.",
      bullets: ["Data Warehousing", "Predictive Modeling", "Visualization Tools", "Machine Learning"],
      image: "/setting3.png",
    },
  ];

  const [activeService, setActiveService] = React.useState(0);
  const active = SERVICE_TABS[activeService];

  function onTabKey(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveService((s) => (s + 1) % SERVICE_TABS.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveService((s) => (s - 1 + SERVICE_TABS.length) % SERVICE_TABS.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveService(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveService(SERVICE_TABS.length - 1);
    }
  }

  // paste these right above the <section> in the same file

  // Beige / thick larger arrows like screenshot

const PrevArrow = ({ style, onClick }) => {
  return (
    <button
      aria-label="Previous slide"
      onClick={onClick}
      type="button"
      style={{ ...style }}
      className="
        absolute
        left-2 sm:left-4 md:left-6
        top-1/2
        z-30
        -translate-y-1/2
        flex items-center justify-center
        p-1 sm:p-2 md:p-3
        focus:outline-none
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M15 4L7 12l8 8"
          stroke="#F0E6C8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const NextArrow = ({ style, onClick }) => {
  return (
    <button
      aria-label="Next slide"
      onClick={onClick}
      type="button"
      style={{ ...style }}
      className="
        absolute
        right-2 sm:right-4 md:right-6
        top-1/2
        z-30
        -translate-y-1/2
        flex items-center justify-center
        p-1 sm:p-2 md:p-3
        focus:outline-none
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 4l8 8-8 8"
          stroke="#F0E6C8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};


  // Put this at top of your component (inside the same file but before return)
  const [activeCategory, setActiveCategory] = useState("development");

  /* Development cards (exact content we used before) */
  const developmentServices = [
    {
      title: "Social Media Branding",
      desc:
        "Social media branding builds a unique vibe with bold visuals and a consistent voice. Engage with your audience.It helps create stronger recognition, fosters trust, and keeps your audience engaged across platforms.",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="#045AD8" strokeWidth="1.6" />
          <path d="M8 10h8M8 14h4" stroke="#045AD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Search Engine Optimization",
      desc:
        "Helping you build smart, scalable strategies aligned with your vision and market needs.",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="#045AD8" strokeWidth="1.6" />
          <circle cx="10.5" cy="10.5" r="3.2" stroke="#045AD8" strokeWidth="1.6" />
          <path d="M17 17l-3.5-3.5" stroke="#045AD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "WhatsApp Marketing",
      desc:
        "A fast direct way to connect with customers through messages, updates, offers, and support right on their phones.",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="#045AD8" strokeWidth="1.6" />
          <path d="M9 9h6M9 13h6M9 17h6" stroke="#045AD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  /* Digital Marketing cards — I created matching-style cards.
     Replace titles/descriptions/icons with your real marketing items if you want. */
  const marketingServices = [
    {
      title: "Social Media Ads",
      desc:
        "Targeted social ads that increase awareness and drive conversions across platforms.",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="#045AD8" strokeWidth="1.6" />
          <path d="M7 13h10M7 9h6" stroke="#045AD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "SEO & Content",
      desc:
        "Content + SEO to improve organic rankings and bring qualified traffic to your site.",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="#045AD8" strokeWidth="1.6" />
          <path d="M8 12h8M8 16h5" stroke="#045AD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "WhatsApp Campaigns",
      desc:
        "Personalized WhatsApp campaigns for retention — updates, offers and support delivered instantly.",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="#045AD8" strokeWidth="1.6" />
          <path d="M9 9h6M9 13h6" stroke="#045AD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];




  return (
    <main className={`bg-white text-gray-900 ${montserrat.className}`}>

      {/* SLIDER HERO SECTION */}
      <section className="relative w-full overflow-hidden">
        <Slider
          dots={true}
          arrows={true}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          infinite={true}
          autoplay={true}
          autoplaySpeed={3000}
          speed={600}
          slidesToShow={1}
          slidesToScroll={1}
          pauseOnHover={true}
          adaptiveHeight={false}
          responsive={[
            { breakpoint: 1024, settings: { arrows: true } },
            { breakpoint: 640, settings: { arrows: false } },
          ]}
        >
          {/* Slide 1 */}
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/Aboutus.jpg"
                alt="Team Working"
                fill
                className="object-cover brightness-[60%]"
              />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1
                className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight`}
              >
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
          </div>

          {/* Slide 2 */}
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/homehero.png"
                alt="Creative Team"
                fill
                className="object-cover brightness-[60%]"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1
                className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight`}
              >
                Custom Web Apps That Scale With Your Business
              </h1>
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                <Link href="/pages/freeconsultation">
                  <button className="bg-[#045AD8] hover:bg-[#0048b8] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-all duration-200">
                    Get a Quote
                  </button>
                </Link>
                <Link href="/pages/solution">
                  <button className="bg-white text-[#045AD8] border border-[#045AD8] hover:bg-gray-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-all duration-200">
                    Our Services
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/Teammeet.jpg"
                alt="UX Design"
                fill
                className="object-cover brightness-[60%]"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1
                className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight`}
              >
                Design-Led Development for Outstanding UX
              </h1>
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                <Link href="/pages/freeconsultation">
                  <button className="bg-[#045AD8] hover:bg-[#0048b8] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-all duration-200">
                    Talk to an Expert
                  </button>
                </Link>
                <Link href="/pages/solution">
                  <button className="bg-white text-[#045AD8] border border-[#045AD8] hover:bg-gray-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-all duration-200">
                    See Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>



      {/* DISCOVER CTA */}
      <section className="bg-[#045AD8] text-white p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <h2 className="text-lg md:text-2xl font-semibold max-w-2xl leading-snug text-center md:text-left">
          Discover how our web solutions can elevate your digital presence.
        </h2>
        <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
          <Link href="/pages/contactus">
            <button className="bg-white text-[#045AD8] px-4 py-2 rounded font-semibold hover:bg-gray-100 transition text-sm md:text-base">
              Get Started
            </button>
          </Link>
          <Link href="/pages/freeconsultation">
            <button className="bg-transparent border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-[#045AD8] transition text-sm md:text-base">
              Inquiry
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Heading + Subheading */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight">
            SERVICES
          </h2>
          <p className="mt-3 text-3xl text-[#0048b8] font-serif font-semibold">
            See how our solutions grow your business.
          </p>
        </div>

        {/* stateful pill buttons */}
        {/* NOTE: uses useState below to toggle */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-[#CBE6FF] rounded-xl p-1 shadow-md">
            {/* DEVELOPMENT */}
            <button
              type="button"
              onClick={() => setActiveCategory("development")}
              aria-pressed={activeCategory === "development"}
              className={`px-6 py-2 rounded-lg mr-3 font-medium text-sm md:text-base transition ${activeCategory === "development"
                ? "bg-[#045AD8] text-white shadow-inner"
                : "bg-white text-[#045AD8]"
                }`}
            >
              DEVELOPMENT
            </button>

            {/* DIGITAL MARKETING */}
            <button
              type="button"
              onClick={() => setActiveCategory("marketing")}
              aria-pressed={activeCategory === "marketing"}
              className={`px-6 py-2 rounded-lg font-medium text-sm md:text-base transition ${activeCategory === "marketing"
                ? "bg-[#045AD8] text-white shadow-inner"
                : "bg-white text-[#045AD8]"
                }`}
            >
              DIGITAL MARKETING
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {(
            activeCategory === "development"
              ? developmentServices
              : marketingServices
          ).map((s, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-b from-[#0b74d8] to-[#0473d6] text-white min-h-[380px] transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* white icon box (top-left) */}
              <div className="absolute left-6 top-6 bg-white rounded-md w-14 h-14 flex items-center justify-center shadow-sm">
                <div className="text-[#045AD8]">{s.icon}</div>
              </div>

              {/* small top-right circular control */}
              <div className="absolute right-4 top-4 w-9 h-9 rounded-full bg-[#0f1724]/80 flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden>
                  <path d="M8 7l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* content: increased gap between icon and title via mt-20 */}
              <div className="mt-20">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* ------------------ END SERVICES SECTION ------------------ */}




      {/* LOGOS SECTION */}
      <section className={sectionMarginClass}>
        <h1 className={sectionHeadingClass}>What we build @Luminate</h1>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8 mt-8 justify-items-center max-w-5xl mx-auto">
          {[
            "figma", "angularjs", "mongodb", "nodejs", "nextjs",
            "ts", "azure", "JS", "github", "mysql",
            "html5", "css", "bootstrap", "react", "php",
          ].map((tech, index) => {
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
          <h2 className={`${montserrat.className} text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 max-w-xl text-center md:text-left`}>
            Want to learn more about our Web services?
          </h2>
          <div className="flex justify-center md:justify-start">
            <Link href="/pages/solution">
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
              <div className="font-semibold text-base sm:text-lg flex items-center gap-4 mt-6">
                Md Zaheed Ali
                <FaUserCircle className="text-white text-6xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          web development section
          ========================= */}
      <section className="w-full bg-[#0f66d6] py-10 px-4 sm:px-6 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* LEFT: Content Card */}
          <div>
            <div className="max-w-3xl">
              <span
                className="inline-block bg-white text-[#0b57bf] uppercase tracking-wide text-lg font-semibold px-4 py-2 rounded-sm mb-4 shadow-sm ring-1 ring-white/70"
                aria-hidden="true"
              >
                DEVELOPMENT
              </span>


              <h2 className={`${montserrat.className} text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6`}>
                Delivering Purpose-Driven, <br className="hidden sm:block" />
                High-Performance Websites.
              </h2>

              <div className="mt-2 bg-[#0b57bf] rounded-xl p-6 sm:p-8 shadow-lg relative overflow-visible min-h-[260px] md:min-h-[240px]">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                  <div className="flex-1 text-white pr-4 relative z-10">
                    <h3 className={`${montserrat.className} text-2xl font-bold mb-3`}>{active.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-4">{active.intro}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/95 mb-6">
                      {active.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white text-xs font-semibold">{i + 1}</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="inline-flex items-center gap-2 bg-white text-[#0b57bf] px-4 py-2 rounded-md font-medium shadow">Read More
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="#0b57bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="w-full md:w-64 flex-shrink-0 relative">
                    <div className="absolute right-[-12px] top-[60%] -translate-y-1/2 pointer-events-none z-0">
                      <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 transition-transform duration-300 transform hover:scale-105">
                        <Image src={active.image} alt={active.title} fill style={{ objectFit: "contain", filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.22))" }} sizes="(max-width:640px)160px,(max-width:1024px)200px,260px" />
                      </div>
                    </div>
                    <div className="h-44 md:h-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Vertical Tabs */}
          <aside className="sticky top-24 lg:pr-4">
            {/* Scrollable wrapper: limits height and adds local vertical scrolling */}
            <div
              role="tablist"
              aria-orientation="vertical"
              onKeyDown={onTabKey}
              aria-label="Services tabs"
              className="flex flex-col gap-4 max-h-[56vh] md:max-h-[68vh] lg:max-h-[74vh] overflow-y-auto pr-5 pl-4 right-tabs-scroll"
            >

              {SERVICE_TABS.map((t, idx) => {
                const isActive = idx === activeService;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${t.id}`}
                    id={`tab-${t.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveService(idx)}
                    className={`w-full text-left flex items-center gap-3 p-4 rounded-xl transition transform ${isActive
                      ? "bg-white shadow-lg"
                      : "bg-[#0e5dbb]/60 text-white/95 hover:opacity-100"
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center ${isActive ? "bg-white/90" : "bg-white/10"}`}>
                      <svg className={`w-5 h-5 ${isActive ? "text-[#0b57bf]" : "text-white"}`} viewBox="0 0 24 24" fill="none">
                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className={`font-semibold text-sm ${isActive ? "text-[#0b57bf]" : "text-white"}`}>{t.title}</div>
                      <div className={`text-xs block ${isActive ? "text-[#0b57bf]/90" : "text-white/80"}`}>
                        {t.intro.length > 80 ? t.intro.substring(0, 80) + "..." : t.intro}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
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
        <p className="text-center text-sm opacity-80">
          Designed & Developed by <span className="font-semibold">Luminate Web Solutions</span>
        </p>
      </footer>
    </main>
  );
}
