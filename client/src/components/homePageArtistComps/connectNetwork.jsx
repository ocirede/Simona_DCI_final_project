import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext";
import AcceptRequest from "../network-comps/AcceptRequest";
import RejectRquest from "../network-comps/RejectRequest";
import DeleteConnection from "../network-comps/DeleteConnection";


export default function ConnectNetwork() {
      const [showConnectNetwork, setShowConnectNetwork] = useState(false);
      const [currentView, setCurrentView] = useState("");
      const { user} = useContext(UserContext)

  return  (
    <>
     <div className="ml-3 mr-3 flex items-center justify-center p-4  bg-blue-100 cursor-pointer min-h-[200px] mx-auto rounded-2xl   shadow-lg border border-b-4 border-black md:w-1/4" onClick={() => setShowConnectNetwork(!showConnectNetwork)}>
        connections Network
      </div>
      {showConnectNetwork && (
        <div className="rounded-lg m-3  shadow-lg border border-b-4 border-black">

        <div className="w-full  flex ">
            <h2  onClick={() => setCurrentView("Connections")}  className="rounded-tl-lg bg-black text-white  text-xl text-center border border-black font-semibold p-1 flex-grow">Connections</h2>
            <h2 onClick={() => setCurrentView("Pending")}  className="rounded-tr-lg bg-black text-white text-xl text-center border border-black font-semibold p-1 flex-grow">Pending Requests</h2>
        </div>



        {currentView === "Connections"  && (

              <div className="w-full h-auto overflow-auto p-4 slide-in-left">
              <h2 className="text-xl font-semibold mb-4">connections</h2>

              {user?.connections?.map(friend => (
                <div key={friend._id} className="flex  gap-2 items-center  ">
                     <img src={friend.profileImage} className="w-10 h-10 rounded-full  bg-green-400 object-cover" />
                      <div>{friend.address?.firstname} {friend.address?.lastname} </div>
                      <DeleteConnection connectionId={friend._id}/>
                </div>
              ))}
               </div>
                      )}


        
        {currentView === "Pending"&&(
              <div className="w-full h-auto overflow-auto  p-4 slide-in-right">
              <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
              <div className="grid grid-cols-1  gap-5 p-4">
                  {user?.pendingRequests?.map(user => (
                    <div key={user._id} className="flex  gap-2 items-center">
                      <img src={user.profileImage} className="w-10 h-10 rounded-full  bg-green-400 object-cover"/>
                      <div  className="text-center">{user.address?.firstname} {user.address?.lastname}</div>
                       <AcceptRequest senderId ={user._id}/>
                     <RejectRquest senderId={user._id}/>
                   </div>
                  ))}
              </div>
              
               </div>
        )}
       
         
          
        
        </div>
     
      )}
 </>
  );
}
