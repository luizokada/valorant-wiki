import styled, { keyframes } from 'styled-components';

const waveMove = keyframes`
 0% {
   transform: translate3d(-90px,0px,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }


`;
export const Container = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0px;
  .waves {
    height: 50vh;
    position: relative;
    width: 100vw;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 70px;
    max-height: 80px;
  }
  .parallax > use {
    animation: ${waveMove} 20s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;
