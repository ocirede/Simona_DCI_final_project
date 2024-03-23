import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";
import CardElement from "../cards/CardElement.jsx";
import styled from "styled-components";
import MotionSlider from "../../components/motionSlider"


export default function RecommendedArtists() {
  const [showRecommendedArtists, setShowRecommendedArtists] = useState(false);
  const { users } = useContext(UserContext)
  const sortedArtistsUsers = users.filter(user => user.role === "artist").sort((a, b) => b.averageRating - a.averageRating).slice(0,5)


    const Container = styled.div`
    max-width: 700px; 
    margin: 0 auto; 
    @media (max-width: 640px) {
        max-width: 90%; 
    }
    `

  return (
    <>
        <div className="flex items-center justify-center p-4 border-b-2 bg-purple-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg shadow-lg" onClick={() => setShowRecommendedArtists(!showRecommendedArtists)}>Recommended Artists</div>
        {showRecommendedArtists && (
          <Container>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Recommended Artists</h2>
                <MotionSlider>
                {sortedArtistsUsers?.map((user, i) => (
                <CardElement key={i} {...user}/>
                    ))}
                </MotionSlider>
            </div>
            </Container>
        )}
        
    </>
  
  )
}
