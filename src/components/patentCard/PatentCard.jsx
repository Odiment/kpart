import React, { useState } from 'react';
import "./PatentCard.scss";
import { useNavigate } from "react-router-dom";

/**/

const PatentCard = ({ props }) => {

  const navigate = useNavigate()
 
  return (
    
    <div className="container">
         
      <div className="course">
        <div className="preview">
          {/* <h6>Gerçek Resim</h6> */}
          <img src={props.img} className="img_one" />
          <img src={props.pimg} className="img_two" />
          {/* <h2>Web Development</h2> */}
          {/* <a href="#">View All Chapters</a> */}
        </div>
        <div className="info">
        
          <div className="progress-wrapper">
            <div className={`progress ${props.patentdurumu==="Tescilli" ? "tescilli" : "basvuru"}`}>
              
            </div>
            <span className="progress-text">{props.patentdurumu}</span>
            <span className="progress-text">Başvuru Tarihi:{props.bastarihi}</span>
          </div>

          <h3>{props.basvuruno}</h3>
          <h5>{props.referans}</h5>
          <h2>{props.title}</h2>
          <span className="progress-text">{props.descriptiontitle}</span>
            <p className="p-trunc">{props.description}</p>
          
            <button className="btn" 
            onClick={()=> {navigate(`/gig/:${props.id}`)}}>
              Detay
            </button>
        </div>
      </div>
    </div>
  )
}




      export default PatentCard;
