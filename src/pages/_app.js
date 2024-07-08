import { useEffect } from 'react';
import { TonConnectUIProvider, useTonConnect } from '@tonconnect/ui-react';
import '../styles/globals.css';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/Footer';

const manifestUrl = 'https://manst-e13iiu7ds-nguyenkhangphs-projects.vercel.app/manifest.json';

function MyApp({ Component, pageProps }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </TonConnectUIProvider>
  );
}

export default MyApp;
