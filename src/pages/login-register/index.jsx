import React from 'react';
import { Background, Box } from '../../style';
import { useLocation } from 'react-router-dom';

const PageLoginRegister = () => {
  const location = useLocation();

  if (location.pathname === '/register') {
    return (
      <Background className="backgroud-login">
        <Box></Box>
      </Background>
    );
  }

  return (
    <Background className="backgroud-login">
      <Box></Box>
    </Background>
  );
};

export default PageLoginRegister;
