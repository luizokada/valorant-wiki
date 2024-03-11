import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;

  width: 100vw;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: scroll;

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
  height: 40vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: rgb(250, 82, 82);

  background: linear-gradient(
    90deg,
    rgba(250, 82, 82, 1) 36%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  > h1 {
    font-size: 3rem;
    color: white;
    margin-left: 10%;
    line-height: 150%;
    font-weight: 600;
  }

  > img {
    max-width: 45%;
    max-height: 40%;
    margin-right: 20%;
    animation: ${floatAnimation} 5s ease-in-out infinite;
  }
`;
