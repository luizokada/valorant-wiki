import React from 'react';
import { Container } from './styles';
import GitHub from '../../assets/github-mark-white.svg';
import Icon from '../Icon';
import Linkdin from '../../assets/linkedin.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://github.com/luizokada/valorant-wiki" target="_blank">
        <Icon svg={GitHub} size={20} />
      </a>
      <div className="line"></div>
      <a
        href="https://www.linkedin.com/in/luiz-fernando-okada-8a9815188/"
        target="_blank"
      >
        <Icon svg={Linkdin} size={20} />
      </a>
    </Container>
  );
};

export default Footer;
