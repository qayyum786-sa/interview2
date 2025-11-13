"use client";
import Image from "next/image";

export default function NewsletterPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/Teammeet.jpg"
          alt="Newsletter Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-3">Newsletter</h1>
          <p className="text-lg">
            See how we've delivered best results to our clients
          </p>
        </div>
      </div>

      {/* Newsletter Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">Our Newsletters</h2>
        <p className="text-gray-600 mb-10">
          Explore our latest newsletters and subscribe to stay updated.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative w-full h-56">
              <Image
                src="/homehero.png" // replace with actual image path
                alt="Luminate Newsletter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">Luminate Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                This is a Newsletter about Luminate Web Solutions and its services provides
              </p>
              <p className="text-xs text-gray-500 mb-4">Sent: 10/7/2025</p>
              <button className="w-full bg-[#1A73E8] text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
                Read Newsletter
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative w-full h-56">
              <Image
                src="/homehero.png"
                alt="August Newsletter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">August Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Welcome to August — lots of updates and insights to share this month!
              </p>
              <p className="text-xs text-gray-500 mb-4">Sent: 10/8/2025</p>
              <button className="w-full bg-[#1A73E8] text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
                Read Newsletter
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative w-full h-56">
              <Image
                src="/homehero.png"
                alt="September Newsletter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">September Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Welcome to September — more updates and exciting progress to share!
              </p>
              <p className="text-xs text-gray-500 mb-4">Sent: 10/9/2025</p>
              <button className="w-full bg-[#1A73E8] text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
                Read Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

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
