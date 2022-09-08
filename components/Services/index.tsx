import { MdDesignServices, MdQueryStats } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { Container } from './styles';

const Services = () => {
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
    <Container>
      <span className="title">Services</span>
      <h2>How can I help your business</h2>

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
