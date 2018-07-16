import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <div className="footer ">
                <div className="divider">
                    <div className="img_footer">

                        <FontAwesome name='facebook-square' className='ic' size='2x'/>
                        <FontAwesome name='twitter-square' className='ic' size='2x'/>
                        <FontAwesome name='instagram' className='ic' size='2x'/>
                    </div>
                    <div className="box_footer">
                            <p>Acerca de conTenedor</p>
                            <p>Contacto</p>
                    </div>
                    <div className="box_footer">
                            <p>Zonas de Servicio</p>
                    </div>
                </div>
                <hr className="line"/>
                <div className="box_footer">
                    <p>conTenedor  © 2018 Privacy Policy</p>
                </div>
            </div>
        );
    }
}

export default Footer;