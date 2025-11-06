
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    company: "",
    fullName: "",
    email: "",
    phone: "",
    focus: "",
    details: "",
    features: "",
    pages: "",
    references: "",
    objective: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-100 to-white text-center py-20">
        <h1 className="text-5xl font-bold text-blue-900 mb-3">
          Get Free Consultation
        </h1>
        <p className="text-blue-800 text-lg">
          We offer affordable best quality services
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="flex justify-center px-4 py-10">
        <div className="bg-blue-100 rounded-lg shadow-lg border border-gray-300 w-full max-w-3xl p-8 md:p-10">
          <form className="space-y-6">
            {/* Project Name */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Project/Company Name
              </label>
              <input
                type="text"
                name="company"
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>

            {/* Email and Contact Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                />
              </div>
            </div>

            {/* Focus */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                What will be the focus of the website?
              </label>
              <input
                type="text"
                name="focus"
                placeholder="Business, News, E-Commerce, etc….."
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>

            {/* Website Details */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Website Details
              </label>
              <textarea
                name="details"
                rows="4"
                placeholder="Provide us with requirements for your website using the details……."
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              ></textarea>
            </div>

            {/* Additional Features */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Additional Features
              </label>
              <input
                type="text"
                name="features"
                placeholder="SEO, SEM, Facebook Marketing etc…."
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>

            {/* Pages & References */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  Number of Pages
                </label>
                <select
                  name="pages"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                >
                  <option value="">Select</option>
                  <option value="1-10">1-10</option>
                  <option value="10-20">10-20</option>
                  <option value="20+">20+</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">
                  References
                </label>
                <input
                  type="text"
                  name="references"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                />
              </div>
            </div>

            {/* Objective */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Objective
              </label>
              <input
                type="text"
                name="objective"
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                What is the budget for your website?
              </label>
              <input
                type="text"
                name="budget"
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-blue-700 text-white px-8 py-2 rounded-full font-semibold shadow-md hover:bg-blue-800 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Image
              src="/luminatewhitelogo.png"
              alt="Luminate Web Solutions"
              width={180}
              height={60}
              className="object-contain"
            />
            <p className="text-sm mt-2">© 2024-25 All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/aboutus" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contect-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pages/solution" className="hover:underline">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/pages/career" className="hover:underline">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact Info</h3>
            <p>Dubai, UAE</p>
            <p>Hyderabad, Telangana, India</p>
            <p className="mt-3 text-sm">
              📞 +971 56 574 4992 <br /> 📞 +91 720-736-7455
            </p>
            <p className="mt-2 text-sm">
              ✉️ info@luminatewebsol.com
            </p>
          </div>
        </div>

        <div className="text-center text-xs mt-8 border-t border-blue-600 pt-4">
          Privacy Policy | Terms & Conditions | Disclaimer | Refund Policy | Cancellation Policy
        </div>
      </footer>
    </div>
  );
}
