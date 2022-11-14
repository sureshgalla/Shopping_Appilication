import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import homeIcon from'./Images/Vector.jpg';
import lineIcon from './Images/line.png';
import cartIcon from './Images/Cart.png';

export class Header extends Component {
  render() {
    return (
      <nav className='home'>
        <img src={homeIcon}alt='i' className='homeIcon'/>
        <NavLink to='/' className='homeStyle'>Home</NavLink>
        <img src={lineIcon} className='lineStyle' alt=''/>
        <NavLink to='/cart' className='cartStyle'>Cart</NavLink>
        <img src={cartIcon} className='cartIconStyle' alt=''/>
      </nav>
    )
  }
}

export default Header
