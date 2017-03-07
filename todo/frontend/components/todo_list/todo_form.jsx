import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }

  handleTitle(event){
    this.setState({title: event.currentTarget.value});
  }

  handleBody(event){
    this.setState({body: event.currentTarget.value});
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
        </form>
      </div>
    );
  }

}

export default TodoForm;
