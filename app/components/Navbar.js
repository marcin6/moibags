import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../assets/sass/header.sass';

export default function Navbar() {
    const { blackNav, setBlackNav} = useContext(AppContext);
    const ref = useRef(null);
    const [open, setOpen] = useState(true);
    const openNavbar = () => setOpen(!open);

    return (
        <div className="mainmenu" ref={ref}>
            <div className="mainmenu__logo">MOI</div>
            <div className="mainmenu__navbar">
                <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={openNavbar}>
                    <div className={`animated-icon ${!open && ("open")}`}><span></span><span></span><span></span></div>
                </span>
            </div>
            <nav className={`mainmenu__nav ${!open && ("open")} ${blackNav ? "black__nav" : ''}`} >
                <ul>
                    <li><Link to='/omnie' onClick={() => { setBlackNav(true); openNavbar(false); }}>O mnie</Link></li>
                    <li><Link to='/torebki' onClick={() => { setBlackNav(true); openNavbar(false); }}>Torebki</Link></li>
                    <li><Link to='/kontakt' onClick={() => { setBlackNav(true); openNavbar(false); }}>Kontakt</Link></li>
                </ul>
            </nav>
        </div>
    );
}