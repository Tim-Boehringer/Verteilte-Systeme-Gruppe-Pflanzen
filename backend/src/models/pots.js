import mongoose from "mongoose";

const potsSchema = new mongoose.Schema({
  name: String,
  maße: String,
  material: String,
});

export const Pots = mongoose.model("Pots", potsSchema);
