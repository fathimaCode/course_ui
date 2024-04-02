import { useNavigate } from 'react-router-dom'
import react from '../assets/react_logo.png'
import SearchContainer from './searchContainer'

function Details() {
    let history = useNavigate()
    function buyNow(): import("react").MouseEventHandler<HTMLButtonElement>  {
        return ()=>{
            history("/purchase")
        }
    }

  return (
    <>
     <SearchContainer/>
    <div className='titles'>
        <div className='content'>
        <h1> React - Complete Developer Course with Hands-On Projects </h1>
        <p>Learn React JS through a Series of Hands-On Projects. Build an E-Commerce Site, Calculator, and Connect4 Game.</p>
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

        <div className='course_details'>
            <img src={react} alt="" />
            <h3 className='amount_course'>Rs.378</h3>
            <button className='addToCart '>Add To Cart</button>
            <button className='buyNow' onClick={buyNow()} >Buy Now</button>
            <div className='sales_content'>
                <p>This course includes:</p>
                <span>10.5 hours demand Video</span>
                <span>Training Material</span>
            </div>
    </div>
    </div>
    <div className='learnItem'>
        <h3>What you will learn:</h3>
        <ul>
            <li>What is React?</li>
            <li>Building a Fully Functional Calculator in React</li>
            <li>Using React Props</li>
            <li>Debugging in React</li>
        </ul>
    </div>
    </>
  )
}

export default Details