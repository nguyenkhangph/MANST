import '../styles/globals.css';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/Footer'; // Import the Footer component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer /> {/* Include Footer here */}
    </>
  );
}

export default MyApp;
