import React from 'react'

class Registration extends React.Component{
    state = {
        username:"",
        email:"",
        phone:"",
        state:"",
        city:"",
        password:"",
    }
    updateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
 render(){
    return(
        <>
        <h1>Registration Form </h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label>UserName</label>
            <input type = "text" onChange={this.updateHandler} name="username"/><br/><br/>
            <label>Email</label>
            <input type ="text" onChange={this.updateHandler} name="email"/><br/><br/>
            <label>Phone NO.</label>
            <input type="number" onChange={this.updateHandler} name="phone"/><br/><br/>
            <label>State </label>
            <input type = "text" onChange={this.updateHandler} name="state"/><br/><br/>
            <label>City</label>
            <input type = "text" onChange={this.updateHandler} name="city"/><br/><br/>
            <label>Password</label>
            <input type="password" onChange={this.updateHandler} name="password"/><br/><br/>
            <input type ="submit" value="Sign in"/>
        
                </form>
     
        </>
    )
 }
}
export default Registration