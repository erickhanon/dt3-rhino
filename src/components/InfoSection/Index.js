import React from "react";
import { Button } from "../ButtonElements2";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Topline,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Topline> {topLine} </Topline>
              <Heading lightText={lightText}> {headline} </Heading>
              <Subtitle darkText={darkText}> {description} </Subtitle>
              <BtnWrap>
                <Button to={{
                pathname:
                  "https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/",
              }}
              target="_blank">{buttonLabel}</Button>
              </BtnWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
