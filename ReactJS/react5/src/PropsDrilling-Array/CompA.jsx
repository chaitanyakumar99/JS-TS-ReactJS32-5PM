import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
  loc=['Wayanad','New Delhi','Bangalore']
  render() {
    return  <div>
                <h3>Component A</h3>
                <hr/>
                <CompB eLoc={this.loc}/>
            </div>
  }
}

export default CompA