import Head from 'next/head';
import '../styles/Home.module.css';
import Game from '../components/Game';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mondians TAP</title>
        <meta name="description" content="This is a tapping game similar to BUMP." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.className} main`}>
        <Game />
      </main>
    </>
  );
}