import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --coef-indent: 1;
    --coef-title: 1;
    --coef-text: 1;
    --coef-size: 1;
    --column-width: 100vw/64;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-size: 18px;

    @media screen and (max-width: 1920px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1400px) {
    font-size: 14px;
    }
    
    @media screen and (max-width: 768px) {
    font-size: 12px;
    }

  }

  body { 
    background-color: #02021e;
  }

  .d-flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-align-center {
    align-items: center;
  }
  .flex-justify-center {
    justify-content: center;
  }
`;

export const theme = {
  colors: {
    background: "#02021e",
    text: "#ffffff",
    textSecondary: "#ccccd2",
    border:"#454550",
    primary: "#3719ca",
  },
  fonts: {
    primary: "'Sofia Pro', sans-serif",
  }
};

export type Theme = typeof theme;
