import React from 'react';
import { HomeContainer, WelcomeSection } from './styles';
import Waves from './components/Waves';
import BlackLogo from '../../assets/blackLogo.png';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <WelcomeSection>
        <h1>
          Welcome!
          <br /> To Valorant wiki
        </h1>
        <img src={BlackLogo} />
        <Waves />
      </WelcomeSection>
    </HomeContainer>
  );
};

export default Home;
