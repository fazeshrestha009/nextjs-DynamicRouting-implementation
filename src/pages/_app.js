import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import React from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
