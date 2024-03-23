import { useState } from "react";


const offers = [
  {
    id: 1,
    entrepreneurName: "Elena",
    role: "Wedding Planner",
    offerDate: "2024-03-15",
    offerDescription: "Looking for a contemporary artist to design unique wedding invitations.",
  },
  {
    id: 2,
    entrepreneurName: "Marcus",
    role: "Investor",
    offerDate: "2024-03-20",
    offerDescription: "Offering investment for innovative music tech startups.",
  },
  {
    id: 3,
    entrepreneurName: "Jessica",
    role: "E-commerce Expert",
    offerDate: "2024-03-18",
    offerDescription: "Seeking a photographer for product shoots for a new line of artisanal crafts.",
  },
  {
    id: 4,
    entrepreneurName: "Liam",
    role: "Marketing Guru",
    offerDate: "2024-03-22",
    offerDescription: "Looking for a graphic designer to collaborate on a branding project for a high-profile client.",
  },
  {
    id: 5,
    entrepreneurName: "Sophia",
    role: "Fashion Designer",
    offerDate: "2024-03-25",
    offerDescription: "Seeking a visual artist for an avant-garde fashion show installation.",
  },
  {
    id: 6,
    entrepreneurName: "Ethan",
    role: "Real Estate Mogul",
    offerDate: "2024-03-28",
    offerDescription: "Offering a gallery space for emerging painters to display their work.",
  },
  {
    id: 7,
    entrepreneurName: "Mia",
    role: "Restaurant Owner",
    offerDate: "2024-03-30",
    offerDescription: "In search of a musician or band to perform live on weekends at a trendy restaurant.",
  },
  {
    id: 8,
    entrepreneurName: "Noah",
    role: "Software Developer",
    offerDate: "2024-04-02",
    offerDescription: "Developing a new app for artists to sell their work and looking for beta testers.",
  }
];


export default function OffersSection() {
  const [showOffersSection, setShowOffersSection] = useState(false);
      const [myOffers, setMyOffers] = useState([])
      const [currentView, setCurrentView] = useState("");

      const addOfferToMyOffers = (offer) => {
        setMyOffers(currentOffers => {
          const isOfferInList = currentOffers.some(item => item.id === offer.id);
          if (!isOfferInList) {
            return [...currentOffers, offer];
          }
          return currentOffers;
        })
      }
      const removeOfferFromMyOffers = (offerId) => {
        setMyOffers(currentOffers => currentOffers.filter(item => item.id !== offerId));
      }
 
      const availableOffers = offers.filter(offer => !myOffers.find(item => item.id === offer.id));

  return (
    <>
    <div className="flex items-center justify-center p-4 border-b-2 bg-red-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg shadow-lg" onClick={() => setShowOffersSection(!showOffersSection)}>offers Section</div>
    {showOffersSection && (
    <div>
      <div className="w-full mt-5 flex bg-gray-200">
            <h2  onClick={() => setCurrentView("MyOffers")}  className="text-xl text-center border border-black font-semibold p-1 flex-grow">My Offers</h2>
            <h2 onClick={() => setCurrentView("AvailableOffers")}  className="text-xl text-center border border-black font-semibold p-1 flex-grow">Available Offers</h2>
        </div>
        {currentView === "MyOffers"  && (
           <div className="w-full h-auto overflow-auto bg-gray-100 p-4 slide-in-left">
           <h2 className="font-bold text-lg mb-4">My Offers</h2>
           {myOffers.map((offer) => (
             <div key={offer.id} className="mb-4 p-2 bg-white shadow-md rounded-lg">
               <h3 className="text-md font-semibold">{offer.entrepreneurName}</h3>
               <p>{offer.role}</p>
               <p>{offer.offerDate}</p>
               <p>read more</p>
               {/* <p>{offer.offerDescription}</p> */}
               <button onClick={() => removeOfferFromMyOffers(offer.id) }className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded ">-</button>
             </div>
           ))}
         </div>
        )}

       {currentView === "AvailableOffers"  && (
        <div className="w-full h-auto overflow-auto p-4 slide-in-right ">
        <h2 className="font-bold text-lg mb-4">Available Offers</h2>
        <div className="grid grid-cols-1 gap-4">
          {availableOffers.map((offer) => (
            <div key={offer.id} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-md font-semibold">{offer.entrepreneurName}</h3>
              <p>{offer.role}</p>
              <p>{offer.offerDate}</p>
              <p>{offer.offerDescription}</p>
              <button onClick={() => addOfferToMyOffers(offer) }className="bg-red-700 hover:bg-red-800 text-white font-bold  px-2  rounded ">+</button>
            </div>
          ))}
        </div>
      </div>
       )}

    
      
    </div>)}
     
    </>
    
)
}
