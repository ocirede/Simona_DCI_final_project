import { useContext, useEffect, useState } from "react";
import UseGetConnections from "../hooks/useGetConnections.jsx";
import UserContact from "../components/chatBox/UserContact.jsx";
import ChatBox from "../components/chatBox/ChatBox.jsx";
import { UserContext } from "../context/userContext.jsx";
import { ChevronLeft } from "lucide-react";

export default function Chat() {
  const { user } = useContext(UserContext);
  const { connections } = UseGetConnections();
  const [selectedContact, setSelectedContact] = useState(null);
  const fullName = user?.address?.firstname;
  const welcomeMessage = `Welcome ${fullName}!`;
  const initialMessage = `Select a chat to start messaging!`;
  const [searchQuery, setSearchQuery] = useState("");
  const [showChatBox, setShowChatBox] = useState(false);
  const handleSelectedContact = (connection) => {
    setSelectedContact(connection);
    setShowChatBox(true);
  };

  const filteredConnections = connections.filter((connection) =>
    connection.address.firstname
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex items-center h-screen ml-4 mr-4 mb-10 mt-10 relative z-10">
      {/* Sidebar (Contacts) */}
      <div
        className={`w-full h-screen mt-10 mr-3 lg:w-1/2 ml-3 lg:mr-0  lg:mt-4 rounded-lg bg-lightBlue overflow-y-auto z-50 border border-b-4 border-r-4 border-black ${
          showChatBox ? "hidden lg:block" : ""
        }`}
        style={{ maxWidth: "80vw", margin: "0 auto" }}
      >
        <div className="shadow-xl flex text-4xl mt-4">
          <h2 className="font-bold text-left p-1">Chats</h2>
        </div>

        <div className="flex justify-center mt-6">
          <input
            className="w-2/3 border border-black rounded-[10px] p-1 pl-2"
            type="text"
            name="chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chat..."
          />
        </div>

        {searchQuery === "" ? (
          connections.length === 0 ? (
            <div className="h-1/2 text-lg font-bold flex justify-center items-center">
              No connections available.
            </div>
          ) : (
            connections.map((connection, index) => (
              <UserContact
                key={index}
                connection={connection}
                onClick={() => handleSelectedContact(connection)}
              />
            ))
          )
        ) : filteredConnections.length === 0 ? (
          <div>No matching connections found.</div>
        ) : (
          filteredConnections.map((connection, index) => (
            <UserContact
              key={index}
              connection={connection}
              onClick={() => handleSelectedContact(connection)}
            />
          ))
        )}
      </div>

      {/* Main Content (Chat Box) */}
      <div
        className={`lg:flex h-screen items-center w-full ${
          showChatBox ? "" : "hidden lg:flex"
        } `}
        style={{ maxWidth: "80vw", margin: "0 auto" }}

      >
        {showChatBox && selectedContact ? (
          <>
            <ChatBox
              connection={selectedContact}
              showChatBox={showChatBox}
              setShowChatBox={setShowChatBox}
            />
          </>
        ) : (
          <div
            className={`lg:w-1/2 h-full lg:bg-retroBlue flex flex-col items-center justify-center flex-grow mr-3 rounded-lg border border-b-4 border-black border-l-4 ${
              !showChatBox ? "" : "transform translate-x-0"
            }`}
          >
            <div className="bg-white flex flex-col justify-center items-center gap-2 w-2/3 h-2/4 border border-black border-b-4 border-r-4">
              <h2 className="text-2xl font-bold font-custom">
                {welcomeMessage}
              </h2>
              <h2 className="text-2xl font-bold font-custom">
                {initialMessage}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
