import React from 'react'
import crm_app from "../assets/crm_app.png"
import book_shop from "../assets/book_shop.png"
import meetup_app from "../assets/meetup_app.png"
const Projects = () => {
const projects = [
    {id:1,
        title:"CRM App",
        imgUrl:crm_app,
        description:"A simple and scalable Customer Relationship Management (CRM) app designed to manage customers, leads, and sales activities efficiently.",
        tech:["React", "Express", "MongoDB", "Chart.js"],
        codeLink:"https://github.com/PrafulC7/anvaya_crm_app",
        appLink:"https://anvaya-crm-app-plum.vercel.app/",
        videoLink:"https://www.loom.com/share/3ceeb0f52dc54a9d8f2ecc91388fd31b"
},
    {id:2,
        title:"Book Shop",
        imgUrl:book_shop,
        description:"A modern Book Shop / Online Book Store application that allows users to browse books, view details, add books to cart, and place orders.",
        tech:["React", "Express", "MongoDB", "Bootstrap"],
        codeLink:"https://github.com/PrafulC7/book_shop_app",
        appLink:"https://book-shop-app-sable.vercel.app/",
        videoLink:"https://www.loom.com/share/d6dacc5039f7430e9a65a2495bcf32d4"
},
    {
        id:3,
        title:"Meetup App",
        imgUrl:meetup_app,
        description:"In this simple meetup app, you can browse, view details, track and attend all the upcoming online or offline events happening in India.",
        tech:["React", "Express", "MongoDB", "Bootstrap"],
        codeLink:"https://github.com/PrafulC7/meetup_app",
        appLink:"https://meetup-app-delta-pearl.vercel.app/",
        videoLink:"https://www.loom.com/share/f774faa8ac0c42e681590d6e10567e1f?sid=a0369e71-293c-46c3-98e3-b865f4ea0804"
},

]

  return (

  <div className="row" id='projects'>
          <h2 className="text-center mb-4">Projects</h2>

          {projects.map((project) => (
            <div key={project.id} className="col-md-4 py-3">
              <div>
                <a href={project.appLink} target='_blank'>
               <div className="card bg-dark text-white">
  <img src={project.imgUrl} className="card-img" style={{height:"220px"}} alt="project image"/>
  <div className="card-img-overlay">    
  </div>
</div>

              </a>
              </div>
              
              <h2>{project.title}</h2>
                  <p className="card-text">{project.description}</p>
<div className='row text-center d-flex'>
    
                {project.tech.map((skill) => (
<div className="col-6 col-lg-4 mb-3" key={skill}>
<div className="border rounded py-2">{`${skill}`}</div>
</div>
))}
              
              </div>

<div className='row text-center d-flex'>
    <div className="col-6 col-lg-4 mb-3 d-flex gap-4">
<div><a href={project.videoLink} target="_blank" className='d-flex align-items-center gap-3'><i class="bi bi-eye fs-2"></i><h4>Demo</h4></a></div>
<div><a href={project.codeLink} target="_blank" className='d-flex align-items-center gap-3'><i class="bi bi-code-slash fs-2"></i><h4>Code</h4></a></div>
{/* <div className="border rounded py-2"><a href={project.codeLink} terget="_blank"><i class="bi bi-code-slash fs-2"></i>Code</a></div> */}
</div>

              
              </div>
            </div>
            
          ))
}
      
        </div>
        
  )
}

export default Projects

// skill className="border rounded py-3"
// img style={{height:"250px"}}