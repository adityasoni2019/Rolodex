import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
// this I think is react. 

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Naman'
        },

        {
          name: 'Rohin'
        },
        
        {
          name: 'Abhishek'
        }
      ]
    };
    
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1> {monster.name }</h1>)
        }
      </div>
    )
  }
}

export default App;
