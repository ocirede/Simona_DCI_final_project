import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";
import CardElement from "../filteredUsersPage/CardElement.jsx";
export default function RecommendedEntrepreneurs() {
  const [showRecommendedEntrepreneurs, setShowRecommendedEntrepreneurs] = useState(true);
  const { users } = useContext(UserContext);

  return (
    <>
        <div className="flex items-center justify-center p-4 border-b-2 bg-purple-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg shadow-lg" onClick={() => setShowRecommendedEntrepreneurs(!showRecommendedEntrepreneurs)}>Recommended Entrepreneurs</div>
        {showRecommendedEntrepreneurs && (
          <div className="carousel-container p-4">
            <h2 className="text-lg font-bold mb-2">Recommended Entrepreneurs</h2>
            {users.map((user, userId) => (
              <CardElement key={userId} user={user}/>
             ))}
        </div>
        )}
    </>
  )
}
