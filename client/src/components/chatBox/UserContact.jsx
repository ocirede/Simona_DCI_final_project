import React, { useContext, useEffect } from "react";
import { useFetchMessages } from "../../hooks/useSendMessagesCreateNewChat";
import { useSocketContext } from "../../context/socketContext";
import UseGetConnections from "../../hooks/useGetConnections";
import { UserContext } from "../../context/userContext";

export default function UserContact({ connection, onClick }) {
  const { user } = useContext(UserContext);
  const { getConnections } = UseGetConnections();
  const { messages } = useFetchMessages(connection);
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(connection._id)
  const { address } = connection;
  const fullName = `${address.firstname}`;

  useEffect(() => {
    if (user) {
      getConnections();
    }
  }, []);


  useEffect(() => {
  }, [messages]);


     // to fix the latest message in real time and add the notifications and add the search filter
  return (
    <div className="user-contact flex items-center gap-1 ml-2">
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className=" w-9 h-9 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div onClick={onClick} role="button" className=" flex flex-col">
        <h3>{fullName}</h3>
        <span>
          (
          {messages?.length === 0
            ? "Text message"
            : messages[messages.length - 1].message}
          )
        </span>
      </div>
    </div>
  );
}
