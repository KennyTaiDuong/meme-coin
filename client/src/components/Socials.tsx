import styled from "styled-components";

import TelegramLogo from "../assets/logo/telegram.png"
import XLogo from "../assets/logo/x.png"
import { NavLink } from "react-router-dom";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const StyledNavLink = styled(NavLink)`

`

const Logo = styled.img`
  width: 4rem;
`

export const Socials = () => {
  return (
    <Container>
      <StyledNavLink to={"https://www.x.com"} target="_blank">
        <Logo src={XLogo} />
      </StyledNavLink>
      <StyledNavLink to={"https://www.telegram.org"} target="_blank">
        <Logo src={TelegramLogo} />
      </StyledNavLink>
    </Container>
  )
}