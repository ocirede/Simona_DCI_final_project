import MotionSlider from "./MotionSlider";
import styled from "styled-components";
import CardElement from "./cards/CardElement";

const Container = styled.div`
  max-width: 900px; 
  margin: 0 auto; 
  @media (max-width: 640px) {
    max-width: 90%; 
  }
`;

export default function CardCarousel() {
  return (
    <Container>
      <div className="relative overflow-hidden">
        <MotionSlider>
          {[...Array(10)].map((item, i) => (
            <CardElement
              key={i}
              style={{ opacity: Math.random() }}
            />
          ))}
        </MotionSlider>
      </div>
    </Container>
  );
}





