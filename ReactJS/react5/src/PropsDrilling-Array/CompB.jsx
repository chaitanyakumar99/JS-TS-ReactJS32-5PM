import React, { Component } from 'react'
import CompC from './CompC'
class CompB extends Component {
  render() {
    return  <div>
                <h3>Component B</h3>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr/>
                <CompC eLoc={this.props.eLoc}/>
            </div>
  }
}

export default CompB