import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import CreateOffer from "../profile artist/CreateOfferButton";
import { useOfferContext } from "../../context/OfferContext";
import EditOffer from "../homePageArtistComps/editOfferButton";

export default function OffersSection({user}) {
    const { user: loggedInUser } = useContext(UserContext);
    const { offers } = useOfferContext();

    const userOffer = offers?.find(offer => offer?.createdBy._id === user._id);

    return (
        <div className="mb-4"> 
        <div className="h-[250px] bg-white border-black border rounded-[20px] shadow-md"> 
            <div className="flex justify-between">
                <h2 className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2">Offers</h2>
                {loggedInUser && loggedInUser._id === user._id && (
                    <div className="mr-4 mt-4">
                        <CreateOffer /> 
                    </div>
                )}
            </div>
            <div className="overflow-auto max-h-[170px] pl-5 pt-2" > 
            {userOffer ? (
                        <div key={userOffer._id} className="offer-card mt-2">
                            <h3 className="text-md font-semibold">{userOffer.title}</h3>
                            <p>
                                Created by :{" "}
                                <span className="font-bold">
                                    {userOffer.createdBy?.address?.firstname}{" "}
                                    {userOffer.createdBy?.address?.lastname}
                                </span>
                            </p>
                            <p>Location : {userOffer.location}</p>
                            <p>{userOffer.description}</p>
                            <EditOffer offerId={userOffer._id}/>
                        </div>
                    ) : (
                        <p>No offer available</p>
            )}
            </div>
        </div>
    </div>
    );
}




