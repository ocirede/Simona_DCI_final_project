import express from "express";
import { sendMessage, getMessages, markNotificationAsRead } from "../controllers/messageControllers.js";
import auth from "../middleware/user-auth.js"
const messageRouter = express.Router();

messageRouter.post("/send/:id", auth, sendMessage);
messageRouter.get("/get/:id", auth, getMessages);
messageRouter.put("/notifications/:notificationId", auth, markNotificationAsRead);

export default messageRouter;