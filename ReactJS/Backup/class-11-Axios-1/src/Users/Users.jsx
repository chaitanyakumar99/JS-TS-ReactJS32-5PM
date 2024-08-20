import React, { useState } from 'react'
import Axios from 'axios'
const Users = () => {
  let [users,setUsers]=useState([])

  let getUsers=()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response)=>{
            console.log(response)
            console.log(response.data)
            setUsers(response.data)
         })
         .catch(()=>{})
  }
  return <div>
            <h3>User Data </h3>
            <pre>{JSON.stringify(users)}</pre>
            <button onClick={getUsers}>Get Users</button>

            {
              users.length > 0 ? <>
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
                    users.map((user)=>{
                        return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                    })
                }
                </tbody>
                </table>               
              </>:<>No Data</>  
            }
            </div>
}

export default Users