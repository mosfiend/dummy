import './style.css'
import React, { useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import useWindowSize from "./outils/useWindowSize"
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from "./components/Nav"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"

const App = () => {
  const [pack,setPack] = useState(["active","","",""])
const toggle = (display) => {
let arr =["","","",""]
display ==="about"?arr[0]="active":display==="projects"?arr[1]="active":display==="contact"?arr[2]="active":arr[3]="active"
setPack(arr)
}
// const {width}= useWindowSize()
return (  <Router>
  <Nav pack={pack} toggle={toggle}/>
  <section className="s1">
  <div className="container section-wrapper">

 <div >
      <Routes>
   <Route path="/" element={<About/>}/>
   <Route path="/projects" element={<Projects/>}/>
   <Route path="/contact" element={<Contact/>}/>
   </Routes>
</div>
<ul className="flex">
<li><a target="_blank" rel="noopener noreferrer"href="https://github.com/mosfiend">
  <FaGithub  size={"1.7em"} className="icon"/></a></li>
<li><a target="_blank" rel="noopener noreferrer"href="https://www.linkedin.com/in/mostefa-abdellaoui/">
  <FaLinkedin size={"1.7em"} className="icon"/></a></li>
<li><a target="_blank" rel="noopener noreferrer"href="https://twitter.com/mosfiend">
  <FaTwitter size={"1.7em"} className="icon"/></a></li>
<li><span>
  <FaEnvelope size={"1.7em"} className="icon"/></span></li>

</ul>
</div>
 </section>
  </Router>)
}

export default App