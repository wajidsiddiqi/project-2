import Image from "next/image";

import {
  PageWrapperLight,
  H1TitleDark,
  MaxWidth,
  GalleryContainer,
  ImageWrapper,
} from "@/app/styles/styles.js";

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <Image
            src={image}
            alt={`Image ${index}`}
            width={200}
            height={200}
            layout="responsive"
          />
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
    <PageWrapperLight>
      <MaxWidth>
        <H1TitleDark>Art</H1TitleDark>
        <Gallery images={generateImageUrls()} />
      </MaxWidth>
    </PageWrapperLight>
  );
}
