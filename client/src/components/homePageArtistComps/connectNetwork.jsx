import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import AcceptRequest from "../network-comps/AcceptRequest";
import RejectRquest from "../network-comps/RejectRequest";
import DeleteConnection from "../network-comps/DeleteConnection";

export default function ConnectNetwork() {
  const { user } = useContext(UserContext);
  const [currentView, setCurrentView] = useState("MyOffers");

  return (
    <>
      <div className="rounded-2xl border border-b-4 border-black md:max-h-[435px]  md:min-h-[435px]  md:w-1/2 md:overflow-y-auto ">
        <div className="w-full text-white flex bg-black sticky top-0 z-50 ">
          <h2
            onClick={() => setCurrentView("MyOffers")}
            className="text-xl text-center border cursor-pointer border-black font-semibold p-1 flex-grow rounded-tl-lg rounded-lg "
          >
            My Favourits Offers{" "}
          </h2>
          <h2
            onClick={() => setCurrentView("AvailableOffers")}
            className="text-xl text-center border border-black font-semibold cursor-pointer  p-1 flex-grow rounded-tr-lg "
          >
            Available Offers
          </h2>
          <h2
            onClick={() => setCurrentView("AppliedOffers")}
            className="text-xl text-center border border-black font-semibold p-1 flex-grow rounded-tl-lg cursor-pointer rounded-2xl "
          >
            Applied Offers{" "}
          </h2>
        </div>
        {currentView === "MyOffers" && (
          <div className="w-full h-auto overflow-auto  p-4 slide-in-left">
            {/* Content for MyOffers */}
          </div>
        )}
        {currentView === "AppliedOffers" && (
          <div className="w-full h-auto overflow-auto p-4 slide-in-top ">
            {/* Content for AppliedOffers */}
          </div>
        )}
        {currentView === "AvailableOffers" && (
          <div className="w-full h-auto overflow-auto p-4 slide-in-right ">
            {/* Content for AvailableOffers */}
          </div>
        )}
      </div>
    </>
  );
}
