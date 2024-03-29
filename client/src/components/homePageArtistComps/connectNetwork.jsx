import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext";
import AcceptRequest from "../network-comps/AcceptRequest";
import RejectRquest from "../network-comps/RejectRequest";
import DeleteConnection from "../network-comps/DeleteConnection";
const userData = [
  { id: 11, name: "tyhe", role: "Singer", categories: ["music","contemporary arts"], imageUrl: "profile-pic.jpg" },
  { id: 22, name: "fede", role: "Actor", categories: ["performing arts"],  imageUrl: "profile-pic.jpg" },
  { id: 33, name: "kostas", role: "Dancer", categories:[ "dance"], imageUrl: "profile-pic.jpg" },
  { id: 44, name: "Issa", role: "Painter", categories: ["painting"],  imageUrl: "profile-pic.jpg" },
  { id: 55, name: "Mary", role: "Photographer", categories: ["performing arts"], imageUrl: "profile-pic.jpg" },
  { id: 66, name: "Jesus", role: "Dj", categories: ["music"],  imageUrl: "profile-pic.jpg" },
  { id: 77, name: "Mohammad", role: "Muisc composer", categories: ["music"], imageUrl: "profile-pic.jpg" },
  { id: 88, name: "Adam", role: "Performer", categories: ["performing arts","contemporary arts"],  imageUrl: "profile-pic.jpg" },

];
const entrepreneursData = [
  { id: 1, name: "Elena", role: "Wedding Planner", categories: ["tech", "startup"], imageUrl: "image-url-1.jpg" },
  { id: 2, name: "Marcus", role: "Investor", categories: ["finance", "investor"], imageUrl: "image-url-2.jpg" },
  { id: 3, name: "Jessica", role: "E-commerce Expert", categories: ["retail", "e-commerce"], imageUrl: "image-url-3.jpg" },
  { id: 4, name: "Liam", role: "Marketing Guru", categories: ["marketing", "advertising"], imageUrl: "image-url-4.jpg" },
  { id: 5, name: "Sophia", role: "Fashion Designer", categories: ["fashion", "design"], imageUrl: "image-url-5.jpg" },
  { id: 6, name: "Ethan", role: "Real Estate Mogul", categories: ["real estate", "investment"], imageUrl: "image-url-6.jpg" },
  { id: 7, name: "Mia", role: "Restaurant Owner", categories: ["food", "hospitality"], imageUrl: "image-url-7.jpg" },
  { id: 8, name: "Noah", role: "Software Developer", categories: ["tech", "software"], imageUrl: "image-url-8.jpg" },
   ];
export default function ConnectNetwork() {
      const [showConnectNetwork, setShowConnectNetwork] = useState(false);
      const [currentView, setCurrentView] = useState("");
      const { user} = useContext(UserContext)
      if(user)console.log(user)

      const allUsers = [...userData, ...entrepreneursData]
      const [friendsList, setFriendsList] = useState([])



      const addFriend = (id) => {
        setFriendsList(currentList => [...currentList, id])
      }
      const removeFriend = (id) => {
        setFriendsList(currentList => currentList.filter(friendId => friendId !== id));
      }
      const friends = allUsers.filter(user => friendsList.includes(user.id))
      const others = allUsers.filter(user => !friendsList.includes(user.id))
 
  return  (
    <div>
     <div className="flex items-center justify-center p-4 border-b-2 bg-blue-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg   shadow-lg" onClick={() => setShowConnectNetwork(!showConnectNetwork)}>
        connections Network
      </div>
      {showConnectNetwork && (
        <div>

        <div className="w-full mt-5 flex bg-gray-200">
            <h2  onClick={() => setCurrentView("Connections")}  className="text-xl text-center border border-black font-semibold p-1 flex-grow">Connections</h2>
            <h2 onClick={() => setCurrentView("Pending")}  className="text-xl text-center border border-black font-semibold p-1 flex-grow">Pending Requests</h2>
        </div>



        {currentView === "Connections"  && (

              <div className="w-full h-auto overflow-auto bg-gray-200 slide-in-left">
              <h2 className="text-xl font-semibold p-4">connections</h2>

              {user?.connections?.map(friend => (
                <div key={friend._id} className="flex  gap-2 items-center  ">
                     <img src={friend.profileImage} className="w-10 h-10 rounded-full  bg-green-400" />
                      <div>{friend.address?.firstname} {friend.address?.lastname} </div>
                      <DeleteConnection connectionId={friend._id}/>
                </div>
              ))}
               </div>
                      )}


          
        {currentView === "Pending"&&(
              <div className="w-full h-auto overflow-auto  bg-gray-200 slide-in-right">
              <h2 className="text-xl font-semibold p-4">Pending Requests</h2>
              <div className="grid grid-cols-1  gap-5 p-4">
                  {user?.pendingRequests?.map(user => (
                    <div key={user._id} className="flex  gap-2 items-center">
                      <img src={user.profileImage} className="w-10 h-10 rounded-full  bg-green-400"/>
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
  </div>
  );
}
