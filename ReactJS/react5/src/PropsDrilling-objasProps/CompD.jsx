let CompD= (props)=>{



    return <div>
            <h3>Component D</h3>    
            <pre>{JSON.stringify(props)}</pre>
            <br/>
            <h4>Employee Id:{props.emp_Data.eid}</h4>
            <h4>Employee Name:{props.emp_Data.ename}</h4>
        </div>
}
export default CompD