import React from "react";
import FadeIn from "react-fade-in";
import Video from "../../videos/video.mp4";
import {
  BannerContainer,
  BannerBg,
  VideoBg,
  BannerContent,
  BannerH1,
  BannerP,
  BannerBtnWrapper,
} from "./BannerElements";
import { Button } from "../ButtonElements";
const Banner = () => {
  return (
    <BannerContainer>
      <BannerBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </BannerBg>
      <BannerContent>
        <FadeIn>
          <BannerH1>RHINO</BannerH1>
          <BannerP>ELITE SERIES</BannerP>
        </FadeIn>
        <BannerBtnWrapper>
          <Button to='Construção'
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          >Saiba Mais</Button>
        </BannerBtnWrapper>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
