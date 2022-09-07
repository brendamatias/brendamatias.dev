import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;

  > div {
    > p {
      max-width: 512px;
    }

    &.right-content {
      > .numbers {
        display: flex;
        gap: 49px;
        margin-bottom: 72px;

        > div {
          > strong {
            display: block;
            font-weight: 700;
            font-size: 42px;
            line-height: 30px;
            color: #cc022a;
            margin-bottom: 11px;
          }

          > span {
            font-weight: 600;
            font-size: 18px;
            line-height: 30px;
          }
        }
      }

      > .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 90px;

        @media only screen and (max-width: 558px) {
          flex-direction: column;
          gap: 0;
        }
      }
    }
  }
`;
