import React, { Component } from 'react';
import './lots.css';

class NotFound extends Component {

  render(){
      return(
          <div className="notfound">
            Parking lot Not Found.
            <form action="/" className="Form">
            <input type="submit" value="Home" className="Button" />
            </form>
          </div>
      );
    }

}


export default NotFound;