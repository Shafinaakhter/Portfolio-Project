import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <div className="contact">
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-top">
                        <h2>Hire Me.</h2>
                        <p>
                        I am available for freelance work. Connect with me via phone: <br /> <b>01923 088574</b> or <b>email: admin@example.com</b>
                        </p>
                    </div>
                    <form>
                        <input type="text" name='name' placeholder='Name *' required />
                        <input type="email" name='email' placeholder='Email *' required />
                        <input type="text" name='subject' placeholder='Write a Subject *' required />
                        <textarea name="message" placeholder='Write Your Message' id="" cols="5" rows="5"></textarea>
                        <button className='c-btn' type='submit'>SUBMIT</button>
                    </form>
                </div>
                <div className="c-right">
                    <img src="/image/blogthree.jpg" alt="not found" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact