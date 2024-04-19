import { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Context } from "./Context";

const ItemWrapper = styled.div`
  flex: 0 0 auto;

  &:not(:last-child) {
    padding-right: ${(props) => props.gap}px;
  }
`;

const Item = ({ children, gap, padding }) => {
  const { dispatch } = useContext(Context);
  const itemRef = useRef(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        setX(rect.x);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    x && dispatch({ type: "ADD_ITEM", item: x - padding });
  }, [x]);

  return (
    <ItemWrapper ref={itemRef} gap={gap}>
      {children}
    </ItemWrapper>
  );
};

export default Item;

