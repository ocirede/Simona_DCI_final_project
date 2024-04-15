import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function WelcomeUser() {
    const { user} = useContext(UserContext)
    const profileImage = user?.profileImage;
    const firstName = user?.address?.firstname
    const lastName = user?.address?.lastname
  return (
    <div className="flex items-center gap-3">
      <img src={profileImage} alt="User Profile" className="w-10 h-10 rounded-full object-cover border border-blacks" />
      <div className="text-l font-bold">{firstName} {lastName}</div>
    </div>
  )
}
