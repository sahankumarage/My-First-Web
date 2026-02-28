"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useStudents } from "@/context/StudentContext";
import { useRouter, useParams } from "next/navigation";

export default function EditStudentPage() {
    const { getStudent, updateStudent, loading } = useStudents();
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        bio: ""
    });

    useEffect(() => {
        if (!loading) {
            const student = getStudent(id);
            if (student) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFormData({
                    name: student.name,
                    email: student.email,
                    phone: student.phone,
                    course: student.course,
                    bio: student.bio
                });
            } else {
                // Handle case where student is not found after loading
                // router.push("/students");
            }
        }
    }, [id, getStudent, loading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateStudent(id, formData);
        router.push("/students");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden selection:bg-orange-500/30 font-sans">
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
                        <Link href="/students" className="hover:text-orange-500 transition-colors">Back to List</Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 md:px-12 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                    <div className="text-center mb-12 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wide uppercase">
                            Update Profile
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                            Edit <span className="text-gradient">Student</span>
                        </h1>
                    </div>

                    <div className="p-8 md:p-12 rounded-[2rem] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl relative group overflow-hidden">
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
                                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Bio / Goals</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your goals..."
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 pt-4 flex gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 py-5 rounded-2xl bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-orange-500/20"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => router.push("/students")}
                                    className="px-8 py-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
