import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <strong>{t('contact_title')}</strong>
      <p>{t('contact_subtitle')}</p>

      <a href="#" className="button">
        {t('contact')}
      </a>
    </Container>
  );
};

export default Contact;
