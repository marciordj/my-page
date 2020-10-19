import React from 'react';
import './index.css';

import Menu from './Menu';
import Title from './Title/index';

const Header = () => {
  return (
    <div className='header'>
      <Title />
      <Menu />
    </div>
  )
}


export default Header;