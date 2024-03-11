import styled from 'styled-components';

export const Container = styled.footer`
  min-height: 60px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Gray._1000};
  gap: 12px;
  .line {
    height: 15px;
    width: 1px;
    background-color: ${({ theme }) => theme.Colors.Gray._300};
  }
  > a {
    display: flex;
    align-items: center;
  }
`;
