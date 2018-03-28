import React, { Component } from 'react';
import './lots.css';
import * as firebase from 'firebase';

class A01 extends Component {

  constructor(){
    super();
    this.state = {
      status_A01: '',
      park_id: '',
      time_in: '',
      duration: 0,
    }
  }

  async componentWillMount(){
    const rootRef = firebase.database().ref('A01');
    const statusRef = rootRef.child('status');
    const idRef = rootRef.child('park_id');
    const timeInRef = rootRef.child('time_in');
    const durRef = rootRef.child('duration');
    await statusRef.on('value', snap => {
      this.setState({
        status_A01: snap.val()
      });
      if(!this.state.status_A01){
        firebase.database().ref('A01').child('duration').set(0)
      }
    });
    await durRef.on('value', snap => {
      this.setState({
        duration: snap.val()
      });
    });
    await timeInRef.on('value', snap => {
      this.setState({
        time_in: snap.val()
      });
    });
  }

  render(){
    return(
      <div className="Main">
        <h2>Your Parking lot is</h2>
        <h1>A01</h1>
        <h3>Parking Time : {this.state.duration} hr</h3>
        <h4>{this.state.time_in}</h4>
      </div>
    );
  }

}


export default A01;