import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongo-db.js";

const app = express();

const port = process.env.PORT;

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

connectDB();

app.listen(port, () => {
  console.log(`The server is running in port ${port}`);
});
