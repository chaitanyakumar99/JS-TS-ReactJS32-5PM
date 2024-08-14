import React from 'react'
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    updateHandler = (value)=>{
        this.setState({msg:value})
    }
    render(){
        return <div>
                <h3>Message Component</h3>
                <h3>Value:{this.state.msg}</h3>
                <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
                <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>
                <button onClick={this.updateHandler.bind(this,"GE")}>GE</button>
                <button onClick={this.updateHandler.bind(this,"GN")}>GN</button>
                </div>
    }
}
export default Message