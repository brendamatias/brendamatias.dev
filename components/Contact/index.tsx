import { MdDesignServices, MdQueryStats } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { Container } from './styles';

const Contact = () => {
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
      <strong>Let's talk?</strong>
      <p>
        Do you want to know more about me or talk about a potential project? Send me an email, even if it's just to say
        hi!
      </p>

      <a href="#" className="button">
        Contact
      </a>
    </Container>
  );
};

export default Contact;
