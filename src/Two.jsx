import React from 'react'

class Two extends  React.Component{
    state= {
        email:"",
        password:""

    }
    changeHandler =(event)=>{
          this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
           this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
        // console.log(this.state)
        
    }
    render(){
        return(
            <>
                <pre>{JSON.stringify(this.state)}</pre>
                <legend>Sign in </legend>
            <form onSubmit={this.submitHandler}>
                <label>Email:</label>
                <input type="text" placeholder='Enter your email' onChange={this.changeHandler}/><br/>
                <label>Password:</label>
                <input type="password" placeholder='Enter your password' onChange={this.passwordHandler}/><br/>
                <input type="submit" value="submit" />
            </form>
            
            </>
        )
    }
}
export default Two