import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);

  > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;

    > li {
      display: flex;
      gap: 16px;
      align-items: flex-start;

      > div {
        &.icon {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          min-height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 6px;

          > svg {
            font-size: 40px;
          }
        }

        > span {
          display: block;
          font-weight: 700;
          font-size: 18px;
          color: ${({ theme }) => theme.primary};
          margin-bottom: 10px;
        }

        > p {
          margin-top: 10px;
          font-size: 14px;
          line-height: 25px;
          max-width: 205px;
          color: ${({ theme }) => theme.gray};
        }
      }
    }
  }
`;
