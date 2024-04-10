import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import MemeOne from "../assets/memes/meme_one.png"
import MemeTwo from "../assets/memes/meme_two.png"
import MemeThree from "../assets/memes/meme_three.png"
import MemeFour from "../assets/memes/meme_four.png"
import MemeFive from "../assets/memes/meme_five.png"
import MemeSix from "../assets/memes/meme_six.png"


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


  return (
    <MemeContainer>
      <Carousel 
        responsive={responsive}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={1500}
        partialVisible={true}
        pauseOnHover
        infinite
        containerClass="carousel-container"
      >
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
      </Carousel>
    </MemeContainer>
  );
};