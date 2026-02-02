// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Projects from "./components/Projects";

function App() {

  return (
    <div className='container bg-dark text-light'>
      <Header/>
      <Hero/>
      <Projects/>
      <TechStack/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App
