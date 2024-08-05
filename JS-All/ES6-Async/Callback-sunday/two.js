let createEmployee = (callback)=>{
    setTimeout(()=>{
        console.log("GM")
        callback()
    },4000)
}
let getEmployees = ()=>{
    setTimeout(()=>{
        console.log("GA")
    },2000)
}

createEmployee(getEmployees)
