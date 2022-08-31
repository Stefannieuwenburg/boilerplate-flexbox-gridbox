//more info https://1linelayouts.glitch.me/
import styled from "styled-components";

const ContainerFlex = styled.div`
    background-color: var(--Main-BackGround);
`;

const FlexBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Header = styled.div`
    width: 100%;
    height: 100px;
    margin: 10px;
    padding: 10px;
    background-color: brown;
`;
const Main = styled.div`
    width: 400px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    background-color: brown;
`;
const Section = styled.div`
    width: 400px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    background-color: brown;
`;
const Footer = styled.div`
    width: 100%;
    height: 50px;
    margin: 10px;
    padding: 10px;
    background-color: brown;
`;

const FlexBox: React.FC = () => {
    return (
        <>
            <ContainerFlex>
                <FlexBoxWrapper>
                    <Header>header</Header>
                    <Main>main</Main>
                    <Section>section</Section>
                    <Footer>footer</Footer>
                </FlexBoxWrapper>
            </ContainerFlex>
        </>
    );
};

export default FlexBox;
