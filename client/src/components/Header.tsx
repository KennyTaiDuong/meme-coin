import styled, {keyframes} from "styled-components";
import { NavLink } from "react-router-dom";

import CatLogo from "../assets/pfp/mainlogo.jpeg"
import { Socials } from "./Socials";

const morphAnimation = keyframes`
  0% {
    border-radius: 40% 60% 70% 40% / 50% 60% 30% 60%;
  }

  50% {
    border-radius: 60% 60% 30% 80% / 80% 60% 70% 60%;
  }

  100% {
    border-radius: 40% 60% 70% 40% / 50% 60% 30% 60%;
  }
`

const colorFade = keyframes`
  0% {
    background-position: left bottom;
  }
  100% {
    background-position: right bottom;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
`

const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 575px) {
    display: block;
    padding-top: 1rem;
  }
`

const BigScreenContainer = styled.div`
  display: block;
  
  @media screen and (max-width: 575px) {
    display: none;
  }
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 925px)  {
    padding: 1rem;
  }

  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

const LogoContainer = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: rgb(0,0,0);
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 575px){
    display: none;
  }
`

const BannerContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  animation: ${morphAnimation} 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  border: 3px solid black; 
  transition: all 1s ease-in-out;
  height: 8rem; 
  width: 8rem;

  @media screen and (max-width: 925px) {
    width: 5rem;
    height: 5rem;
  }
`

const Title = styled.p`
  font-size: 5rem;
  font-family: "Luckiest Guy", cursive;
  font-weight: 700;
  background-image: linear-gradient(to right, #00FFA3, #03E1FF, #DC1FFF);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${colorFade} 5s infinite linear;

  @media screen and (max-width: 925px) {
    font-size: 3rem;
  }
`;

const ContractToken = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
`

export const Header = () => {
  return (
    <Container>
      <MobileContainer>
        <ContractToken>
          Token: 7RSDdX9X16NdKaamTwtxJCQYmF3ShTZn7egYUesteM6K
        </ContractToken>
      </MobileContainer>
      <HeaderContainer>
        <LogoContainer to={""}>
          <Logo src={CatLogo} />
        </LogoContainer>
        <BannerContainer>
          <Title>$CLAWFACE</Title>
          <BigScreenContainer>
            <ContractToken>
              Token: 7RSDdX9X16NdKaamTwtxJCQYmF3ShTZn7egYUesteM6K
            </ContractToken>
          </BigScreenContainer>
        </BannerContainer>
        <Socials />
      </HeaderContainer>
    </Container>

  )
}