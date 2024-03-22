import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";
import CardElement from "../filteredUsersPage/CardElement.jsx";
import styled from "styled-components";
import MotionSlider from "../../components/motionSlider"

export default function RecommendedEntrepreneurs() {
  const [showRecommendedEntrepreneurs, setShowRecommendedEntrepreneurs] = useState(false);
  const { users } = useContext(UserContext)

console.log(users)
const Container = styled.div`
        max-width: 700px; 
        margin: 0 auto; 
        @media (max-width: 640px) {
            max-width: 90%; 
        }
        `;
  return (
    <>
        <div className="flex items-center justify-center p-4 border-b-2 bg-purple-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg shadow-lg" onClick={() => setShowRecommendedEntrepreneurs(!showRecommendedEntrepreneurs)}>Recommended Entrepreneurs</div>
            {showRecommendedEntrepreneurs && (
            <Container>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Recommended Entrepreneurs</h2>
                <MotionSlider>
                {users.map((user, i) => (
                <CardElement key={i} user={user}/>
                    ))}
                </MotionSlider>
            </div>
            </Container>
            )}
        
    </>
  )
}
