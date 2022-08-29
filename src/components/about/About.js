import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
        <div className="about">

            {/* first part  */}

            <div className="image">
                <img src="/image/bus.png" alt="" />
            </div>

                {/* second part  */}

            <div className="a-wrapper"> 
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, suscipit neque vitae optio voluptate mollitia ipsa qui illum voluptas amet delectus. Ut accusantium corrupti optio sit inventore qui voluptates iste?</p>


                <ul>
                <li>Main skills</li>
                <li>Awards</li>
                <li>Experience</li>
                <li>Education & Certification</li>
                </ul>

                <div className="a-last">
                    <span>User experience design</span> <span>- UI/UX</span>
                    <p>Delight the user and make it work.</p>

                    <span>Web and user interface design</span> <span> - Development</span>
                    <p>Websites, web experiences, ...</p>

                    <span>Interaction design</span> <span> - Animation</span>
                    <p>I like to move it move it.</p>
                </div>


            </div>



            
        </div>
    </>
  )
}

export default About