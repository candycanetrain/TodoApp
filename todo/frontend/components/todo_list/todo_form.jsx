import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      title: '',
      body: '',
      done: false
    };
  }

  handleTitle(event){
    this.setState({title: event.currentTarget.value});
  }

  handleBody(event){
    this.setState({body: event.currentTarget.value});
  }

  handleSubmit(event){
    event.preventDefault();

    const todo = Object.assign({}, this.state, {id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: "",
      done: false
    });

  }

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <input onChange={this.handleTitle.bind(this)} ></input>
          <br />
          <br />
          <label>Body</label>
          <textarea onChange={this.handleBody.bind(this)} ></textarea>
          <input type="submit" onClick={this.handleSubmit.bind(this)}></input>
        </form>
      </div>
    );
  }

}

export default TodoForm;
