import React, { useEffect, useRef, useState } from 'react';
import { Container, PageButton, PagesSelector, SocialSection } from './styles';
import Logo from '../../assets/valorant-logo.svg';
import GitICon from '../../assets/gitIcon.png';
import Icon from '../Icon';
import { useLocation, useNavigate } from 'react-router-dom';

// import { Container } from './styles';

const NavBar: React.FC = () => {
  const [barPosition, setBarPosition] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 48,
  });
  const selectedPageRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPageRef.current) {
      const left = selectedPageRef.current.offsetLeft;
      const width = selectedPageRef.current.offsetWidth;
      setBarPosition({ left, width });
    }
  }, [pathname, selectedPageRef]);
  return (
    <Container>
      <div>
        <Icon svg={Logo} size={30} />
        <PagesSelector left={barPosition.left} width={barPosition.width}>
          <PageButton
            isSelected={pathname === '/'}
            onClick={() => navigate('/')}
            ref={pathname === '/' ? selectedPageRef : null}
          >
            <p>Home</p>
          </PageButton>
          <PageButton
            isSelected={pathname === '/agents'}
            onClick={() => navigate('/agents')}
            ref={pathname === '/agents' ? selectedPageRef : null}
          >
            <p>Agents</p>
          </PageButton>
          <PageButton
            isSelected={pathname === '/guns'}
            onClick={() => navigate('/guns')}
            ref={pathname === '/guns' ? selectedPageRef : null}
          >
            <p>Guns</p>
          </PageButton>
        </PagesSelector>
      </div>
      <SocialSection>
        <a href={' https://github.com/luizokada'} target="_blank">
          <Icon svg={GitICon} size={30} />
          <p>Visit my github</p>
        </a>
      </SocialSection>
    </Container>
  );
};

export default NavBar;
