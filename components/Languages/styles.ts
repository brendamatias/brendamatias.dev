import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > button {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);

    &:hover,
    &.active {
      color: rgba(255, 255, 255, 1);
      background-color: transparent;
    }
  }
`;
