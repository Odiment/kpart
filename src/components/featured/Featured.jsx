import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";


function Featured() {
  
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="bg">
       <div className="featured">
          <div className="container">
        <div className="left">
          <h1>
           Firmanız için <span>en yenilikçi</span> takip!
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Patent Ara'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Ara</button>
          </div>
          <div className="popular">
            {/* <span>Popular:</span> */}
            <button>Patent</button>
            <button>Tasarım</button>
            <button>Marka</button>
            {/* <button>AI Services</button> */}
          </div>
        </div>
    
      </div>
    </div>
    </div>
    
   
  );
}

export default Featured;