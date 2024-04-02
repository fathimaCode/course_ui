import { useNavigate } from 'react-router-dom'
import react from '../assets/react_logo.png'

function ShoppingCart() {
    const redirect = useNavigate()
    function successPage(): import("react").MouseEventHandler<HTMLButtonElement>  {
        return()=>{
            redirect('/success')
        }
    }

  return (
    <>
    <div className='cartInfo'>
    <h2>Shopping Cart</h2>
    <p>1 Course in cart</p>
    <div className="shop_list">
            <img src={react} alt=""  />
            <div className='cart_Content'>
            <h1>
React - Complete Developer Course with Hands-On Projects

</h1>

              <div className='rating'>
            <div className='rate'>4.2</div>
            <div className='stars'>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
            </div>
        </div>
            </div>

                    <p className='cart_amount'>Rs.378</p>
                <p className='remove'>Remove</p>
          </div>
    </div>
    <div className='totalAmount_container'>
        <p>Total Item : 3</p>
        <div className='total'>
            <p>Total: Rs.389</p>
            <button className='courseBtn' onClick={successPage()}>Check Out</button>
        </div>
    </div>
    </>
  )
}

export default ShoppingCart