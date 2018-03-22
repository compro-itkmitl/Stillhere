import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Stamp from '../src/Stamp.js'
import Timer from '../src/Timer.js'

class App extends Component {

  constructor(){
    super();
    this.state = {
      status_A01: '',
      status_A02: '',
      park_id: ''
    }
  }

  async componentWillMount(){
    const rootRef = firebase.database().ref('A01');
    const statusRef = rootRef.child('status');
    const idRef = rootRef.child('park_id');
    await statusRef.on('value', snap => {
      console.log(snap.val())
      this.setState({
        status_A01: snap.val()
      });
    });
    await idRef.on('value', snap => {
      console.log(snap.val())
      this.setState({
        park_id: snap.val()
      });
    });
  }
  
  renderPark_id(){
    if (this.state.status_A01) {
      return (
          <h1>{this.state.park_id} <Stamp/> <Timer/></h1>
      );
    } else {
      return (
        <h1>YOLO</h1>
      );
    }
  }

 render (){        
    return(
      <div className="App">
        {this.renderPark_id()}
      </div>
      
    );
  }
}

export default App;
