import React, { Component } from 'react';
import * as firebase from 'firebase';
import './flooravailable.css'

class F1available extends Component {

  constructor(){
    super();
    this.state = {
      status_A01: '',
    }
  }

  async componentWillMount(){
    const rootA01Ref = firebase.database().ref('A01');
    const statusA01Ref = rootA01Ref.child('status');
    await statusA01Ref.on('value', snap => {
      this.setState({
        status_A01: snap.val()
      });
    });
  }
  
  availablelots(){
    var available = 0;
    if(this.state.status_A01){
      available = 0;
    }
    else{
      available = 1;
    }
    return(available);
  }

  render(){
    return(
      this.availablelots()
    );
  }
}

export default F1available;