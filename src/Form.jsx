import React, { Component } from 'react'

class Form extends React.Component{
   
    state={
        username:"",
        email:"",
        phone:"",  
        password:""
    
}

    
    updateHandler=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
submitHandler = (event)=>{
    event.preventDefault()
    console.log(this.state)
}
render(){
    return(
        <>
        
        <h1>Registration Form</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            
            <label>UserName: </label>
            <input type = "text" onChange={this.updateHandler} name="username" /><br/><br/>
            <label>Email:</label>
            <input type="text" onChange={this.updateHandler} name="email"/><br/><br/>
            <label>Phone No.:</label>
            <input type="text" onChange={this.updateHandler} name="phone"/><br/><br/>
            <label>password:</label>
            <input type="text" onChange={this.updateHandler} name="password"/><br/><br/>
            
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}

}
export default Form