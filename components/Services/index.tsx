import { MdDesignServices, MdQueryStats } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      label: 'Web Development',
      description: 'At vero eos censes tantas res gessite sine metu contineret',
      icon: <GoBrowser />,
    },
    {
      label: 'Visual Design',
      description: 'At vero eos censes tantas res gessite sine metu contineret',
      icon: <MdDesignServices />,
    },
    {
      label: 'SEO',
      description: 'At vero eos censes tantas res gessite sine metu contineret',
      icon: <MdQueryStats />,
    },
  ];

  return (
    <Container id="services">
      <span className="title">{t('services_title')}</span>
      <h2>{t('services_subtitle')}</h2>

      <ul>
        {services.map((service, index) => (
          <li key={service.label}>
            <div className="icon">{service.icon}</div>
            <div>
              <span>0{index + 1}</span>
              <strong>{service.label}</strong>
              <p>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Services;
