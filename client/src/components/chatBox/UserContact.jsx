import React, { useEffect } from "react";
import { useFetchMessages } from "../../hooks/useSendMessagesCreateNewChat";
import { useSocketContext } from "../../context/socketContext";

export default function UserContact({ connection, onClick }) {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useFetchMessages(connection);
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(connection._id)
  const { address } = connection;
  const fullName = `${address.firstname}`;

  // useEffect(() => {
  //   try {
  //     socket.on("newMessage", (newMessage) => {
  //       setMessages(prevMessages => [...prevMessages, newMessage]);
  
  //     });
  
  
  //     return () => socket.off("newMessage");
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }, [socket, messages, setMessages]);

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
          {messages.length === 0
            ? "Text message"
            : messages[messages.length - 1].message}
          )
        </span>
      </div>
    </div>
  );
}
