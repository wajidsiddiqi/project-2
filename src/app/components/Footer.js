"use client";
import Image from "next/image";
import { Center, FooterPara, StyledFooter } from "@/app/styles/styles.js";

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <FooterPara>Developed with love by Wajid © 2023 |</FooterPara>
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
