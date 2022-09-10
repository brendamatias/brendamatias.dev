import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;

  > div {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 60px;

      > button {
        background-color: transparent;
        padding: 0;

        > svg {
          font-size: 22px;
        }
      }
    }
    @media only screen and (max-width: ${({ theme }) => theme.width}) {
      width: 100%;
    }
  }

  &.header-scroll {
    background-color: ${({ theme }) => theme.secondary};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.4);
  }
`;
