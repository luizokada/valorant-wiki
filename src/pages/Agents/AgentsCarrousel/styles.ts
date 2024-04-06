import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  margin: 0 auto;
  gap: 20px;
  overflow-x: auto;
  overflow-y: visible;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
    width: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: max-content;
  user-select: none;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  img {
    min-width: 350px;
    min-height: 350px;
    max-width: 350px;
    max-height: 350px;
    transition: all 0.5s ease-in-out;
  }

  :hover {
    cursor: pointer;
  }
`;
