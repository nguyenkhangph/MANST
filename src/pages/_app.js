// src/pages/_app.js
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import '../styles/globals.css';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/Footer'; // Import the Footer component

const manifestUrl = '/manifest.json'; // Ensure this path is correct

function MyApp({ Component, pageProps }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer /> {/* Include Footer here */}
    </TonConnectUIProvider>
  );
}

export default MyApp;
