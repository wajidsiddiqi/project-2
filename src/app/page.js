"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import "./styles/custom-font.css";
import Roadmap from "./components/Roadmap";
import Art from "./components/Art";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #eef3f1;
  position: relative;
  top: 0;
`;

const TextWrapper = styled.div`
  position: absolute;
  text-align: center;
`;

const bgImageStyle = {
  position: "relative",
  objectFit: "contain",
};

const H1Title = styled.h1`
  color: #a474c6;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  margin: 1rem;
  text-shadow: black 0px 3px;
`;

const Para = styled.p`
  color: #a474c6;
  font-size: 2rem;
  margin: 1rem;
  line-height: 1;
  text-shadow: black 0px 1px;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1.4rem;
  color: #eef3f1;
  cursor: pointer;
  border-radius: 5rem;
  font-family: inherit;
  background-color: #a474c6;
  border: none;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: black 0px 3px;
  margin: 1rem;

  &:hover {
    background-color: #eef3f1;
    color: #a474c6;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

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
      <PageWrapper>
        <TextWrapper>
          <H1Title>Beanz Pixel</H1Title>
          <Para>
            Beanz Pixel is a collection of
            <br />
            10,000 unique pixel art
          </Para>
          <StyledButton>Mint Now</StyledButton>
        </TextWrapper>
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
      </PageWrapper>
      <Roadmap />
      <Art />
      <Team />
      <Footer />
      <ScrollToTopButton />
    </Wrapper>
  );
}
