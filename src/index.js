import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import CalculatorApp from './CalculatorApp';
import { store } from './store/store';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='index-app'>
        <CalculatorApp />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
