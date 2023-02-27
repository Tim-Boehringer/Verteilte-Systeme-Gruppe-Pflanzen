import express from "express";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";

import plantsRouter from "./routes/plantsRouter.js";
import swaggerDocs from "../swaggerDoc.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use("/plants", plantsRouter);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});
