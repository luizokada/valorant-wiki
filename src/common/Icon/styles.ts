import styled from 'styled-components';

type IconImgProps = {
  size?: number;
  opacity?: number;
};

export const IconImg = styled.img<IconImgProps>`
  width: ${({ size }) => (size ? `${size}px` : '30px')};
  height: ${({ size }) => (size ? `${size}px` : '30px')};
  min-width: ${({ size }) => (size ? `${size}px` : '30px')};
  min-height: ${({ size }) => (size ? `${size}px` : '30px')};
  opacity: ${({ opacity }) => opacity || 1};
  object-fit: contain;
`;
