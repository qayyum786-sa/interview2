import Image from "next/image";
import React from "react";

export default function Blogs() {
  return (
    <div className="w-full">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "url('/blog.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-5">
          <h1 className="text-5xl font-bold mb-4">Blogs</h1>
          <p className="text-lg max-w-2xl mx-auto">
            See how we’ve delivered best results to our clients
          </p>
        </div>
      </section>

      {/* ===== FILTER SECTION ===== */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 mb-10 px-5">
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-[250px] bg-white">
          <span className="font-semibold text-gray-700">CATEGORY:</span>
          <select className="flex-1 outline-none text-gray-600 bg-transparent">
            <option>All</option>
            <option>Technical</option>
            <option>Business</option>
          </select>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-[250px] bg-white">
          <input
            type="text"
            placeholder="SEARCH..."
            className="w-full outline-none bg-transparent text-gray-600 placeholder-gray-400"
          />
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 pb-16">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="bg-[#0056d2] rounded-lg shadow-lg overflow-hidden text-white hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/Teamwork.jpg"
              alt="Blog Image"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm opacity-90 mb-2">Technical Blog</p>
              <h3 className="text-lg font-semibold leading-snug mb-2">
                Strengthening AI Agent Hijacking Evaluations
              </h3>
              <p className="text-sm opacity-75 mb-4">30 mins ago</p>
              <button className="bg-white text-[#0056d2] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 flex items-center gap-2">
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0056d2] text-white px-10 py-10">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-start w-full md:w-1/3">
            <Image
              src="/luminatewhitelogo.png"
              alt="Luminate Web Solutions"
              width={200}
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
