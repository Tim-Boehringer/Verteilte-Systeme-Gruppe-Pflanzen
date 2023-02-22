import mongoose from "mongoose";

const plantsSchema = new mongoose.Schema({
  name: String,
  catategory: String,
  price: Number,
});

export const Plants = mongoose.model("Plants", plantsSchema);
