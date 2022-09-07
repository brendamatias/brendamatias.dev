import styled from 'styled-components';

type ContainerProps = {
  width: number;
};

export const Container = styled.div<ContainerProps>`
  margin-bottom: 16px;
  width: 100%;

  > strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
  }

  > .progress {
    margin-top: 10px;
    width: 180px;
    height: 3px;
    background: #d9d9d9;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: ${({ width }) => `${width}%`};
      height: 3px;
      background: ${({ theme }) => theme.primary};
    }

    @media only screen and (max-width: 558px) {
      min-width: 100%;
    }
  }
`;
