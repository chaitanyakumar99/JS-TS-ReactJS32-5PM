import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
const Registration = () => {
    let btnRef=useRef();
    let passwordRef=useRef();
    let eyeHandler  = (event)=>{
        console.log("Test Case 123")
        passwordRef.current.type = "text"
    }
    let inputHandler = (event)=>{

        console.log(event.target.checked)
        btnRef.current.disabled = !event.target.checked
    }


  return <div className='container mt-4'>
            <div className="row">
                <div className="col-4">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h4>Registration Page</h4>
                    </div>
                    <div className="card-body">
                    <form >
                        <div className='form-group'>
                            <input className='form-control' type="text" placeholder='User Name'/>
                        </div>
                        <div className='form-group'>
                            <input className='form-control' type="text" placeholder='Email Id'/>
                        </div>
                        <div className="input-group mb-3">
                            <input ref={passwordRef} className="form-control" type='password' name="password" placeholder="Password" />
                            <span className="input-group-text">
                                    <i className="fa fa-eye" onClick={eyeHandler} ></i>
                            </span>
                        </div>
                        <div className='form-group'>
                            <input className='form-control' type="text" placeholder='Mobile'/>
                        </div>
                        <div className='form-check form-check-inline'>
                        <input type="radio" name="GenderValue" className='form-check-input' />Male
                        
                        </div>
                        <div className='form-check form-check-inline'>
                        
                        <input type="radio" name="GenderValue" className='form-check-input'/>Female
                        </div>
                        <div className='form-group'>
                            <textarea placeholder='Address' rows={3} className='form-control'></textarea>
                        </div>
                        <div className='form-check'>
                            <input onChange={inputHandler} type="checkbox" className='form-check-input' /> Please Accept <Link to="/index"> Terms & Conditions</Link>
                        </div>
                        <input ref={btnRef} type="submit" value="Registration" className='btn btn-success' disabled />
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
}

export default Registration