import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import home from './components/home';
import a01 from './components/a01';
import a02 from './components/a02';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { Router, Route, Link, browserHistory } from 'react-router';

const config = {
    apiKey: "AIzaSyBt5ROLJO7BvoeeBeaKPS3Fxq_83eUnkGw",
    authDomain: "comproiot.firebaseapp.com",
    databaseURL: "https://comproiot.firebaseio.com",
    projectId: "comproiot",
    storageBucket: "comproiot.appspot.com",
    messagingSenderId: "646862028085"
  };

firebase.initializeApp(config);

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={home}/>
      <Route path="/A01" component={a01}/>
      <Route path="/A02" component={a02}/>
  </Router>
  , document.getElementById('root')
  );

registerServiceWorker();
