import React from 'react';
import '../assets/sass/logo.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Logo() {
    return (
        <div className='logo' >
            <h2>MOI</h2>
            <h3>bags & accessories</h3>
            <div className="logo__socials">
                <a className="logo__socials-instagram" target="_blank" href="https://www.instagram.com/moi.bags/"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    );
} 
