import styled from "styled-components";
import { Header } from "./Header";
import { BodySection } from "./BodySection";
import Data from "../../data.json"

import AboutImage from "../assets/pfp/cat3.jpeg"
import MissionImage from "../assets/pfp/cat1.jpeg"
import MemeImage from "../assets/pfp/cat2.jpeg"

const Container = styled.div`

`

const StyledMain = styled.main`
  margin-top: 12rem;
`

export const Layout = () => {
  const {about, mission, meme} = Data

  return (
    <Container>
      <Header />
      <StyledMain>
        <BodySection id={1} img={AboutImage} title={about.title} desc={about.desc} bg={about.bg} />
        <BodySection id={2} img={MissionImage} title={mission.title} desc={mission.desc} bg={mission.bg} />
        <BodySection id={3} img={MemeImage} title={meme.title} desc={meme.desc} bg={meme.bg}/>
      </StyledMain>
    </Container>
  )
}