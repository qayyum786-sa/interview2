import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Contact Section */}
      <section className="flex-1 flex flex-col items-center py-16 px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-blue-600">US</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Get in touch with us for your web development and digital marketing needs
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-6xl">
          {/* Left Side - Illustration */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/contactinfo.png"
              alt="Contact illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Right Side - Contact Info & Form */}
          <div className="flex-1 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="flex justify-center">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
                Let's Connect
              </h2>
            </div>

            <div className="text-gray-700 space-y-1 mb-6">
              <p>📍 Hyderabad, Telangana, India</p>
              <p>📞 +91 720-736-7455</p>
              <p>✉️ info@luminatewebsol.com</p>
              <p className="font-semibold text-blue-600 mt-3">Business Hours</p>
              <p>Monday - Saturday: 9:00 AM – 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Joe Doe"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="tel"
                placeholder="+91 0000 0000"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
    </main>
  );
}
