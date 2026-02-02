import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
<a className="navbar-brand" href="#home">{`</> Prafulla Charde`}</a>
<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ms-auto">
<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
<li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
<li className="nav-item"><a className="nav-link" href="#tech">Tech Stack</a></li>
<li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
</ul>
</div>
</nav>
  )
}

export default Header
{/* <i className='bi bi-person-circle me-2'></i> */}