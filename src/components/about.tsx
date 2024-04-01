import bg from '../assets/about.png'

function About() {
    return (
        <>
        <h2 className='about_header'>About Us</h2>
            <div className='row'>
                <img src={bg} alt="" className='about_img' />
                <div className='aboutus'>
                    <h2>Get Started Today! </h2>
                    <p>Embark on your learning journey
                        with Learning University.
                        Whether you're a professional seeking to upskill or a curious mind eager to explore new subjects, we have the courses to fuel
                        your intellectual growth.</p>
                </div>
            </div>
            <div className='row even_dt'>
                <div className='course_section'>
                    <h1>Total Course</h1>
                    <p>120</p>
                </div>
                <div className='course_section'>
                    <h1>Total Staff</h1>
                    <p>120</p>
                </div>
                <div className='course_section'>
                    <h1>Total Student</h1>
                    <p>120</p>
                </div>
            </div>
        </>
    )
}

export default About