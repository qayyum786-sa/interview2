"use client";
import Image from "next/image";
import { useState } from "react";

export default function ApplicationForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        city: "",
        type: "College Student",
        experience: "0",
    });
    const [resumeName, setResumeName] = useState("");
    const [resumeFile, setResumeFile] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function handleFile(e) {
        const f = e.target.files?.[0];
        if (f) {
            setResumeFile(f);
            setResumeName(f.name);
        } else {
            setResumeFile(null);
            setResumeName("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        // placeholder - integrate real submission later
        alert("Form submitted (demo). Check console for form values.");
        console.log({ ...form, resumeFile });
    }

    return (
        <div>
            {/* ===== APPLICATION FORM SECTION ===== */}
            <section className="min-h-screen bg-white/50 flex items-start justify-center py-12 px-4">
                <div className="w-full max-w-2xl">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-1">
                        Application Form
                    </h1>
                    <p className="text-center text-blue-600 font-medium mb-6">Let's Get Started</p>

                    {/* Card */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-blue-50 border border-gray-300 rounded-xl shadow-md p-6 sm:p-8"
                    >
                        {/* First row: First + Last */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-xs text-gray-600 block mb-1">First name</label>
                                <input
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs text-gray-600 block mb-1">Last name</label>
                                <input
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="text-xs text-gray-600 block mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder=""
                                required
                            />
                        </div>

                        {/* Contact */}
                        <div className="mb-4">
                            <label className="text-xs text-gray-600 block mb-1">Contact number</label>
                            <input
                                name="contact"
                                value={form.contact}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder=""
                                required
                            />
                        </div>

                        {/* Gender + City */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-xs text-gray-600 block mb-1">Gender</label>
                                <input
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label className="text-xs text-gray-600 block mb-1">Current City</label>
                                <input
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        {/* Type + Years of experience */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-xs text-gray-600 block mb-1">Type</label>
                                <select
                                    name="type"
                                    value={form.type}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    <option>College Student</option>
                                    <option>Fresher</option>
                                    <option>Experienced</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs text-gray-600 block mb-1">Years Of Work Experience</label>
                                <select
                                    name="experience"
                                    value={form.experience}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    <option value="0">0 years</option>
                                    <option value="1">1 year</option>
                                    <option value="2">2 years</option>
                                    <option value="3">3 years</option>
                                    <option value="4+">4+ years</option>
                                </select>
                            </div>
                        </div>

                        {/* Resume upload */}
                        <div className="mb-6">
                            <label className="text-xs text-gray-600 block mb-2">Resume</label>
                            <div className="flex items-center gap-4">
                                <label
                                    htmlFor="resume"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 bg-white text-sm cursor-pointer shadow-sm hover:bg-gray-50"
                                >
                                    Upload File
                                </label>
                                <input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFile}
                                    className="hidden"
                                />
                                <div className="text-sm text-gray-600">
                                    {resumeName ? (
                                        <span className="font-medium text-gray-800">{resumeName}</span>
                                    ) : (
                                        <span className="">No file chosen</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
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
