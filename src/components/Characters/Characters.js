import React from 'react';
import './Characters.css';
import { friendsImgs } from '../../statics/images';
import posed from 'react-pose';

class Characters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: ''
    }
  }
  
  render() {
    return(
      <div className="CharactersWrapper">
        <span className="goback"
        onClick={() => this.props.setPage('Splash')}> Return </span>
        <div className="Characters">
        </div>
      </div>
    );
  }
}

export default Characters;