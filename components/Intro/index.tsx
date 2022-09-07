import SocialMedias from '../SocialMedias';
import { Container } from './styles';

const Intro = () => (
  <Container>
    <div className="container">
      <span>Hello, my name is</span>
      <h1>Brenda Matias</h1>
      <strong>Web Development</strong>

      <a href="#" className="button">
        Resume
      </a>
    </div>

    <SocialMedias />
  </Container>
);

export default Intro;
