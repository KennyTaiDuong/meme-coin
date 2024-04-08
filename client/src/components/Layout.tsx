import styled from "styled-components";
import { Header } from "./Header";
import { BodySection } from "./BodySection";
import Data from "../../data.json"

import AboutImage from "../assets/pfp/aboutimage.png"
import MissionImage from "../assets/pfp/missionimage.png"
import { MemeCarousel } from "./MemeCarousel";
import { Footer } from "./Footer";

const Container = styled.div`

`

const StyledMain = styled.main`
  margin-top: 12rem;

  @media screen and (max-width: 575px) {
    margin-top: 10rem;
  }

  @media screen and (min-width: 576px) and (max-width: 925px) {
    margin-top: 7rem;
  }
`

const MemeSection = styled.div`
  width: 100%;
  background-color: #DC1FFF;
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-family: "Luckiest Guy", cursive;
  font-size: 3.5rem;
  margin: 0 auto;
  padding: 2rem 0;

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
          <Title>CLAWFACE MEMES</Title>
          <>
            <MemeCarousel />
          </>
        </MemeSection>
      </StyledMain>
      <Footer />
    </Container>
  )
}