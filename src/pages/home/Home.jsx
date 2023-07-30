import React from 'react'
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from '../../components/Slide/Slide';
import { cards , patents} from "../../data";
import CatCard from "../../components/catCard/catCard";
import PatentCard from "../../components/patentCard/PatentCard";

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScrool={5}>
      {cards.map(card=>(
          <CatCard item={card} key={card.id}/>
        ))}
      </Slide>
   
     
       {patents.map(patent=>(
        <PatentCard props={patent} key={patent.id}/>
      ))}
     
    
    </div>
  )
}

export default Home;