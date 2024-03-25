import MotionSlider from "./motionSlider";
import styled from "styled-components";
import CardElement from "./cards/CardElement";

const Container = styled.div`
  max-width: 700px; 
  margin: 0 auto; 
  @media (max-width: 640px) {
    max-width: 90%; 
  }
`;

export default function CardCarousel({ data }) {

  return (
    <Container>
      <div className="relative overflow-hidden">
        <MotionSlider>
          {data.map((user, i) => (
            <CardElement
              key={i}
              user={user}
            />
          ))}
        </MotionSlider>
      </div>
    </Container>
  );
}





