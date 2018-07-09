import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TweenMax, TimelineMax} from 'gsap';

let goRight = TweenMax.to(".moving-text", 1, {x:100});
let goLeft = TweenMax.to(".moving-text", 1, {x:-100});

class App extends Component {

  _handleClick = () => {
    let tl = new TimelineMax();
    console.log("click");
    tl.add(TweenMax.to(".moving-text", 0.5, {x:100}), 0);
    tl.add(TweenMax.to(".moving-text", 0.5, {x:-100}), 0.5);
    tl.add(TweenMax.to(".moving-text", 1, {x:0}), 1);
    // this.tl.add(this.goLeft);
    // this.tl.play(0);
  }

  render() {
    return (
      <div className="App" style={{background: 'pink', height: '100vh'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" style={{fontSize: '60px'}}>
          Fuck you pussy bitch
        </p>
        <br />
        <h1 className="moving-text">Yes... I speak to the bitch named Jarron.</h1>
        <button onClick={this._handleClick}>I animate stuff</button>
      </div>
    );
  }
}

export default App;
