

function Course() {
  return (
    <>
    <div className='row'>
      <div className='search_container'>
        <i className="ri-search-line"></i>
        <input type="text" placeholder='Search Courses'/>
        </div>
        <i className="ri-shopping-cart-2-line"></i>
        <button className='courseBtn'>Apply Now</button>
        <button className='courseBtn'>Sign Up</button>
    </div>
    
    </>
  )
}

export default Course