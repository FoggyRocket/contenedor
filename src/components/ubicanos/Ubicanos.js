import React, { Component } from 'react';
import './Ubicanos.css';
import mapa from '../../assets/fondo.jpg'
export default class Ubicanos extends Component {
    render() {
        return (
            <div className="about">
                <div className="nos">
                    <div className="fx largo">
                        <div className="info">
                            <h2><br/>Ven con nosotros</h2>
                            <p>Andador Guadalupano 66-C, esquina con Dugelay.</p>
                            <p>Tel: 967.674.0779</p>
                        </div>
                        <div className="infor">
                            <iframe
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.9530898276378!2d-92.63299783513519!3d16.73792519648527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed453b94b1d22b%3A0xdd59a564444b55b2!2sConTenedor!5e0!3m2!1ses!2smx!4v1531751750811"}
                                className="maps" allowFullScreen></iframe>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}
