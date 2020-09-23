import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../images/timer.png';
const TimPic=(props)=>{  
    return (
      <Fragment>
        <img src={pic}/>
        <NavLink exact to='/timer' className='nav-link' activeStyle={{fontWeight: "bold",color: "red"}}>
          在线计算器
        </NavLink>
      </Fragment>
    );
}

export default TimPic;