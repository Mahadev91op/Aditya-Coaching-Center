// src/models/Course.js
import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Please provide a title'],
    maxlength: 100,
  },
  category: { 
    type: String, 
    required: [true, 'Please provide a category'],
  },
  price: { 
    type: String, // String rakha hai taki '₹' symbol ke sath store kar sakein, ya Number bhi rakh sakte hain
    required: [true, 'Please provide price'],
  },
  originalPrice: { 
    type: String,
  },
  rating: { 
    type: Number, 
    default: 4.5,
  },
  students: { 
    type: String, // e.g., "2.5k"
    default: "0",
  },
  tags: {
    type: [String], // Array of strings
  },
  color: { 
    type: String, 
    default: 'blue', // UI ke liye color theme
  },
  badge: {
    type: String,
    default: null
  },
  description: {
    type: String,
  }
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);