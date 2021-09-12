import styled from "styled-components";
import { Theme } from "../../Styles/global";

export const Container = styled.div``;

export const Main = styled.main``;

export const Header = styled.header<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background: linear-gradient(0deg,rgba(2,2,30,.0001),#02021e 98%);
  width: 100%;
  padding: 2rem 2rem 1rem;
  transition: all 0.3s ease-in-out;
  ${({ show }: { show: boolean }) =>
    show
      ? `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `
      : `
      transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 9999;
`;

export const HeadTitle = styled.a`
  font-family: "Sofia Pro", sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  text-decoration: none;
`;

const button = (
  color: string,
  font: string,
  hoverbackground: string,
  border: string
) => `
    padding: 1rem 3rem;
    min-width: 3rem;
    border-radius: 3rem;
    color: ${color};
    font-size: 1rem;
    font-family: ${font};
    font-weight: 300;
    border: 1px solid ${border};
    cursor: pointer;
    margin: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover{
        background: ${hoverbackground};
    }
`;

export const LinkButton = styled.a`
  ${({ theme }: { theme: Theme }) =>
    button(
      theme.colors.text,
      theme.fonts.primary,
      theme.colors.primary,
      theme.colors.border
    )};
  text-decoration: none;
`;

export const Button = styled.button`
  background: none;
  position: relative;
  ${({ theme }: { theme: Theme }) =>
    button(
      theme.colors.text,
      theme.fonts.primary,
      theme.colors.primary,
      theme.colors.border
    )};
  padding: 1.5rem;
`;

export const MenuIcon = styled.span<{ menuOpen: boolean }>`
  top: 50%;
  left: 0;
  right: 0;
  width: 37%;
  margin: auto;
  background-color: #fff;
  &,
  :after,
  :before {
    position: absolute;
    display: block;
    border-radius: 35px;
    height: 0.15rem;
    transition: all 0.3s;
  }

  :before {
    margin-top: -0.5rem;
  }
  :after {
    margin-top: 0.5rem;
  }
  :after,
  :before {
    content: "";
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    background: #fff;
  }

  :before {
    margin-top: -0.5rem;
  }

  ${({ menuOpen }: { menuOpen: boolean }) =>
    menuOpen
      ? `
    background-color: transparent;
    &:before {
        top: .45rem;
        transform: translateX(-50%) rotate(
    45deg);
        width: 100%;
    }
    &:after {
        top: -.55rem;
        transform: translateX(-50%) rotate(
    -45deg);
        width: 100%;
    }
  `
      : ""}
`;
