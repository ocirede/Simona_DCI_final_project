import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigationTips from "../components/homePageArtistComps/navigationTips";
import OffersSection from "../components/homePageArtistComps/offersSection";
import RecommendedEntrepreneurs from "../components/homePageArtistComps/recommendedEntrepreneurs";


export default function HomePageArtist() {
  return (
    <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50 p-10">
       <h1 className="text-xl font-bold text-center p-4">Artist Homepage</h1>
       <h1 className="uppercase text-center text-[90px]">Simona</h1>
      <CategoriesSearch/>
      <NavigationTips/>
      <RecommendedEntrepreneurs/>
      <ConnectNetwork />
      <OffersSection />
    </div>);
}
