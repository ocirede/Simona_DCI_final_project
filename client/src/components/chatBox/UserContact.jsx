import React, { useContext, useEffect, useState } from "react";
import {
  useFetchMessages,
  useSendMessage,
} from "../../hooks/useSendMessagesCreateNewChat";
import SocketProvider, { useSocketContext } from "../../context/socketContext";
import UseGetConnections from "../../hooks/useGetConnections";
import { UserContext } from "../../context/userContext";

export default function UserContact({ connection, onClick }) {
  const { user } = useContext(UserContext);
  const { getConnections } = UseGetConnections();
  const { messages, setMessages } = useFetchMessages(connection);
  const { socket } = useSocketContext();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(connection._id);
  const { address } = connection;
  const fullName = `${address.firstname}`;


  useEffect(() => {
    if (user) {
      getConnections();
    }
  }, [user]);

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      // Update the latest message for the sender
      const latestMessage = newMessage.message
      setMessages((prevMessages) => ({
        ...prevMessages,
        [newMessage.senderId]: latestMessage,
      }));

      // Update the latest message for the receiver
      setMessages((prevMessages) => ({
        ...prevMessages,
        [newMessage.receiverId]: newMessage.message,
      }));
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket]);

  // to fix the latest message in real time 
  return (
    <div className="user-contact flex items-center gap-1 m-3">
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className=" w-9 h-9 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div onClick={onClick} role="button" className=" flex flex-col">
        <h3>{fullName}</h3>
        <span>
  {messages && messages.length > 0
    ? `(${messages[messages.length - 1].message})`
    : "(No messages available)"}
</span>
      </div>
    </div>
  );
}
