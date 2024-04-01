
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import gmail from '../assets/gmail.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <div className='course_header'>
        <div className='course_logo'>
            <img src={logo} alt="" />
        </div>
            <div className='row logo'>
                <div className='column'>
                    <p className='title'>Learning</p>
                    <p className='subtitle'>University</p>
                </div>
            </div>
            <img src={gmail} alt=""  className='icons'/>
            <div className='row'>
                <div className='column'>
                    <p>Email</p>
                    <p>learning@edu.com</p>
                </div>
            </div>
            <img src={phone} alt="" className='icons'/>
            <div className='row'>
                <div className='column'>
                    <p>Contact</p>
                    <p>Call us:+91 985468999</p>
                </div>
            </div>
            <button className='courseBtn'>Apply Now</button>
       
    </div>
    <div className='course_menus'>
        <ul>
           
            <Link to='/'><li>Home</li></Link>
            <li>About</li>
            <Link to='/course'><li>Course</li></Link>
            <li>Staff</li>
            <li>Contact</li>
        </ul>
    </div>
    </>
  )
}

export default Header