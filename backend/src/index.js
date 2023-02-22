import express from "express";

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");