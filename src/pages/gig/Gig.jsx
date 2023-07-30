import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import "./Gig.scss"
import { Link } from "react-router-dom";


const Gig = ({props}) => {

   return ( 
    <div className="gig">


<div className="container">

         {/* Sol Bölüm */}
        <div className="left">
          <span className="breadCrubs">{props.basvuruno} nolu Patent {props.referans}</span>
          <h1>{props.title}</h1>
          <div className="user">
            <img 
            src="/product/kirparticonlogo.jpg" 
            alt="" className="pp" />
            <span>Patent Durumu:</span>
            <div className="stars">
              {/* <img src="/img/star.png" alt=""/>
              <img src="/img/star.png" alt=""/>
              <img src="/img/star.png" alt=""/>
              <img src="/img/star.png" alt=""/>
              <img src="/img/star.png" alt=""/> */}
              {/* <span>{props.patentdurumu}</span> */}

              <span className={`durum ${props.patentdurumu=== "Tescilli" ? "durumtescilrenk" : "durumbasvururenk"}`}>
              {props.patentdurumu}
              </span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
          {props.imgdetay.map(imgx=>(
            <img src={imgx} alt="" />
           ))}

            {/* <img src={props.img1} alt="" />
            <img src={props.img2} alt="" />
            <img src={props.img3} alt="" /> */}


           
          </Slider>

          <div className="icerik">
                <div className="ozet">
                  <h2>{props.descriptiontitle}</h2>
                  <hr/>
                  <p>{props.description}</p>
                    
                </div>
                <div className="istemler">
                  <h2>İstemler</h2>
                      <hr/>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem exercitationem ipsa mollitia autem nihil et? Et aut cupiditate architecto rerum alias unde, reprehenderit quasi nulla doloribus maxime reiciendis repellendus eum earum eveniet. Debitis delectus dolorem, dolor voluptate aliquid maxime dolorum eius quidem unde commodi sit laudantium doloribus ullam praesentium dicta animi dignissimos placeat perferendis rem, ut id nisi. Iusto facere modi impedit id dicta eum animi quod, ullam suscipit voluptatem ad excepturi asperiores quidem libero quas adipisci earum dolore eveniet tempora veniam? Dolore quam deleniti nihil nisi voluptatem cum laborum magni? Nostrum at ipsam dicta eligendi tempora earum nemo!
                      </p>
                </div>
                <div className="tarifname">
                <h2>Tarifname</h2>
                      <hr/>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem exercitationem ipsa mollitia autem nihil et? Et aut cupiditate architecto rerum alias unde, reprehenderit quasi nulla doloribus maxime reiciendis repellendus eum earum eveniet. Debitis delectus dolorem, dolor voluptate aliquid maxime dolorum eius quidem unde commodi sit laudantium doloribus ullam praesentium dicta animi dignissimos placeat perferendis rem, ut id nisi. Iusto facere modi impedit id dicta eum animi quod, ullam suscipit voluptatem ad excepturi asperiores quidem libero quas adipisci earum dolore eveniet tempora veniam? Dolore quam deleniti nihil nisi voluptatem cum laborum magni? Nostrum at ipsam dicta eligendi tempora earum nemo!
                      </p>
                </div>
          </div>
                 

         {/* <div className="box">
          <div className="items">
            <div className="item">
              <span className="title">Başvuru Numarası</span>
              <span className="desc">2016/15622</span>
            </div>
            <div className="item">
              <span className="title">Başvuru Tarihi</span>
              <span className="desc">02.11.2016</span>
            </div>
            <div className="item">
              <span className="title">Koruma Tipi</span>
              <span className="desc">Patent</span>
            </div>
            <div className="item">
              <span className="title">Son Durum</span>
              <span className="desc">Başvuru aşamasında</span>
            </div>
          </div>
          <hr />
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quam rem non repellat, consectetur optio asperiores corporis libero fugiat unde cum aut minus a quia?
            </p>
         </div> */}

        </div>

        {/* Sağ Bölüm */}
        <div className="right">
              <div className="file">
                <h3>Patent Dökümanı</h3>
                <Link target="_blank" to={props.document}>
                <button className="button">indir</button>
                </Link>
                
              </div>

              <hr/>
              <div className="items">
                  <div className="item">
                    <span className="title">Başvuru Numarası</span>
                    <span className="desc">{props.basvuruno}</span>
                  </div>
                  <div className="item">
                    <span className="title">Başvuru Tarihi</span>
                    <span className="desc">{props.bastarihi}</span>
                  </div>
                 
                  <div className="item">
                    <span className="title">Koruma Tipi</span>
                    <span className="desc">{props.korumatipi}</span>
                  </div>
                  <div className="item">
                    <span className="title">Tescil Tarihi</span>
                    <span className="desc" >{props.tesciltarihi}</span>
                  </div>
                  <div className="item">
                    <span className="title">Son Durum</span>
                    <span className="desc">{props.patentdurumu}</span>
                  </div>
              </div>
              <hr/>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quam rem non repellat, consectetur optio asperiores corporis libero fugiat unde cum aut minus a quia?
            </p>
      
          
              </div>
        </div>



        
      </div>
    
  )
}

export default Gig
