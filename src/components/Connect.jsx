import React from 'react'

const Connect = () => {
  const connect = [
    {platform:"Email",
      // link:"mailto:prafullacharde00715@gmail.com",
      link:"https://mail.google.com/mail/?view=cm&to=prafullacharde00715@gmail.com",
      linkContent:"prafullacharde00715@gmail.com",
      logo:"bi bi-envelope fs-3",

    },
    {platform:"GitHub",
      link:"https://github.com/PrafulC7",
      linkContent:"Follow on GitHub",
      logo:"bi bi-github fs-3",
    },
    {platform:"LinkedIn",
      link:"https://www.linkedin.com/in/praful-charde-01b3b925a",
      linkContent:"Connect on LinkedIn",
      logo:"bi bi-linkedin fs-3",
    },
    {platform:"Twitter",
      link:"#",
      linkContent:"Follow on Twitter",
      logo:"bi bi-twitter fs-3",
    },
  ]
  return (
    <section id="contact" className="container py-5">
<h2 className="text-center mb-4">Connect</h2>
<div className="row text-center">
{connect.map((con) => (
<div className="col-12 col-md-6 col-lg-6 mb-3" key={con.platform}>
  <a href={con.link} target="_blank" className="me-3">
<div className="border rounded p-3 text-start">
  <div className='d-flex align-items-center gap-4'>
   <i className={con.logo}></i> <h3>{con.platform}</h3>
</div>
<div>
<h5>{con.linkContent}</h5>
</div>
</div>
</a>
</div>
))}
</div>
</section>

  )
}

export default Connect
{/* <footer className="bg-dark text-light text-center py-3">
  <a href="#" className="text-light me-3">
    <i className="bi bi-github fs-4"></i>
  </a>
  <a href="#" className="text-light me-3">
    <i className="bi bi-linkedin fs-4"></i>
  </a>
  <a href="#" className="text-light">
    <i className="bi bi-envelope fs-4"></i>
  </a>
</footer> */}

{/* <a href={con.link} className="text-dark me-3"></a> */}