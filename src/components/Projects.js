import React, { useState} from "react"
import {projectData as data} from "../outils/ProjectData"
import {FaArrowAltCircleUp,FaArrowAltCircleDown} from "react-icons/fa"
import useWindowSize from "../outils/useWindowSize"
const Projects= () => {
const [slide,setSlide] = useState(0)

const {width} = useWindowSize()
let objData = Object.assign({},data[slide]),
 objDataX = Object.assign({},data[slide-1]),
 objDataY = Object.assign({},data[slide+1])

const prevProject = () => {
setSlide(slide===0?data.length-1:(slide-1)%data.length)
console.log(slide)
objData = data[slide]
}
const nextProject = () => {
setSlide((slide+1)%data.length)
objData=data[slide]


  }

    return (
  <>

    <h4>Previous work</h4>
      <div className="gallery">
     
    {width>768 ?<div><div ><button className="slideBtn" onClick={()=>prevProject()}>
                              <FaArrowAltCircleUp size={30} className="icon"/></button> </div>

                        <div  className="project">
               <img className="img"  alt={objData.alt} src={objData.display}/>
<h6>{objData.name}</h6>
<p>{objData.description}</p>        </div>




<div><button className="slideBtn" onClick={()=>nextProject()}>
                              <FaArrowAltCircleDown size={30} className="icon"/></button> </div>
</div>


: // width < 768
<div>
  
<div ><button className="slideBtn" onClick={()=>prevProject()}><FaArrowAltCircleUp size={30} className="icon"/></button> </div>

<div  className="project">
<img className="img"  alt={objData.alt} src={objData.display}/>

<h6>{objData.name}</h6>
<p>{objData.description}</p>        </div>
<div><button className="slideBtn" onClick={()=>nextProject()}><FaArrowAltCircleDown size={30} className="icon"/></button> </div>
</div>
}
          </div>

  </>

    )
}

export default Projects