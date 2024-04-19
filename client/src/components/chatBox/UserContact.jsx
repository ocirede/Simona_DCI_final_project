import React, { useContext, useEffect, useState } from "react";
import { useFetchMessages } from "../../hooks/useSendMessagesCreateNewChat";
import { useSocketContext } from "../../context/socketContext";
import axios from "../../config/axios.js";
import { UserContext } from "../../context/userContext.jsx";

export default function UserContact({ connection, onClick }) {
  const { user } = useContext(UserContext);
  const [notificationCount, setNotificationCount] = useState(0);
  const {
    messages,
    setMessages,
    getMessages,
    notifications,
    setNotifications,
  } = useFetchMessages(connection);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(connection._id);
  const { address, profileImage } = connection;
  const fullName = `${address.firstname} ${address.lastname}`;
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [avatarImage, setAvatarImage] = useState(profileImage);
  const [lastMessage, setLastMessage] = useState([]);
  // const [initialize, setinitialize] = useState(false);
  // const [cutLastMessage, setCutLastMessage] = useState("");

  const { socket } = useSocketContext();
  // updating notification status
  const handleUpdateNotificationStatus = async (receiverId) => {
    try {
      const response = await axios.put(
        `${baseURL}/messages/notifications/${receiverId}`
      );

      if (response.data) {
        setNotifications((prevNotifications) =>
          prevNotifications?.filter(
            (notification) => notification.receiverId !== receiverId
          )
        );
      } else {
        console.error("Empty response received from server.");
      }
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };


  // real time last message
  useEffect(() => {
    try {
      socket?.on("lastMessage", (lastMessage) => {
        if (lastMessage.senderId === connection._id || lastMessage.receiverId === connection._id) {
          setLastMessage((prevMessages) => [...prevMessages, lastMessage]);
        }
      });
      return () => socket?.off("lastMessage");
    } catch (error) {
      console.log(error);
    }
  }, [socket, connection]);


  const recentMessage = messages[messages.length - 1]?.message ;
  const cutLastMessage =
  recentMessage?.length > 20
      ? recentMessage?.substring(0, 15) + "..."
      : recentMessage;


  // fetching messages
  useEffect(() => {
    if (messages) {
      getMessages(connection._id);
    }
  }, [connection._id]);

  // counting notifications

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      const uniqueSenderIds = [
        ...new Set(notifications.map((notif) => notif.senderId)),
      ];
      const totalCount = uniqueSenderIds.reduce((acc, senderId) => {
        const count = notifications.filter(
          (notif) => notif.senderId === senderId
        ).length;
        return acc + count;
      }, 0);
      setNotificationCount(totalCount);
    } else {
      setNotificationCount(0);
    }
  }, [notifications]);


  return (
    <div className="user-contact flex justify-start m-4 items-center gap-4 mt-7">
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-12 h-12 rounded-full">
          <img src={avatarImage || "../assets/avatar.svg"} alt="User Avatar" />
        </div>
      </div>
      <div
        onClick={onClick}
        role="button"
        className="flex flex-col w-full bg-white border border-black rounded-[10px] lg:w-3/4"
        style={{ maxWidth: "60vw" }}
      >
        <div
          onClick={() => {
            if (notifications && notifications.length > 0) {
              handleUpdateNotificationStatus(user._id);
            }
          }}
          className="ml-2"
        >
          {notificationCount > 0 ? (
            <div className="flex justify-between items-center mr-1">
              <h3 className="text-black">{fullName}</h3>
              <span className="bg-retroRed w-5 h-5 flex items-center justify-center rounded-full text-white">
                {notificationCount}
              </span>
            </div>
          ) : (
            <h3 className="text-black">{fullName}</h3>
          )}

          <div className="flex gap-1">
            <p>last message:</p>

            <p className="font-bold">
              {lastMessage.pop()?.message || cutLastMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
