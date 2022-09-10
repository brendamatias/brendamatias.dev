import { MdKeyboardArrowRight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Container } from './styles';
import { IProject } from '../../types';
import ListProjects from '../ListProjects';

interface PortfolioProps {
  projects: IProject[];
}

const Portfolio = ({ projects }: PortfolioProps) => {
  const { t } = useTranslation();

  return (
    <Container id="portfolio">
      <span className="title">{t('portfolio_title')}</span>

      <div>
        <h2>{t('portfolio_subtitle')}</h2>

        <Link href="/portfolio">
          <a>
            {t('view_more')} <MdKeyboardArrowRight />
          </a>
        </Link>
      </div>

      <ListProjects projects={projects.slice(0, 6)} />
    </Container>
  );
};

export default Portfolio;
