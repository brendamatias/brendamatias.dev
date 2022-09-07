import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/Home';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Brenda Matias - Portfolio</title>
    </Head>

    <main>
      <Header />
      <Intro />
      <SocialMedias />
    </main>
  </>
);

export default Home;
