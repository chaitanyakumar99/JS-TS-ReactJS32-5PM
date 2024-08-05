let employees=[
    {id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000}
]
let createEmployee =(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let db_flag=true;
            employees.push(emp)
            db_flag ===true ? resolve('Data Inserted'):reject("Failed")  
        },4000)
    })
}
let getEmployees= ()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows  = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                            </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    },2000)
}

let exec = async ()=>{
        await createEmployee({id:103,name:"Priya",sal:56000})
        getEmployees()
}   
exec()