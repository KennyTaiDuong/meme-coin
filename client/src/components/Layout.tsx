import styled from "styled-components";
import { Header } from "./Header";
import { BodySection } from "./BodySection";
import Data from "../../data.json"

import AboutImage from "../assets/pfp/cutout_wif.png"
import MissionImage from "../assets/pfp/dogwifnobrim.jpg"
import { MemeCarousel } from "./MemeCarousel";
import { Footer } from "./Footer";

const Container = styled.div`
  background-color: #aea49a;
`

const StyledMain = styled.main`

`

const MemeSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-family: "Luckiest Guy", cursive;
  font-size: 3.5rem;
  margin: 0 auto;
  padding: 2rem 0;
  color: white;

  @media screen and (max-width: 925px) {
    font-size: 2rem;
  }
`

export const Layout = () => {
  const {about, mission } = Data

  return (
    <Container>
      <Header />
      <StyledMain>
        <BodySection id={1} img={AboutImage} title={about.title} desc={about.desc} bg={about.bg} />
        <BodySection id={2} img={MissionImage} title={mission.title} desc={mission.desc} bg={mission.bg} />
        <MemeSection>
          <Title>DogWIFNoBrim</Title>
          <>
            <MemeCarousel />
          </>
        </MemeSection>
      </StyledMain>
      <Footer />
    </Container>
  )
}