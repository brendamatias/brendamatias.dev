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
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import { IExperience, IProject } from '../types';

interface HomeProps {
  experiences: IExperience[];
  projects: IProject[];
}

const Home = ({ experiences, projects }: HomeProps) => (
  <>
    <Head>
      <title>Brenda Matias</title>
    </Head>
    <main>
      <Header />
      <Intro />
      <div className="wrapper">
        <About />
        <Services />
        <Contact />
        <Experience experiences={experiences} />
        <Portfolio projects={projects} />
        <Feedbacks />
        <Blog />
        <Footer />
      </div>
    </main>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

  const responseExperience = await client.getAllByType('experience', {
    orderings: [
      {
        field: 'my.experience.started_in',
        direction: 'desc',
      },
    ],
  });

  const responseProjects = await client.getAllByType('project');

  const experiences = responseExperience.map(({ uid, data }) => ({
    slug: uid,
    job: data.job[0].text,
    company: data.company[0].text,
    description: data.description[0].text,
    started_in: data.started_in,
    finished_in: data.finished_in,
  }));

  const projects = responseProjects.map(({ uid, data }) => ({
    slug: uid,
    image: data.image,
    title: data.title[0].text,
    link: data.link.url,
    technologies: data.technologies?.map((item: any) => item.technology[0]?.text),
  }));

  return {
    props: {
      experiences,
      projects,
    },
    revalidate: 86400,
  };
};
