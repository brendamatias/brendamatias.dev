import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './styles';

const SocialMedias = () => (
  <Container>
    <div>
      <a href="https://github.com/brendamatias" aria-label="Github" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.behance.net/brendamatias" aria-label="Behance" target="_blank" rel="noreferrer">
        <FaBehance />
      </a>
      <a href="https://www.linkedin.com/in/brenda-matias/" aria-label="Linkedin" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/brendasobralmatias/" aria-label="Instagram" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
  </Container>
);

export default SocialMedias;
