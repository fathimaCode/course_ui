

import { Routes,Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import CoursePage from './Pages/course_page'
import CourseDetails from './Pages/course_details'
import PurchaseDetails from './Pages/purchase'
import SuccessPage from './Pages/success_page'
import Login from './Pages/login'
import Register from './Pages/Register'
import Staff from './Pages/Staff'
import Payment from './Pages/payment'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/course' element={<CoursePage/>}/>
      <Route path='/courseDetails' element={<CourseDetails/>}/>
      <Route path='/purchase' element={<PurchaseDetails/>}/>
      <Route path='/success' element={<SuccessPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/payment' element={<Payment/>}/>
     
    </Routes>
    
    </>
  )
}

export default App
