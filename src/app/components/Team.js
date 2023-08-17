import styled from "styled-components";
import Image from "next/image";

const PageWrapper = styled.div`
  background-color: #a474c6;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem 2rem 6.5rem 2rem;
`;

const H1Title = styled.h1`
  color: #eef3f1;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  padding: 6.5rem;
  text-shadow: black 0px 3px;
`;

const TeamContent = styled.div`
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Box = styled.div`
  transition: all 0.38s ease;
  background-color: #eef3f1;
  padding: 2rem;
  box-shadow: black 0px 3px;
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Icons = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.38s ease;
  margin: 1rem;

  &:hover {
    transform: scale(1.2);
  }
`;

const ImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5rem",
  marginBottom: "2rem",
};

const H3Title = styled.h2`
  color: #a474c6;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  margin: 1rem;
  text-shadow: black 0px 3px;
`;

const Para = styled.p`
  color: #a474c6;
  font-size: 1.4rem;
  margin: 1rem;
  line-height: 1;
  text-shadow: black 0px 1px;
`;

export default function Team() {
  return (
    <PageWrapper>
      <H1Title>Our Team</H1Title>

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
    </PageWrapper>
  );
}
