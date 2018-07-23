import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TweenMax, TimelineMax} from 'gsap';

let goRight = TweenMax.to(".moving-text", 1, {x:100});
let goLeft = TweenMax.to(".moving-text", 1, {x:-100});

class App extends Component {

  state = {
    wiggle: false
  }

  componentDidMount () {
    let tl = new TimelineMax();
    console.log("click");
    tl.add(TweenMax.from(".moving-text", 0.5, {x:10000}), 3);
  }

  _handleClick = () => {
    let tl = new TimelineMax();
    console.log("click");
    tl.add(TweenMax.to(".moving-text", 0.5, {x:200}), 0);
    tl.add(TweenMax.to(".moving-text", 0.5, {x:-100}), 0.5);
    tl.add(TweenMax.to(".moving-text", 1, {x:0}), 1);
    // this.tl.add(this.goLeft);
    // this.tl.play(0);
  }

  _handleMouseEnter = () => {
    this.setState({wiggle:true});
  }

  _handleMouseLeave = () => {
    this.setState({wiggle:false});
  }

  render() {
    return (
      <div className="App" style={{background: 'red', height: '100vh'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onMouseEnter={this._handleMouseEnter} onMouseLeave={this._handleMouseLeave} className="App-title">{`${this.state.wiggle}`}</h1>
        </header>
        <p className="App-intro" style={{fontSize: '60px', color: 'white'}}>
          Fuck you pussy bitch
        </p>
        <br />
        <h1 className="moving-text" style={{color: 'white'}}>Yes... I speak to the bitch named Jarron.</h1>
        <button onClick={this._handleClick}>I animate stuff</button>
      </div>
    );
  }
}

export default App;
