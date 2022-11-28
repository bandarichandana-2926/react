import React from "react"

class State extends React.Component{
   
state = {
    msg:"hello"
}
gmhandler = ()=>{
    
    this.setState({msg:"hey"});

   
}
gnHandler = () => {
    this.setState({msg:"hey siri"})
}
 
render(){

    return (
        <div>
        <h1>Message:{this.state.msg}</h1>
        <button onClick={this.gnHandler}>gn</button> &nbsp;
        <button onClick={this.gmhandler}>gm</button>
        </div>
    )
}
}
export default State