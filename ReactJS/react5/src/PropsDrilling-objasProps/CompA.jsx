import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
  emp = {
    eid:101,
    ename:"Rahul"
  }
  render() {
    return  <div>
                <h3>Component A</h3>
                <hr/>
                <CompB emp_Data={this.emp}/>
            </div>
  }
}

export default CompA