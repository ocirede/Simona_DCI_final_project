import express from "express";
import {
  sendMessage,
  getMessages,
  markNotificationAsRead,
  deleteMessage,
  updateMessage,
} from "../controllers/messageControllers.js";
import auth from "../middleware/user-auth.js";
import { chatImageUpload } from "../middleware/multerCloudinary.js";
const messageRouter = express.Router();

messageRouter.post(
  "/send/:id",
  chatImageUpload.single("chatimage"),
  auth,
  sendMessage
);
messageRouter.get("/get/:id", auth, getMessages);
messageRouter.put(
  "/notifications/:receiverId",
  auth,
  markNotificationAsRead
);
messageRouter.delete("/delete/:messageId", auth, deleteMessage);
messageRouter.put("/update/:messageId", auth, updateMessage);
export default messageRouter;
