"use client";
import React from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function AboutUs() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/Teammeet.jpg')", // replace with your banner
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-2">About US</h1>
          <p className="text-lg">Welcome to your new digital home.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-6">
          <span className="text-sm font-semibold text-white bg-blue-700 px-4 py-1 rounded">
            OUR STORY
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Illuminate Your Digital Future
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Luminate Web Solutions began with a bold vision: to revolutionize
              how businesses grow through digital transformation. From small
              enterprises to industry leaders, we’ve built meaningful
              partnerships and earned global recognition for our technical
              expertise and entrepreneurial spirit.
            </p>
          </div>
          <div>
            <img
              src="/services-1.png"
              alt="Our Story"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-blue-700 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">MISSION</h3>
            <p>
              We aim to empower businesses through transformative digital
              solutions that foster growth and deliver measurable results.
            </p>
          </div>

          <div className="bg-blue-700 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">VISION</h3>
            <p>
              Our goal is to be the preferred digital transformation partner for
              leading global brands, maximizing value in the digital ecosystem.
            </p>
          </div>

          <div className="bg-blue-700 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">VALUES</h3>
            <p>
              We strive to drive digital innovation that not only meets but
              exceeds expectations, ensuring success and growth for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <span className="text-sm font-semibold text-white bg-blue-700 px-4 py-1 rounded">
              OUR SERVICES
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We Do
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We modernize technology, redesign operating models, and craft
                standout digital experiences. From responsive websites to
                strategic marketing, we deliver performance-driven solutions
                that captivate users and convert traffic into profits.
              </p>
            </div>
            <div>
              <img
                src="/services-2.png"
                alt="Our Services"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      
{/* Our Partners Section */}
<section className="py-20 max-w-7xl mx-auto px-6">
  <h2 className="text-4xl font-bold text-center mb-3">OUR PARTNERS</h2>
  <p className="text-center text-gray-600 mb-14 text-lg">
    Collaborating with trusted brands that share our vision for innovation and growth.
  </p>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center place-items-center">
    {[
      "/sdhubmh.png",
      "/sdhubqs.png",
      "/eiddo.png",
      "/psf.png",
      "/zenoids.png",
      "/standard.png",
    ].map((src, i) => (
      <div
        key={i}
        className="bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex justify-center items-center w-64 h-32"
      >
        <img
          src={src}
          alt={`Partner ${i + 1}`}
          className="max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    ))}
  </div>
</section>



      {/* Explore Section */}
      <section className="relative bg-blue-700 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Our Solutions</h2>
        <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-all">
          LEARN MORE →
        </button>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">TESTIMONIALS</h2>
        <p className="text-center text-gray-600 mb-10">
          See how we’ve delivered best results to our clients
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-blue-700 text-white p-8 rounded-xl shadow-md"
            >
              <div className="text-4xl mb-4">“</div>
              <p className="text-sm leading-relaxed mb-6">
                I am impressed with their dedicated team of professionals who
                are knowledgeable, responsive & customer oriented. Looking
                forward to working together with them!
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div>
                  <h4 className="font-semibold">Md Zaheed Ali</h4>
                  <p className="text-sm">Strategy Director</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    
  

      {/* ===== FOOTER ===== */}
      <footer className="bg-blue-900 text-white px-10 py-8 mt-10">
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
