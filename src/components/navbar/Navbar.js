import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
        <div className="n-wrapper"> 
            <div className="n-left">
                <div className="n-name">
                    <Link spy={true} to='home' smooth='true'><img src="image/logo.png" alt="not found" /></Link>
                </div>
            </div>
            <div className="n-right"> 
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='home' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='about' smooth={true} activeClass='activeClass'> 
                            <li>About</li>
                        </Link>
                        <Link spy={true} to='services' smooth={true} activeClass='activeClass'>
                            <li>Services</li> 
                        </Link>
                        <Link spy={true} to='portfolio' smooth={true} activeClass='activeClass'>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='blog' smooth={true} activeClass='activeClass'>
                            <li>Blog</li>
                        </Link>
                        <Link spy={true} to='contact' smooth={true} activeClass='activeClass'>
                            <li>Contact</li>
                        </Link>

                    <div className="icons">
                        <i className="fa-brands fa-facebook-f"></i> 
                        <i className="fa-brands fa-linkedin-in"></i> 
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                
                    <button className='n-button'>Contact</button>
                    </ul>
                </div> 
                
            </div>
        </div>
    </>
  )
}

export default Navbar

















// import React, { useState } from 'react'
// import './Navbar.css'
// import { FaBars } from 'react-icons/fa'
// import { ImCross } from 'react-icons/im'

// const Navbar = () => {

//     const [Mobile, setMobile] = useState(false)

//   return (
//     <>
//         <nav className="navbar">
//                 <div className='logo'>
//                     <img src="/image/logo.png" alt="" />
//                 </div>
//             <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setMobile(false)}>
//                 <a href='#' className='link'><li>Home</li></a>
//                 <a href='#' className='link'><li>About</li></a>
//                 <a href='#' className='link'><li>Services</li></a>
//                 <a href='#' className='link'><li>Contact</li></a>
//                 <a href='#' className='link'><li>Skills</li></a>

//             <div className="icons">
//                 <i className="fa-brands fa-facebook-f"></i>
//                 <i className="fa-brands fa-linkedin-in"></i>
//                 <i className="fa-brands fa-instagram"></i>
//                 <i className="fa-brands fa-twitter"></i>
//             </div>
//             <button className='nav-btn'>BUY NOW</button>
//             </ul>
            
//             <button className='mobile-menu-icon' onClick={()=>setMobile(!Mobile)}>
//                 {Mobile ? <ImCross /> : <FaBars />}
                
//             </button> 
//         </nav>
//     </>
//   )
// }

// export default Navbar