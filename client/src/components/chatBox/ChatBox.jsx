import { useContext, useEffect, useState } from "react";
import {
  useFetchMessages,
  useSendMessage,
} from "../../hooks/useSendMessagesCreateNewChat.jsx";
import { UserContext } from "../../context/userContext.jsx";
import moment from "moment";
import { Send } from "lucide-react";
import { useSocketContext } from "../../context/socketContext.jsx";

export default function ChatBox({ connection }) {
  const { socket } = useSocketContext();
  const { user } = useContext(UserContext);
  const { sendMessage, newMessage, setNewMessage } = useSendMessage(connection);
  const { messages, setMessages, getMessages } = useFetchMessages(connection);

  
  useEffect(() => {
    try {
      socket.on("newMessage", (newMessage) => {
        setMessages(prevMessages => [...prevMessages, newMessage]);
  
      });
  
  
      return () => socket.off("newMessage");
    } catch (error) {
      console.log(error)
    }

  }, [socket, newMessage, messages, setMessages, setNewMessage]);


  const allMessages = [...messages].sort((a, b) =>
    moment(a.createdAt).diff(moment(b.createdAt))
  );

  return (
    <div className="chat-box">
      <div className="messages">
        {allMessages.map((message, index) => {
          const isSameAsPrev =
            index > 0 &&
            moment(message.createdAt).isSame(
              messages[index - 1].createdAt,
              "minute"
            );
          return (
            <div
              key={index}
              className={
                message.senderId === user._id
                  ? `sent-message`
                  : `received-message`
              }
              
            >
              <div className="">
                <p>{message.message} </p>
                {!isSameAsPrev && (
                  <span>{moment(message.createdAt).calendar()}</span>
                )}
              </div>
            </div>
          );
        })}{" "}
      </div>
      <div
        className="input-area absolute bottom-0 flex w-2/3"
      >
        <input
          type="text"
          name="message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mr-2 w-full"
          placeholder="Type your message..."
        />
        <button
          onClick={() => sendMessage(connection._id)}
          className="bg-blue-500 text-white px-4 py-2 rounded "
        >
          <Send />
        </button>
      </div>
    </div>
  );
}
