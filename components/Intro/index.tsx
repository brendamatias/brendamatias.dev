import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import SocialMedias from '../SocialMedias';
import { Container } from './styles';
import background from '../../assets/background.png';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="image">
        <Image src={background} alt="Brenda Matias" />
      </div>
      <div className="container">
        <span>{t('welcome_msg')}</span>
        <h1>Brenda Matias</h1>
        <strong>{t('web_developer')}</strong>

        <a href="/resume.pdf" className="button" target="_blank">
          <span>{t('resume')}</span>
        </a>
      </div>

      <SocialMedias />
    </Container>
  );
};

export default Intro;
