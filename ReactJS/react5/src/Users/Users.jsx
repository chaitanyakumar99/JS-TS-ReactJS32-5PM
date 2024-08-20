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
   };
 /*   getUsers = ()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
          this.setState({users:resp.data})
        })
        .catch()
   } */
  render() {
    return <div>
                <h3>Users Component</h3>
                <pre>{JSON.stringify(this.state.users)}</pre>
                {/* <button onClick={this.getUsers}>GetUsers</button> */}
                {
                  this.state.users.length > 0 ? <>
                  <table border={2}>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.users.map((user)=>{
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            </tr>
                      })
                    }
                    </tbody>
                  </table>
                  </> : <h3>No Data</h3>
                }
            </div>
  }
}

export default Users