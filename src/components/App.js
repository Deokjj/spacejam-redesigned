import React from 'react';
import Splash from './Splash/Splash';
import Players from './Players/Players';
import Characters from './Characters/Characters';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Splash'
    };
    this.setPage = this.setPage.bind(this);
  }
  
  setPage(pageName = String) {
    this.setState({
      page: pageName
    });
  }
  
  render() {
    const { page } = this.state;

    switch( page ) {
      case 'Splash':
        return <Splash setPage={this.setPage}/>
      case 'Players':
        return <Players setPage={this.setPage}/>
      case 'Characters':
        return <Characters setPage={this.setPage}/>
      default:
        return <Splash setPage={this.setPage}/>
    }
  }
}

export default App;