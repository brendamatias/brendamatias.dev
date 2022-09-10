import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from './styles';
import logo from '../../assets/logo-icon.svg';
import Languages from '../Languages';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => setScrollPosition(window.scrollY);

  const handleClickMenu = (href: string) => {
    setMenuVisible(false);
    router.push(href);
  };

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

          <div className="nav">
            <button type="button" onClick={() => setMenuVisible(!menuVisible)}>
              <FaBars />
            </button>

            <ul className={`${menuVisible ? 'visible' : ''}`}>
              <li>
                <button type="button" onClick={() => handleClickMenu('/#about')}>
                  About
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleClickMenu('/#services')}>
                  Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleClickMenu('/#experiences')}>
                  Experiences
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleClickMenu('/#portfolio')}>
                  Portfolio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleClickMenu('/#feedbacks')}>
                  Feedbacks
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleClickMenu('/#blog')}>
                  Blog
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
