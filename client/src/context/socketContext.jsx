import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

const SocketProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    try {
      if (user) {
        const socket = io("http://localhost:3002", {
          query: {
            userId: user._id,
          },
        });
        setSocket(socket);
        // socket.on() is used to listen to the events. can be used both on client and server side
        socket.on("getOnlineUsers", (users) => {
          setOnlineUsers(users);
        });

        socket.on("notification", (data) => {
          setNotifications((prevNotifications) => {
            if (data) {
              const updatedNotifications = [...prevNotifications, data];
              sessionStorage.setItem(
                "notifications",
                JSON.stringify(updatedNotifications)
              ); 

              return updatedNotifications;
            }
            return prevNotifications;
          });
        });

        socket.on("reconnectionFailed");


        return () => socket.close();
      } else {
        if (socket) {
          socket.close();
          setSocket(null);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);



  return (
    <SocketContext.Provider
      value={{ socket, onlineUsers, notifications, setNotifications}}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
