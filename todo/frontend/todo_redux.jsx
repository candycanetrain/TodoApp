import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import store from './store/store.js';
import allTodos from './reducers/selectors';
import { receiveTodos, receiveTodo } from './actions/todo_actions';


window.store = store;
window.selector = allTodos(store.getState());
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
