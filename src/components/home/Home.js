import React, { Component } from 'react';
import {Slide} from './Slide';
import Sections from "../seccion/Sections";
import About from "../about/About";
import Ubicanos from "../ubicanos/Ubicanos";

class Home extends Component {
    render() {
        return (
            <div >
                <Slide/>
                <Sections/>
                <About/>
                <Ubicanos/>
            </div>
        );
    }
}

export default Home;