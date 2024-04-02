import { useState } from 'react'
import bg from '../assets/bgcolor1.png'
import fly from '../assets/programmer.png'
function Register() {
    const [emailvalidation,setEmailvalidation] =useState("")
    const [passwordvalidation,setpasswordvalidation] =useState("")
    const [contactvalidation,setcontactvalidation] =useState("")

    function checkValidation(): import("react").MouseEventHandler<HTMLInputElement> {
        return ()=>{
            setEmailvalidation("Email field is required")
            setpasswordvalidation("password field is required")
            setcontactvalidation("contact field is required")
        }
    }

  return (
    <>
    <div className='login_Container'>
        
        <div className='login_form'>
            <h1>Register</h1>
       
                <input type="text" placeholder='Email Address' />
                <span className='validate'>{emailvalidation}</span>
                <input type="password" placeholder='Password' />
                <span className='validate'>{passwordvalidation}</span>
                <input type="number" placeholder='Contact' />
                <span className='validate'>{contactvalidation}</span>
                <input type='submit' value="Sign Up" className='courseBtn' onClick={checkValidation()}/>
                <p>Need to Login? <span className='bg_Color'>Click here</span></p>
           
        </div>
        <div className='login_info'>
            <img src={bg} alt="" className='bgimg' />
            <img src={fly} alt="" className='flyimg mvt' />
        </div>
    </div>
    </>
  )
}

export default Register