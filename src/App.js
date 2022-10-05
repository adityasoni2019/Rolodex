import React, {Component} from 'react';
import './App.css';
// this I think is react. 

import {CardList} from './components/card-list/card-list.component';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(user => this.setState({monsters: user}));
  }

  render(){
    return (
      <div className="App">

      {/* Cardlist is basically a function */}
      {/* The below code is similar to calling a function. */}
      {/* We're essentially calling a function. Analogy ofc */}
      <CardList name_prop = "This is a prop">
		
    {/* these 3 H1s are props' children */}
    {/* props.name_prop = this is a prop */}
    {/* props.children = array(34, 35, 36)  */}
    {/* props.children = + all the stuff from line 39*/}

    <h1> Yihua's CardList </h1>
    <h1> Yihua's CardList </h1>
    <h1> Yihua's CardList </h1>
    
    {
          this.state.monsters.map(monster => <h1 key = {monster.self_defined_id}> {monster.name}</h1>)
        }
</CardList>

        {/* And this "function" will basically return whatever's there in the definition of it. */}
      </div>
    )
  }
}

export default App;
