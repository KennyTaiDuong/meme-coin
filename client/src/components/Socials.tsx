import styled from "styled-components";
import { NavLink } from "react-router-dom";

import TelegramLogo from "../assets/logo/telegram.png"
import XLogo from "../assets/logo/x.png"
import DexLogo from "../assets/logo/dexscreener.png"

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
      <StyledNavLink to={"https://www.x.com/clawfacecoin"} target="_blank">
        <Logo src={XLogo} />
      </StyledNavLink>
      <StyledNavLink to={"https://t.me/+GcJqzVDLfTxkZjcx"} target="_blank">
        <Logo src={TelegramLogo} />
      </StyledNavLink>
      <StyledNavLink to={""} target="_blank">
        <Logo src={DexLogo} style={{ borderRadius: "50%"}}/>
      </StyledNavLink>
    </Container>
  )
}