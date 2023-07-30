import React from 'react'
//import "./PatentDetay.scss";
import { patents } from "../../data";
import Gig from "../gig/Gig";
import { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';

const PatentDetay = () => {

  const { patentId } = useParams();

  const id = parseInt(patentId.slice(1,3));

  const patent = patents.find(obj => obj.id === parseInt(patentId.slice(1,3)));

  return (
    <div className="patentDetay">
       <Gig props={patent} key={id}/>
    </div>
    
  )
}

export default PatentDetay
