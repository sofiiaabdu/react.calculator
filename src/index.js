import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MassIndex from './MassIndex';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MassIndex />, document.getElementById('root'));
registerServiceWorker();
