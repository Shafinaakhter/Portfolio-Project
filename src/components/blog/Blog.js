import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <>
      <div className="blog">

        {/* b-top start  */}

        <div className="b-top">
          <h2>Latest News</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </div>

        {/* blog start  */}

        <div className="b-part">
          <div className="b-post">
            <div className="image">
              <img src="/image/blogfour.jpg" alt="not found" />
            </div>

            <div className="b-text">
              <p>Development</p>
              <h3>Getting tickets to the big <br /> show</h3>
              <button className="b-btn">READ MORE</button>
            </div>

          </div>

          <div className="b-post">
            <div className="image">
              <img src="/image/blogfive.jpg" alt="not found" />
            </div>

            <div className="b-text">
              <p>Development</p>
              <h3>Getting tickets to the big <br /> show</h3>
              <button className="b-btn">READ MORE</button>
            </div>

          </div>

          <div className="b-post">
            <div className="image">
              <img src="/image/blogsix.jpg" alt="not found" />
            </div>

            <div className="b-text">
              <p>Development</p>
              <h3>Getting tickets to the big <br /> show</h3>
              <button className="b-btn">READ MORE</button>
            </div> 

          </div>
        </div>

      </div>

    </>
  )
} 

export default Blog


