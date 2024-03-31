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
        <div className="mr-3 ml-3 flex items-center justify-center p-4  bg-purple-100 cursor-pointer  min-h-[200px] mx-auto rounded-2xl shadow-lg border border-b-4 border-black" onClick={() => setShowRecommendedArtists(!showRecommendedArtists)}>Recommended Artists</div>

        {showRecommendedArtists && (
          
            <div className="relative overflow-hidden border border-b-4 border-black rounded-2xl shadow-lg ">

                <h2 className=" text-2xl  font-bold h-[100px] rounded-l-2xl rounded-r-2xl uppercase  vertical-text bg-cobaltBlue absolute z-50 text-center w-full bottom-[-110px] left-0 ">Top five</h2>
                <Container >
                

                <MotionSlider>
                {sortedArtistsUsers?.map((user, i) => (
                <CardElement  key={i} {...user}/>
                    ))}
                </MotionSlider>
           
            </Container>
            </div>
        )}
        
    </>
  
  )
}
