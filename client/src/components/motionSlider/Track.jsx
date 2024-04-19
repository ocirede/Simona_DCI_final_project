import { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

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
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const { state } = useContext(Context);

  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [trackDimensions, setTrackDimensions] = useState({ width: 0, height: 0 });

  const [activeSlide] = useState(0);

  const isBeginning = activeSlide === 0;
  const isEnd = activeSlide === state.items.length - 1;

  const maxRightDrag = 0;

  const dragConstraints = {
    left: isEnd ? 0 : containerDimensions.width - trackDimensions.width,
    right: isBeginning ? maxRightDrag : 0
  };

  useEffect(() => {
    if (trackRef.current) {
      setTrackDimensions(trackRef.current.getBoundingClientRect());
    }
  }, [trackRef, state.items.length]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerDimensions(containerRef.current.getBoundingClientRect());
    }
  }, [containerRef, state.items.length]);

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <StyledTrack
          ref={trackRef}
          animate={controls}
          drag="x"
          dragMomentum={false}
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragEnd={(event, info) => {
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










