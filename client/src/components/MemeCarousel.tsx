import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CatImage from "../assets/pfp/cat2.jpeg"

import MemeOne from "../assets/memes/meme1.jpg"
import MemeTwo from "../assets/memes/meme17.png"
import MemeThree from "../assets/memes/meme18.png"
import MemeFour from "../assets/memes/meme4.png"
import MemeFive from "../assets/memes/meme5.png"
import MemeSix from "../assets/memes/meme6.png"
import MemeSeven from "../assets/memes/meme7.png"
import MemeEight from "../assets/memes/meme8.png"
import MemeNine from "../assets/memes/meme9.png"
import MemeTen from "../assets/memes/meme10.png"
import MemeEleven from "../assets/memes/meme11.png"
import MemeTwelve from "../assets/memes/meme12.png"
import MemeThirteen from "../assets/memes/meme13.png"
import MemeFourteen from "../assets/memes/meme14.png"
import MemeFifteen from "../assets/memes/meme15.png"
import MemeSixteen from "../assets/memes/meme16.png"
import CatPaw from "../assets/pfp/catpaw.png"

const MemeContainer = styled.div`
  padding: 2rem;

  @media screen and (max-width: 575px) {
    padding: 1rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 575px) {
    padding: .5rem;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 925 },
    items: 5,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 925, min: 575 },
    items: 3,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

export const MemeCarousel: React.FC = () => {

  const Cat = `${CatPaw}`

  return (
    <MemeContainer>
      <Carousel 
        responsive={responsive}
        arrows
        autoPlay={true}
        autoPlaySpeed={1500}
        partialVisible={true}
        pauseOnHover
        infinite
      >
        <ImageContainer >
          <StyledImg src={CatImage} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeOne} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeTwo} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeThree} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeFour} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeFive} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeSix} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeSeven} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeEight} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeNine} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeTen} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeEleven} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeTwelve} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeThirteen} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeFourteen} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeFifteen} alt={`Item`} />
        </ImageContainer>
        <ImageContainer >
          <StyledImg src={MemeSixteen} alt={`Item`} />
        </ImageContainer>
      </Carousel>
    </MemeContainer>
  );
};