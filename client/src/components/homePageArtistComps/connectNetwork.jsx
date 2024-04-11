import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext";
import AcceptRequest from "../network-comps/AcceptRequest";
import RejectRquest from "../network-comps/RejectRequest";
import DeleteConnection from "../network-comps/DeleteConnection";
export default function ConnectNetwork() {
      const { user} = useContext(UserContext)
      // if(user)console.log(user)
      // const allUsers = [...userData, ...entrepreneursData]
      // const [friendsList, setFriendsList] = useState([])
      return (
        <>
          <div className="rounded-2xl  shadow-lg border border-b-4 border-black md:w-1/2 md:max-h-[435px] md:overflow-y-auto ">
            <div className="w-full flex sticky top-0 z-50">
              <h2  className="w-1/2 rounded-tl-lg bg-black text-white text-xl text-center border border-black font-semibold p-1 flex-grow">Connections</h2>
              <h2 className="w-1/2 rounded-tr-lg bg-black text-white text-xl text-center border border-black font-semibold p-1 flex-grow">Pending Requests</h2>
            </div>
            <div className="flex">
              <div className="w-full h-auto overflow-auto border border-black p-2">
                {user?.connections?.map(friend => (
                  <div key={friend._id} className="flex gap-2 items-center">
                    <img src={friend.profileImage} className="w-5 h-5 rounded-full bg-green-400 object-cover" />
                    <div className="text-center text-xs ">{friend.address?.firstname} {friend.address?.lastname}</div>
                    <DeleteConnection connectionId={friend._id}/>
                  </div>
                ))}
              </div>
              <div className="w-full h-auto overflow-auto p-2 border border-black ">
                <div className="grid grid-cols-1 gap-5 ">
                  {user?.pendingRequests?.map(user => (
                    <div key={user._id} className="flex gap-2 items-center">
                      <img src={user.profileImage} className="w-5 h-5 rounded-full bg-green-400 object-cover" />
                      <div className="text-start text-xs ">{user.address?.firstname} {user.address?.lastname}</div>
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