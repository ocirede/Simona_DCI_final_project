import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongo-db.js";
import userRoutes from "./routes/userRouter.js";
import ratingRoutes from "./routes/ratingRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import emailRoutes from "./routes/emailRoutes.js"

const app = express();

const port = process.env.PORT;

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

connectDB();

app.use("/users", userRoutes);
app.use("/ratings", ratingRoutes);
app.use("/posts", postRoutes);
// To user send email
app.use('/send-email', emailRoutes);

app.listen(port, () => {
  console.log(`The server is running in port ${port}`);
});
