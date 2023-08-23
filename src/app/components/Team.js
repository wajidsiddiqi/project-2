import Image from "next/image";

import {
  PageWrapperDark,
  H1TitleLight,
  MaxWidth,
  H3Title,
  ParaSm,
  TeamContent,
  Icons,
  ImageStyle,
  Box,
} from "@/app/styles/styles.js";

export default function Team() {
  return (
    <PageWrapperDark>
      <MaxWidth>
        <H1TitleLight>Our Team</H1TitleLight>

        <TeamContent>
          <Box>
            <Image
              src="/assets/nfts/7.png"
              alt="Team Member"
              style={ImageStyle}
              width={0}
              height={0}
              layout="responsive"
            />
            <H3Title>Peter Joe</H3Title>
            <Para>Founder</Para>
            <Icons>
              <a href="#">
                <i>
                  <Image
                    src="/assets/icons/twitter-x.svg"
                    width="35"
                    height="35"
                    alt="Twitter"
                  />
                </i>
              </a>
            </Icons>
          </Box>

          <Box>
            <Image
              src="/assets/nfts/16.png"
              alt="Team Member"
              style={ImageStyle}
              width={0}
              height={0}
              unoptimized
            />
            <H3Title>Wajid</H3Title>
            <Para>Developer</Para>
            <div>
              <a href="https://twitter.com/abdulwajidsid" target="_blank">
                <Icons>
                  <Image
                    src="/assets/icons/twitter-x.svg"
                    width="35"
                    height="35"
                    alt="Twitter"
                  />
                </Icons>
              </a>
            </div>
          </Box>

          <Box>
            <Image
              src="/assets/nfts/2.png"
              alt="Team Member"
              style={ImageStyle}
              width={0}
              height={0}
              unoptimized
            />
            <H3Title>Tom Luka</H3Title>
            <Para>Artist</Para>
            <Icons>
              <a href="#">
                <i>
                  <Image
                    src="/assets/icons/twitter-x.svg"
                    width="35"
                    height="35"
                    alt="Twitter"
                  />
                </i>
              </a>
            </Icons>
          </Box>
        </TeamContent>
      </MaxWidth>
    </PageWrapperDark>
  );
}
