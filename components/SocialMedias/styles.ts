import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 70px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    &::after {
      display: block;
      content: '';
      background-color: ${({ theme }) => theme.white};
      width: 1px;
      height: 83px;
    }

    > a > svg {
      color: ${({ theme }) => theme.white};
    }
  }

  @media only screen and (max-width: 660px) {
    left: 10px;

    > div {
      gap: 20px;

      > a > svg {
        font-size: 16px;
      }
    }
  }
`;
