import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

// Stick Menü Ayarı
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true): setActive(false)
    }

    useEffect(()=> {
        window.addEventListener("scroll",isActive )
        return ()=>{
            window.removeEventListener("scrooll", isActive);
        }
     }, [])
// Stick Menü Ayarı

const currentUser= {
    id:1,
    username:"Fatih",
    isSeller:true
}

  return (
    <div className={active  || pathname !=="/" ? "navbar active" : "navbar"}>
     <div className="container">
        <div className="logo">
            <Link to="/" className="link">
            <span className="textone">YALIN</span>
           
            <span className="texttwo"> PATENT</span>
            <hr color="white"/>
            <span className="texttre"> Fikirden Değere... </span>
            </Link>
           
            </div>
        <div className="links">
            <Link className="link" to="/kurumsal">Kurumsal</Link>
            <Link className="link" to="/hizmetlerimiz">Hizmetlerimiz</Link >
            <Link className="link" to="/bilgimerkezi">Bilgi Merkezi</Link >
            <Link className="link" to="/iletisim">İletişim</Link>
            {!currentUser && <button className='button'>Kayıt Ol</button>}
            {currentUser && (
                <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="https://i.pinimg.com/564x/eb/46/75/eb4675380d672e6cc77c228e49d02b0c.jpg" alt="" />
                    <span>{currentUser?.username}</span>
                    {open && <div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                <Link className="link" to="/mygigs">Gigs</Link>
                                <Link className="link" to="/add">Add New Gig</Link>
                                </>
                            )}
                            <Link className="link" to="/orders">Orders</Link>
                            <Link className="link" to="/messages">Messages</Link>
                            <Link className="link" to="/gigs">Logout</Link>

                    </div>}
                </div>
            )}
        </div>
     </div>
     {( active || pathname !=="/" ) && (
         <>
         <hr />
            <div className="menu">
                <span>Kırpart</span>
                <span>Ürün Geliştirme</span>
                <span>Kilomerte Taşları</span>
                <span>Ürünler Proseler</span>
                <span>AR&GE</span>
                <span>Çözümler</span>
            </div>
            <hr /> 
        </>
     )}
    
    </div>
  )
}

export default Navbar
