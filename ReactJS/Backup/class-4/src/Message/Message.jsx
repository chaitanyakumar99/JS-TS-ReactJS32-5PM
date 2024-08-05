import React from 'react'

class Message extends React.Component{
    pulihara(){
        return <div>
                    <h3>Pulihara</h3>
                </div>
    }
    render(){
        console.log("First render method")
        return <div>
                    <h2>Message Componet</h2>
                </div>
    }
}
export default Message