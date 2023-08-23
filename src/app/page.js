"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./styles/custom-font.css";
import Roadmap from "./components/Roadmap";
import Art from "./components/Art";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import {
  MainPageWrapper,
  MainH1Title,
  ParaBig,
  StyledButton,
  TextWrapper,
  ImageContainer,
  Wrapper,
  bgImageStyle,
} from "@/app/styles/styles.js";

export default function Home() {
  const parallax = (e) => {
    document.querySelectorAll(".object").forEach((move) => {
      const movingValue = move.getAttribute("data-value");
      const x = (e.clientX * movingValue) / 250;
      const y = (e.clientY * movingValue) / 250;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <Wrapper>
      <MainPageWrapper>
        <TextWrapper>
          <MainH1Title>Beanz Pixel</MainH1Title>
          <ParaBig>
            Beanz Pixel is a collection of
            <br />
            10,000 unique pixel art
          </ParaBig>
          <StyledButton>Mint Now</StyledButton>
        </TextWrapper>
        <ImageContainer>
          <Image
            style={{
              ...bgImageStyle,
              top: "260px",
              left: "220px",
            }}
            src="/assets/bg/bg1.png"
            height="192"
            width="192"
            className="object"
            data-value="-2"
            alt=""
          />
          <Image
            style={{
              ...bgImageStyle,
              top: "-260px",
              left: "5px",
            }}
            src="/assets/bg/bg2.png"
            height="192"
            width="192"
            className="object"
            data-value="6"
            alt=""
          />
          <Image
            style={{
              ...bgImageStyle,
              top: "-250px",
              right: "-700px",
            }}
            src="/assets/bg/bg3.png"
            height="208"
            width="208"
            className="object"
            data-value="-5"
            alt=""
          />
          <Image
            style={{
              ...bgImageStyle,
              top: "260px",
              right: "-45px",
            }}
            src="/assets/bg/bg4.png"
            height="176"
            width="176"
            className="object"
            data-value="-6"
            alt=""
          />
          <Image
            style={{
              ...bgImageStyle,
              bottom: "-225px",
              left: "325px",
            }}
            src="/assets/bg/bg5.png"
            height="208"
            width="208"
            className="object"
            data-value="8"
            alt=""
          />
          <Image
            style={{
              ...bgImageStyle,
              bottom: "0",
              left: "300px",
            }}
            src="/assets/bg/bg6.png"
            height="160"
            width="160"
            className="object"
            data-value="-4"
            alt=""
          />
          <Image
            style={{
              ...bgImageStyle,
              bottom: "0",
              right: "1040px",
            }}
            src="/assets/bg/bg7.png"
            height="192"
            width="192"
            className="object"
            data-value="5"
            alt=""
          />
          <Image
            style={{
              ...bgImageStyle,
              bottom: "240px",
              right: "630px",
            }}
            src="/assets/bg/bg8.png"
            height="160"
            width="160"
            className="object"
            data-value="-9"
            alt=""
          />
        </ImageContainer>
      </MainPageWrapper>
      <Roadmap />
      <Art />
      <Team />
      <Footer />
      <ScrollToTopButton />
    </Wrapper>
  );
}
