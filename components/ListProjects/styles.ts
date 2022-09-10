import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  > li {
    height: 188px;
    width: 320px;
    position: relative;
    filter: drop-shadow(0px 4px 57px rgba(255, 255, 255, 0.04));

    > a {
      .image {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;

        img {
          border-radius: 4px;
        }
      }

      > .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 22px 14px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0.9) 26.86%, rgba(0, 0, 0, 0) 77.66%);

        > .technologies {
          display: flex;
          gap: 5px;
          margin-top: 4px;
          font-size: 12px;
          color: ${({ theme }) => theme.gray};

          > div:not(:last-child) {
            display: flex;
            align-items: center;

            &::after {
              display: block;
              content: '';
              height: 1px;
              width: 5px;
              margin-left: 3px;
              background-color: ${({ theme }) => theme.gray};
            }
          }
        }
      }
    }
  }
`;
