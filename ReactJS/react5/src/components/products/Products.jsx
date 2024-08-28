import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {incrAction,decrAction} from '../../redux/products/product.action'
const Products = () => {
    let dispatch = useDispatch()
    let product=useSelector((state)=>{
        return state.product
    })
    let incrHandler = ()=>{
        dispatch(incrAction())
    }
    let decrHandler = ()=>{
        dispatch(decrAction())
    }
  return <div className='container mt-3'>
  <div className="row">
  <div className="col-12">
        <table className='table'>
            <thead className='bg-success text-white'>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Total</th>
            </thead>
            <tbody>
            <tr>
                <td>{product.p_Name}</td>
                <td><img src={product.image} width={'40px'} alt="" /></td>
                <td>{product.price}</td>
                <td> <i className='fa fa-circle-minus' onClick={decrHandler} ></i> {product.qty}  <i className='fa fa-circle-plus' onClick={incrHandler}></i> </td>
                <td>{product.qty * product.price}</td>
            </tr></tbody>
        </table>
  </div>
  </div>
</div>
}

export default Products