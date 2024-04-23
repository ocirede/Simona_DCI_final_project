import express from "express";

import { findConnectedUsersInfo } from "../controllers/chatControllers.js";
import auth from "../middleware/user-auth.js";

const chatRouter = express.Router();

chatRouter.get("/finduserconnections/", auth, findConnectedUsersInfo);

export default chatRouter;
