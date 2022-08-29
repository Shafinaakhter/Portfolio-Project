import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
        <div className="portfolio">

            {/* top end  */}

            <div className="p-top">
                <h2>My Latest Project</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration.</p>
            </div> 
            {/* image start  */}

            <div className="p-cover">
                <div className="p-image">
                    <img src="/image/glass.jpg" alt="not found"/>
                    <div className="p-text">
                    <p>Development</p>
                    <h3>Getting tickets to the big <br /> show</h3>
                    <button className='p-button'>VIEW DETAILS</button>
                    </div>
                </div>

                <div className="p-image">
                    <img src="/image/sea.jpg" alt="not found"/>
                    <div className="p-text">
                    <p>Development</p>
                    <h3>Getting tickets to the big <br /> show</h3>
                    <button className='p-button'>VIEW DETAILS</button>
                    </div>
                </div>

                <div className="p-image">
                    <img src="/image/sun.jpg" alt="not found"/>
                    <div className="p-text">
                    <p>Development</p>
                    <h3>Getting tickets to the big <br /> show</h3>
                    <button className='p-button'>VIEW DETAILS</button>
                    </div>
                </div>
            </div>

            <div className="p-cover">
                <div className="p-image">
                    <img src="/image/sea.jpg" alt="not found"/>
                    <div className="p-text">
                    <p>Development</p>
                    <h3>Getting tickets to the big <br /> show</h3>
                    <button className='p-button'>VIEW DETAILS</button>
                    </div>
                </div>

                <div className="p-image">
                    <img src="/image/sun.jpg" alt="not found"/>
                    <div className="p-text">
                    <p>Development</p>
                    <h3>Getting tickets to the big <br /> show</h3>
                    <button className='p-button'>VIEW DETAILS</button>
                    </div>
                </div>

                <div className="p-image">
                    <img src="/image/glass.jpg" alt="not found"/>
                    <div className="p-text">
                    <p>Development</p>
                    <h3>Getting tickets to the big <br /> show</h3>
                    <button className='p-button'>VIEW DETAILS</button>
                    </div>
                </div>
            </div>

            <button className="last-btn">VIEW MORE</button>

        </div>
    </>
  )
}

export default Portfolio