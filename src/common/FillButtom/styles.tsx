import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  position: relative;
  width: 200px;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.Colors.Gray._300};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  > * {
    color: ${({ theme }) => theme.Colors.Gray._1000};
    font-size: 16px;
  }
  > * {
    z-index: 1;
  }

  &:before {
    content: ' ';
    position: absolute;
    border-right: 50px solid transparent;
    border-top: 48px solid ${({ theme }) => theme.Colors.Red._800};
    transform: translateX(-100%);
    transition: transform 1s;
    min-width: 100%;
    z-index: 0;
  }

  &:after {
    content: ' ';
    position: absolute;
    border-top: 10px solid transparent;
    border-right: 10px solid ${({ theme }) => theme.Colors.Gray._1000};
    transform: translateX(100%);
    right: 0;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    min-width: 10px;
    z-index: 0;
    bottom: 0;
  }

  &:hover {
    > * {
      color: ${({ theme }) => theme.Colors.Gray._100};
      transition: all 0.5s;
    }
    &:before {
      transform: translateX(10px);
    }
    &:after {
      transition-delay: 0.7s;
      transform: translateX(0);
    }
  }
`;
