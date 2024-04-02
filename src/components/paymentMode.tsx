import { useNavigate } from 'react-router-dom'
import react from '../assets/react_logo.png'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p3.png'
import p3 from '../assets/p2.png'
function PaymentMode() {
    const redirect = useNavigate()
    function successPage(): import("react").MouseEventHandler<HTMLButtonElement>  {
        return()=>{
            redirect('/success')
        }
    }

  return (
    <>
    <div className='payInfo'>
    <h2>Pay with</h2>
   <div className='row card'>
     <img src={p1} alt="" height={80} width={80}/>
     <img src={p2} alt="" height={80} width={80}/>
     <img src={p3} alt="" height={80} width={80}/>
   </div>
        <div className='cardForm'>
            <input type="text" placeholder='cardNumber' className='cardNo'/>
            <div className='row'>
            <input type="text" placeholder='Expiry Date'/>
            <input type="text" placeholder='CV'/>
            </div>
        </div>
        <button className='courseBtn'> Pay</button>
    </div>
 
    </>
  )
}

export default PaymentMode