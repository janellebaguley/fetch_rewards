import React, {Component} from 'react'
import data from './data'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
  }


  render () {
  return (
    <div className="App">
      <h1>Hello</h1>
      <GroupBy list ={this.groupData}/>
    </div>
    )
  }
}

export default App;
