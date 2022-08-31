//more info https://1linelayouts.glitch.me/
import styled from "styled-components";

export const ContainerGrid = styled.div`
    background-color: var(--Main-BackGround);
`;

const GridWrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 50px 100px 250px 50px;
    grid-template-areas:
        "Nav Nav Nav"
        "Header Header Header"
        "Main Main Section"
        "Footer Footer Footer";

    @media only screen and (max-width: 768px) {
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: 50px 100px 250px 50px;
        grid-template-areas:
            "Nav"
            "Header"
            "Main"
            "Section"
            "Footer";
    }
`;
const NavBar = styled.div`
    grid-area: Nav;
    background-color: #8ca0ff;
    color: black;
`;
const Header = styled.div`
    grid-area: Header;
    background-color: #ffa08c;
    color: black;
`;
const Main = styled.div`
    grid-area: Main;
    background-color: #ffff64;
    color: black;
`;
const Section = styled.div`
    grid-area: Section;
    background-color: #b464ff;
    color: black;
`;

const Footer = styled.div`
    grid-area: Footer;
    background-color: #8cffa0;
    color: black;
`;

const GridBox: React.FC = () => {
    return (
        <>
            <ContainerGrid>
                <GridWrapper>
                    <NavBar>NavBar</NavBar>
                    <Header>Header</Header>
                    <Main>Main</Main>
                    <Section>Section</Section>
                    <Footer>Footer</Footer>
                </GridWrapper>
            </ContainerGrid>
        </>
    );
};

export default GridBox;
