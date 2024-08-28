import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {incrAction,decrAction} from '../redux/products/product.action'
const Products = () => {
    let dispatch = useDispatch()
    let product=useSelector((state)=>{
        return state
    })
    let incrHandler = ()=>{
        dispatch(incrAction())
    }
    let decrHandler = ()=>{
        dispatch(decrAction())
    }
  return <div>
            <h4>Product Component</h4>
            <pre>{JSON.stringify(product)}</pre>
            <button onClick={decrHandler}>-</button>
            {product.qty}
            <button onClick={incrHandler}>+</button>
         </div>
}

export default Products