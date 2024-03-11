import React from 'react';
import { CardContainer } from './styles';
import useVisibility from '../../../../../hooks/useVisibility';
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

interface CardProps {
  img: string;
  title: string;
  alt: string;
  goTo: string;
}
const Card: React.FC<CardProps> = ({ img, title, alt, goTo }) => {
  const [isVisible, containerRef] = useVisibility<HTMLDivElement>();
  const navigate = useNavigate();
  return (
    <CardContainer
      isVisible={isVisible}
      ref={containerRef}
      onClick={() => navigate(goTo)}
    >
      <img src={img} alt={alt} />
      <h1>{title}</h1>
    </CardContainer>
  );
};

export default Card;
