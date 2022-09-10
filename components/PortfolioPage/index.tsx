import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import projectImage from '../../assets/project.jpg';

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <Container id="portfolio">
      <span className="title">{t('portfolio_title')}</span>

      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((project) => (
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

export default PortfolioPage;
