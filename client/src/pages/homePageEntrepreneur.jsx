import Sidebar from "../components/chatBox/SideBar";
import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import RecommendedArtists from "../components/homePageEntrepreneurComps/recommendedArtists";

export default function HomePageEntrepreneur() {
  return (
  <>
    <div className="max-w-full mx-auto p-1 flex flex-col md:max-w-full bg-transparent">
      <div className="w-full p-3 flex flex-col gap-5 bg-white pb-10 md:flex-row md:justify-between">
        <CategoriesSearch/>
        <RecommendedArtists />
      </div>
      <div className="w-full p-3 flex flex-col gap-5 bg-white pb-10 md:flex-row md:justify-between">
        <ConnectNetwork />
      </div>
    </div>
    <Sidebar />

  </>
 );
}



