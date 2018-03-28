import React, { Component } from 'react';
import * as firebase from 'firebase';
import './flooravailable.css'

class F1available extends Component {

  constructor(){
    super();
    this.state = {
      status_A01: '',
      status_A02: '',
    }
  }

  async componentWillMount(){
    const rootA01Ref = firebase.database().ref('A01');
    const rootA02Ref = firebase.database().ref('A02');
    const statusA01Ref = rootA01Ref.child('status');
    const statusA02Ref = rootA02Ref.child('status');
    await statusA01Ref.on('value', snap => {
      this.setState({
        status_A01: snap.val()
      });
    });
    await statusA02Ref.on('value', snap => {
      this.setState({
        status_A02: snap.val()
      });
      this.availablelots();
    });
  }
  
  availablelots(){
    var available = 0;
    if(this.state.status_A01 && this.state.status_A02){
      available = 0;
    }
    else if((!this.state.status_A01 && this.state.status_A02) || (this.state.status_A01 && !this.state.status_A02)){
      available = 1;
    }
    else if(!this.state.status_A02 && !this.state.status_A02){
      available = 2;;
    }

    return(available);
  }

  render(){
    return(
      this.availablelots()
  );}
}

export default F1available;