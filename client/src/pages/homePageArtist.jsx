import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigationTips from "../components/homePageArtistComps/navigationTips";
import OffersSection from "../components/homePageArtistComps/offersSection";
import RecommendedEntrepreneurs from "../components/homePageArtistComps/recommendedEntrepreneurs";
import { UserContext } from "../context/userContext";


export default function HomePageArtist() {
  const { user} = useContext(UserContext)
  if (user) console.log(user)
  const profileImage = user?.profileImage;
  const firstName = user?.address?.firstname
  const lastName = user?.address?.lastname
  return (
    <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50 p-10">
      <div className="flex items-center gap-3">
      <img src={profileImage} alt="User Profile" className="w-10 h-10 rounded-full object-cover" />
      <div className="text-l font-bold">{firstName} {lastName}</div>
      </div>
       <h1 className="text-xl font-bold text-center p-4">Artist Homepage</h1>
       <h1 className="uppercase text-center text-[90px]">Simona</h1>
      <CategoriesSearch/>
      <NavigationTips/>
      <RecommendedEntrepreneurs/>
      <ConnectNetwork />
      <OffersSection />
    </div>);
}
