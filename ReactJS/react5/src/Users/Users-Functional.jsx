import React,{useEffect, useState} from "react"
import Axios from "axios"
let Users = ()=>{
    let [users,setUsers]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch()
    },[])
   /*  let getUsers = ()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch()
    } */
    return <div>
            <h3>Users Component</h3>
            <pre>{JSON.stringify(users)}</pre>
           {/* <button onClick={getUsers}>Get Users</button> */}

           {
            users.length > 0  ?  <div>
                                    <table border={1}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                        users.map((user)=>{
                                            return <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    </tr>
                                        })
                                        }
                                        </tbody>
                                    </table>
                                </div>:<h4>No Data</h4> 
           }
           </div>
}
export default Users