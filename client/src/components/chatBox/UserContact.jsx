import React, { useContext, useEffect, useState } from "react";
import { useFetchMessages } from "../../hooks/useSendMessagesCreateNewChat";
import { useSocketContext } from "../../context/socketContext";
import axios from "../../config/axios.js";

export default function UserContact({ connection, onClick }) {
  const [notificationCount, setNotificationCount] = useState(0);
  const { messages, getMessages, notifications, setNotifications } =
    useFetchMessages(connection);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(connection._id);
  const { address } = connection;
  const fullName = `${address.firstname} ${address.lastname}`;
  const baseURL = import.meta.env.VITE_BASE_URL;
  const handleUpdateNotificationStatus = async (notificationId) => {
    try {
      const response = await axios.put(
        `${baseURL}/messages/notifications/${notificationId}`
      );

      if (response.data) {
        setNotifications((prevNotifications) =>
          prevNotifications?.filter(
            (notification) => notification._id !== notificationId
          )
        );
      } else {
        console.error("Empty response received from server.");
      }
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };
  useEffect(() => {
    if (messages) {
      getMessages(connection._id);
    }
  }, []);

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
        <div
          onClick={() => {
            if (notifications && notifications.length > 0) {
              handleUpdateNotificationStatus(notifications[0]._id);
            }
          }}
          className="ml-2"
        >
          {notificationCount > 0 ? (
            <div className="flex justify-between items-center mr-1">
              <h3 className="text-black font-custom">{fullName}</h3>
              <span className="bg-retroRed w-5 h-5 flex items-center justify-center rounded-full text-white">
                {notificationCount}
              </span>
            </div>
          ) : (
            <h3 className=" text-black font-custom">{fullName}</h3>
          )}

          <div className=" flex gap-1">
            <p className=" font-custom">last message:</p>
            <p className="  font-bold font-custom">{cutLastMessage} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
