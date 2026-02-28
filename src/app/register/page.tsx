"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStudents } from "@/context/StudentContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const { addStudent } = useStudents();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "Next.js Masterclass",
        bio: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            alert("Please fill in name and email");
            return;
        }
        await addStudent(formData);
        router.push("/students");
    };

    return (
        <div className="relative min-h-screen overflow-hidden selection:bg-orange-500/30 font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[120px] animate-float" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-500/10 blur-[120px] animate-float [animation-delay:-5s]" />
            </div>

            <nav className="fixed top-0 w-full z-50 px-6 py-4 md:px-12">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter hover:scale-105 transition-transform">
                        SAHAN.
                    </Link>
                    <div className="flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <Link href="/students" className="hover:text-orange-500 transition-colors">Students</Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 md:px-12 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                    {/* Header */}
                    <div className="text-center mb-12 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wide uppercase">
                            Start your journey
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                            Student <span className="text-gradient">Registration</span>
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
                            Join our community of learners and master the latest technologies with expert-led courses.
                        </p>
                    </div>

                    {/* Registration Form Card */}
                    <div className="p-8 md:p-12 rounded-[2rem] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl relative group overflow-hidden">
                        {/* Subtle glow effect */}
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-colors duration-500" />

                        <form onSubmit={handleSubmit} className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Select Course</label>
                                <div className="relative">
                                    <select
                                        value={formData.course}
                                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none appearance-none cursor-pointer"
                                    >
                                        <option>Next.js Masterclass</option>
                                        <option>Full-stack Development</option>
                                        <option>UI/UX Design Systems</option>
                                        <option>Generative AI for Devs</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Why do you want to join?</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your goals..."
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-orange-500/20"
                                >
                                    Confirm Registration
                                </button>
                                <p className="text-center text-xs text-zinc-500 mt-6">
                                    By clicking register, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-8">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative">
                                    <Image
                                        src={`https://i.pravatar.cc/150?u=${i + 20}`}
                                        alt="Student"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-zinc-500">Joined by 500+ students this month</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
