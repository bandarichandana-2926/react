import React from "react"

class State extends React.Component{
   
state = {
    msg:"hello"
}
gmhandler = ()=>{
    
    this.setState({msg:"hey"});
}
 
render(){

    return (
        <div>
        <h1>Message:{this.state.msg}</h1>
        <button onClick={this.gmhandler}>gn</button>
        </div>
    )
}
}
export default State