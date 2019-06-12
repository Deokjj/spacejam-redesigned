import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Kanit:200,400,500,600', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();