import React from 'react';
import { Container } from './styles';
import FillButtom from '../../common/FillButtom';
import { useNavigate } from 'react-router-dom';
import ConfusedSage from '../../assets/horror.jpg';

// import { Container } from './styles';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <div className="top-left-image">
          <img src={ConfusedSage} />
        </div>
        <h1>Ops!</h1>
        <p>Page not found!</p>
        <FillButtom
          onClick={() => {
            navigate('/');
          }}
        >
          <span>Go to Homepage</span>
        </FillButtom>
      </div>
    </Container>
  );
};

export default NotFound;
