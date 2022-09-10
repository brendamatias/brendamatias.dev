import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';
import { getPrismicClient } from '../services/prismic';
import { IProject } from '../types';

interface PortfolioProps {
  projects: IProject[];
}

const Portfolio = ({ projects }: PortfolioProps) => (
  <>
    <Head>
      <title>Brenda Matias - Portfolio</title>
    </Head>
    <main>
      <Header />
      <div className="wrapper">
        <PortfolioPage projects={projects} />
      </div>
    </main>
  </>
);

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

  const response = await client.getAllByType('project');

  const projects = response.map(({ uid, data }) => ({
    slug: uid,
    image: data.image,
    title: data.title[0].text,
    link: data.link.url,
    technologies: data.technologies?.map((item: any) => item.technology[0]?.text),
  }));

  return {
    props: {
      projects,
    },
    revalidate: 86400,
  };
};
