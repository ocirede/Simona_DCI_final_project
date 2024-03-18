import { useState } from "react";
import CardElement from "../filteredUsersPage/CardElement";

export default function RecommendedEntrepreneurs() {
  const [showRecommendedEntrepreneurs, setShowRecommendedEntrepreneurs] = useState(false);

  const entrepreneursData = [
    { id: 1, name: "Elena", role: "Wedding Planner", categories: ["tech", "startup"], imageUrl: "image-url-1.jpg" },
    { id: 2, name: "Marcus", role: "Investor", categories: ["finance", "investor"], imageUrl: "image-url-2.jpg" },
    { id: 3, name: "Jessica", role: "E-commerce Expert", categories: ["retail", "e-commerce"], imageUrl: "image-url-3.jpg" },
    { id: 4, name: "Liam", role: "Marketing Guru", categories: ["marketing", "advertising"], imageUrl: "image-url-4.jpg" },
    { id: 5, name: "Sophia", role: "Fashion Designer", categories: ["fashion", "design"], imageUrl: "image-url-5.jpg" },
    { id: 6, name: "Ethan", role: "Real Estate Mogul", categories: ["real estate", "investment"], imageUrl: "image-url-6.jpg" },
    { id: 7, name: "Mia", role: "Restaurant Owner", categories: ["food", "hospitality"], imageUrl: "image-url-7.jpg" },
    { id: 8, name: "Noah", role: "Software Developer", categories: ["tech", "software"], imageUrl: "image-url-8.jpg" },
];




  return (
    <>
        <div className="flex items-center justify-center p-4 border-b-2 bg-purple-100 cursor-pointer" onClick={() => setShowRecommendedEntrepreneurs(!showRecommendedEntrepreneurs)}>Recommended Entrepreneurs</div>
        {showRecommendedEntrepreneurs && (
          <div className="carousel-container p-4">
            <h2 className="text-lg font-bold mb-2">Recommended Entrepreneurs</h2>
            <div className="carousel flex overflow-x-auto gap-4">
                {entrepreneursData.map((entrepreneur) => (
                     <CardElement 
                     key={entrepreneur.id} 
                     name={entrepreneur.name} 
                     role={entrepreneur.role} 
                     categories={entrepreneur.categories} 
                     imageUrl={entrepreneur.imageUrl} 
                 />
                   
                ))}
            </div>
        </div>
        )}
        
    </>
  )
}
