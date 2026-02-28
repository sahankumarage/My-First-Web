"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Student {
    _id: string; // MongoDB uses _id
    name: string;
    email: string;
    phone: string;
    course: string;
    bio: string;
}

interface StudentContextType {
    students: Student[];
    loading: boolean;
    addStudent: (student: Omit<Student, "_id">) => Promise<void>;
    updateStudent: (id: string, student: Omit<Student, "_id">) => Promise<void>;
    deleteStudent: (id: string) => Promise<void>;
    getStudent: (id: string) => Student | undefined;
    refreshStudents: () => Promise<void>;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function StudentProvider({ children }: { children: React.ReactNode }) {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/students');
            const data = await res.json();
            if (data.success) {
                setStudents(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch students:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const addStudent = async (student: Omit<Student, "_id">) => {
        try {
            const res = await fetch('/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(student),
            });
            const data = await res.json();
            if (data.success) {
                setStudents((prev) => [data.data, ...prev]);
            }
        } catch (error) {
            console.error('Failed to add student:', error);
        }
    };

    const updateStudent = async (id: string, updatedStudent: Omit<Student, "_id">) => {
        try {
            const res = await fetch(`/api/students/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedStudent),
            });
            const data = await res.json();
            if (data.success) {
                setStudents((prev) =>
                    prev.map((s) => (s._id === id ? data.data : s))
                );
            }
        } catch (error) {
            console.error('Failed to update student:', error);
        }
    };

    const deleteStudent = async (id: string) => {
        try {
            const res = await fetch(`/api/students/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                setStudents((prev) => prev.filter((s) => s._id !== id));
            }
        } catch (error) {
            console.error('Failed to delete student:', error);
        }
    };

    const getStudent = (id: string) => {
        return students.find((s) => s._id === id);
    };

    return (
        <StudentContext.Provider
            value={{
                students,
                loading,
                addStudent,
                updateStudent,
                deleteStudent,
                getStudent,
                refreshStudents: fetchStudents
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}

export function useStudents() {
    const context = useContext(StudentContext);
    if (context === undefined) {
        throw new Error("useStudents must be used within a StudentProvider");
    }
    return context;
}
