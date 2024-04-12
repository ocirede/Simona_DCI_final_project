import { useContext, useEffect, useState } from "react";
import UseGetConnections from "../hooks/useGetConnections.jsx";
import UserContact from "../components/chatBox/UserContact.jsx";
import ChatBox from "../components/chatBox/ChatBox.jsx";
import { UserContext } from "../context/userContext.jsx";
import svgStar from "../assets/y2k_icons/star_five.svg";
import circle from "../assets/y2k_icons/circle.svg";

export default function Chat() {
  const { user } = useContext(UserContext);
  const { connections } = UseGetConnections();
  const [selectedContact, setSelectedContact] = useState(null);
  const fullName = user?.address?.firstname;
  const welcomeMessage = `Welcome ${fullName}!`;
  const initialMessage = `Select a chat to start messaging!`;
  const [searchQuery, setSearchQuery] = useState("");
  const handleSelectedContact = (connection) => {
    setSelectedContact(connection);
  };

  const filteredConnections = connections.filter((connection) =>
    connection.address.firstname
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen mb-10  relative">
      {/* Sidebar (Contacts) */}
      <div className="w-1/4 ml-3 h-2/3 mt-4 rounded-lg bg-lightBlue overflow-y-auto z-50 border border-b-4 border-r-4 border-black">
        <div className=" shadow-xl flex  text-4xl  mt-4">
          <h2 className=" font-custom font-bold text-left p-1">Chats</h2>
        </div>

        <div className=" flex justify-center mt-6 ">
          <input
            className=" w-2/3 border border-black rounded-[10px] p-1 pl-2"
            type="text"
            name="chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chat..."
          />
        </div>

        {searchQuery === "" ? (
          connections.length === 0 ? (
            <div className=" h-1/2 text-lg font-bold font-custom flex justify-center items-center">
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
      <div className="flex-grow ">
        {selectedContact ? (
          <>
            <ChatBox connection={selectedContact} />
          </>
        ) : (
          <>
            <div className=" relative bg-retroBlue flex items-center justify-center flex-grow h-2/3 mr-3 mt-4 rounded-lg border border-b-4 border-black  border-l-4">
              <div className=" bg-white flex flex-col justify-center items-center gap-2 w-1/2 h-2/3 border border-black border-b-4 border-r-4">
                <h2 className=" text-2xl font-bold font-custom">
                  {welcomeMessage}
                </h2>
                <h2 className=" text-2xl font-bold font-custom">
                  {initialMessage}
                </h2>
                <img
                  src={svgStar}
                  className="w-[80px] absolute right-[58%] top-[20%] rotate-[25deg]"
                  alt="svg"
                />
                <img
                  src={svgStar}
                  className="w-[80px] absolute right-[30%] top-[53%] rotate-[25deg]"
                  alt="svg"
                />
                <img src={circle}  
                style={{
                    width: "100px",
                    height: "100px",
                    color: "#DF3C5F",
                    position: "absolute",
                    top: "385px",
                    right: "810px",
                  }} 
                  alt="circle" />
            
                {/* <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 192.32407 196.67935"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "100px",
                    height: "100px",
                    color: "rgb(223, 60, 95)",
                    position: "absolute",
                    top: "385px",
                    right: "810px",
                  }}
                >
                  <g transform="translate(-11.170693,-42.357793)">
                    <g transform="matrix(7.1422275,0,0,7.1422275,-9.2102081,24.35058)">
                      <g>
                        <path
                          d="m 24.76,8.63 c 1.41,2.59 1.86,5.72 1.02,8.8 -1.72,6.26 -8.15,9.93 -14.37,8.19 -1.3,-0.36 -2.49,-0.93 -3.54,-1.67 1.46,2.68 3.96,4.79 7.12,5.68 6.21,1.73 12.64,-1.93 14.37,-8.19 1.35,-4.96 -0.64,-10.04 -4.6,-12.81 z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M 6.86,15.15 C 8.58,8.89 15.01,5.22 21.23,6.96 22.53,7.32 23.72,7.89 24.77,8.63 23.31,5.95 20.81,3.84 17.65,2.95 11.43,1.22 5,4.88 3.28,11.14 1.92,16.09 3.91,21.18 7.87,23.95 6.46,21.36 6.01,18.23 6.86,15.15 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg> */}
               
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
