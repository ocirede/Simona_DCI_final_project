import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import AcceptRequest from "../network-comps/AcceptRequest";
import RejectRquest from "../network-comps/RejectRequest";
import DeleteConnection from "../network-comps/DeleteConnection";
import { useSocketContext } from "../../context/socketContext";

export default function ConnectNetwork() {
  const { user, setUser } = useContext(UserContext);
  const { socket } = useSocketContext();

  useEffect(() => {
    socket?.on("pendingRequest", (sender) => {
      console.log("sender connect network ", sender);
      setUser((prevUser) => ({
        ...prevUser,
        pendingRequests: [...prevUser.pendingRequests, sender],
      }));
    });
    console.log(user)

    return () => {
      socket?.off("pendingRequest");
    };
  }, [socket, setUser]);
  // const allUsers = [...userData, ...entrepreneursData]
  // const [friendsList, setFriendsList] = useState([])

  return (
    <>
      <div className="rounded-2xl  shadow-lg border border-b-8 border-black md:w-1/2 md:max-h-[435px] md:overflow-y-auto bg-white">
       
      <div className="flex flex-col md:flex-row md:w-full">
  <div className="w-full md:w-1/2 h-auto overflow-auto rounded-bl-2xl md:rounded-none">
    <h2 className="w-full rounded-tl-lg bg-black cursor-pointer text-white text-xl pl-4 font-semibold p-1">
      Connections
    </h2>
    {user?.connections?.map((friend) => (
      <div key={friend._id} className="flex gap-2 pl-4 items-center">
        <img
          src={friend.profileImage}
          className="w-5 h-5 rounded-full bg-green-400 object-cover"
        />
        <div className="text-center text-l ">
          {friend.address?.firstname} {friend.address?.lastname}
        </div>
        <DeleteConnection connectionId={friend._id} />
      </div>
    ))}
  </div>
  <div className="w-full md:w-1/2 h-auto overflow-auto rounded-br-2xl md:rounded-none">
    <h2 className="w-full rounded-tr-lg bg-black cursor-pointer text-white text-xl pl-4 font-semibold p-1">
      Pending Requests
    </h2>
    <div className="grid grid-cols-1 gap-5">
      {user?.pendingRequests?.map((user) => (
        <div key={user._id} className="flex gap-2 pl-4 items-center">
          <img
            src={user.profileImage}
            className="w-5 h-5 rounded-full bg-green-400 object-cover"
          />
          <div className="text-start text-xs ">
            {user.address?.firstname} {user.address?.lastname}
          </div>
          <AcceptRequest senderId={user._id} />
          <RejectRquest senderId={user._id} />
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </>
  );
}
