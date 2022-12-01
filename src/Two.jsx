import React from 'react'

class Two extends  React.Component{
    state= {
        name:""
    }
    changeHandler =(x)=>{
    
    }
    render(){
        return(
            <>
            <fieldset>
                <legend>Sign in </legend>
            <form>
                <label>Email:</label>
                <input type="email" placeholder='Enter your email'/><br/>
                <label>Password:</label>
                <input type="password" placeholder='Enter your password'/><br/>
                <input type="submit" value="submit" />
            </form>
            </fieldset>
            </>
        )
    }
}
export default Two