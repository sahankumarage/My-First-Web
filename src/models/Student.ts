import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    phone: {
        type: String,
    },
    course: {
        type: String,
        required: [true, 'Please provide a course'],
    },
    bio: {
        type: String,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
