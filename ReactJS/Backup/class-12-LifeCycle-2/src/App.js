import React, { useState } from 'react'
import Users from './Users/Users'
import Navbar from './Navbar/Navbar'
const App = () => {
  
  return <div>
                <Navbar/>
                <h2>App Component</h2>
                <hr/>
                <Users/>
        </div>
}

export default App