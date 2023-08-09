"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import bg1 from "./Assets/bg/bg1.png";
import bg2 from "./Assets/bg/bg2.png";
import bg3 from "./Assets/bg/bg3.png";
import bg4 from "./Assets/bg/bg4.png";
import bg5 from "./Assets/bg/bg5.png";
import bg6 from "./Assets/bg/bg6.png";
import bg7 from "./Assets/bg/bg7.png";
import bg8 from "./Assets/bg/bg8.png";

import "./styles/custom-font.css";

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #eef3f1;
  position: absolute;
  top: 0;
`;

const TextWrapper = styled.div`
  position: absolute;
  text-align: center;
`;

const bgImageStyle = {
  position: "relative",
  width: "auto",
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
          height: "12rem",
        }}
        src={bg1}
        className="object"
        data-value="-2"
        alt=""
      />
      <Image
        style={{
          ...bgImageStyle,
          top: "-260px",
          left: "5px",
          height: "12rem",
        }}
        src={bg2}
        className="object"
        data-value="6"
        alt=""
      />
      <Image
        style={{
          ...bgImageStyle,
          top: "-250px",
          right: "-700px",
          height: "13rem",
        }}
        src={bg3}
        className="object"
        data-value="-5"
        alt=""
      />
      <Image
        style={{
          ...bgImageStyle,
          top: "260px",
          right: "-45px",
          height: "11rem",
        }}
        src={bg4}
        className="object"
        data-value="-6"
        alt=""
      />
      <Image
        style={{
          ...bgImageStyle,
          bottom: "-225px",
          left: "325px",
          height: "13rem",
        }}
        src={bg5}
        className="object"
        data-value="8"
        alt=""
      />
      <Image
        style={{
          ...bgImageStyle,
          bottom: "0",
          left: "300px",
          height: "10rem",
        }}
        src={bg6}
        className="object"
        data-value="-4"
        alt=""
      />
      <Image
        style={{
          ...bgImageStyle,
          bottom: "0",
          right: "1040px",
          height: "12rem",
        }}
        src={bg7}
        className="object"
        data-value="5"
        alt=""
      />
      <Image
        style={{
          ...bgImageStyle,
          bottom: "240px",
          right: "630px",
          height: "10rem",
        }}
        src={bg8}
        className="object"
        data-value="-9"
        alt=""
      />
    </PageWrapper>
  );
}
