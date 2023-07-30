import React from 'react'
import "./Footer.scss"


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
            <span>SİTE HARITASI</span>
            <span>KULLANIM ŞARTLARI</span>
            <span>YASAL UYARI</span>
            <span>GİZLİLİK BİLDİRİMİ</span>
            <span>KİŞİSEL VERİLERİN KORUNMASI</span>
        </div>
        <hr />
        <div className="button">
            <div className="left">
              <img src="/product/yalinlogo.png" alt="" />
              <span>© 2023 Yalın Patent Ar-ge ve Danışmanlık Ltd. Şti.</span>
            </div>
            <div className="right">
              <div className="social">
                <img src="img/twitter.png" alt="" />
                <img src="img/facebook.png" alt="" />
                <img src="img/linkedin.png" alt="" />
                <img src="img/instagram.png" alt="" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
