import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  padding-top: 70px;
  gap: 50px;
  width: 100%;
  overflow-x: hidden;
  flex-direction: column;
`;

export const AgentsIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: calc(100% - 400px);

  flex-wrap: wrap;

  @media (max-width: 1000px) {
    overflow-x: auto;
  }
`;

type AgentIconProps = {
  isSelected: boolean;
};
export const AgentIcon = styled.div<AgentIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  position: relative;
  background-color: ${({ theme }) => theme.Colors.Gray._000};
  .tag {
    display: none;

    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.Colors.Gray._1000};
    width: 20px;
    height: 20px;
    border-radius: 0 0 4px 0px;

    align-items: center;
    justify-content: center;

    > p {
      color: ${({ theme }) => theme.Colors.Gray._000};
      font-size: 12px;

      font-weight: 700;
    }
  }
  ${({ isSelected }) =>
    isSelected
      ? css`
          border: 2px solid ${({ theme }) => theme.Colors.Gray._800};
          .tag {
            display: flex;
            position: absolute;
          }
        `
      : `
    `}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    z-index: 2;
  }
`;
