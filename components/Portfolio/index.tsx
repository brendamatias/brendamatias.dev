import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import projectImage from '../../assets/project.jpg';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Container id="portfolio">
      <span className="title">{t('portfolio_title')}</span>

      <div>
        <h2>{t('portfolio_subtitle')}</h2>

        <a href="/projects">
          {t('view_more')} <MdKeyboardArrowRight />
        </a>
      </div>

      <ul>
        {[1, 2, 3, 4, 5, 6].map((project) => (
          <li key={project}>
            <div className="image">
              <Image src={projectImage} alt={`Project 0${project}`} />
            </div>
            <div className="info">
              <strong>Brenda Matias Portfolio</strong>
              <span>HTML - CSS - NextJS</span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Portfolio;
