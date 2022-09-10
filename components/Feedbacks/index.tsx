import { MdKeyboardArrowRight, MdStar } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Feedbacks = () => {
  const { t } = useTranslation();

  return (
    <Container id="feedbacks">
      <span className="title">{t('feedbacks_title')}</span>

      <div>
        <h2>{t('feedbacks_subtitle')}</h2>
        <a href="#">
          {t('view_more')} <MdKeyboardArrowRight />
        </a>
      </div>

      <ul>
        {[1, 2].map((feedback) => (
          <li key={feedback}>
            <div className="image" />
            <div>
              <div>
                <div className="info-user">
                  <div>
                    <strong>Brenda Matias</strong>
                    <span>Web developer</span>
                  </div>

                  <div className="stars">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                  </div>
                </div>
                <p>
                  At vero eos censes tantas res gessite sine metu contineret At vero eos censes tantas res gessite sine.
                </p>
              </div>

              <a href="#">
                See project <MdKeyboardArrowRight />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Feedbacks;
