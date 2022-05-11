import React from 'react';
import Avatar from './../assets/image/avatar.jpeg'
import './../assets/sass/about.sass';
import BlackLogo from "./BlackLogo";

export default function About() {
    return (
        <div className="about" >
            <BlackLogo/>
            <div className="about__container">
                <div className="about__avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="about__content">
                    <h3>O mnie</h3>
                    <p>Nazywam się Agnieszka Gerdel. Z wykształcenia jestem szkoleniowcem kompetencji miękkich, jednak moją największą pasją od zawsze było krawiectwo i kaletnictwo.</p>
                    <p>Moje projekty charakteryzują się klasycznymi wzorami, kolorami, jak i wysoką jakością tkanin. Wszystkie szyte są przeze mnie w mojej pracowni, z dbałością o detale.</p>
                    <p>Tworzę zgodnie z ideą slow fashion, stawiam na etyczną, zrównoważoną modę.</p>
                    <p>Torebki są szyte wyłącznie na zamówienie.</p>
                    <p>Zapraszam do kontaktu,</p>
                    <p>Agnieszka Gerdel</p>
                </div>
            </div>
        </div>
        );
} 

