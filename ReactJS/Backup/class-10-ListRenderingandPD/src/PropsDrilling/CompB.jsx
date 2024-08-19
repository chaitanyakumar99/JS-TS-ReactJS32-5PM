import React from 'react'
import CompC from './CompC'
const CompB = (props) => {
  

  return <div>
          <h3>Component B</h3>
          <pre>{JSON.stringify(props)}</pre>
          <hr/>
          <CompC name={props.ename}/>
        </div>
}

export default CompB