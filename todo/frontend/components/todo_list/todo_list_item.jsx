import React from 'react';

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);
  }

  handleDelete(event){
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleDone(event){
    event.preventDefault();
    const todo = Object.assign({}, this.props.todo);
    todo.done = (todo.done === true) ? false : true;
    this.props.receiveTodo(todo);
  }

  render() {
    return(
      <li>
        {this.props.todo.title}
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <button onClick={this.handleDone.bind(this)}>{this.props.todo.done ? "Undo" : "Done"}</button>
    </li>
    );
  }

}

export default TodoListItem;
