import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import RecommendedArtists from "../components/homePageEntrepreneurComps/recommendedArtists";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

export default function HomePageEntrepreneur() {
  const { user } = useContext(UserContext);
  const userId = user?._id;


  const profileImage = user?.profileImage;
  const firstName = user?.address?.firstname;
  const lastName = user?.address?.lastname;

  return (

<>   
     

    <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50 p-10">
      <Link to={`/ProfilePageEntrepreneur/${userId}`} className="flex items-center gap-3">
        <img src={profileImage} alt="User Profile" className="w-10 h-10 rounded-full object-cover" />
        <div className="text-l font-bold">{firstName} {lastName}</div>
      </Link>
        <h1 className="text-xl font-bold text-center md:text-center md:p-8  p-4">Entrepreneur Homepage</h1>
      <div className="w-full p-3 flex flex-col gap-5 bg-white pb-10 md:flex-row md:justify-between md:w-[80%] md:m-auto">
      <CategoriesSearch/>

      <RecommendedArtists />
      </div>

      <div className="w-full p-3 flex flex-col gap-5 bg-white pb-10 md:flex-row md:justify-between md:w-[80%] md:m-auto">
      <ConnectNetwork />
 </div>
 </> 

  );
}

