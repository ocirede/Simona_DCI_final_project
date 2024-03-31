import { useContext, useEffect, useState } from "react";
import UseGetConnections from "../hooks/useGetConnections.jsx";
import UserContact from "../components/chatBox/UserContact.jsx";
import ChatBox from "../components/chatBox/ChatBox.jsx";
import SearchBar from "../components/chatBox/SearchBar.jsx";
import { UserContext } from "../context/userContext.jsx";
import { useSocketContext } from "../context/socketContext.jsx";

export default function Chat() {
  const { socket } = useSocketContext();
  const { user } = useContext(UserContext);
  const { connections, getConnections } = UseGetConnections();
  const [selectedContact, setSelectedContact] = useState(null);
  const fullName = user?.address?.firstname;
  const initialMessage = `Welcome ${fullName}! Select a chat to start messaging`;

  useEffect(() => {
    if (user) {
      getConnections();
    }
  }, []);


  return (
    <div className="flex h-screen bg-slate-200">
      {/* Sidebar (Contacts) */}
      <div className="w-1/4 bg-gray-300">
        <SearchBar />
        {connections.map((connection, index) => (
          <UserContact
            key={index}
            connection={connection}
            onClick={() => setSelectedContact(connection)}
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
