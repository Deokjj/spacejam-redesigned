import React from 'react';
import './Players.css';
import { playerImgs } from '../../statics/images';
import posed from 'react-pose';
import { MikeStat, PatrickStat, CharlesStat, LarryStat, MuggsyStat, ShawnStat } from './playerStatus';

class Player extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      status: "idle"
    };
  }
  
  Overlay = posed.div({
    idle: { 
      opacity: 0,
      transition: { duration: 300 }
    },
    hovered: { 
      opacity: 1,
      transition: { duration: 300 } 
    }
  });
  
  Player = posed.div({
    idle: {
      flexBasis: "17%",
      transition: { duration: 300 }
    },
    hovered: {
      flexBasis: "25%",
      transition: { duration: 300 }
    },
    clicked: {
      flexBasis: "100%",
      transition: { duration: 500 }
    }
  });
  
  Status = posed.div({
    idle: {
      opacity: 0,
      height: 0,
    },
    clicked: {
      opacity: 1,
      height: 'auto'
    }
  });
  
  render() {
    const {src,name, onMouseEnter, Stat} = this.props;
    
    return(
      <this.Player 
        className="player"
        pose={this.state.status}
        onMouseEnter={() => {
          this.setState({status: "hovered"});
          onMouseEnter();
        }}
        onMouseLeave={() => this.setState({status: "idle"})}
        onClick={() => this.setState({status: "clicked"})}>
        <img src={src} alt={name} />
        <this.Overlay 
          className="overlay"
          pose={this.state.status ? "hovered" : "idle"}>
          <p className="playerName">{name}</p>
          <this.Status pose={this.state.status}>
            <Stat className="stat"/>
          </this.Status> 
        </this.Overlay>
      </this.Player>
    );
  }
}

class Players extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hovering: 'none'
    };
  }
  
  Player = posed.div({
    none: { 
      transform: 'rotate(2deg) translate(-10vw,-5vh)'
    },
    mike: { 
      transform: 'rotate(2deg) translate(-7vw,-5vh)'
    },
    patrick: {
      transform: 'rotate(2deg) translate(-13vw,-5vh)'
    },
    charles: {
      transform: 'rotate(2deg) translate(-4vw,-5vh)'
    },
    larry: {
      transform: 'rotate(2deg) translate(-16vw,-5vh)'
    },
    muggsy: {
      transform: 'rotate(2deg) translate(1vw,-5vh)'
    },
    shawn: {
      transform: 'rotate(2deg) translate(-19vw,-5vh)'
    }
  });
  
  render() {
    return(
      <div className="PlayersWrapper">
        <span className="goback"
        onClick={() => this.props.setPage('Splash')}> Return </span>
        <this.Player className="Players"
        pose={this.state.hovering}
        onMouseLeave={() => this.setState({hovering: 'none'})}>
          <Player src={playerImgs.mike} name="Michael Jordan" Stat={MikeStat}
            onMouseEnter={() => this.setState({hovering: 'mike'})}/>
          <Player src={playerImgs.patrick_charles} name="Patrick Ewing" Stat={PatrickStat}
            onMouseEnter={() => this.setState({hovering: 'patrick'})}/>
          <Player src={playerImgs.patrick_charles} name="Charles Barkley" Stat={CharlesStat}
            onMouseEnter={() => this.setState({hovering: 'charles'})}/>
          <Player src={playerImgs.larry} name="Larry Johnson" Stat={LarryStat}
            onMouseEnter={() => this.setState({hovering: 'larry'})}/>
          <Player src={playerImgs.muggsy} name="Muggsy Bogues" Stat={MuggsyStat}
            onMouseEnter={() => this.setState({hovering: 'muggsy'})}/>
          <Player src={playerImgs.shawn} name="Shawn Bradley" Stat={ShawnStat}
            onMouseEnter={() => this.setState({hovering: 'shawn'})}/>
        </this.Player>
      </div>
    );
  }
};

export default Players;
