import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';

const NotFound: NextPage = () => (
  <>
    <Head>
      <title>Brenda Matias - Portfolio</title>
    </Head>
    <main>
      <Header />
      <NotFoundPage />
    </main>
  </>
);

export default NotFound;
