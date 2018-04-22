import React, { Component } from 'react';
import './lots.css';
import * as firebase from 'firebase';

class A01 extends Component {

  constructor(){
    super();
    this.state = {
      status_A01: '',
      park_id: '',
      time_in: "0",
      duration: 0,
      load_state: 0
    }
  }

  async componentWillMount(){
    const rootRef = firebase.database().ref('A01');
    const statusRef = rootRef.child('status');
    const idRef = rootRef.child('park_id');
    const timeInRef = rootRef.child('time_in');
    const durRef = rootRef.child('duration');
    await timeInRef.on('value', snap => {
      this.setState({
        time_in: snap.val()
      });
    });
    await statusRef.on('value', snap => {
      this.setState({
        status_A01: snap.val()
      });
    });
    await durRef.on('value', snap => {
      this.setState({
        duration: snap.val()
      });
    });
  }

  render(){
    if(this.state.time_in === "0"){
      return(
        <div class="loader"></div>
      );
    }
    else{
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
}


export default A01;