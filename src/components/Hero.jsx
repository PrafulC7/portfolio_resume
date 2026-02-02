import React from 'react'

const Hero = () => {
  return (
    <section id="about" className="container py-5 text-center">
<h1 className="fw-bold">Hi, I'm Prafulla 👋</h1>
<p className="lead mt-3">
I'm a Web Developer who loves building clean, responsive, and user‑friendly web applications.<br></br>
 Specializing in React, Node.js, and MongoDB to build scalable and user-centered applications.
</p>
<div className='row text-center d-flex justify-content-center'>
    
               
<div className="col-4 col-lg-3 mb-3">
  <a href='#contact'>
<div className="border rounded py-2">Contact Me</div>
</a>
</div>
<div className="col-4 col-lg-3 mb-3">
  <a href='#contact'>
<div className="border rounded py-2">Resume</div>
</a>
</div>
              
              </div>
</section>
  )
}

export default Hero