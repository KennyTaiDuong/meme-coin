import styled from "styled-components";


import CatImage from "../assets/pfp/cat2.jpeg"

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const ImgContainer = styled.div`
  
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
`

export const MemeSection = () => {
  return (
    <CarouselContainer>
      <ImgContainer>
        <StyledImg src={CatImage} alt="Meme 1" />
      </ImgContainer>
      <ImgContainer>
        <StyledImg src={CatImage} alt="Meme 2" />
      </ImgContainer>
      <ImgContainer>
        <StyledImg src={CatImage} alt="Meme 3" />
      </ImgContainer>
      <ImgContainer>
        <StyledImg src={CatImage} alt="Meme 4" />
      </ImgContainer>
    </CarouselContainer>
  )
}