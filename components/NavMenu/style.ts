/* eslint-disable no-nested-ternary */
import styled, { keyframes } from "styled-components";
import { Theme } from "../../Styles/global";


const jumpin = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const NavMenuContainer = styled.div<{ isMenuOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
  display: ${({ isMenuOpen }: { isMenuOpen: boolean }) =>
    isMenuOpen ? "flex" : "none"};
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const MenyList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 55%;
    justify-content: space-between;
    width: 60%;
`;

export const MenuLink = styled.a<{index: number}>`
    position: relative;
    font-family: ${({theme}:{ theme: Theme})=> theme.fonts.primary};
    color: ${({ theme }: { theme: Theme }) => theme.colors.text};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.5rem;

    .menu-link-background{
        position: absolute;
        width: 3rem;
        transform: translate(-50%, -50%) rotate(0deg);
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    &:hover .menu-link-background {
        opacity: 1;
        width: 15rem;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%,-50%);
        padding: ${({index}:{ index: number}) => index === 0 ? '6rem': index === 2 ? '3rem' : '4rem'};
        border-radius: 50%;
        background-color: ${({ theme }: { theme: Theme}) => theme.colors.primary};
        z-index: -1;
        transition: all 0.3s ease-in-out;
        background-position: cover;
    }

    &:hover :before {
        padding: 7rem;
    }
`;

export const MenuItem = styled.li<{index: number}>`
    color: white;
    list-style: none;
    animation: ${jumpin} 0.5s linear alternate;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({index}:{ index: number}) => index % 2 !== 0 ? 'flex-end': 'flex-start'};
`;