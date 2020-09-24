import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Text from './Text';
import '../css/Caculater.css'

class Caculater extends Component {
  
    state={
        string:""
    }

handleButton=(e)=>{
    if (e.target.value!==undefined){
        let input=e.target.value;
        let prvcontent=this.state.string;
        let content="";
        if (input==="+"||input==="-"||input==="*"||input==="/"){
            content=prvcontent+" "+input+" ";
        }
        else if (input==="Clear"){
            content="";
        }
        else if (input==="="){
            let arr=prvcontent.split(" ");
            let ans=[];
            let i=0;
            while (i<arr.length){
                if (arr[i]==="")
                    i++;
                else if (arr[i]==="+"){
                    ans.push(arr[i+1]);
                    i+=2;
                }
                else if (arr[i]==="-"){
                    ans.push(-arr[i+1]);
                    i+=2;
                }
                else if (arr[i]==="*"){
                    let a;
                    let b=ans.pop();
                    if(arr[i+1]==="-"){
                        a=-arr[i+2];
                        i+=3;
                    }
                    else {
                        a=arr[i+1];
                        i+=2;
                    }
                    ans.push(b*a);
                }
                else if (arr[i]==="/"){
                    let a;
                    let b=ans.pop();
                    if (arr[i+1]==="0"){
                        content="ERROR!";
                        return;
                    }
                    else if(arr[i+1]==="-"){
                        a=-arr[i+2];
                        i+=3;
                    }
                    else {
                        a=arr[i+1];
                        i+=2;
                    }
                    ans.push(b/a);
                }
                else {
                    ans.push(arr[i]);
                    i++;
                }

            }
            // console.log(ans);
            let fin_ans=parseFloat(ans[0]);
            for (i=1;i<ans.length;i++)
                fin_ans+=parseFloat(ans[i]);
            content=fin_ans;
        }
        else{
            content=prvcontent+input;
        }
        this.setState({
            string:content
        })
    }
}
  
  render() {
    return (
      <div id="main">
                <div id="input_text">
                    <Text value={this.state.string}/>
                </div>
                <div id="input_button" onClick={this.handleButton}>
                    <Button value={1}/>
                    <Button value={2}/>
                    <Button value={3} />
                    <Button value={"+"} className={"js_size"}/>
                    <Button value={"-"}  className={"js_size"}/>
                    <Button value={4}/>
                    <Button value={5}/>
                    <Button value={6}/>
                    <Button value={"*"} className={"js_size"}/>
                    <Button value={"/"} className={"js_size"}/>
                    <Button value={7}/>
                    <Button value={8}/>
                    <Button value={9} />
                    <Button value={0}/>
                    <Button value={"Clear"} className={"clear_size"}/>   
                    <Button value={"="} className={"equal_size"}/>
        </div>
        <div>
            <NavLink exact to='/' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
              回到主页
           </NavLink>
        </div>    
      </div>
    );
  }
}

export default Caculater;