import { MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from './styles';
import { IExperience } from '../../types';
import { formatDate } from '../../utils/formatDate';

interface ExperienceProps {
  experiences: IExperience[];
}

const Experience = ({ experiences }: ExperienceProps) => (
  <Container>
    <span className="title">Experience</span>

    <div>
      <h2>My professional journey</h2>

      <a href="#">
        See curriculum <MdKeyboardArrowRight />
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

export default Experience;
