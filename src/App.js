import React, { useState, useEffect } from 'react';
import { BookList } from './components';
import axios from 'axios';

import Routers from './routers';

import './App.css';

const App = () => {
  return <Routers />;
};

export default App;

/* TODO:
  - fazer os modais de acordo com os tipos passados pelo componente card-and-modal; OK
  - useMemo para pegar a description e colocar no modal; OK
  - ver mudança de prateleiras a partir dos modais que aparecem apenas nas shelves; OK
  - acrescentar espaço de input para review + grade que vai pra API do João; OK*/
