import mongoose from 'mongoose';

const FeatureSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String,
  colSpan: String, // Layout control ke liye (e.g., "col-span-2")
  bg: String,
  text: String,
  order: Number
});

export default mongoose.models.Feature || mongoose.model('Feature', FeatureSchema);