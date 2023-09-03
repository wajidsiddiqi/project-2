import Image from "next/image";

import {
  PageWrapperDark,
  H1TitleLight,
  H3Title,
  ParaSm,
  TeamContent,
  Icons,
  ImageStyle,
  Box,
  Center,
} from "@/app/styles/styles.js";

export default function Team() {
  return (
    <PageWrapperDark id="team">
      <Center>
        <H1TitleLight>Our Team</H1TitleLight>
      </Center>

      <Center>
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
            <ParaSm>Founder</ParaSm>
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
            <ParaSm>Developer</ParaSm>
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
            <ParaSm>Artist</ParaSm>
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
      </Center>
    </PageWrapperDark>
  );
}
