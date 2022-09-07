import Progress from '../Progress';
import { Container } from './styles';

const About = () => (
  <Container>
    <div>
      <span className="title">About</span>
      <h2>A computer engineer who loves to code</h2>
      <p>
        I am a Front-End lover, where I always seek to learn and enhance my skills in this development modality, also
        proficient on projects that requires skills on Back-End development modalities.
      </p>
    </div>

    <div className="right-content">
      <div className="numbers">
        <div>
          <strong>15+</strong>
          <span>Projects Done</span>
        </div>
        <div>
          <strong>50+</strong>
          <span>Happy Clients</span>
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

export default About;
