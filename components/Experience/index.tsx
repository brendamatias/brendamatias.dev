import { MdKeyboardArrowRight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import { IExperience } from '../../types';
import { formatDate } from '../../utils/formatDate';

interface ExperienceProps {
  experiences: IExperience[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const { t } = useTranslation();

  return (
    <Container id="experiences">
      <span className="title">{t('experience_title')}</span>

      <div>
        <h2>{t('experience_subtitle')}</h2>

        <a href="/resume.pdf" target="_blank">
          {t('see_curriculum')} <MdKeyboardArrowRight />
        </a>
      </div>

      <ul>
        {experiences.map((experience) => (
          <li key={experience.slug}>
            <h3>
              {experience.job}, <span> {experience.company}</span>
            </h3>
            <h4>
              {formatDate(experience.started_in)} -{' '}
              {experience.finished_in ? formatDate(experience.finished_in) : 'at moment'}
            </h4>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Experience;
