import React from 'react'
import "../../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container container">
            <div className="footer-box">
                  <a href="#" className="logo">JM<span>Seroy</span> </a>
                  <div className = "social" >
                      <a href="#"><i className='bx bxl-facebook'></i></a>
                      <a href="#"><i className='bx bxl-twitter'></i></a>
                      <a href="#"><i className='bx bxl-instagram'></i></a>
                      <a href="#"><i className='bx bxl-youtube'></i></a>
                  </div>
            </div>
              <div className="footer-box">
                  <h3>Page</h3 >
                  <a href="#">Home</a>
                  <a href="#">Contact</a>
                  <a href="#">About us</a>
                  <a href="#">Blogs</a>
              </div>

              <div className="footer-box">
                  <h3>COSTUMER SERVICES</h3 >
                  <a href="#">Privacy</a>
                  <a href="#">Refund Policy</a>
                  <a href="#">Need-us</a>
              </div>

              <div className="footer-box">
                  <h3>CONTACT US</h3 >
                  <p>Pagadian Zamboanga Del Sur</p>
                  <p>+63975-7712345</p>
                  <p>josielmarkcute@gmail.com</p>
              </div>
          </div>
          <div className="copyright">
        <p>copyright@2023 All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer