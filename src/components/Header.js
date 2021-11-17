import React from "react";
import NavButtons from "./NavButtons";

function Header(){
  return(
    <React.Fragment>
      <div class="headContainer">
      <h1>Avery's Organics</h1>
      </div>
    <NavButtons />
    </React.Fragment>
  )
}

export default Header;