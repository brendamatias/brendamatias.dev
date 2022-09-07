import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  width: 100%;

  > div {
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      background-color: transparent;
      padding: 0;

      > svg {
        font-size: 22px;
      }
    }

    @media only screen and (max-width: ${({ theme }) => theme.width}) {
      width: 100%;
    }
  }
`;
