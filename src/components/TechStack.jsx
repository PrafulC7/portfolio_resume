import React from 'react'

const TechStack = () => {
  return (
    <section id="tech" className="bg-light text-dark py-5">
<div className="container">
<h2 className="text-center mb-4">Tech Stack</h2>
<div className="d-flex flex-wrap justify-content-center gap-3">
<span className="badge bg-primary fs-6">React</span>
<span className="badge bg-secondary fs-6">Bootstrap</span>
<span className="badge bg-warning text-dark fs-6">JavaScript</span>
<span className="badge bg-dark fs-6">Node.js</span>
<span className="badge bg-success fs-6">MongoDB</span>
<span className="badge bg-warning text-dark fs-6">Git</span>
{/* <span className="badge bg-primary fs-6">
  <i className="bi bi-react"></i> React
</span>
<span className="badge bg-warning text-dark fs-6"><i className="bi bi-javascript"></i>JavaScript</span>
<span className="badge bg-warning text-dark fs-6"><i className="bi bi-git"></i>Git</span> */}

{/* <div className="border rounded py-3">
  <i className="bi bi-code-slash fs-3 d-block mb-2"></i>
  JavaScript
</div> */}
</div>
</div>
</section>
  )
}

export default TechStack