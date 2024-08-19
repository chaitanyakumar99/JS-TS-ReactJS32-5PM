let CompD= (props)=>{
    return <div>
            <h3>Component D</h3>    
            <pre>{JSON.stringify(props)}</pre>
            <br/>
            <h5>Employee Name:{props.uname}</h5>
        </div>
}
export default CompD