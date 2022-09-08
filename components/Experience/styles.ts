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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(501px, 1fr));
    gap: 58px;

    > li {
      > h3 {
        margin-bottom: 5px;
        font-weight: 600;
        font-size: 16px;

        > span {
          color: ${({ theme }) => theme.primary};
        }
      }

      > h4 {
        font-weight: 400;
        font-size: 13px;
        color: ${({ theme }) => theme.gray};
      }

      > p {
        font-weight: 400;
        margin-top: 6px;
      }
    }

    @media only screen and (max-width: 501px) {
      grid-template-columns: 1fr;
    }
  }
`;
