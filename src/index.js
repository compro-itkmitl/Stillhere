import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBt5ROLJO7BvoeeBeaKPS3Fxq_83eUnkGw",
    authDomain: "comproiot.firebaseapp.com",
    databaseURL: "https://comproiot.firebaseio.com",
    projectId: "comproiot",
    storageBucket: "comproiot.appspot.com",
    messagingSenderId: "646862028085"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
