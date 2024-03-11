import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.Colors.Gray._1000};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  > div {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 12px;
    > img {
      margin-left: 12px;
      margin-bottom: 4px;
    }
  }
`;

type PagesSelectorProps = {
  left: number;
  width: number;
};
export const PagesSelector = styled.div<PagesSelectorProps>`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;

  ::after {
    content: ' ';
    position: absolute;
    width: ${({ width }) => `${width}px`};
    height: 2px;
    background-color: ${({ theme }) => theme.Colors.Gray._000};
    bottom: 3px;
    left: ${({ left }) => `${left}px`};
    transition-property: left, width;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`;

type PageButtonProps = {
  isSelected: boolean;
};
export const PageButton = styled.div<PageButtonProps>`
  min-width: 48px;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  cursor: pointer;

  :hover {
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.8)};
  }
  > p {
    color: ${({ theme }) => theme.Colors.Gray._000};
    font-size: 16px;
    font-weight: 600;
    margin: 0 8px;
    font-weight: ${({ isSelected }) => (isSelected ? 500 : 400)};
  }
`;

export const SocialSection = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-right: 12px;
  overflow: hidden;

  > a {
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    > p {
      color: ${({ theme }) => theme.Colors.Gray._000};
      font-size: 16px;
      margin-top: 4px;
      white-space: nowrap;
    }
    max-width: 30px;
    transition: max-width 0.5s;
    :hover {
      max-width: 200px;
    }
  }
`;
