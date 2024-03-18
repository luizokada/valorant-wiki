import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;

  position: relative;
  height: 250px;
  margin: 0 auto;
  .none {
    opacity: 0;
    position: absolute;
    z-index: -10;
  }
`;

type ImageWrapperProps = {
  right: number;
  scale: number;
  imageWidth: number;
  imageHeight: number;
  zIndex: number;
  opacity: number;
};
export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: max-content;
  height: max-content;
  position: absolute;
  transition-property: left, opacity, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  opacity: ${({ opacity }) => opacity};
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({ right }) => `${right}px`};
  flex-direction: column;
  transform: ${({ scale }) => `scale(${scale})`};
  z-index: ${({ zIndex }) => zIndex};
  img {
    max-width: ${({ imageWidth }) => `${imageWidth}px`};
    max-height: ${({ imageHeight }) => `${imageHeight}px`};

    transition: all 0.5s ease-in-out;
  }

  :hover {
    cursor: pointer;
    transform: scale(${({ scale }) => Math.max(scale, 1.2)});
  }
`;
