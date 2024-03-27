import { useContext, useEffect, useState } from "react";
import {
  useFetchMessages,
  useSendMessage,
} from "../../hooks/useSendMessagesCreateNewChat.jsx";
import { UserContext } from "../../context/userContext.jsx";
import moment from "moment";
import { Send } from "lucide-react";
import EmojiPicker from 'emoji-picker-react';

export default function ChatBox({ connection }) {
  const { user } = useContext(UserContext);
  const { sendMessage, newMessage, setNewMessage } = useSendMessage(connection);
  const { messages } = useFetchMessages(connection);

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
              allMessages[index - 1].createdAt,
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
      <div className="input-area absolute bottom-0 flex w-2/3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mr-2 w-full"
          placeholder="Type your message..."
        />
        <button
          onClick={() => sendMessage(connection._id)}
          className="bg-blue-500 text-white px-4 py-2 rounded "
        >
          <Send/>
        </button>
      </div>
    </div>
  );
}
