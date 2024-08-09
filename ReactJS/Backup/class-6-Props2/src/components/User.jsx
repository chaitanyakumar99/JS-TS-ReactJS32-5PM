import React from 'react'
import Employee from './Employee'
class User extends React.Component{
    uName = "Rahul"
    loc = "Chennai"
    render(){
        return <div>
                <h1>User Component</h1>
                <Employee id={101} name={this.uName} loc={this.loc}/>
                </div>
    }
}
export default User