import React from 'react'
import './message.css'
const Message = () => {

  let msgStyles_Internal = {color:"Blue"}  
  return <div>
            <h4>Message Componeont</h4>
            <hr />
            <h3 style={{color:'red',backgroundColor:'yellow'}}>Good Morning</h3>
            <h3 style={msgStyles_Internal}>Good Afteroon</h3>
            <h3 className={'msgStyles2'}>Good Night</h3>

            </div>
}

export default Message