import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > button {
    text-decoration: none;
    font-size: 14px;
    background-color: transparent;
    padding: 0;
    text-transform: none;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);

    &:hover,
    &.active {
      color: rgba(255, 255, 255, 1);
      background-color: transparent;
    }
  }
`;
