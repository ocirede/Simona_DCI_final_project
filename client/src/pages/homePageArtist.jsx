import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigationTips from "../components/homePageArtistComps/navigationTips";
import OffersSection from "../components/homePageArtistComps/offersSection";
import RecommendedEntrepreneurs from "../components/homePageArtistComps/recommendedEntrepreneurs";

import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";


export default function HomePageArtist() {
  const {user} = useContext(UserContext)
  const userId = user?._id;
  const profileImage = user?.profileImage;
  const { firstname, lastname } = user?.address || {};

  return (
    <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50 p-10">
        <Link to={`/profile-artist/${userId}`} className="flex items-center gap-3">
          <img src={profileImage} alt="User Profile" className="w-10 h-10 rounded-full object-cover" />
          <div className="text-l font-bold">{firstname} {lastname}</div>
        </Link>
       <h1 className="text-xl font-bold text-center p-4">Artist Homepage</h1>
       <h1 className="uppercase text-center text-[90px]">Simona</h1>
      <CategoriesSearch/>
      <NavigationTips/>

      <RecommendedEntrepreneurs/>
      </div>
      <div className="w-full flex flex-col gap-5 bg-white pb-10 md:flex md:flex-row md:flex-wrap  md:justify-center">
      <ConnectNetwork />
      <OffersSection />
      </div>
    
    </>
    );
}

