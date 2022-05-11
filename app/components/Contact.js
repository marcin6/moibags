import React from 'react';
import BlackLogo from "./BlackLogo";
import '../assets/sass/contact.sass';

export default function Contact() {
    return (
        <div className="contact" >
            <BlackLogo/>
            <div className="contact__container">
                <h3>KONTAKT</h3>
                <a href="mailto:officemoiatelier@gmail.com<">officemoiatelier@gmail.com</a>
            </div>
        </div>
        );
} 

