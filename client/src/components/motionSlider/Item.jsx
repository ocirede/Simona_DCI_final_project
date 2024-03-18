import { useContext, useEffect } from "react";
import styled from "styled-components";
import useDimensios from "react-use-dimensions";

import { Context } from "./Context";

const ItemWrapper = styled.div`
  flex: 0 0 auto;

  &:not(:last-child) {
    padding-right: ${props => props.gap}px;
  }
`;

const Item = ({ children, gap, padding }) => {
  const { dispatch } = useContext(Context);
  const [itemRef, { x }] = useDimensios();

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
