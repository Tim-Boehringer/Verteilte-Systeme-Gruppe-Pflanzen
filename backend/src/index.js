import express from "express";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/plants", router);

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});
