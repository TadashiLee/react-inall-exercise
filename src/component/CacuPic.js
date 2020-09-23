import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../images/calculator.png';
const CacuPic=(props)=>{  
    return (
      <Fragment>
        <img src={pic}/>
        <NavLink exact to='/caculater' className='nav-link' activeStyle={{fontWeight: "bold",color: "red"}}>
          在线计算器
        </NavLink>
      </Fragment>
    );
}

export default CacuPic;