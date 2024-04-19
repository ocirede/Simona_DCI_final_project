import React, { useContext, useEffect, useState } from "react";
import { MessageSquareText } from "lucide-react";
import { useSocketContext } from "../../context/socketContext";
import { NavLink } from "react-router-dom";
import { useFetchMessages } from "../../hooks/useSendMessagesCreateNewChat";
import { UserContext } from "../../context/userContext";
function Sidebar() {
  const { user } = useContext(UserContext);
  const { socket } = useSocketContext();
  const [isOpen, setIsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const {notifications, setNotifications } = useFetchMessages(user);


  // real time notification 
  useEffect(() => {
    try {
      socket?.on("notification", (data) => {
        setNotifications((prevNotifications) => {
          if (data) {
            const updatedNotifications = [...prevNotifications, data];
            sessionStorage.setItem(
              "notifications",
              JSON.stringify(updatedNotifications)
            );
            setNotificationCount((prevCount) => prevCount + 1);
            return updatedNotifications;
          }
          return prevNotifications;
        });
      });

      return () => socket?.off("notification");
    } catch (error) {
      console.log(error);
    }
  }, [socket]);

  // Load notifications from sessionStorage on component mount
  useEffect(() => {
    const storedNotifications = JSON.parse(
      sessionStorage.getItem("notifications") || "[]"
    );
    setNotifications(storedNotifications);
    setNotificationCount(storedNotifications.length);
  }, []);

  // Update isOpen state based on notifications
  useEffect(() => {
    setIsOpen(notifications && notifications.length > 0);
  }, [notifications]);

  // Handle deleting notifications
  const handleDeleteNotification = () => {
    setNotifications([]);
    sessionStorage.removeItem("notifications");
    setNotificationCount(0);
  };

  return (
    <>
      {isOpen && notificationCount > 0 && (
        <div
          className={`fixed top-1/2 right-0 z-50 bg-retroRed text-white rounded-lg p-4 transition-transform duration-700 ease-in-out  ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <NavLink onClick={() => handleDeleteNotification()} to="/chatbox">
            <div className="relative flex items-center justify-center animated-message ">
              <div className="relative flex gap-1 text-lg ">
                <p className="text-white">You have new message(s)</p>
                <MessageSquareText
                  className="notification-icon"
                  color="white"
                />
                <span className="notification-count">{notificationCount}</span>
              </div>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Sidebar;
