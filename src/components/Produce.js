import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return(
    <React.Fragment>
      <h2>{props.month}</h2>
      <p>{props.selection.map((produce) => 
        <li>{produce}</li>
      )}</p>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string),
};

export default Produce;