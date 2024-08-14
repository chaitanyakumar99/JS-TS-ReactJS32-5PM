import React, { Fragment } from "react";
class Message extends React.Component{
    //msg="Hello..."
    state={ msg:"Hello...." }
    gmHandler = ()=>{
        this.setState({msg:"Good Morning"})
    }
    gnHandler = ()=>{
        this.setState({ msg:"Good Night Sweet Dreams!"})
    }
    render(){
        console.log("Render Method")
        return <Fragment>
                    <h2>Message Componoent</h2>
                    <hr />
                    <h5>Wish Message:{this.state.msg}</h5>
                    <button onClick={this.gmHandler} >GM</button>
                    <button onClick={this.gnHandler} >GN</button>
                  
                </Fragment>
    }
}
export default Message