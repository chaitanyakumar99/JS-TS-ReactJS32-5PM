import React, { useState } from 'react'

const Counter = () => {
        let [counter,setCounter]=useState(1)
        let [fact,setFact]=useState(2)
        let factNumber = React.useMemo(()=>{
            return factorial(fact);
        },[fact])
        //let factNumber =factorial(fact);
          return <div className='container mt-5'>
                     <button onClick={()=>{setCounter(counter+1)}}>Counter Value:{counter}</button>
                     <button onClick={()=>{setFact(fact+1)}}>Factorial of {fact}: is {factNumber}</button>
  
            </div>
}
function factorial(n) {
    console.log("Test Case 123")
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}
export default Counter