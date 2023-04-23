import styled from "styled-components";

import logo from "../../assets/logo.svg";
import { StyledLink } from "../../styles/Link.styled";
import AuthForm from "./AuthForm";

export default function AuthPage({
  fields,
  btnText,
  link,
  linkText,
  isLoading,
  form,
  handleForm,
  handleSubmit
}) {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>TrackIt</h1>
      </Logo>
      <AuthForm
        fields={fields}
        btnText={btnText}
        isLoading={isLoading}
        form={form}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
      />
      <StyledLink to={link}>{linkText}</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  width: 90vw;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 33px;
  h1 {
    color: #126ba5;
    font: 69px/86px "Playball", cursive;
  }
`;
