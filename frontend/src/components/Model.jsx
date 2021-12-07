import "./custom.css";
import "./style.default.css";
import "./style.default.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import  ReactDOM  from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MODEL_STYLE = {
    position:"fixed",
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'white',
    zIndex:1000,
    height:'550px',
    width:'1000px'
}
const OVERLAY_STYLE = {
    position:'fixed',
    top:'0',
    left:'0',
    right:'0',
    bottom:'0',
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex:1000
}
const Model = ({open,close,name,image,price,longDescription}) => {
  const [readMore, setReadMore] = useState(false)

  if(!open) return null
  const sub = longDescription.substr(0,140)
  if(readMore){
    longDescription=longDescription.substr(0,longDescription.length)
    console.log(longDescription);
  }
  console.log(longDescription);
    return ReactDOM.createPortal(
        <div style={OVERLAY_STYLE} >
        <div className="" style={MODEL_STYLE}>
        <div className="d-flex">
          <div className="image col-6">
            <img className='bg-cover bg-center w-100' src={image} alt="" />
          </div>
          <div className="details col-6">
            <div className='close-btn'>
            <FontAwesomeIcon icon={faTimes} className='btn-close-style' onClick={()=>close()}>x</FontAwesomeIcon>

            </div>
              <div className='px-5'>
                <h3>{name}</h3>
                <h4>${price}</h4>
                {readMore?<p>{longDescription}</p>:<p>{sub}</p>}
                <button className='btn btn-primary' onClick={()=>setReadMore(!readMore)} >Read More...</button>
              </div>
          </div>
         </div>
      </div>
      </div>,
      document.getElementById('portal')
    )
}

export default Model
