import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import store from './store/store.js';
import allTodos from './reducers/selectors';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import thunk from './middleware/thunk';

import {fetchTodos} from './util/todo_actions';

window.store = store;
window.selector = allTodos(store.getState());
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.fetchTodos = fetchTodos;
window.thunk = thunk;


document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('content');

  ReactDOM.render(<Root store={store}/>, content);
});
