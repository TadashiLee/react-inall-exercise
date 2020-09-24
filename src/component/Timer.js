import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text';
class Timer extends Component {
  state = {
    time: 0,
    view: "start",
  };
  time = () => {
    // 清除可能存在的定时器
    clearInterval(this.timer)
    // 创建（重新赋值）定时器
    this.timer = setInterval(() => {
      // 当前时间回显-1
      this.setState({
        time: this.state.time - 1,
        view: this.state.time - 1 + " seconds",
      }, () => {
        // 判断修改后时间是否小于1达到最小时间
        if (this.state.time <= 0) {
          // 清除定时器
          this.setState({view:"End",});
          clearInterval(this.timer);
          // 结束定时器循环
          return;
        }
        // 循环自调用
          this.time();
      });
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }

  handleTimeChange = (event)=>{
    this.setState({
      time: event.target.value,
      view:"Start",
    });
  };
  
  render() {
    return (
      <div>
        <div id="content">
            <input type="text" value={this.state.time} onChange={(e)=>this.handleTimeChange(e)}/>
        </div>
        <div id="view">
            <h1>{this.state.view}</h1>
        </div>
        <div>
          <input type="button" className="setTime" value="开始计时" onClick={this.time}/>
        </div>
        <NavLink exact to='/' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
          回到主页
        </NavLink>
      </div>
    );
  }
}

export default Timer;
