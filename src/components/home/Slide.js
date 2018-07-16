import React from 'react';
import './Slide.css';
import logo from '../../assets/contenedor-logo.gif';

export const Slide = () => {
    return (
        <div className="slide">
            <div className="cover">
                <div className="descript">
                    <img  src={logo} alt=""/>
                    <div className="slogan">
                        <h2>Cócteles y comida todos los días.</h2>
                        <p className="text">
                            abierto de 9:00am a 12:00pm
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}