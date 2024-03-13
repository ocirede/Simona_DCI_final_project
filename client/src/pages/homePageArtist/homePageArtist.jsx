import { CategoriesSearch } from "./categoriesSearch";
import ConnectNetwork from "./connectNetwork";
import NavigationTips from "./navigationTips";
import OffersSection from "./offersSection";
import RecommendedEntrepreneurs from "./recommendedArtists";


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
