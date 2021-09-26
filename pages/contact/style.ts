/* eslint-disable no-nested-ternary */
import styled, { keyframes } from "styled-components";
import { Theme } from "../../Styles/global";

const fadein = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation: ${fadein} 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const ContactTitleContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
  margin-top: 3rem;
  display: grid;
  align-items: end;
  grid-template-areas:
    "a a"
    "b c";

  @media screen and (max-width: 768px) {
    align-items: start;
    width: 100%;
    grid-template-areas:
      "a"
      "b"
      "c";
  }
`;

export const ContactTitleSection = styled.div`
  grid-area: a;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem; ;
`;

export const ContactTitle = styled.span`
  color: tomato;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  font-size: 5rem;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.primary};
  font-weight: 900;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const CotactTitleEmail = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
  place-self: stretch;
  margin-top: 3rem;
  a {
    text-decoration: none;
  }
  span {
    font-size: 2rem;
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.primary};
    color: ${({ theme }: { theme: Theme }) => theme.colors.text};
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .underline {
    width: 50%;
    height: 2px;
    background: white;
    transition: all 0.3s ease-in-out;
    margin-top: 0.3rem;
  }
  .contact-email-detail {
    color: tomato;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .contact-email-detail:hover .underline {
    width: 100%;
  }
`;

export const CotactTitleDescription = styled.div`
  justify-items: end;
  align-items: end;
  width: 60%;
  grid-area: c;
  font-size: 1.2rem;
  justify-self: end;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.primary};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-weight: 700;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    justify-items: start;
    align-items: start;
    justify-self: start;
    width: 80%;
  }
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(64, 1.5625%);
  width: 100%;
  margin: 3rem 0;
`;

export const FormTitle = styled.h3`
  grid-column-start: 12;
  grid-column-end: 54;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.primary};
  font-size: calc(14px * 1);
  line-height: 1.8em;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: calc(18px * 1);
  @media screen and (max-width: 768px) {
    grid-column-start: 5;
    grid-column-end: 61;
  }
