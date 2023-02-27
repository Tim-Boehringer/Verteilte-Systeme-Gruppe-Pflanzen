import mongoose from "mongoose";

const customersSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
});

export const Customers = mongoose.model("Customers", customersSchema);
