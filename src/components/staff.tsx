import react from '../assets/3.jfif'
import flutter from '../assets/1.jfif'
import kotlin from '../assets/2.jpg'
import { useNavigate } from 'react-router-dom'

function Staff() {
  let history = useNavigate()
  function redirectToDetails(): import("react").MouseEventHandler<HTMLDivElement>  {
    return ()=>{
      history('/courseDetails')
    }
  }

  return (
    <>
      <h1 className='staffHeader'>View Staff</h1>
      <div className='staff'>
      <div className="row programs">
      <div className="card_program" onClick={redirectToDetails()}>
            <img src={react} alt="" height={120} width={120} />
            <h1>Web App </h1>
            
          </div>
          <div className="card_program">
            <img src={flutter} alt=""  />
            <h1>Mobile App </h1>
                  
          </div>

          <div className="card_program">
            <img src={kotlin} alt=""  />
            <h1>Embedded</h1>
                    
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Staff