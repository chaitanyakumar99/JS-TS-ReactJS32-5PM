import React, { useState } from 'react'
let Message = ()=>{
    let [msg,setMsg]=useState("Hello")
    let updateHandler = (value)=>{
        console.log(value)
        //setMsg(value)
        //setMsg("Hi Rajni")
    }
    return <div>
            <h2>Message Component</h2>
            <h3>Value:{msg}</h3>
            <button onClick={updateHandler.bind("Good Morning")}>GM</button>
            <button onClick={updateHandler.bind("Good Afternoon")}>GA</button>
            <button onClick={updateHandler.bind("Good Evening")}>GE</button>
            <button onClick={updateHandler.bind("GN Sweet Dreams")}>GN</button>
           </div>
}
export default Message