import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from './styles';
import logo from '../../assets/logo-icon.svg';
import Languages from '../Languages';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className={`${scrollPosition > 100 && 'header-scroll'}`}>
      <div className="container">
        <Link href="/">
          <Image src={logo} alt="Brenda Matias Logo" style={{ cursor: 'pointer' }} />
        </Link>

        <div>
          <Languages />

          <button type="button">
            <FaBars />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
