import React, { useContext, useEffect, useState } from "react";
import { useFetchMessages } from "../../hooks/useSendMessagesCreateNewChat";
import { useSocketContext } from "../../context/socketContext";
import UseGetConnections from "../../hooks/useGetConnections";
import { UserContext } from "../../context/userContext";

export default function UserContact({ connection, onClick }) {
  const { messages, getMessages } = useFetchMessages(connection);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(connection._id);
  const { address } = connection;
  const fullName = `${address.firstname} ${address.lastname}`;
 

  useEffect(() => {
    if (messages) {
      getMessages(connection._id);
    }
  }, []);
 

  const lastMessage = messages[messages.length - 1]?.message;
  const cutLastMessage =
    lastMessage?.length > 20
      ? lastMessage?.substring(0, 15) + "..."
      : lastMessage;

  return (
    <div className="user-contact flex items-center gap-1 ml-4 mt-6  ">
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className=" w-12 h-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div
        onClick={onClick}
        role="button"
        className={`flex flex-col bg-white border  border-black rounded-[10px] w-3/4 `}
      >
        <div className="  ml-2 ">
          <h3 className=" text-black font-custom">{fullName}</h3>
          <div className=" flex gap-1">
            <p className=" font-custom">last message:</p>
            <p className=" font-bold font-custom">{cutLastMessage} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
