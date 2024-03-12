import { useContext } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import useDimensions from "react-use-dimensions";

import { Context } from "./Context";

const Container = styled.div`
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const StyledTrack = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  min-width: min-content;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Track = ({ children, padding, transition }) => {
  const [trackRef, trackDimensions] = useDimensions();
  const controls = useAnimation();

  const { state, dispatch } = useContext(Context);
  const negativeItems = state.items.map(
    item => item * -1 + trackDimensions.x || 0
  );

  function onDragEnd(event, info) {
    const offset = info.offset.x;

    // Adjust the drag constraints based on the track's dimensions
    const dragConstraints = {
      left: -trackDimensions.width + trackDimensions.x, // Leftmost position
      right: trackDimensions.x // Rightmost position
    };

    // Calculate the x position based on the drag constraints
    const xPosition = Math.min(
      Math.max(info.point.x - offset, dragConstraints.left),
      dragConstraints.right
    );

    // Find the closest card position
    const closestPosition = negativeItems.reduce((prev, curr) =>
      Math.abs(curr - xPosition) < Math.abs(prev - xPosition) ? curr : prev
    );

    const activeSlide = negativeItems.indexOf(closestPosition);
    dispatch({ type: "SET_ACTIVE_ITEM", activeItem: activeSlide });

    controls.start({
      x: Math.max(
        closestPosition,
        -trackDimensions.width + trackDimensions.x || 0
      ),
      transition
    });
  }

  return (
    <Container>
      <Wrapper>
        <StyledTrack
          ref={trackRef}
          padding={padding}
          animate={controls}
          drag="x"
          dragConstraints="parent"
          onDragEnd={onDragEnd}
        >
          {children}
        </StyledTrack>
      </Wrapper>
    </Container>
  );
};

export default Track;


