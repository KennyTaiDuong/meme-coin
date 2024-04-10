import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  @media screen and (max-width: 925px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media screen and (max-width: 925px) {
    font-size: 2rem;
  }
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
  box-shadow: 0px 0px 20px white;

  @media screen and (max-width: 925px) {
    max-width: 80ch;
    width: 100%;
  }
`

interface BodySectionProps {
  img: string;
  title: string;
  desc: string;
  bg: string;
  id: number;
}

export const BodySection = ({ img, title, desc, id }: BodySectionProps) => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const FlexDirection = windowWidth <= 925 
    ? "column" 
    : id % 2 === 0 ? "row"
    : "row-reverse"

  return (
    <Container style={{ flexDirection: `${FlexDirection}`}}>
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