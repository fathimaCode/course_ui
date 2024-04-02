import { useState } from 'react'
import bg from '../assets/bg_color.png'
import fly from '../assets/fly_person.png'
function Login() {
    const [emailvalidation,setEmailvalidation] =useState("")
    const [passwordvalidation,setpasswordvalidation] =useState("")
  

    function checkValidation(): import("react").MouseEventHandler<HTMLInputElement> {
        return ()=>{
            setEmailvalidation("Email field is required")
            setpasswordvalidation("password field is required")
        }
    }

  return (
    <>
    <div className='login_Container'>
        <div className='login_info'>
            <img src={bg} alt="" className='bgimg' />
            <img src={fly} alt="" className='flyimg' />
        </div>
        <div className='login_form'>
            <h1>Login</h1>
       
                <input type="text" placeholder='Email Address' />
                <span className='validate'>{emailvalidation}</span>
                <input type="password" placeholder='Password' />
                <span className='validate'>{passwordvalidation}</span>
                <input type='submit' value="Login" className='courseBtn' onClick={checkValidation()}/>
                <p>Need to create an account? <span className='bg_Color'>Click here</span></p>
           
        </div>
    </div>
    </>
  )
}

export default Login