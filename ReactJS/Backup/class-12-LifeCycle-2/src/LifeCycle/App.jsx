import React, { useEffect, useState } from 'react'

const App = () => {
    
    let [state,setState]=useState({})


    useEffect(()=>{

        console.log("After return statement");

        
    },[])
    
    return <div>
                <h3>App component</h3>
            </div>
    
}

export default App