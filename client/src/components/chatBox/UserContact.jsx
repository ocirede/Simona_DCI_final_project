import React, { useContext, useEffect, useState } from "react";
import {
  useFetchMessages} from "../../hooks/useSendMessagesCreateNewChat";
import { useSocketContext } from "../../context/socketContext";
import UseGetConnections from "../../hooks/useGetConnections";
import { UserContext } from "../../context/userContext";

export default function UserContact({ connection, onClick }) {
  const { user } = useContext(UserContext);
  const { getConnections } = UseGetConnections();
  const { messages, getMessages } = useFetchMessages(connection);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(connection._id);
  const { address } = connection;
  const fullName = `${address.firstname} ${address.lastname}`;
  useEffect(() => {
    if (user) {
      getConnections();
    }
  }, [user]);

  useEffect(() => {
    getMessages(connection._id);
  }, [messages]);

  const lastMessage =
    messages.length > 0
      ? messages[messages.length - 1].message
      : "No messages yet";

  // keep track of the unred messages

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
        className={`flex flex-col border  border-black rounded-[10px] w-3/4 `}
      >
        <div className=" ml-2 p-0.5">
          <h3 className=" text-black">{fullName}</h3>
          {lastMessage}
        </div>
      </div>
    </div>
  );
}
