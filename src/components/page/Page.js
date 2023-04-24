import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

export default function Page({ isLoading, children }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <>
      <Header />
      {isLoading ? <Loader /> : <Container>{children}</Container>}
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 70px 5vw 110px;
  background: #f2f2f2;
`;
