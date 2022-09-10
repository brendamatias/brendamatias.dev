import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Image src={logo} alt="Brenda Matias Logo" />
      <p>
        {t('footer_text')} <a href="mailto:brendamatias.sobral@gmail.com">email</a>.
      </p>

      <span>{t('footer_made_with')}</span>
    </Container>
  );
};

export default Footer;
