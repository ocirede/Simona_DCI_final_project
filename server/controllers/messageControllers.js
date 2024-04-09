import Chat from "../models/chatSchema.js";
import Message from "../models/messageSchema.js";
import { getSocketIds, io } from "../socket/socket.js";

// sendMessage

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user.id;
  const file = req.file;
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
      file: file ? file.path : null,
      notifications: [
        { message: "You have received a new message", read: false, receiverId },
      ],
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

    newMessage.notifications.forEach((notification) => {
      io.to(receiverSocketId).emit("notification", notification);
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

// update notifications

export const markNotificationAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;

    const message = await Message.findOne({
      "notifications._id": notificationId,
    });

    if (!message) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    const notificationIndex = message.notifications.findIndex(
      (notif) => notif._id.toString() === notificationId
    );

    if (notificationIndex === -1) {
      return res.status(404).json({ error: "Notification not found" });
    }

    message.notifications[notificationIndex].read = true;

    if (message.notifications[notificationIndex].read === true) {
      message.notifications.splice(notificationIndex, 1);
    }
    await message.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error marking notification as read:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//delete message

export const deleteMessage = async (req, res) => {
  const { messageId } = req.params;
  try {
    const message = await Message.findOneAndDelete({ _id: messageId });
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    const updateChat = await Chat.updateOne(
      { messages: { $in: [messageId] } },
      { $pull: { messages: messageId } }
    );

    res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// update message

const updateMessage = () => {};
