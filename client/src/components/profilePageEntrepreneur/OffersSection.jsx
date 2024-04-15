import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import CreateOffer from "../profile artist/CreateOfferButton";
import { useOfferContext } from "../../context/OfferContext";
import EditOffer from "../homePageArtistComps/editOfferButton";

export default function OffersSection({user}) {
    const { user: loggedInUser } = useContext(UserContext);
    const { offers } = useOfferContext();

    // Needs to be fixed
    const createdBy = "65f89ca9283067909386bcf9";

    const userOffers = offers?.filter(offer => {
        console.log("Offer createdBy:", createdBy);
        console.log("User ID vs. Offer createdBy:", user?._id === offer?.createdBy);
        return createdBy === user?._id;
    });

    return (
        <div className="mb-4"> 
            <div className="h-[150px] bg-white border-black border rounded-[20px] shadow-md"> 
                <div className="flex justify-between">
                    <h2 className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2">Offers</h2>
                    {loggedInUser && loggedInUser._id === user._id && (
                        <div className="mr-4 mt-4">
                            <CreateOffer /> 
                        </div>
                    )}
                </div>
                <div>
                {userOffers.length > 0 ? (
                        userOffers.map((offer) => (
                            <div key={offer._id} className="offer-card">
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
                                <EditOffer offerId={offer._id}/>
                            </div>
                        ))
                    ) : (
                        <p>No offers available</p>
                    )}
                </div>
            </div>
        </div>
    );
}




