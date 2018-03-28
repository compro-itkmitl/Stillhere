import React, { Component } from 'react';
import './home.css';
import * as firebase from 'firebase';
import F1available from './f1available.js';
import Logo from 'D:/GitHub/compro-stillhere/src/stillhere-logo.png';
import { Table, thead, th, tr, tbody, td } from 'react-bootstrap';


class Home extends Component {

    constructor(){
        super();
        this.state = {
          status_A01: '',
          status_A02: '',
          //time_in_1: '',
          //time_in_2: '',
          value: '',
        }
      }    


    async componentWillMount(){
        const rootA01Ref = firebase.database().ref('A01');
        const rootA02Ref = firebase.database().ref('A02');
        const statusA01Ref = rootA01Ref.child('status');
        const statusA02Ref = rootA02Ref.child('status');
        const timeInA01Ref = rootA01Ref.child('time_in');
        const timeInA02Ref = rootA02Ref.child('time_in');
        await statusA01Ref.on('value', snap => {
          this.setState({
            status_A01: snap.val()
          });
          if(!this.state.status_A01){
            firebase.database().ref('A01').child('duration').set(0)
          }
          timeInA01Ref.on('value', snap => {
            this.setState({
              time_in_1: snap.val()
            });
            this.timeChange(); 
          });
        });
        await statusA02Ref.on('value', snap => {
            this.setState({
              status_A02: snap.val()
            });
            if(!this.state.status_A02){
              firebase.database().ref('A02').child('duration').set(0)
            }
            timeInA02Ref.on('value', snap => {
              this.setState({
                time_in_2: snap.val()
              });
              this.timeChange();
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
        if(this.state.status_A01 && this.state.time_in_1 === "0"){
          firebase.database().ref('A01').child('time_in').set(this.state.time)
        }
        if(!this.state.status_A01){
          firebase.database().ref('A01').child('time_in').set("0")
        }
        if(this.state.status_A02 && this.state.time_in_2 === "0"){
            firebase.database().ref('A02').child('time_in').set(this.state.time)
          }
        if(!this.state.status_A02){
            firebase.database().ref('A02').child('time_in').set("0")
          }
      }

 render (){
    return(
    <div className="Main">
        <div className="Head">
        <img src={Logo} width="50%"/>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Floor</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>G</td>
              <td><F1available/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>2</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </Table>
        <form action={this.state.value.toUpperCase()} className="Form">
            <input type="text" placeholder="Enter your Park ID" className="Input" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
            <input type="submit" value="Submit" className="Button" />
        </form>

    </div>
        );
    }
}

export default Home;