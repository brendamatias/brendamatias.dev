import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 120px 46px 20px 46px;
  background-color: #090917;

  > p {
    text-align: center;
    max-width: 356px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 140px;
    margin-top: 30px;

    > a {
      display: inline-block;
      color: ${({ theme }) => darken(0.1, theme.primary)};
      font-weight: 600;
      font-size: 18px;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  > span {
    font-size: 12px;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
