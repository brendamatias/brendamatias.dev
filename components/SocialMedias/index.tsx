import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './styles';

const SocialMedias = () => (
  <Container>
    <div>
      <a href="https://github.com/brendamatias" aria-label="Github">
        <FaGithub />
      </a>
      <a href="https://www.behance.net/brendamatias" aria-label="Behance">
        <FaBehance />
      </a>
      <a href="https://www.linkedin.com/in/brenda-matias/" aria-label="Linkedin">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/brendasobralmatias/" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  </Container>
);

export default SocialMedias;
