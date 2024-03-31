import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigationTips from "../components/homePageArtistComps/navigationTips";
import OffersSection from "../components/homePageArtistComps/offersSection";
import RecommendedEntrepreneurs from "../components/homePageArtistComps/recommendedEntrepreneurs";

export default function HomePageArtist() {
 
  return (<>
  
    <h1 className="text-xl font-bold text-center md:text-start md:p-8  p-4">Artist Homepage</h1>
      <div className="w-full  flex flex-col gap-5 bg-white pb-10 md:flex md:flex-wrap md:flex-row md:justify-center ">
      <CategoriesSearch />
      <RecommendedEntrepreneurs/>
      </div>
      <div className="w-full flex flex-col gap-5 bg-white pb-10 md:flex md:flex-row md:flex-wrap  md:justify-center">
      <ConnectNetwork />
      <OffersSection />
      </div>
    
    </>
    );
}

