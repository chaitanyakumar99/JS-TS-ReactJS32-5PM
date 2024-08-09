import React from 'react'
class Employee extends React.Component{

    render(){
        return <div>
                <h2>Emplyee Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Employee Id:{this.props.id}</h2>
                <h2>Employee Name:{this.props.name}</h2>
                <h2>Employee Location:{this.props.loc}</h2>
                </div>
    }
}
export default Employee