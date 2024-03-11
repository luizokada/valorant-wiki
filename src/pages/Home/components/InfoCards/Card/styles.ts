import styled, { css, keyframes } from 'styled-components';

const popAnimation = keyframes`
0%{
    transform: scale(0.6);
}
100%{
    transform: scale(1);
}
`;

type CardProps = {
  isVisible: boolean;
};
export const CardContainer = styled.div<CardProps>`
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${popAnimation} 0.5s ease-in-out;
    `}

  min-width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${({ theme }) => theme.Colors.Gray._200};
  padding: 24px;
  justify-content: flex-end;
  transition: transform 0.3s ease-in;
  img {
    max-width: 200px;
    max-height: 200px;
    mix-blend-mode: multiply;
  }

  :hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.Colors.Gray._800};
    transform: scale(1.1);
  }
`;
