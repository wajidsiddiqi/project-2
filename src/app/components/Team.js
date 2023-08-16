import styled from "styled-components";
import Image from "next/image";

const PageWrapper = styled.div`
  background-color: #a474c6;
  position: relative;
  overflow: hidden;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem 6.5rem 2rem;
`;

const TeamSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 895px) {
    height: auto;
  }
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
  width: 60%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const Box = styled.div`
  transition: all 0.38s ease;
  background-color: #eef3f1;
  padding: 2rem;
  box-shadow: black 0px 3px;
  border-radius: 5rem;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Icons = styled.i`
  display: inline-block;
  margin: 0 1rem;
  transition: all 0.38s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const ImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5rem",
  marginBottom: "1rem",
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
  font-size: 1rem;
  margin: 1rem;
  line-height: 1;
  text-shadow: black 0px 1px;
`;

export default function Team() {
  return (
    <PageWrapper>
      <H1Title>Our Team</H1Title>
      <TeamSection>
        <TeamContent>
          <Box>
            <Image
              src="/assets/nfts/1.png"
              alt="Team Member"
              style={ImageStyle}
              width={0}
              height={0}
            />
            <H3Title>Peter Joe</H3Title>
            <Para>Founder</Para>
            <Icons>
              <a href="#">
                <i>
                  <Image
                    src="/assets/icons/twitter-x.svg"
                    width="25"
                    height="25"
                    alt="Twitter"
                  />
                </i>
              </a>
            </Icons>
          </Box>

          <Box>
            <Image
              src="/assets/nfts/2.png"
              alt="Team Member"
              style={ImageStyle}
              width={0}
              height={0}
            />
            <H3Title>Wajid</H3Title>
            <Para>Developer</Para>
            <div>
              <a href="https://twitter.com/abdulwajidsid" target="_blank">
                <Icons>
                  <Image
                    src="/assets/icons/twitter-x.svg"
                    width="25"
                    height="25"
                    alt="Twitter"
                  />
                </Icons>
              </a>
            </div>
          </Box>

          <Box>
            <Image
              src="/assets/nfts/3.png"
              alt="Team Member"
              style={ImageStyle}
              width={0}
              height={0}
            />
            <H3Title>Tom Luka</H3Title>
            <Para>Artist</Para>
            <Icons>
              <a href="#">
                <i>
                  <Image
                    src="/assets/icons/twitter-x.svg"
                    width="25"
                    height="25"
                    alt="Twitter"
                  />
                </i>
              </a>
            </Icons>
          </Box>
        </TeamContent>
      </TeamSection>
    </PageWrapper>
  );
}
