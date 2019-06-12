import React from 'react';
import './Splash.css';
import Particles from 'react-particles-js';
import particlesOptions from '../../statics/particle.json';
import Tilt from 'react-tilt'
import { images } from '../../statics/images';

const tiltOption = {
    reverse:        true,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,    // Speed of the enter/exit transition
};

class Splash extends React.Component{
  constructor(props) {
    super(props);
    
    this.getCharacters = this.getCharacters.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
  }
  
  getCharacters() {
    this.props.setPage('Characters');
  }
  getPlayers() {
    this.props.setPage('Players');
  };
  
  render() {
    return (
      <div className="SplashWrapper">
        <Particles className='Particles' params={particlesOptions} />
        
        <div className="Splash">
        
          <div className="sideBtn leftBtn" onClick={this.getCharacters}>
            <span>MEET THE CHARACTER</span>
            <img className="bunny" src={images.bunny} alt="bunny" />
          </div>
          <div className="sideBtn rightBtn" onClick={this.getPlayers}>
            <span>PLAYER BIOS</span>
            <img className="mike" src={images.mike} alt="mike" />
          </div>
          
          <div className="centerContent">
            <Tilt options={tiltOption} className="centerLogo">
              <img src={images.logo} alt="logo" /> 
            </Tilt>
            <span className="watchTrailer"> 
              > WATCH TRAILER 
            </span>
            <div className="footerMenu">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Accessibility</span>
              <span>AdChoices</span>
            </div>
            <span className="trademarks">SPACE JAM, characters, names, and all related indicia are trademarks of Warner Bros. © 1996</span>
          </div>
          
        </div>
      </div>
    );
  }
}


export default Splash;