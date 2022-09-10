import i18n from '../../i18n';
import { Container } from './styles';

const Languages = () => {
  const changeLanguage = (lng: 'pt-BR' | 'en-US') => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <button onClick={() => changeLanguage('pt-BR')} type="button">
        pt
      </button>
      <button onClick={() => changeLanguage('en-US')} type="button">
        en
      </button>
    </Container>
  );
};

export default Languages;
