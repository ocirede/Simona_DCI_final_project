import { useContext } from "react";
import { UserContext } from "../../context/userContext.jsx";
import CardElement from "../cards/CardElement.jsx";
import styled from "styled-components";
import MotionSlider from "../../components/motionSlider"

export default function RecommendedArtists() {
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
      <div className="flex w-full border border-b-4 border-black rounded-2xl shadow-lg overflow-hidden  md:w-1/2 md:max-h-[4535px]">
      <div className="relative flex flex-col justify-center bg-cobaltBlue h-full min-h-[435px] w-20">
        <h2 className="text-2xl font-bold uppercase text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 vertical-text">
          Top five artists
        </h2>
      </div>
      <div className="flex-1 overflow-auto pt-8 bg-white">
        <Container>
          <MotionSlider>
            {sortedArtistsUsers.map((user, i) => (
              <CardElement key={i} {...user} />
            ))}
          </MotionSlider>
        </Container>
      </div>
      </div>
    </>
  )
}
