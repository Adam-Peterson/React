import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import iApple from './images/apple.jpg'
import iBag from './images/bag.jpg'
import iBalloon from './images/balloon.jpg'
import iBananas from './images/bananas.jpg'

const IMAGES = [
  iApple,
  iBag,
  iBalloon,
  iBananas,

]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'counter': 2,
      currentImage: iApple,
    }
  }

  changeImage = (img) => {
    this.setState((state, props) => ({
        currentImage: img,
      }))}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React Today!</h1>
          <h2>Your name is {this.props.name}</h2>
          <h2>The counter is at {this.state.counter}</h2>
          <button onClick={
            (e) => {
              this.setState((state, props) => {
                  return {
                    counter: state.counter * 10000
                  }
              })
            }
          }>Increment Counter</button>
          </header>

            <div className="image-list">
              <ul className="image-list">

            {IMAGES.map((img, i)=>{
              return (<li><img src={img} className="product-image" onClick={(e) => this.changeImage(img)}/></li>)
            })}


          {/* <li><img src={iApple} className="product-image" onClick={(e) => this.changeImage(iApple)}/></li>
          <li><img src={iBag} className="product-image" onClick={(e) => this.changeImage(iBag)}/></li>
          <li><img src={iBalloon} className="product-image" onClick={(e) => this.changeImage(iBalloon)}/></li>
          <li><img src={iBananas} className="product-image" onClick={(e) => this.changeImage(iBananas)}/></li> */
          <li><img src={this.state.currentImage} className="main-image"/></li>}
          </ul>

          </div>

          {/* <p>
            Edit <code>src/App.js</code> filler.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
      </div>
    );
  }
}

export default App;
