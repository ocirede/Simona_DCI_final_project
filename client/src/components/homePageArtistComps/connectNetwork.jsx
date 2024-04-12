import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import AcceptRequest from "../network-comps/AcceptRequest";
import RejectRquest from "../network-comps/RejectRequest";
import DeleteConnection from "../network-comps/DeleteConnection";

export default function ConnectNetwork() {



  const { user } = useContext(UserContext);

  // const allUsers = [...userData, ...entrepreneursData]
  // const [friendsList, setFriendsList] = useState([])


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
            <h2 className="font-bold text-lg mb-4">My Favourits Offers</h2>
            {userFavOffers?.map((offer) => (
              <div key={offer._id} className="mb-4 p-2  shadow-md rounded-lg">
                <h3 className="text-md font-semibold">{offer.title}</h3>
                <p>
                  Created by :{" "}
                  <span className="font-bold">
                    {offer.createdBy?.address?.firstname}{" "}
                    {offer.createdBy?.address?.lastname}
                  </span>
                </p>
                <p>Location : {offer.location}</p>
                <p>{offer.description}</p>
                <button
                  onClick={() => handleFavOffers(offer._id)}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded "
                >
                  -
                </button>
                <button
                  onClick={() => handleApply(offer._id)}
                  className="bg-green-700 hover:bg-green-800 text-white font-bold  px-2  ml-3 rounded "
                >
                  apply
                </button>
              </div>
            ))}
          </div>
        )}
        {currentView === "AppliedOffers" && (
          <div className="w-full h-auto overflow-auto p-4 slide-in-top ">
            <h2 className="font-bold text-lg mb-4 ">Applied Offers</h2>
            <div className="grid grid-cols-1 gap-4">
              {appliedOffers?.map((offer) => (
                <div
                  key={offer._id}
                  className="bg-white p-4 shadow-md rounded-2xl"
                >
                  <h3 className="text-md font-semibold">{offer.title}</h3>
                  <p>
                    Created by :{" "}
                    <span className="font-bold">
                      {offer.createdBy?.address?.firstname}{" "}
                      {offer.createdBy?.address?.lastname}
                    </span>
                  </p>
                  <p>Location : {offer.location}</p>
                  <p>{offer.description}</p>
                  <button className="bg-red-700 text-white font-bold  px-2  rounded ">
                    applied
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {currentView === "AvailableOffers" && (
          <div className="w-full h-auto overflow-auto p-4 slide-in-right ">
            <h2 className="font-bold text-lg mb-4">Available Offers</h2>
            <div className="grid grid-cols-1 gap-4">
              {availableOffersArray?.map((offer) => (
                <div
                  key={offer._id}
                  className="bg-white p-4 shadow-md rounded-lg"
                >
                  <h3 className="text-md font-semibold">{offer.title}</h3>
                  <p>
                    Created by :{" "}
                    <span className="font-bold">
                      {offer.createdBy?.address?.firstname}{" "}
                      {offer.createdBy?.address?.lastname}
                    </span>
                  </p>
                  <p>Location : {offer.location}</p>
                  <p>{offer.description}</p>
                  <button
                    onClick={() => handleFavOffers(offer._id)}
                    className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded "
                  >
                    +
                  </button>
                  <div className=" flex gap-2 font-bold  p-2  rounded ">
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded "
                      onClick={() => handleEdit(offer._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded "
                      onClick={() => handleDelete(offer._id)}
                    >
                      Delete
                    </button>
                  </div>

                </div>
              
            </div>
          </div>

        )}
      </div>
    </>
  );

}
