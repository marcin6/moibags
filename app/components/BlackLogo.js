import React from 'react';
import '../assets/sass/logo.sass';
import { Link } from 'react-router-dom';

export default function BlackLogo() {
    return (
        <div className='black_logo' >
            <Link to='/' onClick={() => setBlackNav(true)}>
                <h2>MOI</h2>
                <h3>bags & accessories</h3>
            </Link>
        </div>
    );
} 
