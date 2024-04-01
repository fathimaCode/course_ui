

import { Routes,Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import CoursePage from './Pages/course_page'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<CoursePage/>}/>
    </Routes>
    
    </>
  )
}

export default App
