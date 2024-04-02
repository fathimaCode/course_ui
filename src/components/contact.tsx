import React from 'react'

function Contact() {
  return (
    <>
    <div className='contact_info'>
    <h1>Contact </h1>
        <div className='row'>
            <div className='contact_details'>
                <p>For registration questions please get in touch using the contact details below. For any questions use the form.</p>
                <h3>Main office Location</h3>
                <p>12, Innovative Course, Tamil nadu, India</p>
                <p><span><i className="ri-contacts-fill"></i></span>+91 9856741235</p>
                <p><span><i className="ri-mail-line"></i></span>contact@course.com </p>
            </div>
            <div className='contact_Form'>
                <form className='cform'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Your Message' />
                    <button className='courseBtn col-white'>Submit</button>
                </form>
            </div>
        </div>

    </div>
  
    </>
  )
}

export default Contact