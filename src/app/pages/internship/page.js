"use client";

import Link from "next/link";
import Image from "next/image";
import {
    CalendarDays,
    Clock,
    IndianRupee,
    CalendarCheck,
    Users,
    ArrowRight,
    Briefcase,
} from "lucide-react";

/**
 * InternshipDetails - full card UI matching your screenshot
 * Paste into /app/internship/page.js or a component and import where needed.
 */
export default function InternshipDetails() {
    const skills = [
        "Adobe Illustrator",
        "Adobe Illustrator",
        "Adobe Illustrator",
        "Adobe Illustrator",
        "Adobe Illustrator",
    ];

    return (
        <div>
            <section className="min-h-screen bg-white py-16 px-4 flex flex-col items-center">
                {/* Page heading */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Backend Developer Internship
                </h1>

                {/* Card container (centered, limited width) */}
                <div className="max-w-3xl w-full mx-auto">
                    <div className="bg-blue-50 rounded-2xl shadow-lg border border-gray-200 p-8 relative">
                        {/* Actively Hiring pill */}
                        <div className="mb-4">
                            <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                                <Briefcase className="w-4 h-4" />
                                Actively Hiring
                            </span>
                        </div>

                        {/* Title inside card */}
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 ">
                            Backend Developer Intern
                        </h2>

                        {/* Info row: start / duration / stipend / apply by */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 font-medium text-gray-500 text-xs uppercase">
                                    <CalendarDays className="w-4 h-4" /> Start Date
                                </span>
                                <span className="mt-1 text-gray-800 font-semibold text-sm">
                                    Immediately
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 font-medium text-gray-500 text-xs uppercase">
                                    <Clock className="w-4 h-4" /> Duration
                                </span>
                                <span className="mt-1 text-gray-800 font-semibold text-sm">
                                    3 Months
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 font-medium text-gray-500 text-xs uppercase">
                                    <IndianRupee className="w-4 h-4" /> Stipend
                                </span>
                                <span className="mt-1 text-gray-800 font-semibold text-sm">
                                    ₹ 3,000 /month
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 font-medium text-gray-500 text-xs uppercase">
                                    <CalendarCheck className="w-4 h-4" /> Apply By
                                </span>
                                <span className="mt-1 text-gray-800 font-semibold text-sm">
                                    15 Jun' 25
                                </span>
                            </div>
                        </div>

                        {/* Applicants + Apply button */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3 text-gray-700">
                                <Users className="w-5 h-5 text-gray-600" />
                                <span className="text-sm font-medium">2 Applicants</span>
                            </div>

                            <Link
                                href="/pages/internship/application-form"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
                            >
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* About */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                About the internship
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                                Selected intern's day-to-day responsibilities include:
                            </p>
                            <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1 pl-4">
                                <li>
                                    Design unique and creative packaging that aligns with our brand
                                    identity
                                </li>
                                <li>Create visually appealing and professional presentations</li>
                                <li>Collaborate with the team to develop fresh ideas and concepts</li>
                                <li>
                                    Research design trends and stay updated on industry standards
                                </li>
                            </ol>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                            <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1 pl-4">
                                <li>Real-world design projects to enhance your portfolio</li>
                                <li>Mentorship from experienced professionals</li>
                                <li>A collaborative and innovative workspace</li>
                                <li>An opportunity to develop and refine your design skills</li>
                            </ol>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Skill(s) required</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((s, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Who can apply */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Who can apply</h4>
                            <p className="text-sm text-gray-600 mb-2">Only those candidates can apply who:</p>
                            <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1 pl-4">
                                <li>are available for full time (in-office) internship</li>
                                <li>can start the internship between 24th Apr'25 and 15th Jun'25</li>
                                <li>are available for duration of 3 months</li>
                                <li>are from or open to relocate to Ahmedabad</li>
                                <li>have relevant skills and interests</li>
                            </ol>
                        </div>

                        {/* Perks */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Perks</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                                    Certificate
                                </span>
                                <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                                    Letter of recommendation
                                </span>
                            </div>
                        </div>

                        {/* Number of openings */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Number of openings</h4>
                            <p className="text-gray-800 font-medium">5</p>
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
                    Designed & Developed by <span className="font-semibold">Luminate Web Solutions</span>
                </p>
            </footer>
        </div>
    );
}
