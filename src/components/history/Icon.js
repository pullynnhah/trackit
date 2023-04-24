import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import { IconContext } from "react-icons";

export default function Icon({ isAllDone }) {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "30px" }}>
      <Wrapper isAllDone={isAllDone}>{isAllDone ? <BsCheck /> : <IoClose />}</Wrapper>
    </IconContext.Provider>
  );
}

const Wrapper = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => (props.isAllDone ? "#8cc654" : "#ea5766")};
  border: 1px solid ${props => (props.isAllDone ? "#8cc654" : "#ea5766")};
  border-radius: 5px;
`;
