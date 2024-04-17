import { useContext, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import useDimensions from "react-use-dimensions";

import { Context } from "./Context";

const Container = styled.div`
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px;
`;

const StyledTrack = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  min-width: min-content;
`;

const Track = ({ children }) => {
  const [trackRef, trackDimensions] = useDimensions();
  const [containerRef, containerDimensions] = useDimensions();
  const controls = useAnimation();
  const { state } = useContext(Context);

  const [activeSlide] = useState(0);

  const isBeginning = activeSlide === 0;
  const isEnd = activeSlide === state.items.length - 1;

  const maxRightDrag = 0;

  const dragConstraints = {
    left: isEnd ? 0 : -(trackDimensions.width - containerDimensions.width),
    right: isBeginning ? maxRightDrag : (containerDimensions.width - trackDimensions.width)
  };

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <StyledTrack
          ref={trackRef}
          animate={controls}
          drag="x"
          dragMomentum={false}
          dragConstraints={dragConstraints}
          onDrag={(event, info) => {
            if ((info.point.x < 0 && isEnd) || (info.point.x > 0 && isBeginning)) {
              controls.stop();
            }
          }}
        >
          {children}
        </StyledTrack>
      </Wrapper>
    </Container>
  );
};

export default Track;








