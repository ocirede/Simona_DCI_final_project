import { useContext, useState } from "react";
import UseGetConnections from "../hooks/useGetConnections.jsx";
import UserContact from "../components/chatBox/UserContact.jsx";
import ChatBox from "../components/chatBox/ChatBox.jsx";
import { UserContext } from "../context/userContext.jsx";
import { useSocketContext } from "../context/socketContext.jsx";

export default function Chat() {
  const { user } = useContext(UserContext);
  const { setNotifications } = useSocketContext();
  const { connections, setConnections } = UseGetConnections();
  const [selectedContact, setSelectedContact] = useState(null);
  const fullName = user?.address?.firstname;
  const initialMessage = `Welcome ${fullName}! Select a chat to start messaging`;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectedContact = (connection) => {
    setSelectedContact(connection);
    setNotifications([]);
    localStorage.removeItem("notifications");
  };

  const filteredConnections = connections.filter((connection) =>
    connection.address.firstname
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex h-screen bg-slate-200">
      {/* Sidebar (Contacts) */}
      <div className="w-1/4 bg-gray-300">
        <div className=" flex justify-center text-2xl">
          <h2>Chats</h2>
        </div>
        <div className=" flex justify-center">
          <input
            type="text"
            name="chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chat..."
          />
        </div>

        {searchQuery === ""
          ? connections.map((connection, index) => (
              <UserContact
                key={index}
                connection={connection}
                onClick={() => handleSelectedContact(connection)}
              />
            ))
          : filteredConnections.map((connection, index) => (
              <UserContact
                key={index}
                connection={connection}
                onClick={() => handleSelectedContact(connection)}
              />
            ))}
      </div>

      {/* Main Content (Chat Box) */}
      <div className="flex-grow p-4">
        {selectedContact ? (
          <ChatBox connection={selectedContact} />
        ) : (
          <div>{initialMessage}</div>
        )}
      </div>
    </div>
  );
}
