import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Student from '@/models/Student';

export async function GET() {
    try {
        await dbConnect();
        const students = await Student.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: students });
    } catch {
        return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const student = await Student.create(body);
        return NextResponse.json({ success: true, data: student }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
