import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return ( <li key={item.key} onClick={() => this.props.deleteItem(item.key)}><div className="liCont">{item.text}</div></li> )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems