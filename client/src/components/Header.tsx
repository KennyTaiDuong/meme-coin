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

const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  display: flex;
`

const LogoContainer = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: rgb(0,0,0);
  align-items: center;
  justify-content: space-between;
`

const BannerContainer = styled.div`
  width: 100%;
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
`;

const ContractToken = styled.p`

`

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to={""}>
        <Logo src={CatLogo} />
      </LogoContainer>
        <BannerContainer>
          <Title>$CLAWFACE</Title>
          <ContractToken>
            Contract: 0x000000000000000000
          </ContractToken>
        </BannerContainer>
        <Socials />
    </HeaderContainer>
  )
}