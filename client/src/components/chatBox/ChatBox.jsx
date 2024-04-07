import { useContext, useEffect, useRef, useState } from "react";
import {
  useFetchMessages,
  useSendMessage,
} from "../../hooks/useSendMessagesCreateNewChat.jsx";
import { UserContext } from "../../context/userContext.jsx";
import moment from "moment";
import { Send } from "lucide-react";
import { useSocketContext } from "../../context/socketContext.jsx";

export default function ChatBox({ connection }) {
  const fullName = `${connection.address.firstname} ${connection.address.lastname}`;
  const { socket } = useSocketContext();
  const { user } = useContext(UserContext);
  const { sendMessage, newMessage, setNewMessage } = useSendMessage(connection);
  const { messages, setMessages } = useFetchMessages(connection);
  const messagesEndRef = useRef(null);
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

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const allMessages = [...messages].sort((a, b) =>
    moment(a.createdAt).diff(moment(b.createdAt))
  );

  return (
    <div className="flex flex-col  mr-3 h-2/3  bg-white rounded-lg border border-b-4 border-l-4 border-black">
      <nav className=" w-full h-[50px]   p-3 flex items-center z-50 font-custom font-bold shadow-xl">
        {fullName}
      </nav>
      <div className="overflow-y-auto p-5 mt-10 ">
        {allMessages?.map((message, index) => {
          const isSameAsPrev =
            index > 0 &&
            moment(message.createdAt).isSame(
              messages[index - 1].createdAt,
              "minute"
            );
          const messageClass =
            message?.senderId === user?._id
              ? `sent-message`
              : `received-message`;

          return (
            <div key={index} className={`${messageClass}`}>
              <div className="chat-bubble">
                <p className="message-text font-custom">{message?.message}</p>
                {!isSameAsPrev && (
                  <span className="message-timestamp">
                    {moment(message.createdAt).calendar()}
                  </span>
                )}
              </div>
              <div ref={messagesEndRef}></div>
            </div>
          );
        })}
      </div>
      <footer className="flex items-center p-1 gap-2 justify-center mt-auto mb-4  shadow-current h-[50px]  w-full">
        <div className="w-1/2  flex items-center">
          <input
            type="text"
            name="message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            // onFocus={handleClearNotifications}
            className="border border-black rounded-[50px] w-full px-4 py-2"
            placeholder="Type your message..."
          />
        </div>
        <button
          onClick={() => sendMessage(connection._id)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          <Send />
        </button>
      </footer>
    </div>
  );
}
