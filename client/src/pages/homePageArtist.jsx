import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigationTips from "../components/homePageArtistComps/navigationTips";
import OffersSection from "../components/homePageArtistComps/offersSection";
import RecommendedEntrepreneurs from "../components/homePageArtistComps/recommendedArtists";


export default function HomePageArtist() {
  return (
    <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50">
       <h1 className="text-xl font-bold text-center p-4">Artist Homepage</h1>
      <CategoriesSearch/>
      <NavigationTips/>
      <RecommendedEntrepreneurs/>
      <ConnectNetwork />
      <OffersSection />
    </div>);
}
