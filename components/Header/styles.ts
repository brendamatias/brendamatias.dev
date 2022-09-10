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

      > .nav {
        position: relative;

        > button {
          background-color: transparent;
          padding: 0;

          > svg {
            font-size: 22px;
          }
        }

        > ul {
          position: absolute;
          background-color: ${({ theme }) => theme.white};
          top: 35px;
          width: 200px;
          right: 0;
          display: none;
          flex-direction: column;
          border-radius: 4px;
          overflow: hidden;

          &.visible {
            display: flex;
          }

          > li {
            > button {
              color: ${({ theme }) => theme.secondary};
              padding: 15px 20px;
              width: 100%;
              text-align: left;

              &:hover {
                color: ${({ theme }) => theme.white};
                background-color: ${({ theme }) => theme.primary};
              }
            }
          }
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
