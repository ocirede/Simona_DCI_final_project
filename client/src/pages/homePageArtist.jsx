import { CategoriesSearch } from "../components/homePageArtistComps/categoriesSearch";
import ConnectNetwork from "../components/homePageArtistComps/connectNetwork";
import OffersSection from "../components/homePageArtistComps/offersSection";
import RecommendedEntrepreneurs from "../components/homePageArtistComps/recommendedEntrepreneurs";
import Sidebar from "../components/chatBox/SideBar";

export default function HomePageArtist() {

  return (
    <>
      <div className="max-w-full mx-auto p-1 flex flex-col md:max-w-full bg-transparent">
        <div className="w-full p-3 flex flex-col gap-5 md:flex-row md:justify-between">
          <CategoriesSearch />
          <RecommendedEntrepreneurs />
        </div>
        <div className="w-full p-3 flex flex-col gap-5 pb-3 md:flex-row md:justify-between">
          <ConnectNetwork />
          <OffersSection />
        </div>
      </div>
      <Sidebar />
    </>
  );
}
