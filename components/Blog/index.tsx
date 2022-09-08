import { MdCalendarToday, MdKeyboardArrowRight, MdMessage, MdStar } from 'react-icons/md';
import { Container } from './styles';

const Blog = () => (
  <Container>
    <span className="title">Blog</span>

    <div>
      <h2>Latest articles published</h2>
      <a href="#">
        View more <MdKeyboardArrowRight />
      </a>
    </div>

    <ul>
      {[1, 2, 3].map((article) => (
        <li key={article}>
          <div className="image" />

          <div>
            <span>
              <MdCalendarToday /> 22 Feb, 2022
            </span>
            <span>
              <MdMessage /> 500
            </span>
          </div>

          <strong>How to deploy NextJs projects? Getting to know Vercel</strong>
        </li>
      ))}
    </ul>
  </Container>
);

export default Blog;
