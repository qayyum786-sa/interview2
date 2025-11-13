"use client";
import Image from "next/image";
import React from "react";
import { Briefcase, MapPin, Tags } from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  const jobs = [
    {
      position: "Backend Developer Engineer",
      location: "India, In Office",
      skills: "Express, Node.js, Javascript, Mongodb, MySql",
    },
    {
      position: "Frontend Developer",
      location: "Remote",
      skills: "React, Tailwind CSS, Redux, TypeScript",
    },
    {
      position: "Full Stack Developer",
      location: "India, Hybrid",
      skills: "React, Node.js, MongoDB, AWS",
    },
    {
      position: "UI/UX Designer",
      location: "India, In Office",
      skills: "Figma, Adobe XD, Prototyping, User Research",
    },
    {
      position: "Mobile App Developer",
      location: "Remote",
      skills: "Flutter, Dart, Firebase, REST APIs",
    },
    {
      position: "DevOps Engineer",
      location: "India, In Office",
      skills: "Docker, Kubernetes, Jenkins, AWS",
    },
    {
      position: "QA Engineer",
      location: "Remote",
      skills: "Selenium, Cypress, Jest, Manual Testing",
    },
    {
      position: "Project Manager",
      location: "India, In Office",
      skills: "Agile, Scrum, Jira, Communication, Leadership",
    },
    {
      position: "Data Analyst",
      location: "Remote",
      skills: "Python, SQL, Power BI, Tableau",
    },
    {
      position: "Machine Learning Engineer",
      location: "India, Hybrid",
      skills: "Python, TensorFlow, PyTorch, Scikit-learn",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/Teammeet.jpg')", // replace with your banner
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center">
          <h1
            className="text-6xl font-bold mb-4 tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Career
          </h1>
          <p
            className="text-xl font-semibold text-blue-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Your dream career starts here.
          </p>
        </div>
      </section>

      {/* ===== JOB LIST SECTION ===== */}
      <section className="flex-grow py-10 px-5">
      {/* Outer blue frame */}
      <div
        className="max-w-4xl mx-auto rounded-2xl p-3"
        style={{
          boxShadow:
            "0 0 0 3px rgba(6,37,69,0.8), inset 0 0 0 3px rgba(6,37,69,0.6)",
        }}
      >
        {/* Inner white card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* Header row */}
          <div className="grid grid-cols-3 font-semibold text-gray-800 text-lg border-b pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-700" />
              <span>Position</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-700" />
              <span>Location</span>
            </div>
            <div className="flex items-center gap-2">
              <Tags className="w-5 h-5 text-blue-700" />
              <span>Skills</span>
            </div>
          </div>

          {/* Jobs list */}
          <div className="space-y-5">
            {jobs.map((job, i) => (
              <Link
                key={i}
                href="/pages/internship"
                className="block bg-white rounded-xl shadow-sm border border-gray-100 p-6 grid grid-cols-3 gap-4 items-center transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-md hover:bg-blue-50"
              >
                {/* Position */}
                <div>
                  <p className="font-semibold text-gray-900 text-xl leading-tight">
                    {job.position}
                  </p>
                </div>

                {/* Location */}
                <div className="text-gray-700 text-base text-center">
                  {job.location.split(",").map((line, idx) => (
                    <div key={idx}>{line.trim()}</div>
                  ))}
                </div>

                {/* Skills */}
                <div className="text-blue-700 text-base text-right">
                  {Array.isArray(job.skills)
                    ? job.skills.join(", ")
                    : job.skills}
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="inline-flex items-center gap-3">
              <button className="p-2 rounded-md bg-gray-100 disabled:opacity-50">
                ‹
              </button>
              <div className="inline-flex items-center gap-2">
                <button className="w-8 h-8 rounded-md border border-gray-300 bg-blue-100 text-blue-700 font-semibold">
                  1
                </button>
                <button className="w-8 h-8 rounded-md border border-gray-200">
                  2
                </button>
                <span className="px-2">…</span>
                <button className="w-8 h-8 rounded-md border border-gray-200">
                  9
                </button>
                <button className="w-8 h-8 rounded-md border border-gray-200">
                  10
                </button>
              </div>
              <button className="p-2 rounded-md bg-gray-100">›</button>
            </nav>
          </div>
        </div>
      </div>
    </section>

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
          Designed & Developed by{" "}
          <span className="font-semibold">Luminate Web Solutions</span>
        </p>
      </footer>
    </div>
  );
}
