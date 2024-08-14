import { useState } from "react"

function Message(){
    //let msg = "Hello.."
    let [msg,setMsg]=useState("Hello")
    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    let geHanlder = ()=>{
        setMsg("Good Evening")
    }
    return <div>
            <h2>Message Component</h2>
            <h3>Value:{msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={geHanlder}>GE</button>
            <button onClick={()=>{setMsg("Good Night")}}>GN</button>
            </div>
}
export default Message