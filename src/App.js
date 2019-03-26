import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js';
import TodoItems from './TodoItems.js';

class App extends Component {
  state = {
    items: [],
    currentItem: {text:'', key:''},
  }

  handleInput = e => {
   const itemText = e.target.value
   const currentItem = {text: itemText, key: Date.now()}
   this.setState({currentItem})
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== "") {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({items: items, currentItem: {text: '', key: ''}})
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => { 
      return item.key !== key
    })
    this.setState({items: filteredItems})
  }

  inputElement = React.createRef()

  render() {
    return (
      <div className="App">
        <div className="container">
            <h1>Todo List</h1>
            <h3>Type and Click to add Tasks.</h3>
            <h3>Click on a task to remove it</h3>
          <TodoList addItem={this.addItem} inputElement={this.inputElement} handleInput={this.handleInput} currentItem={this.state.currentItem}/>
          <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
