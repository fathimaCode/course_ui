import react from '../assets/react_logo.png'
import flutter from '../assets/flutter.png'
import kotlin from '../assets/kotlin.jpg'
import { useNavigate } from 'react-router-dom'
import SearchContainer from './searchContainer'
function Course() {
  let history = useNavigate()
  function redirectToDetails(): import("react").MouseEventHandler<HTMLDivElement>  {
    return ()=>{
      history('/courseDetails')
    }
  }

  return (
    <>
     <SearchContainer/>
      <div className="row programs">
      <div className="card_program" onClick={redirectToDetails()}>
            <img src={react} alt="" height={120} width={120} />
            <h1>React</h1>
            <p>Current Framework for website
              development</p>
                <div className="row">
                  <i className="ri-stack-line pd"></i>
                  <p className='pd'>16 lessons</p>
                  <i className="ri-time-line pd"></i>
                  <p className='pd'> 3hr 30min</p>
              </div>
          </div>
          <div className="card_program">
            <img src={flutter} alt=""  />
            <h1>Flutter</h1>
                    <p>Android Development for mobile
        development</p>
                <div className="row">
                  <i className="ri-stack-line pd"></i>
                  <p className='pd'>16 lessons</p>
                  <i className="ri-time-line pd"></i>
                  <p className='pd'> 3hr 30min</p>
              </div>
          </div>

          <div className="card_program">
            <img src={kotlin} alt=""  />
            <h1>Kotlin</h1>
                    <p>Android Development for mobile
        development</p>
                <div className="row">
                  <i className="ri-stack-line pd"></i>
                  <p className='pd'>16 lessons</p>
                  <i className="ri-time-line pd"></i>
                  <p className='pd'> 3hr 30min</p>
              </div>
          </div>
        </div>
        
    </>
  )
}

export default Course