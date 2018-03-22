import React, {Component} from 'react';
import * as firebase from 'firebase';


class Stamp extends Component{
  constructor(){
    super();
    this.state = {
      time: '',
      status_A01: false,
      time_in: ''
    }
  }

  async componentWillMount(){
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

    this.setState({
      time:  day + "/" + mounth + "/" + year + " " + h + ":" + m + ":" + s + " " + session
    });

  }

  snapStatusfromFirebase(){
    const rootRef = firebase.database().ref('A01');
    const statusRef = rootRef.child('status');
    statusRef.on('value', snap => {
      console.log(snap.val())
      this.setState({
        status_A01: snap.val()
      });
    });
  }

  /*
  if(status_A01){
    const rootRef = firebase.database().ref('A01');
    rootRef.child(this.state.time_in).update('value')
         .then(() => this.state.time);
  }*/

  render(){
      return <h5>{this.state.time}</h5>;
  }
}

export default Stamp;