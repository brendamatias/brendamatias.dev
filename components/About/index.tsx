import { useTranslation } from 'react-i18next';
import Progress from '../Progress';
import { Container } from './styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <div>
        <span className="title">{t('about_title')}</span>
        <h2>{t('about_subtitle')}</h2>
        <p>{t('about_me')}</p>
      </div>

      <div className="right-content">
        <div className="numbers">
          <div>
            <strong>15+</strong>
            <span>{t('about_projects_done')}</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>{t('about_happy_clients')}</span>
          </div>
        </div>

        <div className="skills">
          <div>
            <Progress label="Adonis.js" progress={90} />
            <Progress label="Node.js" progress={80} />
            <Progress label="Javascript" progress={90} />
            <Progress label="Typescript" progress={60} />
          </div>
          <div>
            <Progress label="React.js" progress={80} />
            <Progress label="Next.js" progress={70} />
            <Progress label="HTML" progress={90} />
            <Progress label="CSS" progress={90} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
