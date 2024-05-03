import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
