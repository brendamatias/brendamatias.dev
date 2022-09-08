import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;

    > a {
      margin-bottom: 44px;
    }
  }

  > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;

    > li {
      display: flex;
      gap: 27px;
      align-items: flex-start;
      flex-wrap: wrap;

      > .image {
        width: 170px;
        height: 170px;
        border-radius: 30px 30px 0px 30px;
        background: ${({ theme }) => theme.primary};
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        > div {
          > .info-user {
            display: flex;
            justify-content: space-between;

            > .stars {
              color: #feac36;
              display: flex;
              gap: 2px;
              font-size: 16px;
            }

            > div {
              > strong {
                display: block;
                font-weight: 600;
              }

              > span {
                font-weight: 400;
                font-size: 12px;
                color: ${({ theme }) => theme.gray};
              }
            }
          }

          > p {
            color: #ffffff;
            max-width: 300px;
            margin-top: 10px;
          }
        }

        @media only screen and (max-width: 600px) {
          height: auto;

          > div > p {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;
