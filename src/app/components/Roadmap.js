import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import Fade from "react-reveal/Fade";

import {
  PageWrapperDark,
  H1TitleLight,
  ParaMid,
  H2TitleDark,
  MaxWidth,
  Container,
  BoxContainer,
  TimelineBar,
  TimelineWrapper,
  Circle,
  CircleAndTimelineContainer,
  FirstTimelineBar,
  LeftBox,
  RightBox,
  Center,
} from "@/app/styles/styles.js";

const Timeline = ({ setObserver, callback }) => {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
    setObserver(circle4.current);
  }, []);

  return (
    <TimelineWrapper>
      <Container>
        {/* left side boxs */}
        <BoxContainer style={{ flexDirection: "column" }}>
          <BoxContainer style={{ top: "36px" }}>
            <LeftBox>
              <Fade bottom>
                <H2TitleDark>Phase 2</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </LeftBox>
          </BoxContainer>
          <BoxContainer style={{ top: "391px" }}>
            <LeftBox>
              <Fade bottom>
                <H2TitleDark>Phase 4</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </LeftBox>
          </BoxContainer>
        </BoxContainer>

        <CircleAndTimelineContainer>
          <FirstTimelineBar id="timeline1" ref={timeline1} />
          <Circle id="circle1" ref={circle1}>
            1
          </Circle>

          <TimelineBar id="timeline2" ref={timeline2} />
          <Circle id="circle2" ref={circle2}>
            2
          </Circle>

          <TimelineBar id="timeline3" ref={timeline3} />
          <Circle id="circle3" ref={circle3}>
            3
          </Circle>

          <TimelineBar id="timeline4" ref={timeline4} />
          <Circle id="circle4" ref={circle4}>
            4
          </Circle>

          <TimelineBar id="timeline5" ref={timeline5} />
        </CircleAndTimelineContainer>

        {/* Right side boxs */}
        <BoxContainer style={{ flexDirection: "column" }}>
          <BoxContainer style={{ top: "-314px" }}>
            <RightBox>
              <Fade bottom>
                <H2TitleDark>Phase 1</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </RightBox>
          </BoxContainer>
          <BoxContainer style={{ top: "41px" }}>
            <RightBox>
              <Fade bottom>
                <H2TitleDark>Phase 3</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </RightBox>
          </BoxContainer>
        </BoxContainer>
      </Container>
    </TimelineWrapper>
  );
};

const Timeline2 = ({ setObserver, callback }) => {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
    setObserver(circle4.current);
  }, []);

  return (
    <TimelineWrapper>
      <Container>
        <CircleAndTimelineContainer>
          <FirstTimelineBar id="timeline1" ref={timeline1} />
          <Circle id="circle1" ref={circle1}>
            1
          </Circle>

          <TimelineBar id="timeline2" ref={timeline2} />
          <Circle id="circle2" ref={circle2}>
            2
          </Circle>

          <TimelineBar id="timeline3" ref={timeline3} />
          <Circle id="circle3" ref={circle3}>
            3
          </Circle>

          <TimelineBar id="timeline4" ref={timeline4} />
          <Circle id="circle4" ref={circle4}>
            4
          </Circle>

          <TimelineBar id="timeline5" ref={timeline5} />
        </CircleAndTimelineContainer>

        <BoxContainer style={{ flexDirection: "column" }}>
          <BoxContainer style={{ top: "-45px" }}>
            <RightBox>
              <Fade bottom>
                <H2TitleDark>Phase 1</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </RightBox>
          </BoxContainer>
          <BoxContainer style={{ top: "22px" }}>
            <RightBox>
              <Fade bottom>
                <H2TitleDark>Phase 2</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </RightBox>
          </BoxContainer>
          <BoxContainer style={{ top: "90px" }}>
            <RightBox>
              <Fade bottom>
                <H2TitleDark>Phase 3</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </RightBox>
          </BoxContainer>
          <BoxContainer style={{ top: "160px" }}>
            <RightBox>
              <Fade bottom>
                <H2TitleDark>Phase 4</H2TitleDark>
                <ParaMid>
                  Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam
                  incidunt quo cumque laboriosam sit quos tenetur. Aut
                  voluptatem possimus eum explicabo debitis nam eius debitis. Et
                  suscipit laborum et nulla consequuntur ea dolore repellat.
                </ParaMid>
              </Fade>
            </RightBox>
          </BoxContainer>
        </BoxContainer>
      </Container>
    </TimelineWrapper>
  );
};

export default function Roadmap() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 775);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [message, setMessage] = useState("");

  const onCallback = () => {
    // console.log("awesome");
  };

  return (
    <PageWrapperDark id="roadmap">
      <MaxWidth>
        <Center>
          <H1TitleLight>Roadmap</H1TitleLight>
        </Center>

        {isMobile ? (
          <TimelineObserver
            initialColor="#a474c6"
            fillColor="#eef3f1"
            handleObserve={(setObserver) => (
              <Timeline2
                callback={onCallback}
                style={{ ...TimelineBar }}
                setObserver={setObserver}
              />
            )}
          />
        ) : (
          <TimelineObserver
            initialColor="#a474c6"
            fillColor="#eef3f1"
            handleObserve={(setObserver) => (
              <Timeline
                callback={onCallback}
                style={{ ...TimelineBar }}
                setObserver={setObserver}
              />
            )}
          />
        )}
      </MaxWidth>
    </PageWrapperDark>
  );
}
