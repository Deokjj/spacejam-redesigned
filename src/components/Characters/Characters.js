import React from 'react';
import './Characters.css';
import { friendsImgs } from '../../statics/images';
import posed, { PoseGroup }from 'react-pose';
import { description } from './description';

class Character extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      status: 'idle'
    };
  }
  
  Wrapper = posed.div({
    idle: { 
      flexGrow: 1,
      transition: { duration: 300 } 
    },
    hovered: { 
      flexGrow: 1.5,
      transition: { duration: 300 } 
    }
  });
  
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
  
  render() {
    const {src, name, getCharacter} =  this.props;
  
    return(
        <this.Wrapper 
          pose={this.state.status}
          onMouseEnter={() => {
            this.setState({status: "hovered"});
          }}
          onMouseLeave={() => {
            this.setState({status: "idle"});
          }}
          onClick={()=>getCharacter()}>
          <img src={src} alt={name} />
          <this.Overlay
            className="overlay"
            pose={this.state.status}>
            <p className="name">{name}</p>
          </this.Overlay>
        </this.Wrapper>
    );
  }
}

class Characters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isCharactersVisible: false,
      selected: '',
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isCharactersVisible: true
      });
    }, 100);
  }
  
  Characters = posed.div({
    enter: { 
      y: 0,
      opacity: 1,
      delay: 100,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 15 },
        default: { duration: 350 }
      }
    },
    exit: { 
      y: 50,
      opacity: 0,
      transition: { duration: 200 }
    }
  });
  
  getCharacter(who) {
    this.setState({
      isCharactersVisible: false,
      selected: who
    });
  }
  
  render() {
    return(
      <div className="CharactersWrapper">
        { this.state.selected ? (
          <span className="goback"
          onClick={() => this.setState({isCharactersVisible: true, selected: ''})}> Meet Another </span>
        ):(
          <span className="goback"
          onClick={() => this.props.setPage('Splash')}> Return </span>
        )}
        <PoseGroup>
        { this.state.isCharactersVisible && [
          <this.Characters key="Characters" className="Characters">
            <div className="row row1"
            pose={this.state.row1}>
              <Character src={friendsImgs.bugs} name="Bugs Bunny"
              onRow={this.setRow1Hovered}
              getCharacter={()=>this.getCharacter('bugs')}/>
              <Character src={friendsImgs.daffy} name="Daffy Duck"
              onRow={this.setRow1Hovered}
              getCharacter={()=>this.getCharacter('daffy')}/>
              <Character src={friendsImgs.porky} name="Porky Pig"
              onRow={this.setRow1Hovered}
              getCharacter={()=>this.getCharacter('porky')}/>
              </div>
              <div className="row row2">
              <Character src={friendsImgs.taz} name="Taz"
              onRow={this.setRow2Hovered}
              getCharacter={()=>this.getCharacter('taz')}/>
              <Character src={friendsImgs.sylv} name="Sylvester & Tweety"
              onRow={this.setRow2Hovered}
              getCharacter={()=>this.getCharacter('sylv')}/>
              <Character src={friendsImgs.elmer} name="Elmer Fudd"
              onRow={this.setRow2Hovered}
              getCharacter={()=>this.getCharacter('elmer')}/>
              <Character src={friendsImgs.wile} name="Wile & Road Runner"
              onRow={this.setRow2Hovered}
              getCharacter={()=>this.getCharacter('wile')}/>
            </div>
          </this.Characters>
        ]}
        </PoseGroup>
        { this.state.selected && (
          <div key='description' className="description">
            <img src={friendsImgs[this.state.selected]} alt="" />
            {description(this.state.selected)}
          </div>
        )}
      </div>
    );
  }
}

export default Characters;