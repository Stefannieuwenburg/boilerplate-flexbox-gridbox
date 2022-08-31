import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

import FlexBox from "./components/FlexBox"
import GridBox from "./components/GridBox"

const ContainerLayout = styled.div`
    background-color: var(--Main-BackGround);
`;

const HeaderSection = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  
`;

const Layout: React.FC = () => {
  return (
      <>
          <GlobalStyle />
          <ContainerLayout>
              <HeaderSection>
                  <p>Learn React Flex en Grid.</p>
              </HeaderSection>
              <FlexBox />
              <GridBox />
          </ContainerLayout>
      </>
  );
}

export default Layout;
