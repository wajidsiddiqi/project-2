const PageWrapper = styled.div`
  background-color: #eef3f1;
  position: relative;
  overflow: hidden;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem 2rem 6.5rem 2rem;
`;

const H1Title = styled.h1`
  color: #a474c6;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  padding: 6.5rem;
  text-shadow: black 0px 3px;
`;

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <Image src={image} alt={`Image ${index}`} width={200} height={200} />
        </ImageWrapper>
      ))}
    </GalleryContainer>
  );
};

export default function Art() {
  const generateImageUrls = () => {
    const imageUrls = [];
    for (let i = 1; i <= 18; i++) {
      imageUrls.push(`/assets/nfts/${i}.png`);
    }
    return imageUrls;
  };

  return (
    <PageWrapper>
      <H1Title>Art</H1Title>
      <Gallery images={generateImageUrls()} />
    </PageWrapper>
  );
}
