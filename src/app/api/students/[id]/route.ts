import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Student from '@/models/Student';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const student = await Student.findById(id);
        if (!student) {
            return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: student });
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid Student ID' }, { status: 400 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await request.json();

        // Ensure we don't accidentally try to update the _id field
        const { _id, ...updateData } = body;

        const student = await Student.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!student) {
            return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: student });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid Student ID' }, { status: 400 });
    }
}
