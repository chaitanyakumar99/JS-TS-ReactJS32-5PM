import React, { useState } from 'react'
let Message = ()=>{
    let [msg,setMsg]=useState("Hello")
   
    return <div>
            <h2>Message Component</h2>
            <h3>Value:{msg}</h3>
            <button onClick={()=>{
                setMsg("GM")
            }}>GM</button>
            <button onClick={()=>{
                setMsg("GA")
            }}>GA</button>
             </div>
}
export default Message