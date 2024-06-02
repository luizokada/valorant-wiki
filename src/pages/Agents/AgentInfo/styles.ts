import styled, { css, keyframes } from 'styled-components';

export const showUp = keyframes`
0% {
    opacity: 0;
    transform: translateY(100px);
    }
100% {
    opacity: 1;
    transform: translateY(0);
    }

`;
export const AgentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  * {
    font-family: Tungsten-Bold, arial, georgia, sans-serif;
  }
`;

type AgentInfoProps = {
  isVisible: boolean;
};

export const AgentTopSectionContainer = styled.div<AgentInfoProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;
  img {
    max-width: 500px;
  }
  .thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 72px;
    min-width: 72px;
    max-height: 72px;
    max-width: 72px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.Colors.Gray._300};
    background-color: ${({ theme }) => theme.Colors.Gray._500};
    img {
      min-height: 56px;
      min-width: 56px;
      max-height: 56px;
      max-width: 56px;
    }
  }
  .info {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      color: ${({ theme }) => theme.Colors.Gray._700};
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
    h1 {
      font-size: 28px;
      font-weight: 500;
      color: ${({ theme }) => theme.Colors.Gray._1000};
    }

    ${({ isVisible }) =>
      isVisible &&
      css`
        animation: ${showUp} 0.5s ease-in-out;
      `}
  }
`;

export const RoleInfofContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    font-size: 20px !important;
  }
`;

export const AbilitysWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

type AbilityThumbContainerProps = {
  isSelected: boolean;
};
export const AbilityThumbContainer = styled.div<AbilityThumbContainerProps>`
  display: flex;
  min-height: 64px;
  min-width: 64px;
  max-height: 64px;
  max-width: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, isSelected }) =>
      !isSelected ? theme.Colors.Gray._300 : theme.Colors.Gray._900};
  background-color: ${({ theme }) => theme.Colors.Gray._500};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border: 1px solid ${({ theme }) => theme.Colors.Gray._600};
  }
  img {
    min-height: 30px;
    min-width: 30px;
    max-height: 16px;
    max-width: 16px;
  }
`;

export const AbilityDescriptionContainer = styled.div`
  max-width: 550px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.Gray._1000};
  }
  > p {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.Gray._800};
  }
`;
