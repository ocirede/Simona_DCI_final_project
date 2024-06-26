import { useContext } from "react";
import styled from "styled-components";
import MotionSlider from "./motionSlider";
import CardElementIntro from "./cards/CardElementIntro";
import { UserContext } from "../context/userContext";
import { motion } from "framer-motion"; 

const Container = styled.div`
  max-width: 900px; 
  margin: 0 auto; 
  @media (max-width: 640px) {
    max-width: 90%; 
  }
`;

export default function CardCarousel({ role }) {
  const { users } = useContext(UserContext);
  const sortedUsers = users.filter((user) => user.role === role);

  return (
    <Container>
      <div className="p-4">
        <MotionSlider>
          {sortedUsers.map((user, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <CardElementIntro {...user} />
            </motion.div>
          ))}
        </MotionSlider>
      </div>
    </Container>
  );
}







