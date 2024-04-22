import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import AcceptRequest from "../network-comps/AcceptRequest";
import RejectRquest from "../network-comps/RejectRequest";
import DeleteConnection from "../network-comps/DeleteConnection";

export default function ConnectNetwork() {
  const { user } = useContext(UserContext);



      return (
        <>
          <div className="rounded-2xl flex flex-col sm:flex-row shadow-lg border border-b-8 border-black md:w-1/2 md:max-h-[435px] md:overflow-y-auto bg-white ">

            <div className="w-full">
              <h2  className=" w-full rounded-tr-2xl rounded-tl-2xl   bg-black cursor-pointer text-white text-xl text-center border border-black font-semibold p-1 ">Connections</h2>
              <div className="w-full h-auto overflow-auto  p-2">
                {user?.connections?.map(friend => (
                  <div key={friend._id} className="flex gap-2 items-center">
                    <img src={friend.profileImage} className="w-5 h-5 rounded-full bg-green-400 object-cover" />
                    <div className="text-center text-l ">{friend.address?.firstname} {friend.address?.lastname}</div>
                    <DeleteConnection connectionId={friend._id}/>
                  </div>
                ))}
            </div>
            </div>
            <div className="w-full ">
              <h2 className=" w-full bg-black cursor-pointer md:rounded-tr-2xl sm:rounded-tr-2xl text-white text-xl text-center border border-black font-semibold p-1 ">Pending Requests</h2>
              <div className="w-full h-auto overflow-auto p-2  ">
                <div className="grid grid-cols-1 gap-5 ">
                  {user?.pendingRequests?.map(user => (
                    <div key={user._id} className="flex gap-2 items-center">
                      <img src={user.profileImage} className="w-5 h-5 rounded-full bg-green-400 object-cover" />
                      <div className="text-start text-l ">{user.address?.firstname} {user.address?.lastname}</div>
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
