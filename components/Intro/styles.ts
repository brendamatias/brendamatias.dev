import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  background-image: url('/background.png');
  background-position: bottom -144px right -190px;
  background-repeat: no-repeat;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > span {
      display: block;
      margin-bottom: 7px;
      font-weight: 400;
    }

    > strong {
      display: block;
      margin-bottom: 60px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.gray};
    }
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
`;
