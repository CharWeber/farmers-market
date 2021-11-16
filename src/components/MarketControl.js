import React from "react";
import Location from "./Location.js";
import Month from "./Month.js";
import Datetime from "react-datetime";

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <React.Fragment>
        <Datetime />
        <Location />
        <Month />
      </React.Fragment>
    );
  }
}

export default MarketControl;