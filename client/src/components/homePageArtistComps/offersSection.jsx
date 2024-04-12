import { useContext, useEffect, useState } from "react";
import { OfferContext, useOfferContext } from "../../context/OfferContext";
import { UserContext } from "../../context/userContext";
import EditOffer from "./editOfferButton";
export default function OffersSection() {
  const [currentView, setCurrentView] = useState("AvailableOffers");
  const { offers } = useOfferContext();
  const { user, addFavOffer } = useContext(UserContext);
  const { applyOffer } = useContext(OfferContext);
  const [appliedOffers, setAppliedOffers] = useState();
  const [isApplied, setIsApplied] = useState(false);
  const { deleteOffer, updateOffer } = useContext(OfferContext);

  const userFavOffers = offers?.filter((offer) =>
    user?.favOffers?.some((favOffer) => favOffer._id === offer?._id)
  );
  const handleFavOffers = (offerId) => {
    addFavOffer(offerId, user._id);
  };

  const handleApply = (offerId) => {
    applyOffer(offerId, user._id);
  };
  const availableOffersArray = offers?.filter(
    (offer) =>
      !user?.favOffers?.some((favOffer) => favOffer._id === offer._id) &&
      !appliedOffers?.some((appliedOffer) => appliedOffer._id === offer._id)
  );

  useEffect(() => {
    const appliedOffersArray = offers?.filter((offer) =>
      offer.applicants.some((applicantId) => applicantId === user?._id)
    );
    setAppliedOffers(appliedOffersArray);

    // const isAppliedArray = userFavOffers?.map((offer) =>
    //   offer.applicants.includes(user?._id)
    // );
    // setIsApplied(isAppliedArray);
  }, [user, offers]);

  const handleDelete = (offerId) => {
    deleteOffer(offerId);
  };

  const handleEdit = (offerId) => {
    console.log(offerId);
  };
  // console.log("available", availableOffersArray);
  // console.log("Applied Offers:", appliedOffers);
  // console.log("isApplied:", isApplied);

  return (
    <>
      <div className="rounded-2xl border border-b-4 border-black md:max-h-[435px]  md:min-h-[435px]  md:w-1/2 md:overflow-y-auto ">
        <div className="w-full text-white flex bg-black rounded-tl-2xl rounded-tr-2xl sticky top-0 z-50 ">
          <h2
            onClick={() => setCurrentView("MyOffers")}
            className="text-xl text-center border cursor-pointer border-black font-semibold p-1 flex-grow rounded-2xl "
          >
            My Favourits Offers{" "}
          </h2>
          <h2
            onClick={() => setCurrentView("AvailableOffers")}
            className="text-xl text-center border border-black font-semibold cursor-pointer  p-1 flex-grow rounded-2xl "
          >
            Available Offers
          </h2>
          <h2
            onClick={() => setCurrentView("AppliedOffers")}
            className="text-xl text-center border border-black font-semibold p-1 flex-grow rounded-2xl cursor-pointer  "
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
                    {/* <button
                      className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded "
                      onClick={() => handleEdit(offer._id)}
                    >
                      Edit
                    </button> */}
                    <EditOffer offerId={offer._id} />
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded "
                      onClick={() => handleDelete(offer._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
