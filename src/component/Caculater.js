import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Caculater extends Component {
  render() {
    return (
      <div>
        <p>This is a Caculater</p>
        <NavLink exact to='/' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
          回到主页
        </NavLink>
      </div>
    );
  }
}

export default Caculater;