import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/Intro';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Brenda Matias - Portfolio</title>
    </Head>

    <main>
      <Header />
      <Intro />

      <div className="wrapper">
        <About />
        <Services />
        <Contact />
      </div>
    </main>
  </>
);

export default Home;
