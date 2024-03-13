import { ContextProvider } from "./Context";
import Track from "./Track";
import Item from "./Item";

const MotionSlider = ({ children, padding, gap, velocity, transition }) => {
  return (
    <ContextProvider>
      <Track padding={padding} velocity={velocity} transition={transition}>
        {children.map((child, i) => (
          <Item key={i} gap={gap} padding={padding}>
            {child}
          </Item>
        ))}
      </Track>
    </ContextProvider>
  );
};

MotionSlider.defaultProps = {
  padding: 40,
  gap: 20,
  velocity: 0.4,
  transition: { type: "spring", damping: 500 }
};

export default MotionSlider;
