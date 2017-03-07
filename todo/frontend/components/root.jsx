import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from './app';


const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
