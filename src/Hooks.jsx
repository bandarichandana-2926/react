import React from "react";
import { useState } from "react";
let Counter =()=>{
    let [msg, setMsg] = useState("hello");
    let gmHandler = () => {
        setMsg("hello good morning")
    }
    let gnHandler = () => {
        setMsg("hello good night")
    }
    return (
        <>
        <h1>Message Component:{msg}</h1>
        <button onClick={gmHandler}>gm</button> 
        <button onClick={gnHandler}>gn</button>
        </>
    )
}
export default Counter

