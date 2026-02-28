"use client";

import React from "react";
import Link from "next/link";
import { useStudents } from "@/context/StudentContext";
import Image from "next/image";

export default function StudentListPage() {
    const { students, deleteStudent, loading } = useStudents();

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
                        <Link href="/register" className="hover:text-orange-500 transition-colors">Add Student</Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wide uppercase">
                                Management Portal
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                                Registered <span className="text-gradient">Students</span>
                            </h1>
                            <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                                View and manage all students currently enrolled in our premium courses.
                            </p>
                        </div>
                        <Link
                            href="/register"
                            className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/20"
                        >
                            + New Student
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
                            <p className="mt-4 text-zinc-500 font-medium">Loading database...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {students.length === 0 ? (
                                <div className="col-span-full py-20 text-center bg-white/5 dark:bg-zinc-900/50 rounded-[2rem] border border-dashed border-zinc-200 dark:border-zinc-800">
                                    <p className="text-zinc-500">No students registered yet.</p>
                                </div>
                            ) : (
                                students.map((student) => (
                                    <div
                                        key={student._id}
                                        className="group p-6 rounded-[2rem] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-2xl transition-all duration-500"
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-2xl font-bold text-orange-600 relative overflow-hidden text-center">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${student._id}`}
                                                    alt={student.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/students/${student._id}/edit`}
                                                    className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5M16.5 3.5a2.121 2.121 0 113 3L13 19l-4 1 1-4L16.5 3.5z" />
                                                    </svg>
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Are you sure you want to delete this student?")) {
                                                            deleteStudent(student._id);
                                                        }
                                                    }}
                                                    className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-red-500 transition-colors"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{student.name}</h3>
                                        <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-4">{student.course}</p>

                                        <div className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {student.email}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                {student.phone}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </main>

            <footer className="py-12 px-6 md:px-12 border-t border-zinc-100 dark:border-zinc-900 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-sm text-zinc-500">© 2026 Sahan. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm font-medium hover:text-orange-500">Twitter</a>
                        <a href="#" className="text-sm font-medium hover:text-orange-500">GitHub</a>
                        <a href="#" className="text-sm font-medium hover:text-orange-500">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
