import React, { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import {
  useFetchMessages,
  useSendMessage,
} from "./useSendMessagesCreateNewChat";

export function useListenMessages(connection) {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useFetchMessages(connection);
  const { newMessage, setNewMessage } = useSendMessage(connection);
  useEffect(() => {
    try {
      socket.on("newMessage", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => socket.off("newMessage");
    } catch (error) {
      console.log(error);
    }
  }, [socket, newMessage, messages, setMessages, setNewMessage]);
}
