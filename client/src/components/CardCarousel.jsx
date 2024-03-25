import { useContext } from "react";
import { ArtistsContext } from "../context/artistsContext";
import { EntrepreneurContext } from "../context/entrepreneurContext";
import styled from "styled-components";
import MotionSlider from "./motionSlider";
import CardElement from "./cards/CardElement";

export default function CardCarousel({ role }) {
  let data = [];
  const { artists } = useContext(ArtistsContext);
  const { entrepreneurs } = useContext(EntrepreneurContext);

  // Determine which data to use based on the role prop
  if (role === "artist") {
    data = artists;
  } else if (role === "entrepreneur") {
    data = entrepreneurs;
  }

  const Container = styled.div`
    max-width: 700px; 
    margin: 0 auto; 
    @media (max-width: 640px) {
        max-width: 90%; 
    }
  `;

  return (
    <>
      <Container>
        <div className="p-4">
          <MotionSlider>
            {data.map((user, i) => (
              <CardElement key={i} {...user} />
            ))}
          </MotionSlider>
        </div>
      </Container>
    </>
  );
}







