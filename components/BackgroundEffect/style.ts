import styled from "styled-components";

export const BackgroundContainer = styled.div<{isMenuOpen: boolean}>`
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    height: 100vh;
    transform: ${({isMenuOpen}:{isMenuOpen: boolean}) => isMenuOpen ? 'scale(1.15)':'none'};
    transition: all 0.3s ease-in-out;
    z-index: -1;
`;

export const Star = styled.div`
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
`;