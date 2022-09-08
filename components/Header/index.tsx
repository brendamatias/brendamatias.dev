import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { Container } from './styles';
import logo from '../../assets/logo-icon.svg';

const Header = () => (
  <Container>
    <div className="container">
      <Image src={logo} alt="Brenda Matias Logo" />

      <button type="button">
        <FaBars />
      </button>
    </div>
  </Container>
);

export default Header;
