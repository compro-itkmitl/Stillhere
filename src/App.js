import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Logo from '../src/stillhere-logo.png';

class App extends Component {

  constructor(){
    super();
    this.state = {
      status_A01: '',
      status_A02: '',
      park_id: '',
      time_in: '',
      time: '',
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
      timeInRef.on('value', snap => {
        this.setState({
          time_in: snap.val()
        });
      });
      this.timeChange(); 
    });
    await idRef.on('value', snap => {
      this.setState({
        park_id: snap.val()
      });
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

  async componentDidMount(){
    var date = new Date();
    var day = date.getDate();
    var mounth = date.getMonth();
    var year = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h === 0){
      h = 12;
    }

    if(h > 12){
      h = h -12;
      session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if(mounth === 0){
      mounth = "JAN";
    }
    if(mounth === 1){
      mounth = "FEB";
    }
    if(mounth === 2){
      mounth = "MAR";
    }
    if(mounth === 3){
      mounth = "APR";
    }
    if(mounth === 4){
      mounth = "MAY";
    }
    if(mounth === 5){
      mounth = "JUN";
    }
    if(mounth === 6){
      mounth = "JUL";
    }
    if(mounth === 7){
      mounth = "AUG";
    }
    if(mounth === 8){
      mounth = "SEP";
    }
    if(mounth === 9){
      mounth = "OCT";
    }
    if(mounth === 10){
      mounth = "NOV";
    }
    if(mounth === 11){
      mounth = "DEC";
    }

    this.setState({
      time: h + ":" + m + ":" + s + " " + session + "  " + day + " " + mounth + " " + year
    });

  }

  timeChange(){
    if(this.state.status_A01 && this.state.time_in === "0"){
      firebase.database().ref('A01').child('time_in').set(this.state.time)
    }
    if(!this.state.status_A01){
      firebase.database().ref('A01').child('time_in').set("0")
    }
  }

 render (){        
  if (this.state.status_A01) {
    return (
      <div className="Main">
        <h2>Your Parking lot is</h2>
        <h1>{this.state.park_id}</h1>
        <h3>Parking Time : {this.state.duration} hr</h3>
        <h4>{this.state.time_in}</h4>
      </div>
    );
  }
  else {
    return (
      <div className="Logo">
      <img src={Logo} width="90%" alt="logo"/>
      </div>
    );
  }
  }
}

export default App;
