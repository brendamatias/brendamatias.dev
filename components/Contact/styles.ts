import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px !important;

  > strong {
    font-size: 24px;
  }

  > p {
    color: rgba(255, 255, 255, 0.8);
    max-width: 682px;
    margin: 5px auto 40px auto;
  }

  @media only screen and (max-width: 600px) {
    padding: 80px 46px !important;
  }
`;
