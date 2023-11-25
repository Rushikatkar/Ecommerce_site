import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
    return (
        <>
        <Navbar/>
        <body className="con-container">
            
        
        
        <div className="con-form">
    <form method="post">
          <input className="con-in" type="text"placeholder="Name" id="name"autocomplete="off" name="name"/>
          <input className="con-in" type="text"placeholder="Subject" id="subject"autocomplete="off"name="subject"/>
          <input className="con-in" type="email"placeholder="Email" id="email"autocomplete="off" name="email"/>
          <textarea id="message"placeholder="Message" cols="30"rows="10" name="massage"></textarea>
          <button id="con-btn">Send</button>
    </form>   
</div>
        
        </body>
        <Footer/>
</>
    )
}