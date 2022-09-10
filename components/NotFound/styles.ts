import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  position: relative;

  > .image {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;

    > h1 {
      font-size: 90px;
    }

    > strong {
      display: block;
      margin-bottom: 10px;
      font-weight: 600;
    }

    > p {
      text-align: center;
      margin-bottom: 40px;
    }
  }

  .button {
    background: #cc022a !important;
  }

  @media only screen and (max-width: ${({ theme }) => theme.width}) {
    height: 900px;
  }

  @media only screen and (max-width: 900px) {
    background-size: calc(100% + 200px);
  }

  @media only screen and (max-width: 600px) {
    background-size: 800px;
  }

  .button {
    background-color: aliceblue;
  }
`;
