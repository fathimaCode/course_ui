import student from '../assets/student.png'
function HomeContent() {
  return (
    <>
      <div className="row">
        <div className="content1">
            <h2>Online Learning Courses</h2>
            <h6>Professional Courses with Professional Staff </h6>
            <button  className='courseBtn wd-2'>Learn From Home</button>
            <div className='round1'></div>
            <div className='round2'></div>
        </div>
        <div className="content2 ">
            <div className="design1">

            </div>
            <div className="design2">
                
            </div>
            <div className="design3">
                <img src={student} alt=""  />
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeContent