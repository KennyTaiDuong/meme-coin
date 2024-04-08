import styled from "styled-components"

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(29, 29, 29);
  padding: 2rem;
`

const FooterText = styled.p`
  color: rgb(61, 61, 61);
  text-align: center;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
      DISCLOSURE: BY PURCHASING $CLAWFACE COIN, YOU AGREE THAT YOU
      ARE NOT PURCHASING A SECURITY OR INVESTMENT ​CONTRACT AND YOU 
      AGREE TO HOLD THE TEAM HARMLESS AND NOT LIABLE FOR ANY LOSSES
      OR TAXES YOU MAY ​INCUR. ALTHOUGH CLAWFACE IS A 
      COMMUNITY-DRIVEN DEFI ECOSYSTEM AND NOT A REGISTERED DIGITAL
      ​CURRENCY, ALWAYS MAKE SURE THAT YOU ARE IN COMPLIANCE WITH 
      LOCAL LAWS AND REGULATIONS BEFORE YOU ​MAKE ANY PURCHASE.
      </FooterText>
    </FooterContainer>
  )
}