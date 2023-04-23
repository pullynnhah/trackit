import { Watch } from "react-loader-spinner";
import styled from "styled-components";

export default function Loader() {
  return (
    <Container>
      <Watch height="150" width="150" radius="48" color="#126BA5" ariaLabel="watch-loading" />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
