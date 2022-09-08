import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Intro from '../components/Intro';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Feedbacks from '../components/Feedbacks';

import { getPrismicClient } from '../services/prismic';
import { IExperience } from '../types';
import Blog from '../components/Blog';

interface HomeProps {
  experiences: IExperience[];
}

const Home = ({ experiences }: HomeProps) => (
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
        <Experience experiences={experiences} />
        <Portfolio />
        <Feedbacks />
        <Blog />
      </div>
    </main>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

  const response = await client.getAllByType('experience', {
    orderings: [
      {
        field: 'my.experience.started_in',
        direction: 'desc',
      },
    ],
  });

  const experiences = response.map(({ uid, data }) => ({
    slug: uid,
    job: data.job[0].text,
    company: data.company[0].text,
    description: data.description[0].text,
    started_in: data.started_in,
    finished_in: data.finished_in,
  }));

  return {
    props: {
      experiences,
    },
    revalidate: 86400,
  };
};
