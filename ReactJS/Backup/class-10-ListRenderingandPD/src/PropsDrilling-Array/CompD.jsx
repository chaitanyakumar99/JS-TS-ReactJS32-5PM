let CompD= (props)=>{
    return <div>
            <h3>Component D</h3>    
            <pre>{JSON.stringify(props)}</pre>
            <br/>
            <h4>Employee Id:1001</h4>
            <h4>Employee Name: "Rahul"</h4>
            <h5>Employee Loc:{props.eLoc[0]}</h5>
        </div>
}
export default CompD