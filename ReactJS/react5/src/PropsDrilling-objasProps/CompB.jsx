import React, { Component } from 'react'
import CompC from './CompC'
class CompB extends Component {
  render() {
    return  <div>
                <h3>Component B</h3>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr/>
                <CompC emp_Data={this.props.emp_Data}/>
            </div>
  }
}

export default CompB