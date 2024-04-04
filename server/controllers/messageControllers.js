import Chat from "../models/chatSchema.js";
import Message from "../models/messageSchema.js";
import { getSocketIds, io } from "../socket/socket.js";
// sendMessage

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user.id;
  try {
    let conversation = await Chat.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Chat.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCKET.IO FUNCTIONALITY

    const { senderSocketId, receiverSocketId } = getSocketIds(
      senderId,
      receiverId
    );

    // Emit message to receiver
    io.to(receiverSocketId).emit("newMessage", newMessage);
    io.to(receiverSocketId).emit("notification", {
      message: "You have received a new message",
      senderId: senderId,
      receiverId: receiverId,
    });

    // Emit message to sender
    io.to(senderSocketId).emit("newMessage", newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//getMessages

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user.id;

    const conversation = await Chat.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
