import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// removed serviceworker because it might cause bugs with activeadmin
ReactDOM.render(<App />, document.getElementById('root'));

