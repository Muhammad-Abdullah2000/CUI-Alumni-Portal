import express from "express";
import User from "./routes/userRoute.js";
import { connectDatabase } from "./config/db.js";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

connectDatabase();

app.use("/api/v1", User);

app.listen(3000, () => {
  console.log("Server is running");
});
