import Nav from "../src/components/header/Nav/Nav";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import Footer from "../src/components/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CinemApp</title>
        <meta name="description" content="TV and Movies guide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
export default MyApp;
