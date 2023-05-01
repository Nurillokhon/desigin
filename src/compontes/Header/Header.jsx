import React from 'react';
import './header.css'
import logo from '../../assets/Logo.png'
import Frame from '../../assets/Frame284.png'
import Logo from '../../assets/LogoWall.png'

const Header = () => {
  return (
    <div className='headerr'>
      <div className='container text-light pt-2'>
        <nav className='d-flex justify-content-between align-items-center'>
          <img src={logo} alt="salom" />
          <ul className='d-flex justify-content-between align-items-center'>
            <li className='list-group-items'>Product</li>
            <li className='list-group-items'>Services</li>
            <li className='list-group-items'>About</li>
            <li className='list-group-items'>Log In</li>
          </ul>
        </nav>
      </div>
      <div className='mt-5'>
        <img src={Frame} alt="salom" />
      </div>
      <div className='py-2 mt-4'>
      <img src={Logo} alt="salom" />
      </div>
    </div>
  );
}

export default Header;
