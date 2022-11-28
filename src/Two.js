import React from "react";

class Two extends React.Component{
    state = {
        msg:"hey siri"
    }
    gmHandler = ()=>{
    
        this.setTwo({msg:"hey"});
    }
    

    render(){
       return (
       <div><h1>My Messege:{this.set.msg}</h1>
       <button onClick={this.gmHandler}>heelo</button>
       </div>
       
       )
    }
}
export default Two