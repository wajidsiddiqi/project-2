"use client";
import styled from "styled-components";
import Image from "next/image";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFooter = styled.footer`
  background-color: #eef3f1;
  padding: 0.5rem 2.5rem;
`;

const Para = styled.p`
  color: #a474c6;
  font-size: 1.4rem;
  margin: 1rem 0rem 1rem 1rem;
  line-height: 1;
  text-shadow: black 0px 1px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <Para>Developed with love by Wajid © 2023 |</Para>
        <a href="https://twitter.com/abdulwajidsid" target="_blank">
          <Image
            src="/assets/icons/twitter-x.svg"
            width="35"
            height="35"
            alt="Twitter"
            style={{ marginLeft: "4px", marginTop: "4px" }}
          />
        </a>
      </Center>
    </StyledFooter>
  );
}
