import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { AppProvider } from "../contexts/AppContext";
import { GlobalStyle, theme } from "../Styles/global";


export default class MyApp extends App {
  render() {
    const {Component, pageProps } = this.props;
    return <>
      <GlobalStyle />
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppProvider>
    </>
  }
}
