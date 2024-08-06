import CompB from "./CompB"
function CompA(){
    let msg="Good Evening"
    return <div>
            <h2>Componet - A</h2>    
            <hr/>
            <CompB  message={msg}  one={100} two={200}/>
        </div>

}
export default CompA