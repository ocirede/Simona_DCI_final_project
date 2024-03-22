import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigateThrough from "../components/homePageEntrepreneurComps/navigateThrough";
import RecommendedArtists from "../components/homePageEntrepreneurComps/recommendedArtists";
import { UserContext } from "../context/userContext";

export default function HomePageEntrepreneur() {
  const { user} = useContext(UserContext)

  const profileImage = user?.profileImage;
  const firstName = user?.address?.firstname
  const lastName = user?.address?.lastname
  return (
    <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50 p-10">
      <div className="flex items-center gap-3">
      <img src={profileImage} alt="User Profile" className="w-10 h-10 rounded-full object-cover" />
      <div className="text-l font-bold">{firstName} {lastName}</div>
      </div>
      <h1 className="text-xl font-bold text-center p-4">
        Entrepreneur Homepage
      </h1>
      <h1 className="uppercase text-center text-[90px]">Simona</h1>

      <CategoriesSearch/>
      <NavigateThrough />
      <RecommendedArtists />
      <ConnectNetwork />
     
    </div>
  );
}
