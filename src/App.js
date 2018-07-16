import React, { Component } from 'react';
import Home from './components/home/Home'
import './App.css';
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Footer/>
      </div>

    );
  }
}

export default App;
