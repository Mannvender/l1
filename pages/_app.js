import App from "next/app";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Head from "next/head";
import GlobalStyles from "../styles/global";
import { ToastContainer as ToastContainerBase } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import rawTheme from "../styles/theme";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function MyApp({ Component, pageProps }) {
  const randomVal = getRandomInt(0, rawTheme.colors.length - 1);
  const theme = { ...rawTheme, colors: rawTheme.colors[randomVal] };
  const ToastContainer = styled(ToastContainerBase).attrs({
    // custom props
  })`
    .Toastify__toast {
      border-radius: 0;
    }
    .Toastify__toast--error {
      background-color: ${theme.colors.error};
    }
    .Toastify__toast--info {
      background-color: #1bbdd6;
    }
  `;
  return (
    <>
      <Head>
        <title>Loopy</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer position="top-center" />
      </ThemeProvider>
      <GlobalStyles theme={theme} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
