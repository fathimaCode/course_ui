
import success from '../assets/correct.png'
import celebration from '../assets/celebration.png'
function Success() {
  return (
    <>
    <div className='success_container'>
    <img src={success} alt=""  className='success_img'/>
    <h1>Hi! Disksha</h1>
    <h6>Your Order Place successfully</h6>
    <img src={celebration} alt=""  className='celeb_img'/>
    </div>
   
    </>
  )
}

export default Success