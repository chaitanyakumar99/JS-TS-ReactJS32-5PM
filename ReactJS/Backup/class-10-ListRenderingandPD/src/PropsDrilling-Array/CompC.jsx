import CompD from './CompD'
let CompC = (props)=>{
    
    return <div>
                <h3>Component C</h3>   
                <pre>{JSON.stringify(props)}</pre> 
                <hr/>
                <CompD eLoc={props.eLoc}/>
        </div>
}
export default CompC