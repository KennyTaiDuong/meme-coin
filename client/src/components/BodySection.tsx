import styled from "styled-components";

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
  align-items: center;
  gap: 1rem;
`

const Title = styled.p`
  font-family: "Luckiest Guy", cursive;
  font-size: 3.5rem;
`

const Description = styled.p`
  max-width: 80ch;
  text-align: center;
  line-height: 1.5rem;
  background-color: white;
  color: #2c2c2c;
  border-radius: 1rem;
  padding: 1rem;
`

const Image = styled.img`
  width: 25rem;
  border-radius: 1rem;
  border: 3px solid black;
`

interface BodySectionProps {
  img: string;
  title: string;
  desc: string;
  bg: string;
  id: number;
}

export const BodySection = ({ img, title, desc, bg, id }: BodySectionProps) => {
  
  return (
    <Container style={{ backgroundColor: `${bg}`, flexDirection: `${id % 2 === 0 ? "row" : "row-reverse"}`}}>
      <TextContainer>
        <Title>{title}</Title>
        <Description >
          {desc}
        </Description>
      </TextContainer>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
    </Container>
  ) 
}