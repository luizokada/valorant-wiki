import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: Tungsten-Bold, arial, georgia, sans-serif;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 12px;
    flex-direction: column;
    h1 {
      color: ${({ theme }) => theme.Colors.Gray._900};
      font-size: 13vh;
      font-weight: 600;

      overflow: hidden;
    }
    p {
      color: ${({ theme }) => theme.Colors.Gray._900};
      font-size: 5vh;
      font-weight: 600;
      margin-bottom: 24px;
    }

    .top-left-image {
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        mix-blend-mode: multiply;
        max-height: 150px;
      }
    }
  }
`;
