import { useTranslation } from 'react-i18next';
import SocialMedias from '../SocialMedias';
import { Container } from './styles';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="container">
        <span>{t('welcome_msg')}</span>
        <h1>Brenda Matias</h1>
        <strong>{t('web_developer')}</strong>

        <a href="#" className="button">
          <span>{t('resume')}</span>
        </a>
      </div>

      <SocialMedias />
    </Container>
  );
};

export default Intro;
