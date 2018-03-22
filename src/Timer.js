import React, {Component} from 'react';
import CountUp from 'react-countup';

class Timer extends Component{

    constructor(){
        super();
        this.state = {
          timer: <CountUp
          start={0}
          end={86400}
          duration={600000}
        />,
          time: ''
        }
      }

      componentDidMount(){
          var hour = 0;
          var minute = 0;
          var second = 0;


          this.setState({
            time: hour + ":" + minute + ":" + second
          });
      }
 
    render(){
            return <p>{this.state.timer}</p>;
    }
}

export default Timer;