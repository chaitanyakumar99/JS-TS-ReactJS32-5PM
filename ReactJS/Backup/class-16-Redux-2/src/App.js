import Products from "./products/Products";
import {store} from './redux/store'
import {Provider} from 'react-redux'
let App = ()=>{

return <div>
        <Provider store={store}>
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Redux Example</a>
            </nav>
           
            <Products/>
        </Provider>
        </div>
}
export default App;