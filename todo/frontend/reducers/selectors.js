// import state from '../store/store.js';

const allTodos = (state) => {
  const array = Object.keys(state.todos).map((id) => id);
  return array;
};

export default allTodos;
