import styled from 'styled-components';

export const Container = styled.div`
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
      flex-direction: column;
      max-width: 302px;

      > .image {
        width: 100%;
        height: 180px;
        background: ${({ theme }) => theme.primary};
        border-radius: 4px;
        margin-bottom: 18px;
      }

      > strong {
        font-weight: 600;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 6px;

        > span {
          display: flex;
          align-items: center;
          gap: 10px;
          color: ${({ theme }) => theme.gray};
          font-size: 13px;

          &:first-child::after {
            content: '';
            width: 2px;
            height: 10px;
            background-color: rgba(171, 171, 171, 0.5);
            margin-left: 6px;
          }
        }
      }
    }
  }
`;
