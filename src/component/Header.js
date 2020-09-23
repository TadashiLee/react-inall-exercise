import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to='/' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
          Home
        </NavLink>
        <NavLink exact to='/caculater' className='nav-link' activeStyle={{fontWeight: "bold",color: "red"}}>
          在线计算器
        </NavLink>
        <NavLink exact to='/timer' className='nav-link' activeStyle={{fontWeight: "bold",color: "red"}}>
          在线倒计时器
        </NavLink>
      </nav>
    );
  }
}

export default Header;