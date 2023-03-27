import React from 'react';
import Vegan from "../assets/vegan.jpg";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${ Vegan}`}}></div>
            <div className="rightSide">
                <h1>Contact us</h1>
                <form id="contact-form" method="POST">
                    <label for="name">Full name</label>
                    <input name="name" placeholder="Enter your name" type="text" />
                    <label for="email">E-mail</label>
                    <input name="email" placeholder="Enter your email" type="email" />
                    <label for="message">Message</label>
                    <textarea 
                    rows="5"
                    placeholder="Enter message.."
                    name="message"
                    required
                    ></textarea>
                    <button type="submit">Send Message</button>

                </form>
            </div>
            
        </div>
    )
}

export default Contact;
