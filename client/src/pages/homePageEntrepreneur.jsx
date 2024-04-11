import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import RecommendedArtists from "../components/homePageEntrepreneurComps/recommendedArtists";
import { UserContext } from "../context/userContext";

export default function HomePageEntrepreneur() {
  const { user} = useContext(UserContext)

  
  return (
<>   
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
