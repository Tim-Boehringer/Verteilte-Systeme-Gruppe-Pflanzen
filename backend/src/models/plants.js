import mongoose from "mongoose";

const plantsSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
});

export const Plants = mongoose.model("Plants", plantsSchema);
