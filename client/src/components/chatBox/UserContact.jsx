import React from "react";
import avatarSvg from "../../assets/avatar.svg";
import { useFetchMessages } from "../../hooks/useSendMessagesCreateNewChat";

export default function UserContact({ connection, onClick }) {
  const { messages } = useFetchMessages(connection);
  const { address } = connection;
  const fullName = `${address.firstname}`;
  
  return (
    <div className="user-contact flex items-center gap-1">
      <div className="user-avatar">
        <img src={avatarSvg} className="w-9" alt="User Avatar" />
      </div>
      <div onClick={onClick} role="button" className=" flex flex-col">
        <h3>{fullName}</h3>
        <span>({ messages.length === 0 ? "Text message" : messages[messages.length - 1].message})</span>
      </div>
    </div>
  );
}
