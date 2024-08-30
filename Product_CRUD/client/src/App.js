import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Products/Home'
import Products from './Products/Products'
import Admin from './Products/Admin'
const App = () => {
  return <>
            <Router>
                <Navbar/>
            <Routes>
                <Route path="/index" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/admin " element={<Admin/>}/>
            </Routes>
           </Router> 
        </>
}

export default App