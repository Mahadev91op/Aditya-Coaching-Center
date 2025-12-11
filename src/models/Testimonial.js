import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  result: String,
  content: String,
  color: String,
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);