import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './Routes/index';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css';
import '../node_modules/argon-design-system-free/assets/css/argon.css';


ReactDOM.render(
  <Provider store={configureStore()}>
    <div>
      {' '}
      <Routes />
    </div>
  </Provider>, document.getElementById('root'),
);
