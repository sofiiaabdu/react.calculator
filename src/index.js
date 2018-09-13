import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalculateApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CalculateApp />, document.getElementById('root'));
registerServiceWorker();
