import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import { IProject } from '../../types';
import ListProjects from '../ListProjects';

interface PortfolioPageProps {
  projects: IProject[];
}

const PortfolioPage = ({ projects }: PortfolioPageProps) => {
  const { t } = useTranslation();

  return (
    <Container id="portfolio">
      <span className="title">{t('portfolio_title')}</span>

      <ListProjects projects={projects} />
    </Container>
  );
};

export default PortfolioPage;
