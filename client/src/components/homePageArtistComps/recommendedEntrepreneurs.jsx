import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";
import CardElement from "../cards/CardElement.jsx";
import styled from "styled-components";
import MotionSlider from "../../components/motionSlider"

// Defining the styled component outside for better optimization
const Container = styled.div`
        max-width: 700px; 
        margin: 0 auto; 
        @media (max-width: 640px) {
            max-width: 90%; 
        }
        `

export default function RecommendedEntrepreneurs() {
  const [showRecommendedEntrepreneurs, setShowRecommendedEntrepreneurs] = useState(false);
  const { users} = useContext(UserContext)
  const sortedEntrepreneurUsers = users.filter(user => user.role === "entrepreneur").sort((a, b) => b.averageRating - a.averageRating).slice(0,5)
  
  return (
    <>
    

  
        <div className=" relative mr-3 ml-3 flex items-center justify-center p-4  bg-retroRed min-h-[200px] mx-auto rounded-2xl shadow-lg border border-b-4 border-black md:w-1/4  cursor-pointer" onClick={() => setShowRecommendedEntrepreneurs(!showRecommendedEntrepreneurs)}>Recommended Entrepreneurs</div>
       
            {showRecommendedEntrepreneurs && (
              <div className=" relative overflow-hidden border border-b-4 border-black rounded-2xl shadow-lg  ">
                  <h2 className=" text-2xl font-bold h-[100px] rounded-l-2xl rounded-r-2xl uppercase  vertical-text bg-cobaltBlue absolute z-50 text-center w-full bottom-[-110px] left-0 ">Top five</h2>
            <Container >
              
                <MotionSlider >
                {sortedEntrepreneurUsers?.map((user, i) => (
                <CardElement  key={i} {...user}/>
                    ))}
                </MotionSlider>
            
            </Container>
            </div>
            )}
    </>
  )
}
