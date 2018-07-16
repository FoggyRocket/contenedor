import React, { Component } from 'react';
import './Sections.css';
import FontAwesome from 'react-fontawesome';
import Desayunos from "./Desayunos";
import Algomas from "./Algomas";
import Poutine from "./Poutine";

export default class Sections extends Component {
    state={
        openD:false,
        openA:false,
        openP:false,
    }

    handleClickOpenD  = () => {
        let {openD}=this.state;
        openD =! openD
        this.setState({ openD});
    };
    handleClickOpenA  = () => {
        let {openA}=this.state;
        openA =! openA
        this.setState({ openA});
    };
    handleClickOpenP  = () => {
        let {openP}=this.state;
        openP =! openP
        this.setState({ openP});
    };


    render() {
        let {openD,openA,openP}=this.state
        return (
            <div className=" space cat">
                <h2>¿Qué ofrecemos?</h2>
                <div className="fx">
                    <div className="cuadro" onClick={this.handleClickOpenD}>
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/373941/pexels-photo-373941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon' ><FontAwesome icon="home" size='1x'/></p>
                                    <span >Desayunos</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro" onClick={this.handleClickOpenA}>
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon' ><FontAwesome name='leaf' size='1x'/></p>
                                    <span >Algo más</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="cuadro" onClick={this.handleClickOpenP}>
                        <div className="cd" style={{backgroundImage:'url(https://img.taste.com.au/GJej_qrp/taste/2016/11/poutine-104101-1.jpeg)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='glass'  size='1x'/></p>
                                    <span >Poutine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Desayunos
                    open={openD}
                    close={this.handleClickOpenD}
                />
                <Algomas
                    open={openA}
                    close={this.handleClickOpenA}
                />
                <Poutine
                    open={openP}
                    close={this.handleClickOpenP}
                />
            </div>
        );
    }
}
