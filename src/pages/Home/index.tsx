import React from 'react';
import BlackLogo from '../../assets/blackLogo.png';
import FillButtom from '../../common/FillButtom';
import InfoCards from './components/InfoCards';
import Waves from './components/Waves';
import {
  AboutSection,
  HomeContainer,
  WelcomeSecitonText,
  WelcomeSection,
} from './styles';
import useVisibility from '../../hooks/useVisibility';
import Footer from '../../common/Footer';

// import { Container } from './styles';

const Home: React.FC = () => {
  const [isWelcomeVisible, welcomeSectionTextRef] =
    useVisibility<HTMLDivElement>();
  return (
    <HomeContainer>
      <WelcomeSection>
        <WelcomeSecitonText
          isVisible={isWelcomeVisible}
          ref={welcomeSectionTextRef}
        >
          <h1>
            Welcome!
            <br /> To Valorant wiki
          </h1>
          <FillButtom
            onClick={() => {
              document
                .getElementById('about-section')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <p>Learn more</p>
          </FillButtom>
        </WelcomeSecitonText>
        <img src={BlackLogo} />
        <Waves />
      </WelcomeSection>
      <AboutSection id="about-section">
        <div className="title">
          <h1>Avaible contents on this wiki</h1>
        </div>
        <InfoCards />
      </AboutSection>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
