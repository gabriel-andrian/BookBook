import React from 'react';
import { useLocation } from 'react-router-dom';

import { Background, Box } from '../../style';
import Login from '../login';

const PageLoginRegister = () => {
  return (
    <Background className="background-login">
      <Box>
        <Login />
      </Box>
    </Background>
  );
};

export default PageLoginRegister;
