import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="f-wrapper">
          
            <img src="image/logo.png" alt="not found" />
          
            <div className="f-icon">
            <i className="fa-brands fa-facebook-f"></i> 
            <i className="fa-brands fa-linkedin-in"></i> 
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="f-text">
              <p>Copyright © 2021 Rainbow-Themes. All Rights Reserved.</p>
            </div> 
        </div>
      </div>
    </>
  )
}

export default Footer