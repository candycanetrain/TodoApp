import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import allTodos from './reducers/selectors';
import { receiveTodos, receiveTodo } from './actions/todo_actions';


window.store = store;
window.selector = allTodos(store.getState());
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos; 

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Todos App</h1>
      </div>
    );
  }
}



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
