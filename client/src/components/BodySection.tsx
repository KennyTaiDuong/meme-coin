import styled from "styled-components";
import { MemeSection } from "./MemeSection";

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`

const ImageContainer = styled.div`

`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.p`
  font-family: "Luckiest Guy", cursive;
  font-size: 3.5rem;
`

const Description = styled.p`
  max-width: 80ch;
`

const Image = styled.img`
  width: 25rem;
  border-radius: 1rem;
`

interface BodySectionProps {
  img: string;
  title: string;
  desc: string;
  bg: string;
  id: number;
}

export const BodySection = ({ img, title, desc, bg, id }: BodySectionProps) => {
  
  return (id !== 3 ? (
      <Container style={{ backgroundColor: `${bg}`, flexDirection: `${id % 2 === 0 ? "row" : "row-reverse"}`}}>
        <TextContainer>
          <Title>{title}</Title>
          <Description>
            {desc}
          </Description>
        </TextContainer>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
      </Container>
    ) : (
      <Container style={{ backgroundColor: `${bg}`, flexDirection: `${id % 2 === 0 ? "row" : "row-reverse"}`}}>
        <MemeSection />
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
      </Container>
    )
  )
}