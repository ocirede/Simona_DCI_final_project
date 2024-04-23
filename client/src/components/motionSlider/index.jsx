import { ContextProvider } from "./Context";
import Track from "./Track";
import Item from "./Item";

const MotionSlider = ({ children, padding, gap, velocity, transition }) => {
  return (
    <ContextProvider>
      <Track padding={padding} velocity={velocity} transition={transition}>
        {children?.length > 0 ? (
          children.map((child, i) => (
            <Item key={i} gap={gap} padding={padding}>
              {child}
            </Item>
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-center">No results found</p>
          </div>
        )}
      </Track>
    </ContextProvider>
  );
};

MotionSlider.defaultProps = {
  padding: 40,
  gap: 20,
  velocity: 0.4,
  transition: { type: "spring", damping: 500 },
};

export default MotionSlider;
