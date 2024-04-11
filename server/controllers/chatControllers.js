import User from "../models/userSchema.js";
import Chat from "../models/chatSchema.js";
// find connections for the current user
export const findConnectedUsersInfo = async (req, res) => {
  try {
    // const {userId}= req.params;
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ error: "User ID is missing or invalid" });
    }

    const user = await User.findById(userId).populate({
      path: "connections",
      select: "address email role",
    });

    const connections = user.connections;
    res.json(connections);
  } catch (error) {
    console.error("Error finding connected users info", error.message);
    res.status(500).json({ error: error.message });
  }
};



