import { MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from './styles';

const Portfolio = () => (
  <Container>
    <span className="title">Portfolio</span>

    <div>
      <h2>Latests projects delivered</h2>

      <a href="/projects">
        View more <MdKeyboardArrowRight />
      </a>
    </div>

    <ul>
      {[1, 2, 3, 4, 5, 6].map((project) => (
        <li key={project}>
          <div>
            <strong>Brenda Matias Portfolio</strong>
            <span>HTML - CSS - NextJS</span>
          </div>
        </li>
      ))}
    </ul>
  </Container>
);

export default Portfolio;
