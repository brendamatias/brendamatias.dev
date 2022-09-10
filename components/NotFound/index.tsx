import Image from 'next/image';
import Link from 'next/link';
import SocialMedias from '../SocialMedias';
import { Container } from './styles';
import background from '../../assets/404-background.png';

const NotFound = () => (
  <Container>
    <div className="image">
      <Image src={background} alt="Brenda Matias" />
    </div>
    <div className="container">
      <h1>404</h1>
      <strong>page not found</strong>
      <p>This page you are looking for doesn’t exist.</p>

      <div className="button-container">
        <Link href="/">
          <span className="button">Go back</span>
        </Link>
      </div>
    </div>

    <SocialMedias />
  </Container>
);

export default NotFound;
