import React from 'react';
import i18n from '../../i18n';
import { Container } from './styles';

const Languages = () => {
  const [language, setLanguage] = React.useState(i18n.language);
  const changeLanguage = (lng: 'pt-BR' | 'en-US') => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <button className={language === 'pt-BR' ? 'active' : ''} onClick={() => changeLanguage('pt-BR')} type="button">
        pt
      </button>
      <button className={language === 'en-US' ? 'active' : ''} onClick={() => changeLanguage('en-US')} type="button">
        en
      </button>
    </Container>
  );
};

export default Languages;
