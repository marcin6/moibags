import React from 'react';
import clip from '../assets/video/video-3.mp4';

export default function Video() {
    return (
        <video className="video" autoPlay muted loop>
            <source src={clip}  type='video/mp4' />
        </video>
        );
} 


