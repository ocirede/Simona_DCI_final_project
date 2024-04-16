import { useContext, useEffect, useState } from "react";
import { OfferContext, useOfferContext } from "../../context/OfferContext";
import { UserContext } from "../../context/userContext";
import EditOffer from "./editOfferButton";
export default function OffersSection() {
  const [currentView, setCurrentView] = useState("AvailableOffers");
  const { offers,setOffers } = useOfferContext();
  const { user, addFavOffer } = useContext(UserContext);
  const { applyOffer } = useContext(OfferContext);
  const [appliedOffers, setAppliedOffers] = useState();
  const { deleteOffer, updateOffer } = useContext(OfferContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

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

  
  }, [user, offers]);

  const handleDelete = (offerId) => {
    deleteOffer(offerId);
  };


  const openModal = (offer) => {
    setSelectedOffer(offer);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedOffer(null);
  };
  return (
    <>
      <div className="rounded-2xl border border-b-4 border-black md:max-h-[435px]  md:min-h-[435px]  md:w-1/2 md:overflow-y-auto bg-white">
        <div className="w-full text-white flex bg-black rounded-tl-2xl rounded-tr-2xl sticky top-0 z-50 ">
          <h2
            onClick={() => setCurrentView("MyOffers")}
            className="text-xl text-center border cursor-pointer border-black font-semibold p-1 flex-grow rounded-2xl text-white"
          >
            My Favourits Offers{" "}
          </h2>
          <h2
            onClick={() => setCurrentView("AvailableOffers")}
            className="text-xl text-center border border-black font-semibold cursor-pointer  p-1 flex-grow rounded-2xl text-white"
          >
            Available Offers
          </h2>
          <h2
            onClick={() => setCurrentView("AppliedOffers")}
            className="text-xl text-center border border-black font-semibold p-1 flex-grow rounded-2xl cursor-pointer  text-white"
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


      {modalVisible && selectedOffer && (
        <div className="fixed inset-0 p-4 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white  p-4 rounded-lg shadow-lg relative max-w-lg mx-auto">
            <button onClick={closeModal} className="absolute top-2 right-2 text-lg font-bold">&times;</button>
            <h3 className="text-lg font-bold mb-2">{selectedOffer.title}</h3>
            <img src={selectedOffer.postImage} alt="Offer" className="w-full h-auto object-cover md:h-48" />
            <p className="mt-2"><strong>Description:</strong> {selectedOffer.description}</p>
            <p><strong>Location:</strong> {selectedOffer.location}</p>
            <p><strong>Salary:</strong> {selectedOffer.salary ? `$${selectedOffer.salary}` : "Not specified"}</p>
            <p><strong>Category:</strong> {selectedOffer.category}</p>
            <p><strong>Type:</strong> {selectedOffer.type}</p>
            <p><strong>Status:</strong> {selectedOffer.status}</p>
            <p><strong>Skills Required:</strong> {selectedOffer.skillsRequired.join(', ')}</p>
            <div className="mt-4 flex justify-between">
              <button onClick={() => handleApply(selectedOffer._id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
                Apply
              </button>
              
            </div>
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
                  <h3 onClick={() => openModal(offer)} className="text-md cursor-pointer font-semibold">{offer.title}</h3>
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
                    className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2 mt-2 rounded "
                  >
                    +
                  </button>


                  {user && user._id === offer.createdBy._id && (
                  <div className="flex gap-2 font-bold rounded pt-4">
                   
                    <EditOffer  offerId={offer._id} />
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded "
                      onClick={() => handleDelete(offer._id)}
                    >
                      Delete
                    </button>
                  </div>
                )} 
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
