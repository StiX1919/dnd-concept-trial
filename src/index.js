import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {observe} from './Game'
import registerServiceWorker from './registerServiceWorker';

observe((cardPosition) => {
ReactDOM.render(<App cardPosition={cardPosition} />, document.getElementById('root'));
registerServiceWorker();
})