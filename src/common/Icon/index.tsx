import React from 'react';
import { IconImg } from './styles';

// import { Container } from './styles';

const Icon: React.FC<{
  svg: string;
  size?: number;
  opacity?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}> = ({ svg, size, opacity, style, onClick }) => {
  return (
    <IconImg
      src={svg}
      size={size}
      opacity={opacity}
      onClick={onClick}
      style={style}
    />
  );
};

export default Icon;
