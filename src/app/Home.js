import React from 'react';
import './home.less';
import '../component/CacuPic'
import CacuPic from '../component/CacuPic';
import TimPic from '../component/TimPic';
const Home = () => {
  return (<div className="home">
    <CacuPic />
    <TimPic />
  </div>);
};

export default Home;