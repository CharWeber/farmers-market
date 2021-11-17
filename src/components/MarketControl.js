import React from "react";
import Location from "./Location.js";
import Month from "./Month.js";
import Datetime from "react-datetime";

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: "Monday",
      month: "January"
    };
  }

  render(){
    return (
      <React.Fragment>
        <p>{typeof(this.state.date)}</p>
        <Datetime 
          inputProps={ inputProps} />
        <Location date={this.state.date} />
        <Month month={this.state.month} />
      </React.Fragment>
    );
  }
}

export default MarketControl;

let inputProps = {
  placeholder: 'Choose a Date',
  disabled: false,
};