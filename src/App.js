import React, {Component} from 'react';
import './App.css';
// this I think is react. 

import {CardList} from './components/card-list/card-list.component';
import './components/card-list/card-list.styles.css'

import {SearchBox} from './search-box/search-box.component.jsx'
class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(user => this.setState({monsters: user}));
  }

  handleChange = e =>{

    
    this.setState({searchField: e.target.value});
    
   
  }


  render(){

    const{monsters, searchField} = this.state; 
      // this ^ is equivalent of writing 
      // const monsters = this.state.monsters;
      // const searchField = this.state.searchField;
       
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (  
      <div className="App">
      {/* <input type = 'search' placeholder = 'search monsters'   
      onChange={ e=> this.setState({searchField: e.target.value}, ()=> console.log(this.state))}
      /> */}

      <h1>Aliens</h1>

      <SearchBox
        placeholder='search monster'
        handleChange= {this.handleChange}
      />
      
      <CardList monsters_prop  = {filteredMonsters}>
        {/* monsters_prop: [] */}
      </CardList> 


        {/* And this "function" will basically return whatever's there in the definition of it. */}
      </div>
    )
  }
}

export default App;