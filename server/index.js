import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongo-db.js";
import userRoutes from "./routes/userRouter.js";
import ratingRoutes from "./routes/ratingRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();

const port = process.env.PORT;
const clientURL = process.env.CLIENT_URL;

app.use(express.json());

// to be fixed 
const corsOptions = {
  origin: clientURL,
  credentials: true,
};

app.use(cors());

connectDB();

app.use("/users", userRoutes);
app.use("/ratings", ratingRoutes);
app.use("/posts", postRoutes);
app.use("/profile", profileRoutes)
// To user send email
app.use('/send-email', emailRoutes);

app.listen(port, () => {
  console.log(`The server is running in port ${port}`);
});
