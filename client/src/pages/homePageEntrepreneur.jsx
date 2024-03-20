import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import NavigateThrough from "../components/homePageEntrepreneurComps/navigateThrough";
import RecommendedArtists from "../components/homePageEntrepreneurComps/recommendedArtists";

export default function HomePageEntrepreneur() {
  return (
    <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50">
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
