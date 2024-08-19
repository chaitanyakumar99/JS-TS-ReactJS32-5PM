import React, { Component } from 'react'
import CompB from './CompB'

let CompA = ()=>{
  let ename="Rahul Gandhi"
  return <div>
          <h3>Component A</h3>
          <hr/>
          <CompB one={1} two={2} ename={ename}/>
        </div>
}

export default CompA