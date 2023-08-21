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

export { MainPageWrapper, PageWrapperDark, PageWrapperLight };
