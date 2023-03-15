import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters : [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
    
    this.setState({
      characters: characters.filter((chatacter, i)=>{
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  fetchFakeApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    const {characters} = this.state

    return(
      <div className="container">
        <h1>Hello, Peach!</h1>
        <input type="button" value="try fake api" onClick={this.fetchFakeApi} />
        <Table characterData = {characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
};

export default App;