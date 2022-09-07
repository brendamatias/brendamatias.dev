import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './styles';

const SocialMedias = () => (
  <Container>
    <div>
      <a href="https://github.com/brendamatias">
        <FaGithub />
      </a>
      <a href="https://www.behance.net/brendamatias">
        <FaBehance />
      </a>
      <a href="https://www.linkedin.com/in/brenda-matias/">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/brendasobralmatias/">
        <FaInstagram />
      </a>
    </div>
  </Container>
);

export default SocialMedias;
