import React from 'react'
import "./Slide.scss";
import Slider from "infinite-react-carousel";


const Slide = ({children,slidesToShow,arrowScrool}) => {
  return (
    <div className="slide">
      <div className="container">
           <h2>
           Kırpart<span>Öne Çıkan</span>Patentler
          </h2>
          <Slider slidesToShow={slidesToShow} arrowScrool={arrowScrool}>
            {children}
          </Slider>
         
      </div>
    </div>
  )
}

export default Slide;