`;

export const FormInput = styled.div<{ position?: number }>`
  position: relative;
  margin-bottom: calc(40px * 1);
  @media screen and (max-width: 768px) {
    grid-column-start: 5;
    grid-column-end: 61;
  }
  ${({ position }: { position?: number }) =>
    position === 0
      ? `
        grid-column-start: 12;
        grid-column-end: 32;
        
    `
      : position === 1
      ? `
      grid-column-start: 34;
    grid-column-end: 54;
      `
      : `
    grid-column-start: 12;
    grid-column-end: 54;
    margin-bottom: calc(60px*var(--coef-indent));
    `}

  input, textarea {
    padding-left: calc(20px * var(--coef-indent));
    padding-right: calc(20px * var(--coef-indent));
    padding-top: 18px;
    box-sizing: border-box;
    border: 1px solid #32344d;
    background: transparent;
    width: 100%;
    height: 4rem;
    color: #1e213d;
    font-size: calc(1.5rem * var(--coef-text));
    font-weight: 300;
    font-family: sofia-pro, sans-serif;
    transition: background-color 0.2s;
    letter-spacing: 0.5px;
  }
  textarea {
    min-height: 130px;
    padding-top: calc(40px * var(--coef-indent));
    border-bottom: none;
    resize: none;
  }

  input:focus,
  textarea:focus {
    background: #fff;
    outline: none;
  }

  input:focus + label {
    transform: translateY(-100%);
  }

  input:not(:placeholder-shown) + label {
    transform: translateY(-100%);
  }
  input:not(:placeholder-shown) {
    background: #fff;
  }
  
  textarea:not(:placeholder-shown) {
    background: #fff;
  }

  label {
    position: absolute;
    color: #80808e;
    font-size: 1.2rem;
    font-family: sofia-pro, sans-serif;
    font-weight: 300;
    top: 47%;
    left: 0;
    padding-left: calc(20px * var(--coef-indent));
    transform: translateY(-50%);
    transition: all 0.3s;
    z-index: 2;
    letter-spacing: 0.5px;
  }

  .fileinputwrapper {
    margin-top: -8px;
    height: 90px;
    border: 1px solid #32344d;
    border-top: none;
  }
  .✋🏿🌵🌷🎁☝🏽⏫🎮 {
    position: absolute;
    bottom: 40px;
    left: 0;
  }

  .🌕🎑⛷🏿🎮🏊🏿🏂🏻🎧 {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 40px;
    bottom: 0;
    right: 0;
    padding: 0;
    border-radius: 50%;
    font-size: 0;
    background-color: #32344d;
    border: none;
    cursor: pointer;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjE5cHgiIHZpZXdCb3g9IjAgMCAxMCAxOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdG9yOiBTa2V0Y2ggNTIuMiAoNjcxNDUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoLS0+PHRpdGxlPlBhdGg8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGlkPSJEZXNrdG9wLVBhZ2VzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBpZD0iQ29udGFjdC1Vcy0xLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjAuMDAwMDAwLCAtMTI4NS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj48ZyBpZD0iTW9uZXkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyMC4wMDAwMDAsIDEwNDkuMDAwMDAwKSI+PGcgaWQ9IkF0dGFjaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTg1LjAwMDAwMCwgMjI1LjAwMDAwMCkiPjxwYXRoIGQ9Ik0yMCwyOS4zODM1MjE3IEMyMi43NjE0MjM3LDI5LjM4MzUyMTcgMjUsMjcuMTQ0OTQ1NCAyNSwyNC4zODM1MjE3IEwyNSwxNC40Nzg1Nzg3IEMyNC44NjAwOTA4LDEyLjUxODU5OTEgMjMuMjI5MjI1NCwxMSAyMS4yNjQyNTg2LDExIEMxOS4yOTkyOTE3LDExIDE3LjY2ODQyNjMsMTIuNTE4NTk5MSAxNy41Mjg1MTcxLDE0LjQ3ODU3ODcgTDE3LjUyODUxNzEsMjIuNzI5NTI5MyBDMTcuNTI4NTE3MSwyNC4wOTQ0OTE2IDE4LjYzNTAzNzcsMjUuMjAxMDEyMiAyMCwyNS4yMDEwMTIyIEMyMS4zNjQ5NjIzLDI1LjIwMTAxMjIgMjIuNDcxNDgyOSwyNC4wOTQ0OTE2IDIyLjQ3MTQ4MjksMjIuNzI5NTI5MyBMMjIuNDcxNDgyOSwxNy43ODY1NjM1IEwyMC45NTA1NzAzLDE3Ljc4NjU2MzUgTDIwLjk1MDU3MDMsMjIuNzI5NTI5MyBDMjAuOTUwNTcwMywyMy4yNTQ1MTQ4IDIwLjUyNDk4NTUsMjMuNjgwMDk5NiAyMCwyMy42ODAwOTk2IEMxOS40NzUwMTQ1LDIzLjY4MDA5OTYgMTkuMDQ5NDI5NywyMy4yNTQ1MTQ4IDE5LjA0OTQyOTcsMjIuNzI5NTI5MyBMMTkuMDQ5NDI5NywxNC40Nzg1Nzg3IEMxOS4xNTU1Mjk5LDEzLjMzNDYxMDMgMjAuMTE1MzgwNCwxMi40NTk2NjQxIDIxLjI2NDI1ODYsMTIuNDU5NjY0MSBDMjIuNDEzMTM2NywxMi40NTk2NjQxIDIzLjM3Mjk4NzIsMTMuMzM0NjEwMyAyMy40NzkwODc1LDE0LjQ3ODU3ODcgTDIzLjQ3OTA4NzUsMjQuMzgzNTIxNyBDMjMuNDc5MDg3NSwyNi4zMDQ5Njg2IDIxLjkyMTQ0NjksMjcuODYyNjA5MSAyMCwyNy44NjI2MDkxIEMxOC4wNzg1NTMxLDI3Ljg2MjYwOTEgMTYuNTIwOTEyNSwyNi4zMDQ5Njg2IDE2LjUyMDkxMjUsMjQuMzgzNTIxNyBMMTYuNTIwOTEyNSwxNy43ODY1NjM1IEwxNSwxNy43ODY1NjM1IEwxNSwyNC4zODM1MjE3IEMxNSwyNy4xNDQ5NDU0IDE3LjIzODU3NjMsMjkuMzgzNTIxNyAyMCwyOS4zODM1MjE3IFoiIGlkPSJQYXRoIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==);
    background-repeat: no-repeat;
    background-position: 50%;
    transition: 0.4s;
  }
  .🌕🎑⛷🏿🎮🏊🏿🏂🏻🎧:hover {
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }
  .✨🍾⏰🍯🌻🏃🏾🆗 {
    display: none;
  }
`;

export const SubmitButton = styled.div`
  grid-column-start: 12;
  grid-column-end: 54;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: relative;
    font-family: sofia-pro,sans-serif;
    font-size: calc(14px*var(--coef-text));
    font-weight: 600;
    line-height: 2;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    width: calc(180px*var(--coef-size));
    z-index: 10;

    &:before {
      content: '';
      position: absolute;
      left:0;
      bottom: 0;
      height: 0.5rem;
      width: 100%;
      background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      z-index: -1;
    }

    &:hover :before {
      height: 2rem;
    }
  }
`;
