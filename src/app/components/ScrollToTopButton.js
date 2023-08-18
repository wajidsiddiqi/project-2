import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const ScrollToTopButtonWrapper = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #56326d;
  border: none;
  border-radius: 5rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: center;
  align-items: center;
  box-shadow: black 0px 3px;

  &:hover {
    background-color: #a474c6;
  }

  ${({ isVisible }) => isVisible && "display: flex;"}
`;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 130);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollToTopButtonWrapper isVisible={isVisible} onClick={scrollToTop}>
      <Image
        src="/assets/icons/arrow.svg"
        alt="Scroll to Top"
        width="35"
        height="35"
        style={{ transform: "rotate(180deg)" }}
      />
    </ScrollToTopButtonWrapper>
  );
}
