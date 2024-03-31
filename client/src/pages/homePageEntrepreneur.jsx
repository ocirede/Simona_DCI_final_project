import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigateThrough from "../components/homePageEntrepreneurComps/navigateThrough";
import RecommendedArtists from "../components/homePageEntrepreneurComps/recommendedArtists";
import { UserContext } from "../context/userContext";

export default function HomePageEntrepreneur() {
  const { user} = useContext(UserContext)

  
  return (
    <div className="max-w-md mx-auto flex flex-col gap-5 pb-10 ">
     
      <h1 className="text-xl font-bold text-center p-4">
        Entrepreneur Homepage
      </h1>

      <CategoriesSearch/>
      <NavigateThrough />
      <RecommendedArtists />
      <ConnectNetwork />
     
    </div>
  );
}
