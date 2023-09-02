"use client";
import Image from "next/image";
import { Center, FooterPara, StyledFooter } from "@/app/styles/styles.js";

export default function Footer() {
  return (
    <StyledFooter>
      <Center style={{ flexDirection: "column" }}>
        <FooterPara>Developed with love by Wajid © 2023</FooterPara>
        <a href="https://twitter.com/abdulwajidsid" target="_blank">
          <Image
            src="/assets/icons/twitter-x.svg"
            width="35"
            height="35"
            alt="Twitter"
            style={{ marginBottom: "1rem" }}
          />
        </a>
      </Center>
    </StyledFooter>
  );
}
