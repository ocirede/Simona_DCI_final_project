import { useContext } from "react";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import OffersSection from "../components/homePageArtistComps/offersSection";
import RecommendedEntrepreneurs from "../components/homePageArtistComps/recommendedEntrepreneurs";

export default function HomePageArtist() {
 
  return (<>
  
    <h1 className="text-xl font-bold text-center md:text-center md:p-8  p-4">Artist Homepage</h1>
      <div className="w-full p-3 flex flex-col gap-5 pb-10 md:flex-row md:justify-between md:w-[80%] md:m-auto">
      <CategoriesSearch />
      <RecommendedEntrepreneurs/>
      </div>
      <div className="w-full p-3 flex flex-col gap-5  pb-10 md:flex-row md:justify-between md:w-[80%] md:m-auto">
      <ConnectNetwork />
      <OffersSection />
      </div>
    

    </>
    );
}

