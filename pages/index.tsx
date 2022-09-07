import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/Intro';
import Header from '../components/Header';
import About from '../components/About';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Brenda Matias - Portfolio</title>
    </Head>

    <main>
      <Header />
      <Intro />

      <div className="wrapper">
        <div className="container">
          <About />
        </div>
      </div>
    </main>
  </>
);

export default Home;
