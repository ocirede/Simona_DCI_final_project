import { useState } from "react"
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
      <div className="flex items-center justify-center p-4 border-b-2 bg-blue-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg shadow-lg" onClick={() => setShowConnectNetwork(!showConnectNetwork)}>
        connections Network
      </div>
      {showConnectNetwork && (
        <div className="flex mt-5  ">
        
          <div className="w-1/3 h-screen overflow-auto bg-gray-200">
         <h2 className="text-xl font-semibold p-4">My Network</h2>
        
         {friends.map(friend => (
           <div key={friend.id} className="flex flex-colgap-3 items-center gap-2 p-2">
                <img src={friend.imageUrl} className="w-8 h-8 rounded-full  bg-green-400" />
                 <div>{friend.name} </div>
            
             
             <button onClick={() => removeFriend(friend.id) }className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded ">-</button>
           </div>
         ))}
       </div>
       
         
       <div className="w-2/3 h-screen overflow-auto">
         <h2 className="text-xl font-semibold p-4">Suggestions</h2>
         <div className="grid grid-cols-2  gap-5 p-4">
             {others.map(user => (
               <div key={user.id} className="flex flex-col gap-2 items-center">
                 <img src={user.imageUrl} className="w-20 h-20 rounded-full  bg-green-400"/>
                 <div  className="text-center">{user.name}</div>
                 <button onClick={() => addFriend(user.id)}className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2 ml-2 rounded "> + </button>
               </div>
             ))}
         </div>
         
       </div>
        </div>
        
     
      )}
     </div>
  );
}
