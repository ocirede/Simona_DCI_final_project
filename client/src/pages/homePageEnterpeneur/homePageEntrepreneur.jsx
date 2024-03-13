import Categories from "./Categories";
import ConnectEntrepreneur from "./connectEntrepreneur";
import NavigateThrough from "./navigateThrough";
import RecommendedArtists from "./recommendedArtists";

export default function HomePageEntrepreneur() {
  return (
   <div className="max-w-md mx-auto flex flex-col gap-5 bg-gray-50">
     <h1 className="text-xl font-bold text-center p-4">Entrepreneur Homepage</h1>
        <Categories/>
        <ConnectEntrepreneur/>
        <NavigateThrough/>
        <RecommendedArtists/>
        
   </div>
  )
}
