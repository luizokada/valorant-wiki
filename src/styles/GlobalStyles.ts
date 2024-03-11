import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'VALORANT', sans-serif;
    font-weight: 500;
    box-sizing: border-box;
  }

  main{
    display: flex;
    max-width: 100%;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
  }

  body{
    background-color: ${({ theme }) => theme.Colors.Gray._100};
  }


  button{
    cursor: pointer;
  }


  a{
    color: ${({ theme }) => theme.Colors.Gray._600}
  }

  a:visited{
    color: ${({ theme }) => theme.Colors.Gray._1000}
  }

  

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a3a3a3;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: content-box;
  }
`;
