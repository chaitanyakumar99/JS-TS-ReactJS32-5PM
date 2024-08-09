import React, { Fragment } from "react";
class Message extends React.Component{
    msg="Hello..."
    gmHandler=()=>{
        //console.log("gmHandler method")
        this.msg = "Good Morning"
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHander=()=>{
        //console.log("gnHandler Method")
        this.msg = "Good Night"
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        console.log("Render Method")
        return <Fragment>
                    <h2>Message Componoent</h2>
                    <hr />
                    <h5>Wish Message:{this.msg}</h5>
                    <button onClick={this.gmHandler}>GM</button>
                    <button onClick={this.gnHander}>GN</button>
                </Fragment>
    }
}
export default Message