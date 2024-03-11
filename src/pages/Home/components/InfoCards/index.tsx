import React from 'react';

import { Container } from './styles';
import ChibJeet from '../../../../assets/chibJett.jpg';
import Classic from '../../../../assets/classic.webp';
import Spray from '../../../../assets/spray.png';
import Map from '../../../../assets/map.png';
import Card from './Card';

const InfoCards: React.FC = () => {
  return (
    <Container>
      <Card alt="Agent" img={ChibJeet} title="Agents" goTo="/agents" />
      <Card alt="Weapon" img={Classic} title="Weapons" goTo="wepons" />
      <Card alt="Spray" img={Spray} title="Sprays" goTo="/sprays" />
      <Card alt="Map" img={Map} title="Maps" goTo="/maps" />
    </Container>
  );
};

export default InfoCards;
