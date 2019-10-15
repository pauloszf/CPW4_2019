import React from 'react';

import animeLogo from '../img/LogoAnime2.png';
import Logo from '../img/Logo.png';
import './Header.scss';


const Header = () => {
  return(
    <div>
      <div className='menu'>
        <img className="logoSolo" src={Logo} alt=""/>
        <img src={animeLogo} alt=""/>
      </div>
    </div>
)};

export default Header;

