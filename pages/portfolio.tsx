import Head from 'next/head';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';

const Portfolio = () => (
  <>
    <Head>
      <title>Brenda Matias - Portfolio</title>
    </Head>
    <main>
      <Header />
      <div className="wrapper">
        <PortfolioPage />
      </div>
    </main>
  </>
);

export default Portfolio;
