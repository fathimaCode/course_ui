import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchContainer() {
  let redirect = useNavigate()
  function LoginPage(): React.MouseEventHandler<HTMLButtonElement>  {
    return ()=>{
      redirect("/login")
    }
  }

  return (
    <>
    <div className='row'>
        <div className='search_container'>
          <i className="ri-search-line"></i>
          <input type="text" className="searchText" placeholder='Search Courses' />
        </div>
        <i className="ri-shopping-cart-2-line"></i>
        <div className="btnGrp">
          <button className='courseBtn clrWhite' onClick={LoginPage()}>Login </button>
          <button className='courseBtn'>Sign Up</button>
        </div>
   
      </div>
    </>
  )
}

export default SearchContainer