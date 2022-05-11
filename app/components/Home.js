import React from 'react';
import Video from "./Video";
import Logo from "./Logo";
import '../assets/sass/home.sass';

export default function Home() {
    return (
        <div className="home" >
            <Logo />
            <Video />
        </div>
    );
}

