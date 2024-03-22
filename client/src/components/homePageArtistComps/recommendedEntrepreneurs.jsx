import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";
import CardElement from "../cards/CardElement.jsx";
import styled from "styled-components";
import MotionSlider from "../../components/motionSlider"

export default function RecommendedEntrepreneurs() {
  const [showRecommendedEntrepreneurs, setShowRecommendedEntrepreneurs] = useState(false);
  const { users} = useContext(UserContext)
  const sortedEntrepreneurUsers = users.filter(user => user.role === "entrepreneur").sort((a, b) => b.averageRating - a.averageRating).slice(0,5)
  

  console.log(sortedEntrepreneurUsers)
 
const Container = styled.div`
        max-width: 700px; 
        margin: 0 auto; 
        @media (max-width: 640px) {
            max-width: 90%; 
        }
        `
  return (
    <>
        <div className="flex items-center justify-center p-4 border-b-2 bg-purple-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg shadow-lg" onClick={() => setShowRecommendedEntrepreneurs(!showRecommendedEntrepreneurs)}>Recommended Entrepreneurs</div>
            {showRecommendedEntrepreneurs && (
            <Container>
            <div className="p-4">
                <h2 className="text-lg font-bold mt-10 mb-10">Recommended Entrepreneurs</h2>
                <MotionSlider>
                {sortedEntrepreneurUsers?.map((user, i) => (
                <CardElement key={i} {...user}/>
                    ))}
                </MotionSlider>
            </div>
            </Container>
            )}
        
    </>
  )
}
