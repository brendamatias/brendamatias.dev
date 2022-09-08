import Image from 'next/image';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Footer = () => (
  <Container>
    <Image src={logo} alt="Brenda Matias Logo" />
    <p>
      How about starting a project together? Send me an <a href="#">email</a>.
    </p>

    <span>Made with ❤️ and lots of ☕ from 2022 ©</span>
  </Container>
);

export default Footer;
