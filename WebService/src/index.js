import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './components/home';
import a01 from './components/a01';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { Router, Route, browserHistory } from 'react-router';

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
      <Route path="/*" component={NotFound}/>
  </Router>
  , document.getElementById('root')
  );

registerServiceWorker();
