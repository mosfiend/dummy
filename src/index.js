import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import reportWebVitals from './reportWebVitals';

function Nav({pack, toggle}) {


  return (<div className=" navbar">
    <div className="main-container flex">
  <div className="name-wrapper">
    <h1>Abdellaoui Mostefa</h1>
  </div>
  <div className="nav-wrapper">
    <nav>
      <ul className="flex">
        <li
          id="about-btn"
          className={"btn " + pack[0]}
          onClick={()=>toggle("about")}
        >
          <p>About</p>
        </li>
        <li
          id="portfolio-btn"
          className={"btn " + pack[1]}
          onClick={()=>toggle("portfolio")}
        >
          <p>Projects</p>
        </li>
        <li
          id="inactive-btn"
          className={"btn " + pack[2]}
        >
          <p> Section 3</p>
        </li>
        <li
          id="contact-btn"
          className={"btn "+pack[3]}
          onClick={()=>toggle("contact")}
        >
          <p> Contact</p>
        </li>
      </ul>
    </nav>
  </div>
  </div>
</div>
)
}

function Index() {
  const [ui, setUI] = React.useState("about")
  const [windows,setWindows] = React.useState(["active","","",""])




const toggle = (display) => {
  setUI(display)
let arr =["","","",""]
display ==="about"?arr[0]="active":display==="portfolio"?arr[1]="active":display==="contact"?arr[3]="active":arr[2]="active"

setWindows(arr)
}

return (  <>
  <Nav pack={windows} toggle={toggle}/>
  <section className="s1">
 {ui==="about"?<About />:ui==="portfolio"?<Portfolio/>:<Contact/>}
 </section >
  </>)
}



ReactDOM.render(
    <Index/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
