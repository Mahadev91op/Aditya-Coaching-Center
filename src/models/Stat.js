import mongoose from 'mongoose';

const StatSchema = new mongoose.Schema({
  label: String,
  value: String,
  suffix: String,
  icon: String, // Icon ka naam store karenge (e.g., "Users")
  gradient: String,
  desc: String,
  order: Number // Display order ke liye
});

export default mongoose.models.Stat || mongoose.model('Stat', StatSchema);