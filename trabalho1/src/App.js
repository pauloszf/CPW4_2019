import React from 'react';

import Menu from './components/Menu/Menu';
import Router from './components/routes/Router';
import sword from './img/sword.png';
import './App.scss';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="inicio">
        <div className="menu">
          <Menu />
        </div>
        <div className="conteudo">
          <Router />
        </div>
          <img className="appImg" src={sword} alt="espadas cruzadas"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
