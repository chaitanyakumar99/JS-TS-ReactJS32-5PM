import React from 'react'
import {Link,BrowserRouter} from 'react-router-dom'
import Registration from './components/Registration'
import Counter from './components/Counter'
import Login from './components/Login'
export const App = () => {
 return <div>
            <BrowserRouter>
                <nav className='navbar navbar-dark bg-dark'>
                <Link to="/index" className='navbar-brand'>React Hooks</Link>
                </nav>
           {    /*  <Login/>
            <hr/>
            <Registration/> */}
            <Counter/>
            </BrowserRouter>
        </div>
}
export default App
