import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import authStore from './stores/AuthStore';

//  no serviceworker because it can interfere with ruby sometimes
const Root = (
  <Provider authStore={authStore}>
    <App />
  </Provider>
);
ReactDOM.render(Root, document.getElementById('root'));
