import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: 60,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  password: {
    type: String, // Password hash karke rakhenge (security ke liye)
    required: false, // Google login ke liye false ho sakta hai future me
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student',
  },
  image: {
    type: String,
  },
}, { timestamps: true });

// Check karega ki model pehle se bana hai ya nahi (Next.js hot reload fix)
export default mongoose.models.User || mongoose.model('User', UserSchema);