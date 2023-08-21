import styled from "styled-components";

const MainPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #eef3f1;
  position: relative;
`;

const PageWrapperDark = styled(MainPageWrapper)`
  width: auto;
  height: auto;
  background-color: #a474c6;
  padding: 0rem 2rem 6.5rem 2rem;
`;

const PageWrapperLight = styled(PageWrapperDark)`
  background-color: #eef3f1;
`;

const MainH1Title = styled.h1`
  color: #a474c6;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  margin: 1rem;
  text-shadow: black 0px 3px;
`;

const H1TitleLight = styled(MainH1Title)`
  color: #eef3f1;
  margin: 0;
  padding: 6.5rem;
`;

const H1TitleDark = styled(H1TitleLight)`
  color: #a474c6;
`;

const H2TitleDark = styled.h2`
  color: #a474c6;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-family: "04b30";
  margin: 1rem;
  text-shadow: black 0px 3px;
`;

const ParaBig = styled.p`
  color: #a474c6;
  font-size: 2rem;
  margin: 1rem;
  line-height: 1;
  text-shadow: black 0px 1px;
`;

const ParaMid = styled.p`
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1.4rem;
  color: #eef3f1;
  cursor: pointer;
  border-radius: 5rem;
  font-family: inherit;
  background-color: #a474c6;
  border: none;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: black 0px 3px;
  margin: 1rem;

  &:hover {
    background-color: #eef3f1;
    color: #a474c6;
  }
`;

export {
  MainPageWrapper,
  PageWrapperDark,
  PageWrapperLight,
  MainH1Title,
  H1TitleLight,
  H1TitleDark,
  H2TitleDark,
  ParaBig,
  ParaMid,
  StyledButton,
};
