import { useState } from "react"

let Product = ()=>{
    let [qty,setQty]=useState(1)
    let incrHandler = ()=>{
        setQty(qty+1)
    }
    return <div>
            <h3>Product Component</h3>
            <button onClick={()=>{setQty(qty -1)}}>-</button>
                {qty}
            <button onClick={incrHandler}>+</button>
           </div>
}
export default Product