import React from 'react';
import { Button } from './styles';

// import { Container } from './styles';

interface FillButtomProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FillButtom: React.FC<FillButtomProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default FillButtom;
