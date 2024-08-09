import React, { Fragment } from 'react'

const Cart = (props) => {
  return (
    <Fragment>
        <h2>Cart Compononet</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Product Name:{props.product.pName}</h3>
        <h4>Color:{props.product.color[2]}</h4>
        <img src={props.product.image}/>
    </Fragment>
  )
}

export default Cart