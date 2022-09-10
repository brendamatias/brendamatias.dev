import { MdCalendarToday, MdKeyboardArrowRight, MdMessage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <span className="title">{t('blog_title')}</span>

      <div>
        <h2>{t('blog_subtitle')}</h2>
        <a href="#">
          {t('view_more')} <MdKeyboardArrowRight />
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
};

export default Blog;
