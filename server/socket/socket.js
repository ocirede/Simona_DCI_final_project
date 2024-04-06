import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  connectionStateRecovery: {reconnect: true,},
  cors: true,
});

export const getSocketIds = (senderId, receiverId) => {
  const senderSocketId = userSocketMap[senderId];
  const receiverSocketId = userSocketMap[receiverId];
  console.log(receiverSocketId)

  return { senderSocketId, receiverSocketId };
};

const userSocketMap = {}; // {userId: socketId}
const socketUserMap = {}; // {socketId: userId}
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId !== "undefined") {
    userSocketMap[userId] = socket.id;
    socketUserMap[socket.id] = userId;
  }

  // Emit getOnlineUsers event to all clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  // Handle disconnect event
  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    const disconnectedUserId = socketUserMap[socket.id];
    delete userSocketMap[disconnectedUserId];
    delete socketUserMap[socket.id];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

  // Handle reconnection event
  socket.on("reconnect", (attemptNumber) => {
    console.log(`Socket reconnected (attempt ${attemptNumber})`);
    if (attemptNumber > 3) {
      // After 3 failed attempts, notify the client or perform custom logic
      socket.emit("reconnectionFailed");
    }  });

  // Handle error event
  socket.on("error", (error) => {
    console.error("Socket error:", error);
    // You can handle the error here, such as logging it or sending an error response to the client
  });
});

export { app, io, server, userSocketMap, socketUserMap };
