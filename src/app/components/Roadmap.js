import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import TimelineObserver from "react-timeline-animation";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageWrapper = styled.div`
  background-color: #a474c6;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 2rem 6.5rem 2rem;
`;

const TimelineBar = styled.div`
  height: 300px;
  width: 6.5px;
  position: relative;
`;

const FirstTimelineBar = styled(TimelineBar)`
  height: 50px;
  position: relative;
  top: 0px;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #a474c6;
  border-radius: 50%;
  position: relative;
`;

const RightBox = styled.div`
  position: relative;
  left: 60%;
  background-color: #eef3f1;
  padding: 2rem;
  box-shadow: black 0px 3px;
  border-radius: 0rem 5rem 5rem 5rem;
  width: 40rem;
  height: 21.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LeftBox = styled(RightBox)`
  border-radius: 5rem 0rem 5rem 5rem;
  position: relative;
  right: 60%;
  left: auto;
`;

const H1Title = styled.h1`
  color: #eef3f1;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  padding: 6.5rem;
  text-shadow: black 0px 3px;
`;

const H2Title = styled.h2`
  color: #a474c6;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  margin: 1rem;
  text-shadow: black 0px 3px;
`;

const Para = styled.p`
  color: #a474c6;
  font-size: 1.5rem;
  margin: 1rem;
  line-height: 1;
  text-shadow: black 0px 1px;
`;

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  const someCallback = () => {
    setMessage1(() => {
      return (
        <div>
          <Fade bottom>
            <H2Title>Phase 1</H2Title>
            <Para>
              Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam incidunt
              quo cumque laboriosam sit quos tenetur. Aut voluptatem possimus
              eum explicabo debitis nam eius debitis. Et suscipit laborum et
              nulla consequuntur ea dolore repellat.
            </Para>
          </Fade>
        </div>
      );
    });
    callback();
  };

  const someCallback2 = () => {
    setMessage2(() => {
      return (
        <div>
          <Fade bottom>
            <H2Title>Phase 2</H2Title>
            <Para>
              Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam incidunt
              quo cumque laboriosam sit quos tenetur. Aut voluptatem possimus
              eum explicabo debitis nam eius debitis. Et suscipit laborum et
              nulla consequuntur ea dolore repellat.
            </Para>
          </Fade>
        </div>
      );
    });
  };

  const someCallback3 = () => {
    setMessage3(() => {
      return (
        <div>
          <Fade bottom>
            <H2Title>Phase 3</H2Title>
            <Para>
              Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam incidunt
              quo cumque laboriosam sit quos tenetur. Aut voluptatem possimus
              eum explicabo debitis nam eius debitis. Et suscipit laborum et
              nulla consequuntur ea dolore repellat.
            </Para>
          </Fade>
        </div>
      );
    });
  };

  const someCallback4 = () => {
    setMessage4(() => {
      return (
        <div>
          <Fade bottom>
            <H2Title>Phase 4</H2Title>
            <Para>
              Lorem ipsum dolor sit amet. Aut dolore sequi ad aperiam incidunt
              quo cumque laboriosam sit quos tenetur. Aut voluptatem possimus
              eum explicabo debitis nam eius debitis. Et suscipit laborum et
              nulla consequuntur ea dolore repellat.
            </Para>
          </Fade>
        </div>
      );
    });
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
  }, []);

  return (
    <Wrapper>
      <FirstTimelineBar id="timeline1" ref={timeline1} />
      <Circle id="circle1" ref={circle1} style={{ top: "0px" }}>
        1
      </Circle>
      <RightBox style={{ top: "-35px" }}>{message1}</RightBox>

      <TimelineBar
        id="timeline2"
        ref={timeline2}
        style={{
          top: "-345px",
        }}
      />
      <Circle id="circle2" ref={circle2} style={{ top: "-345px" }}>
        2
      </Circle>
      <LeftBox style={{ top: "-380px" }}>{message2}</LeftBox>

      <TimelineBar
        id="timeline3"
        ref={timeline3}
        style={{
          top: "-690px",
        }}
      />
      <Circle
        id="circle3"
        ref={circle3}
        style={{
          top: "-690px",
        }}
      >
        3
      </Circle>
      <RightBox style={{ top: "-723px" }}>{message3}</RightBox>

      <TimelineBar
        id="timeline4"
        ref={timeline4}
        style={{
          top: "-1035px",
        }}
      />
      <Circle
        id="circle4"
        ref={circle4}
        style={{
          top: "-1035px",
        }}
      >
        4
      </Circle>
      <LeftBox style={{ top: "-1066px" }}>{message4}</LeftBox>
    </Wrapper>
  );
};

export default function Roadmap() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    // console.log("awesome");
  };

  return (
    <PageWrapper>
      <H1Title>Roadmap</H1Title>
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
    </PageWrapper>
  );
}
