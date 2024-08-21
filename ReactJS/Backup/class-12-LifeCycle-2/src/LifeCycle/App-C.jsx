import React, { Component } from 'react'
class App extends Component {
    constructor(props){
        super(props);
        this.state={}
        console.log("First Constructor - will execute to initilize values");
    }
    componentDidMount(){
        console.log("Third - componnetDidMount will execute -after render method");
    }   
    componentDidUpdate(){
        console.log("State updatation time!");
    }
    componentWillUnmount(){
        console.log("At time of unmounting the component");
    }
  render() {
    console.log("Second - render() method will execute - to return UI");
    return (
      <div>
        <h1>App Component</h1>
      </div>
    )
  }
}
export default App