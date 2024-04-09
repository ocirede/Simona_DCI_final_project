import { useContext, useEffect, useState } from "react";
import UseGetConnections from "../hooks/useGetConnections.jsx";
import UserContact from "../components/chatBox/UserContact.jsx";
import ChatBox from "../components/chatBox/ChatBox.jsx";
import { UserContext } from "../context/userContext.jsx";


export default function Chat() {
  const { user } = useContext(UserContext);
  const { setConnections, connections } = UseGetConnections();
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
          <svg
            width="251"
            height="251"
            viewBox="40 130 251 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-0 absolute bottom-[70px] left-[395px]"
          >
            <path
              d="M125.499 0L130.214 95.7401L164.282 6.14257L139.18 98.6521L199.266 23.9676L146.806 104.194L227.031 51.7322L152.346 111.82L244.857 86.718L155.26 120.786L251 125.499L155.26 130.214L244.857 164.282L152.346 139.18L227.031 199.266L146.806 146.806L199.266 227.031L139.18 152.346L164.282 244.857L130.214 155.26L125.499 251L120.786 155.26L86.718 244.857L111.82 152.346L51.7322 227.031L104.194 146.806L23.9676 199.266L98.6521 139.18L6.14257 164.282L95.74 130.214L0 125.499L95.74 120.786L6.14257 86.718L98.6521 111.82L23.9676 51.7322L104.194 104.194L51.7322 23.9676L111.82 98.6521L86.718 6.14257L120.786 95.7401L125.499 0Z"
              fill="black"
            />
          </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100mm"
                  height="100mm"
                  viewBox="0 0 281.66079 281.66079"
                  className="w-[200px] absolute right-[58%] top-[20%] rotate-[25deg]"
                >
                  <g transform="translate(103.02608,83.209972)">
                    <g transform="matrix(7.1422275,0,0,7.1422275,-9.2102081,24.35058)">
                      <g transform="matrix(0.07239319,0,0,0.07239319,-3.0905042,-3.852966)">
                        <g transform="matrix(0.9976262,0,0,0.9976262,7.9696602,-2.3539829)">
                          <g transform="matrix(5.3491048,0,0,5.3491048,40.611695,-289.72993)">
                            <path
                              d="m 18.64,5.36 c 0,-0.09 0.04,-0.18 0.11,-0.25 0.15,-0.15 0.4,-0.15 0.55,0 l 1.95,1.95 c 0.07,0.07 0.11,0.16 0.11,0.25 0.27,1.67 0.67,3.18 1.23,4.54 1.9,4.63 5.23,6.08 10.11,6.79 0.09,0.01 0.17,0.04 0.24,0.11 l 1.95,1.95 c 0.15,0.15 0.15,0.4 0,0.55 -0.07,0.07 -0.16,0.1 -0.24,0.11 -3.79,0.55 -6.81,1.91 -9.02,4.11 -2.22,2.19 -3.65,5.24 -4.27,9.17 0,0.09 -0.04,0.18 -0.11,0.25 -0.15,0.15 -0.4,0.15 -0.55,0 L 18.75,32.94 C 18.68,32.87 18.64,32.78 18.64,32.69 17.88,27.84 16.43,24.4 11.78,22.53 10.43,21.99 8.94,21.6 7.3,21.36 7.22,21.35 7.13,21.32 7.06,21.25 L 5.11,19.3 c -0.15,-0.15 -0.15,-0.4 0,-0.55 0.07,-0.07 0.16,-0.1 0.24,-0.11 3.79,-0.55 6.81,-1.91 9.02,-4.11 2.22,-2.19 3.65,-5.24 4.27,-9.17 z m 5.53,10.65 C 24.15,16 24.14,15.99 24.12,15.97 23.77,15.69 23.45,15.4 23.13,15.08 c -1.96,-1.94 -3.33,-4.5 -4.1,-7.69 -0.78,3.19 -2.15,5.75 -4.11,7.69 -1.93,1.92 -4.41,3.22 -7.44,3.95 3.03,0.72 5.51,2.03 7.44,3.94 0.35,0.34 0.68,0.7 0.99,1.09 0,0 0.01,0.01 0.01,0.02 1.44,1.77 2.47,3.96 3.11,6.58 0.07,-0.33 0.16,-0.64 0.25,-0.95 0,-0.01 0,-0.02 0.01,-0.03 0.8,-2.74 2.08,-4.97 3.84,-6.71 1.93,-1.91 4.42,-3.22 7.45,-3.94 -2.52,-0.6 -4.66,-1.6 -6.41,-3.02 z"
                              fill="#000000"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 192.32407 196.67935"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "100px",
                    height: "100px",
                    color: "rgb(223, 60, 95)",
                    position: "absolute",
                    top: "410px",
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
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100mm"
                  height="100mm"
                  viewBox="0 0 281.66079 281.66079"
                  className="w-[200px] absolute right-[30%] top-[53%] rotate-[25deg]"
                >
                  <g transform="translate(103.02608,83.209972)">
                    <g transform="matrix(7.1422275,0,0,7.1422275,-9.2102081,24.35058)">
                      <g transform="matrix(0.07239319,0,0,0.07239319,-3.0905042,-3.852966)">
                        <g transform="matrix(0.9976262,0,0,0.9976262,7.9696602,-2.3539829)">
                          <g transform="matrix(5.3491048,0,0,5.3491048,40.611695,-289.72993)">
                            <path
                              d="m 18.64,5.36 c 0,-0.09 0.04,-0.18 0.11,-0.25 0.15,-0.15 0.4,-0.15 0.55,0 l 1.95,1.95 c 0.07,0.07 0.11,0.16 0.11,0.25 0.27,1.67 0.67,3.18 1.23,4.54 1.9,4.63 5.23,6.08 10.11,6.79 0.09,0.01 0.17,0.04 0.24,0.11 l 1.95,1.95 c 0.15,0.15 0.15,0.4 0,0.55 -0.07,0.07 -0.16,0.1 -0.24,0.11 -3.79,0.55 -6.81,1.91 -9.02,4.11 -2.22,2.19 -3.65,5.24 -4.27,9.17 0,0.09 -0.04,0.18 -0.11,0.25 -0.15,0.15 -0.4,0.15 -0.55,0 L 18.75,32.94 C 18.68,32.87 18.64,32.78 18.64,32.69 17.88,27.84 16.43,24.4 11.78,22.53 10.43,21.99 8.94,21.6 7.3,21.36 7.22,21.35 7.13,21.32 7.06,21.25 L 5.11,19.3 c -0.15,-0.15 -0.15,-0.4 0,-0.55 0.07,-0.07 0.16,-0.1 0.24,-0.11 3.79,-0.55 6.81,-1.91 9.02,-4.11 2.22,-2.19 3.65,-5.24 4.27,-9.17 z m 5.53,10.65 C 24.15,16 24.14,15.99 24.12,15.97 23.77,15.69 23.45,15.4 23.13,15.08 c -1.96,-1.94 -3.33,-4.5 -4.1,-7.69 -0.78,3.19 -2.15,5.75 -4.11,7.69 -1.93,1.92 -4.41,3.22 -7.44,3.95 3.03,0.72 5.51,2.03 7.44,3.94 0.35,0.34 0.68,0.7 0.99,1.09 0,0 0.01,0.01 0.01,0.02 1.44,1.77 2.47,3.96 3.11,6.58 0.07,-0.33 0.16,-0.64 0.25,-0.95 0,-0.01 0,-0.02 0.01,-0.03 0.8,-2.74 2.08,-4.97 3.84,-6.71 1.93,-1.91 4.42,-3.22 7.45,-3.94 -2.52,-0.6 -4.66,-1.6 -6.41,-3.02 z"
                              fill="#000000"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
