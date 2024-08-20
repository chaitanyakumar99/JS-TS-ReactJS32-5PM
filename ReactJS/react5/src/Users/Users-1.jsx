import React, { Component } from 'react'
import  Axios  from 'axios'
class Users extends Component {
   state = {
     users:[]
   } 
   componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
          this.setState({users:resp.data})
        })
        .catch()
   }
  render() {
    return <div>
                <h3>Users Component</h3>
                <pre>{JSON.stringify(this.state.users)}</pre>
                <button onClick={this.getUsers}>GetUsers</button>
            </div>
  }
}

export default Users