import { useState } from "react";
import UseGetConnections from "../hooks/useGetConnections.jsx";
import UserContact from "../components/chatBox/UserContact.jsx";
import ChatBox from "../components/chatBox/ChatBox.jsx";

export default function Chat() {
  const { connections } = UseGetConnections();
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex h-screen bg-slate-200">
      {/* Sidebar (Contacts) */}
      <div className="w-1/4 bg-gray-300">
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
        {selectedContact && <ChatBox connection={selectedContact} />}
      </div>
    </div>
  );
}
