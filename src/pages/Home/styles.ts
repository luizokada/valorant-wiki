import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;

  width: 100vw;
  flex-direction: column;
  gap: 20px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Gray._000};

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
    width: 0;
  }
`;

export const floatAnimation = keyframes`
   0% {
    transform: translateY(0px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0px);
    }
            `;
export const WelcomeSection = styled.section`
  position: relative;
  min-height: 80vh;
  max-width: 100vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  background: rgb(250, 82, 82);

  background: linear-gradient(
    90deg,
    rgba(250, 82, 82, 1) 36%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  > img {
    max-width: 45%;
    max-height: 250px;
    height: 40%;
    margin-right: 20%;
    animation: ${floatAnimation} 5s ease-in-out infinite;
  }
`;
export const slideIn = keyframes`
  from {
    transform: translateX(-60%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

type WelcomeSectionProps = {
  isVisible: boolean;
};
export const WelcomeSecitonText = styled.div<WelcomeSectionProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  animation: ${slideIn} 1s ease-in-out;
  gap: 16px;
  > h1 {
    font-size: 3rem;
    color: white;
    line-height: 150%;
    font-weight: 600;
  }
  p {
    color: ${({ theme }) => theme.Colors.Gray._000};
  }
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 32px;
  position: relative;
  width: max-content;
  overflow: visible;
  height: max-content;
  margin-bottom: 20px;
  .title {
    position: relative;
    > h1 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.Colors.Gray._800};
    }
    :after {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.Colors.Gray._1000};
      bottom: -5px;
    }

    ::before {
      content: '/';
      position: absolute;
      font-size: 2rem;
      color: ${({ theme }) => theme.Colors.Gray._1000};
      bottom: -27px;
      left: 48%;
      z-index: 1;
      background-color: ${({ theme }) => theme.Colors.Gray._000};
    }
  }
`;
